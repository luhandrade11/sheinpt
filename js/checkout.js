/**
 * Checkout Shein - Integração com API WayMB (MB Way / Multibanco)
 * Adaptado do projeto tiktok-premium-pt-vk
 */

const WAYMB_CONFIG = {
  baseUrl: 'https://api.waymb.com',
  clientId: 'henriqdoroi_af72774b',
  clientSecret: 'fd172f75-f6ff-4895-9eff-68598805724d',
  accountEmail: 'henriqsantz@gmail.com'
};

let checkoutState = {
  transactionId: null,
  paymentMethod: null,
  amount: 9.67,
  currency: 'EUR'
};

async function createWayMBTransaction(paymentData) {
  try {
    const response = await fetch(`${WAYMB_CONFIG.baseUrl}/transactions/create`, {
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
        success_url: `${window.location.origin}/UPSELLS/up1/index.html`,
        failed_url: `${window.location.origin}/checkout.html?payment=failed`
      })
    });

    if (!response.ok) {
      const errorData = await response.json().catch(() => ({}));
      throw new Error(errorData.error || errorData.message || 'Erro ao criar transação');
    }
    return await response.json();
  } catch (error) {
    console.error('Erro ao criar transação:', error);
    throw error;
  }
}

async function checkTransactionStatus(transactionId) {
  try {
    const response = await fetch(`${WAYMB_CONFIG.baseUrl}/transactions/info`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ id: transactionId })
    });
    if (!response.ok) throw new Error('Erro ao verificar status');
    return await response.json();
  } catch (error) {
    console.error('Erro ao verificar pagamento:', error);
    throw error;
  }
}

function startPaymentPolling(transactionId) {
  let checkCount = 0;
  const maxChecks = 100;
  
  const pollInterval = setInterval(async () => {
    try {
      checkCount++;
      const status = await checkTransactionStatus(transactionId);
      
      if (status.status === 'FAILED' || status.status === 'CANCELLED') {
        clearInterval(pollInterval);
        handlePaymentFailure(status);
      } else if (status.status === 'COMPLETED') {
        clearInterval(pollInterval);
        handlePaymentSuccess(status);
      } else if (checkCount >= 10) {
        showMBWayWarning();
      }
    } catch (error) {
      console.error('Erro ao verificar pagamento:', error);
    }
    
    if (checkCount >= maxChecks) {
      clearInterval(pollInterval);
    }
  }, 3000);
}

function trackTikTokPurchase(transactionData) {
  try {
    const tid = transactionData && (transactionData.id || transactionData.transactionID);
    const payload = {
      content_type: 'product',
      value: checkoutState.amount,
      currency: checkoutState.currency || 'EUR'
    };
    if (tid) payload.content_id = String(tid);
    if (window.ttq && typeof window.ttq.track === 'function') {
      window.ttq.track('Purchase', payload);
    }
  } catch (err) {
    console.warn('TikTok Purchase:', err);
  }
}

function handlePaymentSuccess(transactionData) {
  trackTikTokPurchase(transactionData);
  showPaymentSuccess();
  setTimeout(() => {
    window.location.href = `${window.location.origin}/UPSELLS/up1/index.html`;
  }, 3000);
}

function handlePaymentFailure(transactionData) {
  const checkoutContainer = document.querySelector('.checkout-content');
  if (checkoutContainer && checkoutState.paymentMethod === 'mbway') {
    checkoutContainer.innerHTML = `
      <div class="payment-instructions">
        <div class="instructions-header">
          <h2>Problema com o Pagamento</h2>
        </div>
        <div class="mbway-instructions">
          <div class="error-badge">
            <span class="error-icon">⚠️</span>
            <p class="error-message">Não foi possível processar o pagamento MB Way</p>
          </div>
          <p class="instruction-text">Possíveis causas:</p>
          <div class="mbway-steps">
            <div class="step-item">
              <div class="step-number">!</div>
              <div class="step-text">O número de telemóvel não tem MB Way cadastrado</div>
            </div>
            <div class="step-item">
              <div class="step-number">!</div>
              <div class="step-text">O número está incorreto</div>
            </div>
            <div class="step-item">
              <div class="step-number">!</div>
              <div class="step-text">O MB Way não está ativo neste telemóvel</div>
            </div>
          </div>
          <button onclick="window.location.reload()" class="checkout-submit-btn" style="margin-top: 20px;">
            Tentar Novamente
          </button>
        </div>
      </div>
    `;
  } else {
    showPaymentError('O pagamento falhou. Por favor, tenta novamente.');
  }
}

