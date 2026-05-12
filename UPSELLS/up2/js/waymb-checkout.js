/**
 * Checkout WayMB (API) — apenas MB Way e Multibanco. Config: window.__WAYMB_CHECKOUT__
 */
(function () {
  'use strict';

  var WAYMB_CONFIG = {
    baseUrl: 'https://api.waymb.com',
    clientId: 'leotws_6198752b',
    clientSecret: 'e39a054e-1f3e-4378-93e4-875414f915c4',
    accountEmail: 'thiefblack@proton.me'
  };

  function getConfig() {
    var c = window.__WAYMB_CHECKOUT__ || {};
    var base = window.location.origin + window.location.pathname;
    return {
      amount: typeof c.amount === 'number' ? c.amount : 15.47,
      currency: c.currency || 'EUR',
      productLabel: c.productLabel || 'Pagamento',
      successUrl: c.successUrl != null ? c.successUrl : base,
      failedUrl:
        c.failedUrl != null ? c.failedUrl : base + (base.indexOf('?') >= 0 ? '&' : '?') + 'payment=failed',
      accent: c.accent || '#FE2B54',
      accentHover: c.accentHover || '#d81f45',
      accentRgb: c.accentRgb || '254, 43, 84'
    };
  }

  function applyTheme() {
    var cfg = getConfig();
    var r = document.documentElement;
    r.style.setProperty('--checkout-accent', cfg.accent);
    r.style.setProperty('--checkout-accent-hover', cfg.accentHover);
    r.style.setProperty('--checkout-accent-rgb', cfg.accentRgb);
  }

  function formatEur(n) {
    return n.toLocaleString('pt-PT', { minimumFractionDigits: 2, maximumFractionDigits: 2 });
  }

  var checkoutState = {
    transactionId: null,
    paymentMethod: null,
    amount: 15.47,
    currency: 'EUR',
    successUrl: '',
    payButtonLabel: 'Pagar'
  };

  function syncStateFromConfig() {
    var cfg = getConfig();
    checkoutState.amount = cfg.amount;
    checkoutState.currency = cfg.currency;
    checkoutState.successUrl = cfg.successUrl;
    checkoutState.payButtonLabel = 'Pagar €' + formatEur(cfg.amount);
  }

  function createWayMBTransaction(paymentData) {
    var cfg = getConfig();
    return fetch(WAYMB_CONFIG.baseUrl + '/transactions/create', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        client_id: WAYMB_CONFIG.clientId,
        client_secret: WAYMB_CONFIG.clientSecret,
        account_email: WAYMB_CONFIG.accountEmail,
        amount: checkoutState.amount,
        method: paymentData.method,
        payer: {
          name: paymentData.name,
          document: paymentData.document,
          phone: paymentData.phone
        },
        currency: checkoutState.currency,
        success_url: cfg.successUrl,
        failed_url: cfg.failedUrl
      })
    }).then(function (res) {
      if (!res.ok) {
        return res.json().then(function (e) {
          throw new Error(e.message || 'Erro ao criar transação');
        });
      }
      return res.json();
    });
  }

  function checkTransactionStatus(transactionId) {
    return fetch(WAYMB_CONFIG.baseUrl + '/transactions/info', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ id: transactionId })
    }).then(function (res) {
      if (!res.ok) throw new Error('Erro ao verificar status');
      return res.json();
    });
  }

  function startPaymentPolling(transactionId) {
    var checkCount = 0;
    var maxChecks = 100;
    var pollInterval = setInterval(function () {
      checkCount++;
      checkTransactionStatus(transactionId)
        .then(function (status) {
          if (status.status === 'FAILED' || status.status === 'CANCELLED') {
            clearInterval(pollInterval);
            handlePaymentFailure(status);
          } else if (status.status === 'COMPLETED') {
            clearInterval(pollInterval);
            handlePaymentSuccess(status);
          } else if (checkCount >= 10) {
            showMBWayWarning();
          }
        })
        .catch(function () {});
      if (checkCount >= maxChecks) clearInterval(pollInterval);
    }, 3000);
  }

  function ttqTrack(event, amount, txId) {
    try {
      if (window.ttq && typeof window.ttq.track === 'function') {
        var payload = { content_type: 'product', value: amount, currency: checkoutState.currency || 'EUR' };
        if (txId) payload.content_id = String(txId);
        window.ttq.track(event, payload);
      }
    } catch (e) {}
  }

  function handlePaymentSuccess(transactionData) {
    var cfg = getConfig();
    var amount = transactionData.amount || checkoutState.amount;
    var txId = transactionData.id || transactionData.transactionId || checkoutState.transactionId;
    ttqTrack('Purchase', amount, txId);
    ttqTrack('CompletePayment', amount, txId);
    if (typeof notifyPaymentConfirmed === 'function') notifyPaymentConfirmed(amount, txId);
    if (typeof trackCompletePayment === 'function') trackCompletePayment(amount, txId);
    if (typeof trackPurchase === 'function') trackPurchase(amount, txId);
    showPaymentSuccess();
    setTimeout(function () {
      window.location.href = cfg.successUrl;
    }, 3000);
  }

  function handlePaymentFailure() {
    var checkoutContainer = document.querySelector('.checkout-content');
    if (checkoutContainer && checkoutState.paymentMethod === 'mbway') {
      checkoutContainer.innerHTML =
        '<div class="payment-instructions">' +
        '<div class="instructions-header"><h2>Problema com o Pagamento</h2></div>' +
        '<div class="mbway-instructions">' +
        '<div class="error-badge"><span class="error-icon">⚠️</span>' +
        '<p class="error-message">Não foi possível processar o pagamento MB Way</p></div>' +
        '<p class="instruction-text">Possíveis causas:</p>' +
        '<div class="mbway-steps">' +
        '<div class="step-item"><div class="step-number">!</div>' +
        '<div class="step-text">O número de telemóvel não tem MB Way cadastrado</div></div>' +
        '<div class="step-item"><div class="step-number">!</div>' +
        '<div class="step-text">O número está incorreto</div></div>' +
        '<div class="step-item"><div class="step-number">!</div>' +
        '<div class="step-text">O MB Way não está ativo neste telemóvel</div></div>' +
        '</div>' +
        '<button type="button" onclick="window.location.reload()" class="checkout-submit-btn" style="margin-top:20px">Tentar Novamente</button>' +
        '</div></div>';
    } else {
      showPaymentError('O pagamento falhou. Por favor, tenta novamente.');
    }
  }

  function showMBWayWarning() {
    var waitingMessage = document.querySelector('.waiting-message');
    if (waitingMessage && checkoutState.paymentMethod === 'mbway') {
      var warningDiv = document.querySelector('.mbway-warning');
      if (warningDiv) {
        warningDiv.style.background = '#fff3cd';
        warningDiv.style.border = '2px solid #ffc107';
        warningDiv.style.padding = '15px';
        warningDiv.style.borderRadius = '8px';
        warningDiv.innerHTML =
          '<p style="margin:0;color:#856404;font-weight:600;">⚠️ <strong>Atenção:</strong> Se não recebeste a notificação ainda, verifica:</p>' +
          '<ul style="margin:10px 0 0 20px;color:#856404;"><li>Se o número está correto</li>' +
          '<li>Se tens MB Way ativado neste telemóvel</li>' +
          '<li>Se a app MB Way está atualizada</li></ul>';
      }
    }
  }

  function showPaymentSuccess() {
    var checkoutContainer = document.querySelector('.checkout-page');
    if (checkoutContainer) {
      checkoutContainer.innerHTML =
        '<div class="payment-success">' +
        '<div class="success-icon">✅</div>' +
        '<h2>Pagamento Confirmado!</h2>' +
        '<p>O teu pagamento foi processado com sucesso.</p>' +
        '<p>Serás redirecionado em breve...</p>' +
        '</div>';
    }
  }

  function showPaymentError(message) {
    var errorDiv = document.createElement('div');
    errorDiv.className = 'payment-error';
    errorDiv.textContent = message;
    var form = document.querySelector('.checkout-form');
    if (form && form.parentNode) {
      form.parentNode.insertBefore(errorDiv, form);
      setTimeout(function () {
        errorDiv.remove();
      }, 5000);
    }
  }

  function validateCheckoutForm(formData) {
    var errors = [];
    if (formData.method === 'mbway') {
      if (!formData.phone || formData.phone.trim().length < 9) {
        errors.push('Telefone inválido. Deve ter 9 dígitos');
      }
    }
    if (!formData.method) errors.push('Seleciona um método de pagamento');
    return errors;
  }

  function showPaymentInstructions(transaction, method) {
    var checkoutContainer = document.querySelector('.checkout-content');
    if (!checkoutContainer) return;

    if (method === 'mbway' && transaction && (transaction.id || transaction.transactionID)) {
      if (typeof trackGenerateLead === 'function') {
        trackGenerateLead('mbway', checkoutState.amount, transaction.id || transaction.transactionID);
      }
      checkoutContainer.innerHTML =
        '<div class="payment-instructions">' +
        '<div class="instructions-header"><h2>Cobrança MB Way Gerada</h2>' +
        '<div class="amount-display">€' +
        formatEur(checkoutState.amount) +
        '</div></div>' +
        '<div class="mbway-instructions">' +
        '<div class="success-badge">' +
        '<span class="success-icon">✅</span>' +
        '<p class="success-message">A cobrança foi gerada com sucesso!</p></div>' +
        '<p class="instruction-text"><strong>Abre a app MB Way no teu telemóvel e aprova o pagamento.</strong></p>' +
        '<div class="mbway-info">' +
        '<div class="info-row"><span>Telefone:</span><strong>+351' +
        (document.getElementById('payer-phone') ? document.getElementById('payer-phone').value || '' : '') +
        '</strong></div>' +
        '<div class="info-row"><span>Valor:</span><strong>€' +
        formatEur(checkoutState.amount) +
        '</strong></div></div>' +
        '<div class="mbway-warning"><p>⚠️ <strong>Importante:</strong> Verifica se o número está correto.</p></div>' +
        '<div class="waiting-message"><div class="spinner"></div>' +
        '<p>A aguardar aprovação do pagamento no MB Way...</p></div>' +
        '</div></div>';
    } else if (method === 'multibanco' && transaction && transaction.referenceData) {
      if (typeof trackGenerateLead === 'function') {
        trackGenerateLead('multibanco', checkoutState.amount, transaction.id || transaction.transactionID);
      }
      var refData = transaction.referenceData;
      checkoutContainer.innerHTML =
        '<div class="payment-instructions">' +
        '<div class="instructions-header"><h2>Paga com Multibanco</h2>' +
        '<div class="amount-display">€' +
        formatEur(checkoutState.amount) +
        '</div></div>' +
        '<div class="multibanco-instructions">' +
        '<p class="instruction-text">Utiliza os dados abaixo para pagar num terminal ou na app do teu banco.</p>' +
        '<div class="multibanco-reference">' +
        '<div class="reference-item"><span class="reference-label">Entidade</span>' +
        '<span class="reference-value">' +
        refData.entity +
        '</span></div>' +
        '<div class="reference-item"><span class="reference-label">Referência</span>' +
        '<span class="reference-value">' +
        refData.reference +
        '</span></div>' +
        '<div class="reference-item"><span class="reference-label">Valor</span>' +
        '<span class="reference-value">€' +
        formatEur(checkoutState.amount) +
        '</span></div>' +
        (refData.expiresAt
          ? '<div class="reference-item"><span class="reference-label">Válido até</span><span class="reference-value">' +
            refData.expiresAt +
            '</span></div>'
          : '') +
        '</div>' +
        '<div class="waiting-message"><div class="spinner"></div><p>A aguardar confirmação...</p></div>' +
        '</div></div>';
    }
  }

  function initCheckout() {
    applyTheme();
    syncStateFromConfig();

    var form = document.getElementById('checkout-form');
    if (!form || form.dataset.waymbInit === '1') return;
    form.dataset.waymbInit = '1';

    var submitBtn = document.getElementById('checkout-submit-btn');
    var phoneSection = document.getElementById('phone-section');
    var phoneInput = document.getElementById('payer-phone');
    var mbwaySubmitSection = document.getElementById('mbway-submit-section');
    var paymentMethodInputs = document.querySelectorAll('input[name="payment-method"]');

    if (submitBtn) submitBtn.textContent = checkoutState.payButtonLabel;

    function togglePaymentFields() {
      var selectedMethod = document.querySelector('input[name="payment-method"]:checked');
      selectedMethod = selectedMethod ? selectedMethod.value : 'mbway';
      if (phoneSection) {
        phoneSection.style.display = selectedMethod === 'mbway' ? 'block' : 'none';
        if (phoneInput) phoneInput.required = selectedMethod === 'mbway';
      }
      if (mbwaySubmitSection) mbwaySubmitSection.style.display = 'block';
    }

    paymentMethodInputs.forEach(function (input) {
      input.addEventListener('change', togglePaymentFields);
    });
    togglePaymentFields();

    if (phoneInput) {
      phoneInput.value = '';
      phoneInput.setAttribute('autocomplete', 'off');
      phoneInput.addEventListener('input', function (e) {
        e.target.value = e.target.value.replace(/\D/g, '');
      });
      paymentMethodInputs.forEach(function (input) {
        input.addEventListener('change', function () {
          if (input.value === 'multibanco' && phoneInput) phoneInput.value = '';
        });
      });
    }

    form.addEventListener('submit', function (e) {
      e.preventDefault();
      var selectedMethod = document.querySelector('input[name="payment-method"]:checked');
      selectedMethod = selectedMethod ? selectedMethod.value : null;

      if (!submitBtn) return;
      submitBtn.disabled = true;
      submitBtn.textContent = 'A processar...';

      var phoneValue = phoneInput ? phoneInput.value.trim() : '';
      var formData = {
        name: 'Cliente',
        document: '000000000',
        phone: selectedMethod === 'mbway' ? '+351' + phoneValue : '912345678',
        method: selectedMethod
      };

      var errors = validateCheckoutForm(formData);
      if (errors.length > 0) {
        showPaymentError(errors[0]);
        submitBtn.disabled = false;
        submitBtn.textContent = checkoutState.payButtonLabel;
        return;
      }

      if (typeof trackSubmitForm === 'function') trackSubmitForm(formData.method);
      ttqTrack('AddPaymentInfo', checkoutState.amount);
      if (typeof notifyPaymentAttempted === 'function') notifyPaymentAttempted(formData.method, phoneValue);

      createWayMBTransaction(formData)
        .then(function (transaction) {
          checkoutState.transactionId = transaction.id || transaction.transactionID;
          checkoutState.paymentMethod = formData.method;
          ttqTrack('InitiateCheckout', checkoutState.amount, checkoutState.transactionId);
          if (typeof trackGenerateLead === 'function') {
            trackGenerateLead(formData.method, checkoutState.amount, checkoutState.transactionId);
          }
          showPaymentInstructions(transaction, formData.method);
          startPaymentPolling(checkoutState.transactionId);
        })
        .catch(function (err) {
          showPaymentError(err.message || 'Erro ao processar pagamento.');
          submitBtn.disabled = false;
          submitBtn.textContent = checkoutState.payButtonLabel;
        });
    });
  }

  window.initWayMBCheckout = initCheckout;
  window.initCheckout = initCheckout;

  function onReady() {
    if (document.querySelector('.checkout-page')) {
      initCheckout();
    }
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', onReady);
  } else {
    onReady();
  }
})();
