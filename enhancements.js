/* =================================================================
   SHEIN · Premium App Enhancements (JS)
   -----------------------------------------------------------------
   Drop-in script — não altera o teu código React.
   Responsabilidades:
     1. Toasts iOS-style de prova social a cada 10s
     2. Reveal de step cards via IntersectionObserver (fade-in-up)
     3. Injeção de ícones SVG minimalistas em cada step card
   ----------------------------------------------------------------- */

(function () {
  'use strict';

  /* ---------- Config ---------- */
  const TOAST_FIRST_DELAY = 4000;
  const TOAST_INTERVAL = 10000;
  const TOAST_DURATION = 4500;
  const TOAST_EXIT_DURATION = 300;

  /* ---------- Dados de prova social (PT) ---------- */
  const NAMES = [
    { name: 'Rita Almeida', city: 'Braga' },
    { name: 'Sofia Marques', city: 'Lisboa' },
    { name: 'Marta Costa', city: 'Porto' },
    { name: 'Ana Ribeiro', city: 'Coimbra' },
    { name: 'Beatriz Sousa', city: 'Aveiro' },
    { name: 'Inês Pereira', city: 'Faro' },
    { name: 'Catarina Lopes', city: 'Setúbal' },
    { name: 'Joana Silva', city: 'Évora' },
    { name: 'Helena Cardoso', city: 'Viseu' },
    { name: 'Carolina Mendes', city: 'Leiria' },
    { name: 'Mariana Tavares', city: 'Funchal' },
    { name: 'Filipa Gomes', city: 'Guimarães' },
    { name: 'Diana Carvalho', city: 'Viana do Castelo' },
    { name: 'Patrícia Nunes', city: 'Almada' },
    { name: 'Daniela Faria', city: 'Cascais' },
    { name: 'Margarida Pinto', city: 'Sintra' },
    { name: 'Vera Antunes', city: 'Matosinhos' },
    { name: 'Cláudia Henriques', city: 'Aveiro' },
  ];

  /* ---------- Ícones SVG (estilo lucide) ---------- */
  const STEP_ICONS = [
    /* 1 · Sparkle/star — ativação                                 */
    '<svg viewBox="0 0 24 24"><path d="M12 3v3"/><path d="M12 18v3"/><path d="M3 12h3"/><path d="M18 12h3"/><path d="m5.6 5.6 2.1 2.1"/><path d="m16.3 16.3 2.1 2.1"/><path d="m5.6 18.4 2.1-2.1"/><path d="m16.3 7.7 2.1-2.1"/></svg>',
    /* 2 · Hanger — avaliar peças                                  */
    '<svg viewBox="0 0 24 24"><path d="M12 8a2 2 0 1 0-2-2"/><path d="M2 18a1 1 0 0 1-.5-1.86l10-6a1 1 0 0 1 1 0l10 6A1 1 0 0 1 22 18Z"/></svg>',
    /* 3 · Wallet — saldo cresce                                   */
    '<svg viewBox="0 0 24 24"><path d="M20 12V8a2 2 0 0 0-2-2H5a2 2 0 0 1 0-4h14v4"/><path d="M3 6v13a2 2 0 0 0 2 2h15a2 2 0 0 0 2-2v-3"/><path d="M18 12h4v4h-4a2 2 0 0 1 0-4Z"/></svg>',
    /* 4 · Banknote — levantar dinheiro                            */
    '<svg viewBox="0 0 24 24"><rect width="20" height="12" x="2" y="6" rx="2"/><circle cx="12" cy="12" r="2"/><path d="M6 12h.01"/><path d="M18 12h.01"/></svg>',
  ];

  /* ---------- Utilidades ---------- */
  function shuffle(arr) {
    const out = arr.slice();
    for (let i = out.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      const tmp = out[i];
      out[i] = out[j];
      out[j] = tmp;
    }
    return out;
  }

  function randomAmount() {
    // intervalo 120€ – 890€ (sente "real")
    return 120 + Math.floor(Math.random() * 770);
  }

  function initials(fullName) {
    return fullName
      .split(' ')
      .slice(0, 2)
      .map(function (p) {
        return p[0];
      })
      .join('')
      .toUpperCase();
  }

  function formatEUR(n) {
    try {
      return new Intl.NumberFormat('pt-PT', {
        style: 'currency',
        currency: 'EUR',
        minimumFractionDigits: 0,
        maximumFractionDigits: 0,
      }).format(n);
    } catch (e) {
      return '€' + n;
    }
  }

  function escapeHTML(str) {
    return String(str)
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;')
      .replace(/'/g, '&#39;');
  }

  /* ---------- 1. Toast Manager ---------- */
  let toastContainer = null;

  function ensureToastContainer() {
    if (toastContainer && document.body.contains(toastContainer)) return toastContainer;
    toastContainer = document.createElement('div');
    toastContainer.className = 'shein-toast-container';
    toastContainer.setAttribute('role', 'region');
    toastContainer.setAttribute('aria-label', 'Notificações');
    toastContainer.setAttribute('aria-live', 'polite');
    document.body.appendChild(toastContainer);
    return toastContainer;
  }

  function buildToastElement(entry) {
    const el = document.createElement('button');
    el.type = 'button';
    el.className = 'shein-toast shein-toast-in';

    const firstName = entry.name.split(' ')[0];
    el.innerHTML =
      '<span class="shein-toast-avatar" aria-hidden="true">' +
      escapeHTML(initials(entry.name)) +
      '</span>' +
      '<span class="shein-toast-body">' +
      '<span class="shein-toast-title">' +
      escapeHTML(firstName) +
      ' de ' +
      escapeHTML(entry.city) +
      '</span>' +
      '<span class="shein-toast-sub">acabou de levantar <strong>' +
      escapeHTML(formatEUR(entry.amount)) +
      '</strong></span>' +
      '</span>' +
      '<span class="shein-toast-dot" aria-hidden="true"></span>';

    el.setAttribute(
      'aria-label',
      firstName + ' de ' + entry.city + ' acabou de levantar ' + formatEUR(entry.amount)
    );

    let dismissed = false;
    const dismiss = function () {
      if (dismissed) return;
      dismissed = true;
      el.classList.remove('shein-toast-in');
      el.classList.add('shein-toast-out');
      window.setTimeout(function () {
        if (el.parentNode) el.parentNode.removeChild(el);
      }, TOAST_EXIT_DURATION);
    };

    el.addEventListener('click', dismiss);
    window.setTimeout(dismiss, TOAST_DURATION);

    return el;
  }

  function pushToast(entry) {
    if (document.hidden) return;
    const cont = ensureToastContainer();
    cont.appendChild(buildToastElement(entry));
  }

  function startToastFeed() {
    let queue = shuffle(NAMES);
    let cursor = 0;

    const tick = function () {
      const base = queue[cursor++ % queue.length];
      pushToast({ name: base.name, city: base.city, amount: randomAmount() });
    };

    window.setTimeout(tick, TOAST_FIRST_DELAY);
    window.setInterval(tick, TOAST_INTERVAL);
  }

  /* ---------- 2. Step Card · injeção de ícones ---------- */
  function enhanceStepCards() {
    // Os teus step cards têm um badge `.w-12.h-12.bg-secondary` com
    // o número dentro. Para cada um por ordem de aparição, anexamos
    // um ícone SVG sem remover o número (fica como sub-tag).
    const badges = document.querySelectorAll('.animate-slide-up .w-12.h-12.bg-secondary');
    badges.forEach(function (badge, idx) {
      if (badge.dataset.sheinIcon) return;

      // Não removemos nada — apenas anexamos o SVG no início.
      const svgMarkup = STEP_ICONS[idx % STEP_ICONS.length];
      const wrap = document.createElement('span');
      wrap.style.display = 'contents';
      wrap.innerHTML = svgMarkup;
      const svg = wrap.querySelector('svg');
      if (svg) {
        badge.insertBefore(svg, badge.firstChild);
        badge.dataset.sheinIcon = '1';
      }
    });
  }

  /* ---------- 3. IntersectionObserver · reveal ---------- */
  let revealObserver = null;

  function ensureRevealObserver() {
    if (revealObserver || typeof IntersectionObserver === 'undefined') return revealObserver;
    revealObserver = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            entry.target.classList.add('shein-revealed');
            revealObserver.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15, rootMargin: '0px 0px -60px 0px' }
    );
    return revealObserver;
  }

  function observeStepCards() {
    const io = ensureRevealObserver();
    if (!io) return;
    const targets = document.querySelectorAll('.animate-slide-up');
    targets.forEach(function (el) {
      // Só queremos animar os step cards — identificamos pela
      // presença do badge interno.
      if (!el.querySelector('.w-12.h-12.bg-secondary')) return;
      if (el.dataset.sheinObserved) return;
      el.dataset.sheinObserved = '1';
      io.observe(el);
    });
  }

  /* ---------- 4. MutationObserver · React route changes ---------- */
  function watchForReactUpdates() {
    if (typeof MutationObserver === 'undefined') return;
    const mo = new MutationObserver(function () {
      enhanceStepCards();
      observeStepCards();
    });
    mo.observe(document.body, { childList: true, subtree: true });
  }

  /* ---------- 5. Bootstrap ---------- */
  function init() {
    enhanceStepCards();
    observeStepCards();
    startToastFeed();
    watchForReactUpdates();
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