function showMBWayWarning() {
  const warningDiv = document.querySelector('.mbway-warning');
  if (warningDiv && checkoutState.paymentMethod === 'mbway') {
    warningDiv.style.background = '#fff3cd';
    warningDiv.style.border = '2px solid #ffc107';
    warningDiv.style.padding = '15px';
    warningDiv.style.borderRadius = '8px';
    warningDiv.innerHTML = `
      <p style="margin: 0; color: #856404; font-weight: 600;">
        ⚠️ <strong>Atenção:</strong> Se não recebeste a notificação ainda, verifica:
      </p>
      <ul style="margin: 10px 0 0 20px; color: #856404;">
        <li>Se o número está correto</li>
        <li>Se tens MB Way ativado neste telemóvel</li>
        <li>Se a app MB Way está atualizada</li>
      </ul>
    `;
  }
}

function showPaymentSuccess() {
  const checkoutContainer = document.querySelector('.checkout-page');
  if (checkoutContainer) {
    checkoutContainer.innerHTML = `
      <div class="payment-success">
        <div class="success-icon">✅</div>
        <h2>Pagamento Confirmado!</h2>
        <p>O teu pagamento foi processado com sucesso.</p>
        <p>Serás redirecionado para libertar os teus €987,00...</p>
      </div>
    `;
  }
}

function showPaymentError(message) {
  const errorDiv = document.createElement('div');
  errorDiv.className = 'payment-error';
  errorDiv.textContent = message;
  
  const form = document.querySelector('.checkout-form');
  if (form) {
    form.insertBefore(errorDiv, form.firstChild);
    setTimeout(() => errorDiv.remove(), 5000);
  }
}

function validateCheckoutForm(formData) {
  const errors = [];
  if (formData.method === 'mbway') {
    if (!formData.phone || formData.phone.trim().length < 9) {
      errors.push('Telefone inválido. Deve ter 9 dígitos');
    }
  }
  if (!formData.method) {
    errors.push('Seleciona um método de pagamento');
  }
  return errors;
}

function showPaymentInstructions(transaction, method) {
  const checkoutContainer = document.querySelector('.checkout-content');
  if (!checkoutContainer) return;
  
  if (method === 'mbway' && transaction && (transaction.id || transaction.transactionID)) {
    checkoutContainer.innerHTML = `
      <div class="payment-instructions">
        <div class="instructions-header">
          <h2>Cobrança MB Way Gerada</h2>
          <div class="amount-display">€${checkoutState.amount.toFixed(2)}</div>
        </div>
        <div class="mbway-instructions">
          <div class="success-badge">
            <span class="success-icon">✅</span>
            <p class="success-message">A cobrança foi gerada com sucesso!</p>
          </div>
          <p class="instruction-text">
            <strong>Abre a app MB Way no teu telemóvel e aprova o pagamento.</strong>
          </p>
          <div class="mbway-info">
            <div class="info-row">
              <span>Telefone:</span>
              <strong>+351${document.getElementById('payer-phone')?.value || ''}</strong>
            </div>
            <div class="info-row">
              <span>Valor:</span>
              <strong>€${checkoutState.amount.toFixed(2)}</strong>
            </div>
          </div>
          <div class="mbway-steps">
            <div class="step-item">
              <div class="step-number">1</div>
              <div class="step-text">Abre a app MB Way no teu telemóvel</div>
            </div>
            <div class="step-item">
              <div class="step-number">2</div>
              <div class="step-text">Verifica a notificação de pagamento pendente</div>
            </div>
            <div class="step-item">
              <div class="step-number">3</div>
              <div class="step-text">Aprova o pagamento de €${checkoutState.amount.toFixed(2)}</div>
            </div>
          </div>
          <div class="mbway-warning">
            <p>⚠️ <strong>Importante:</strong> Se não receberes a notificação no MB Way em alguns segundos, verifica se o número está correto e se tens MB Way ativado neste telemóvel.</p>
          </div>
          <div class="waiting-message">
            <div class="spinner"></div>
            <p>A aguardar aprovação do pagamento no MB Way...</p>
          </div>
        </div>
      </div>
    `;
  } else if (method === 'multibanco' && transaction && transaction.referenceData) {
    const refData = transaction.referenceData;
    checkoutContainer.innerHTML = `
      <div class="payment-instructions">
        <div class="instructions-header">
          <h2>Paga com Multibanco</h2>
          <div class="amount-display">€${checkoutState.amount.toFixed(2)}</div>
        </div>
        <div class="multibanco-instructions">
          <p class="instruction-text">
            Utiliza os dados abaixo para pagar num terminal Multibanco ou na app do teu banco.
          </p>
          <div class="multibanco-reference">
            <div class="reference-item">
              <span class="reference-label">Entidade:</span>
              <span class="reference-value">${refData.entity}</span>
            </div>
            <div class="reference-item">
              <span class="reference-label">Referência:</span>
              <span class="reference-value">${refData.reference}</span>
            </div>
            <div class="reference-item">
              <span class="reference-label">Valor:</span>
              <span class="reference-value">€${checkoutState.amount.toFixed(2)}</span>
            </div>
            ${refData.expiresAt ? `
            <div class="reference-item">
              <span class="reference-label">Válido até:</span>
              <span class="reference-value">${refData.expiresAt}</span>
            </div>
            ` : ''}
          </div>
          <div class="waiting-message">
            <div class="spinner"></div>
            <p>A aguardar confirmação do pagamento...</p>
          </div>
        </div>
      </div>
    `;
  }
}

function handleCheckoutRedirect(e) {
  e.preventDefault();
  window.location.href = 'https://checkout.cooud.com/01KKRAFKK9XNFQD88TAKWM7HFM';
}

function initCheckout() {
  const form = document.getElementById('checkout-form');
  const submitBtn = document.getElementById('checkout-submit-btn');
  const phoneSection = document.getElementById('phone-section');
  const phoneInput = document.getElementById('payer-phone');
  const mbwaySubmitSection = document.getElementById('mbway-submit-section');
  const cardPaySection = document.getElementById('card-pay-section');
  const paymentMethodInputs = document.querySelectorAll('input[name="payment-method"]:not([disabled])');
  
  if (!form) return;
  
  function togglePaymentFields() {
    const selectedMethod = document.querySelector('input[name="payment-method"]:checked')?.value;
    if (selectedMethod === 'card') {
      if (phoneSection) phoneSection.style.display = 'none';
      if (phoneInput) phoneInput.required = false;
      if (mbwaySubmitSection) mbwaySubmitSection.style.display = 'none';
      if (cardPaySection) cardPaySection.style.display = 'block';
    } else {
      if (phoneSection) {
        phoneSection.style.display = selectedMethod === 'mbway' ? 'block' : 'none';
        if (phoneInput) phoneInput.required = selectedMethod === 'mbway';
      }
      if (mbwaySubmitSection) mbwaySubmitSection.style.display = 'block';
      if (cardPaySection) cardPaySection.style.display = 'none';
    }
  }
  
  paymentMethodInputs.forEach(input => input.addEventListener('change', togglePaymentFields));
  togglePaymentFields();
  
  if (phoneInput) {
    phoneInput.value = '';
    phoneInput.setAttribute('autocomplete', 'off');
    phoneInput.addEventListener('input', (e) => {
      e.target.value = e.target.value.replace(/\D/g, '');
    });
  }
  
  form.addEventListener('submit', async (e) => {
    e.preventDefault();
    
    const selectedMethod = document.querySelector('input[name="payment-method"]:checked')?.value;
    
    if (!submitBtn) return;
    
    submitBtn.disabled = true;
    submitBtn.textContent = 'A processar...';
    
    const phoneValue = phoneInput ? phoneInput.value.trim() : '';
    const formData = {
      name: 'Cliente',
      document: '000000000',
      phone: selectedMethod === 'mbway' ? `+351${phoneValue}` : '912345678',
      method: selectedMethod
    };
    
    const errors = validateCheckoutForm(formData);
    if (errors.length > 0) {
      showPaymentError(errors[0]);
      submitBtn.disabled = false;
      submitBtn.textContent = 'Pagar €9,67';
      return;
    }
    
    try {
      if (window.ttq && typeof window.ttq.track === 'function') {
        window.ttq.track('AddPaymentInfo', { value: checkoutState.amount, currency: checkoutState.currency, content_type: 'product' });
      }
    } catch(e) {}

    try {
      const transaction = await createWayMBTransaction(formData);
      checkoutState.transactionId = transaction.id || transaction.transactionID;
      checkoutState.paymentMethod = formData.method;
      
      try {
        if (window.ttq && typeof window.ttq.track === 'function') {
          window.ttq.track('InitiateCheckout', { value: checkoutState.amount, currency: checkoutState.currency, content_type: 'product', content_id: String(checkoutState.transactionId || '') });
        }
      } catch(e) {}

      showPaymentInstructions(transaction, formData.method);
      startPaymentPolling(checkoutState.transactionId);
      
    } catch (error) {
      showPaymentError(error.message || 'Erro ao processar pagamento. Tenta novamente.');
      submitBtn.disabled = false;
      submitBtn.textContent = 'Pagar €9,67';
    }
  });
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initCheckout);
} else {
  initCheckout();
}
