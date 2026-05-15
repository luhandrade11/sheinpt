/* SHEIN · Premium Enhancements v7 (standalone)
   · Carregado como <script src="js/_inject_v7.js" defer> no index.html
   · Não altera o bundle React principal — corre por cima
   · Inclui: toasts canto superior direito · sombras marquee · step rows reveal IO
     · Tela de avaliação completa (12 looks · 3 critérios · soma €987)
     · Produto info (nome/preço/SKU)
     · Fluxo 3 fases (loading → check verde + contador → flying money + som)
     · Fix mobile: forceReveal de Tailwind opacity-0 que ficam stuck */
;(function () {
  'use strict';

  var CSS = [
    '@keyframes shFadeUp{0%{opacity:0;transform:translateY(20px)}100%{opacity:1;transform:translateY(0)}}',
    '@keyframes shToastIn{0%{opacity:0;transform:translateY(-110%) scale(.94)}60%{opacity:1;transform:translateY(4px) scale(1.01)}100%{opacity:1;transform:translateY(0) scale(1)}}',
    '@keyframes shToastOut{to{opacity:0;transform:translateY(-110%)}}',
    '@keyframes shDot{0%,100%{opacity:1}50%{opacity:.45}}',
    '@keyframes seSpin{to{transform:rotate(360deg)}}',
    '@keyframes seFadeUp{from{opacity:0;transform:translateY(14px)}to{opacity:1;transform:translateY(0)}}',
    '@keyframes seImgIn{from{opacity:0}to{opacity:1}}',
    '@keyframes seStarPop{0%{transform:scale(1)}50%{transform:scale(1.28)}100%{transform:scale(1)}}',
    '@keyframes seBalBump{0%{transform:scale(1)}40%{transform:scale(1.08)}100%{transform:scale(1)}}',
    '@keyframes seCheckIn{0%{transform:scale(.4);opacity:0}60%{transform:scale(1.12)}100%{transform:scale(1);opacity:1}}',
    '@keyframes seBalGlow{0%{transform:scale(1);box-shadow:0 0 0 0 rgba(22,163,74,.35)}30%{transform:scale(1.18);box-shadow:0 0 0 6px rgba(22,163,74,.18)}100%{transform:scale(1);box-shadow:0 0 0 0 rgba(22,163,74,0)}}',

    '.animate-scroll-left>div,.animate-scroll-right>div{box-shadow:0 1px 2px rgba(0,0,0,.04),0 6px 16px -2px rgba(0,0,0,.08),0 14px 28px -6px rgba(0,0,0,.05)!important;transition:transform .4s cubic-bezier(.22,1,.36,1),box-shadow .4s cubic-bezier(.22,1,.36,1)}',
    '.shein-pop-in{animation:shFadeUp .65s cubic-bezier(.22,1,.36,1) both!important}',
    '.shein-pop-in-1{animation-delay:.04s!important}.shein-pop-in-2{animation-delay:.12s!important}.shein-pop-in-3{animation-delay:.2s!important}.shein-pop-in-4{animation-delay:.28s!important}.shein-pop-in-5{animation-delay:.36s!important}.shein-pop-in-6{animation-delay:.44s!important}',
    '.shein-step-row:not(.shein-revealed){opacity:0!important;transform:translateY(20px)!important;animation:none!important}',
    '.shein-step-row.shein-revealed{animation:shFadeUp .65s cubic-bezier(.22,1,.36,1) both!important}',
    '.shein-step-row .w-12.h-12.bg-secondary{box-shadow:0 1px 2px rgba(0,0,0,.04),0 3px 8px -2px rgba(0,0,0,.05)!important;transition:transform .25s ease,box-shadow .25s ease}',
    '.shein-step-row:hover .w-12.h-12.bg-secondary{transform:translateY(-1px);box-shadow:0 2px 4px rgba(0,0,0,.06),0 6px 14px -4px rgba(0,0,0,.08)!important}',
    '.shein-toast-container{position:fixed;top:16px;right:16px;z-index:9999;display:flex;flex-direction:column;gap:8px;pointer-events:none;align-items:flex-end;max-width:calc(100vw - 32px)}',
    '@media(max-width:640px){.shein-toast-container{top:12px;right:12px;left:auto;max-width:calc(100vw - 24px)}}',
    '.shein-toast{pointer-events:auto;width:100%;max-width:320px;display:flex;align-items:center;gap:10px;padding:10px 12px;border-radius:14px;background:rgba(255,255,255,.96);-webkit-backdrop-filter:saturate(180%) blur(20px);backdrop-filter:saturate(180%) blur(20px);border:1px solid rgba(0,0,0,.05);box-shadow:0 1px 2px rgba(0,0,0,.04),0 8px 24px -4px rgba(0,0,0,.12),0 16px 32px -8px rgba(0,0,0,.08);cursor:pointer;text-align:left;color:#000;font-family:inherit;transform-origin:top right}',
    '.shein-toast-avatar{flex-shrink:0;width:32px;height:32px;border-radius:999px;background:#f4f4f5;border:1px solid rgba(0,0,0,.06);display:grid;place-items:center;font-size:11px;font-weight:600;color:#000;letter-spacing:.02em}',
    '.shein-toast-body{flex:1;min-width:0;display:flex;flex-direction:column;line-height:1.25}',
    '.shein-toast-title{font-size:13px;font-weight:600;color:#000;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}',
    '.shein-toast-sub{font-size:11.5px;color:rgba(0,0,0,.55);margin-top:1px;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}',
    '.shein-toast-sub strong{color:#000;font-weight:600}',
    '.shein-toast-dot{flex-shrink:0;width:6px;height:6px;border-radius:999px;background:#22c55e;animation:shDot 1.6s ease-in-out infinite;box-shadow:0 0 0 2px rgba(34,197,94,.18)}',
    '.shein-toast-in{animation:shToastIn .5s cubic-bezier(.22,1,.36,1)}',
    '.shein-toast-out{animation:shToastOut .3s ease-in forwards}',

    '#se-overlay{position:fixed;inset:0;z-index:9000;background:#fff;overflow-y:auto;font-family:Inter,-apple-system,system-ui,"Segoe UI",sans-serif;color:#000;-webkit-overflow-scrolling:touch}',
    '#se-overlay *{box-sizing:border-box}',
    '.se-h{position:sticky;top:0;display:grid;grid-template-columns:44px 1fr 44px;align-items:center;gap:8px;padding:8px 12px calc(8px + env(safe-area-inset-top,0px));background:rgba(255,255,255,.96);-webkit-backdrop-filter:saturate(180%) blur(20px);backdrop-filter:saturate(180%) blur(20px);border-bottom:1px solid #eee;z-index:5;min-height:48px}',
    '.se-back{justify-self:start;background:none;border:0;font:inherit;display:grid;place-items:center;width:40px;height:40px;color:#000;cursor:pointer;-webkit-tap-highlight-color:transparent;border-radius:999px;transition:background .15s ease}',
    '.se-back:active{background:rgba(0,0,0,.05)}',
    '.se-back svg{width:22px;height:22px;stroke-width:1.8}',
    '.se-logo{justify-self:center;font-weight:800;letter-spacing:.22em;font-size:13.5px;color:#000;font-family:"Sora",Inter,system-ui,sans-serif}',
    '.se-bal{justify-self:end;display:inline-flex;align-items:center;padding:6px 11px;border-radius:6px;background:#fff;border:1px solid #e5e5e5;font-size:12.5px;font-weight:800;color:#000;font-variant-numeric:tabular-nums;line-height:1;letter-spacing:-.01em;white-space:nowrap;transform-origin:center}',
    '.se-bal::before{content:"€";color:#16a34a;font-weight:900;margin-right:4px;font-size:13px}',
    '.se-bal.bump{animation:seBalBump .45s cubic-bezier(.22,1,.36,1)}',
    '.se-bal.glow{animation:seBalGlow .55s cubic-bezier(.22,1,.36,1)}',
    '.se-prog{height:2px;background:#f0f0f0;overflow:hidden}',
    '.se-prog-fill{height:100%;width:0;background:#000;transition:width .6s cubic-bezier(.22,1,.36,1)}',
    '.se-main{max-width:100%;margin:0;padding:0 0 32px;animation:seFadeUp .4s cubic-bezier(.22,1,.36,1)}',
    '@media(min-width:540px){.se-main{max-width:480px;margin:0 auto;border-left:1px solid #f0f0f0;border-right:1px solid #f0f0f0}}',
    '.se-meta{display:flex;justify-content:space-between;align-items:center;padding:14px 16px 10px;border-bottom:1px solid #f5f5f5}',
    '.se-meta-num{font-size:11px;font-weight:800;letter-spacing:.18em;text-transform:uppercase;color:#000;font-variant-numeric:tabular-nums}',
    '.se-meta-num span{color:rgba(0,0,0,.45);font-weight:700}',
    '.se-meta-r{display:inline-flex;align-items:center;font-size:13px;font-weight:800;color:#16a34a;letter-spacing:-.01em;font-variant-numeric:tabular-nums}',
    '.se-img{aspect-ratio:3/4;overflow:hidden;background:#f5f5f5;position:relative;border-bottom:1px solid #f5f5f5}',
    '.se-img img{width:100%;height:100%;object-fit:cover;display:block;animation:seImgIn .4s ease}',

    '.se-pinfo{padding:14px 16px 16px;border-bottom:1px solid #f5f5f5;background:#fff}',
    '.se-pname{font-size:13.5px;font-weight:500;color:#000;line-height:1.4;margin:0 0 8px;letter-spacing:-.005em;display:-webkit-box;-webkit-line-clamp:2;-webkit-box-orient:vertical;overflow:hidden}',
    '.se-prow{display:flex;justify-content:space-between;align-items:flex-end;gap:8px}',
    '.se-pprice{font-size:18px;font-weight:800;color:#000;font-variant-numeric:tabular-nums;letter-spacing:-.02em;display:inline-flex;align-items:baseline;gap:6px;line-height:1;flex-wrap:wrap}',
    '.se-pprice s{font-size:11.5px;font-weight:500;color:rgba(0,0,0,.4);text-decoration:line-through;letter-spacing:-.005em}',
    '.se-pdisc{display:inline-flex;align-items:center;padding:2px 5px;background:#000;color:#fff;font-size:9.5px;font-weight:800;letter-spacing:.04em;border-radius:2px;line-height:1;margin-left:2px}',
    '.se-psku{font-size:10px;color:rgba(0,0,0,.4);font-weight:500;letter-spacing:.04em;font-variant-numeric:tabular-nums;text-transform:uppercase}',

    '.se-c{padding:18px 16px 20px;border-bottom:1px solid #eee;background:#fff}',
    '.se-c:last-of-type{border-bottom:0}',
    '.se-c-tag{display:flex;align-items:center;gap:8px;font-size:10px;font-weight:800;letter-spacing:.18em;text-transform:uppercase;color:rgba(0,0,0,.45);margin-bottom:8px}',
    '.se-c-tag b{color:#000;font-weight:900}',
    '.se-c-h{display:flex;justify-content:space-between;align-items:flex-start;gap:12px;margin-bottom:12px}',
    '.se-c-t{font-size:15px;font-weight:700;color:#000;margin:0;letter-spacing:-.01em;line-height:1.35;flex:1}',
    '.se-c-t em{font-style:normal;font-weight:800}',
    '.se-c-d{font-size:12px;color:rgba(0,0,0,.55);margin:0 0 14px;line-height:1.5;letter-spacing:-.005em}',

    '.se-stars{display:flex;justify-content:space-between;gap:6px;align-items:center;max-width:280px;margin:0 auto}',
    '.se-star{flex:1;display:grid;place-items:center;padding:8px 0;background:none;border:0;cursor:pointer;-webkit-tap-highlight-color:transparent}',
    '.se-star svg{width:26px;height:26px;display:block;transition:transform .15s ease}',
    '.se-star svg path{fill:#d4d4d4;transition:fill .2s ease}',
    '.se-star.active svg path{fill:#f59e0b}',
    '.se-star.active svg{animation:seStarPop .35s cubic-bezier(.22,1,.36,1)}',
    '.se-star-lbl{margin-top:10px;text-align:center;font-size:11.5px;color:rgba(0,0,0,.55);font-weight:500;height:14px;letter-spacing:-.005em}',
    '.se-star-lbl b{color:#000;font-weight:700}',

    '.se-sval{display:inline-flex;align-items:center;justify-content:center;min-width:42px;height:24px;font-size:12px;font-weight:800;padding:0 10px;background:#000;color:#fff;border-radius:2px;font-variant-numeric:tabular-nums;line-height:1;letter-spacing:.02em}',
    '.se-slider-wrap{padding:6px 2px 0}',
    '.se-slider{width:100%;height:4px;-webkit-appearance:none;appearance:none;background:#eaeaea;border-radius:0;outline:none;cursor:pointer;margin:0}',
    '.se-slider::-webkit-slider-thumb{-webkit-appearance:none;appearance:none;width:22px;height:22px;border-radius:999px;background:#000;border:0;box-shadow:0 1px 2px rgba(0,0,0,.15),0 3px 8px rgba(0,0,0,.18);cursor:pointer;transition:transform .15s ease}',
    '.se-slider:active::-webkit-slider-thumb{transform:scale(1.12)}',
    '.se-slider::-moz-range-thumb{width:22px;height:22px;border-radius:999px;background:#000;border:0;box-shadow:0 1px 2px rgba(0,0,0,.15),0 3px 8px rgba(0,0,0,.18);cursor:pointer}',
    '.se-slider-ends{display:flex;justify-content:space-between;align-items:center;margin-top:12px;font-size:10.5px;color:rgba(0,0,0,.45);font-weight:600;letter-spacing:.06em;text-transform:uppercase}',
    '.se-slider-ends b{color:#000;font-weight:800;letter-spacing:-.005em;text-transform:none;font-size:11.5px}',

    '.se-ta{width:100%;min-height:84px;padding:11px 12px;border-radius:2px;border:1px solid #e0e0e0;background:#fff;font:13.5px/1.5 inherit;color:#000;resize:vertical;outline:none;transition:border-color .15s ease;letter-spacing:-.005em}',
    '.se-ta::placeholder{color:rgba(0,0,0,.35)}',
    '.se-ta:focus{border-color:#000}',
    '.se-ta-foot{display:flex;justify-content:space-between;align-items:center;margin-top:8px}',
    '.se-ta-c{font-size:11.5px;color:rgba(0,0,0,.5);font-weight:600;font-variant-numeric:tabular-nums;letter-spacing:-.005em}',
    '.se-ta-c.ok{color:#16a34a}',
    '.se-ta-c.ok::after{content:" ✓";font-weight:800}',
    '.se-ta-hint{font-size:10.5px;color:rgba(0,0,0,.4);letter-spacing:.04em;text-transform:uppercase;font-weight:600}',

    '.se-sub-wrap{padding:18px 16px 6px;background:#fff;border-top:1px solid #eee}',
    '.se-sub{display:flex;align-items:center;justify-content:center;gap:10px;width:100%;padding:16px 16px;font-size:13px;font-weight:800;letter-spacing:.16em;text-transform:uppercase;background:#000;color:#fff;border:0;border-radius:2px;cursor:pointer;transition:opacity .2s ease,transform .15s ease;font-family:inherit;-webkit-tap-highlight-color:transparent}',
    '.se-sub svg{width:14px;height:14px;transition:transform .25s cubic-bezier(.22,1,.36,1);stroke-width:2.5}',
    '.se-sub:hover:not(:disabled) svg{transform:translateX(3px)}',
    '.se-sub:active:not(:disabled){transform:scale(.99)}',
    '.se-sub:disabled{background:#f0f0f0;color:rgba(0,0,0,.35);cursor:not-allowed}',
    '.se-help{text-align:center;font-size:11px;color:rgba(0,0,0,.45);font-weight:500;letter-spacing:-.005em;padding:12px 16px 24px}',
    '.se-help b{color:rgba(0,0,0,.7);font-weight:700}',

    '.se-flow{position:fixed;inset:0;z-index:9300;background:rgba(0,0,0,.62);display:grid;place-items:center;opacity:0;transition:opacity .3s ease;pointer-events:none;-webkit-backdrop-filter:blur(2px);backdrop-filter:blur(2px)}',
    '.se-flow.on{opacity:1;pointer-events:auto}',
    '.se-flow-box{text-align:center;padding:24px;max-width:300px;color:#fff}',
    '.se-flow-spin{width:42px;height:42px;border:3px solid rgba(255,255,255,.2);border-top-color:#fff;border-radius:50%;margin:0 auto 18px;animation:seSpin .85s linear infinite}',
    '.se-flow-check{width:64px;height:64px;background:#16a34a;color:#fff;border-radius:999px;margin:0 auto 18px;display:grid;place-items:center;animation:seCheckIn .45s cubic-bezier(.22,1,.36,1);box-shadow:0 8px 24px rgba(22,163,74,.35)}',
    '.se-flow-check svg{width:32px;height:32px;stroke-width:3.5}',
    '.se-flow-t{font-size:15.5px;font-weight:700;margin:0 0 6px;letter-spacing:-.01em;color:#fff}',
    '.se-flow-s{font-size:12.5px;color:rgba(255,255,255,.72);margin:0 0 14px;letter-spacing:-.005em}',
    '.se-flow-amt{font-size:42px;font-weight:900;color:#fff;letter-spacing:-.03em;font-variant-numeric:tabular-nums;line-height:1;margin-top:14px;text-shadow:0 4px 22px rgba(22,163,74,.35);animation:seFadeUp .4s ease}',

    '.se-fly{position:fixed;left:50%;top:50%;font-size:38px;font-weight:900;color:#16a34a;letter-spacing:-.02em;text-shadow:0 4px 18px rgba(22,163,74,.4);z-index:9400;pointer-events:none;font-variant-numeric:tabular-nums;will-change:transform,opacity;transform:translate(-50%,-50%) scale(1);transition:transform .8s cubic-bezier(.55,0,.4,1),opacity .8s ease;white-space:nowrap}',

    '.se-done{position:fixed;inset:0;z-index:9200;background:rgba(0,0,0,.55);-webkit-backdrop-filter:blur(6px);backdrop-filter:blur(6px);display:grid;place-items:center;padding:20px}',
    '.se-done.hidden{display:none}',
    '.se-done-c{background:#fff;border-radius:2px;padding:34px 26px 26px;max-width:360px;width:100%;text-align:center;box-shadow:0 24px 60px rgba(0,0,0,.3);animation:seFadeUp .45s cubic-bezier(.22,1,.36,1)}',
    '.se-done-ic{width:56px;height:56px;background:#16a34a;color:#fff;border-radius:999px;margin:0 auto 18px;display:grid;place-items:center}',
    '.se-done-ic svg{width:28px;height:28px;stroke-width:3}',
    '.se-done h2{font-size:20px;font-weight:800;margin:0 0 8px;letter-spacing:-.02em;line-height:1.25;color:#000}',
    '.se-done p{font-size:13.5px;color:rgba(0,0,0,.6);margin:0 0 24px;line-height:1.55;letter-spacing:-.005em}',
    '.se-done strong{color:#000;font-weight:800}',
    '.se-cta{display:inline-flex;align-items:center;justify-content:center;gap:8px;width:100%;padding:16px 20px;background:#000;color:#fff;font-size:13px;font-weight:800;letter-spacing:.16em;text-transform:uppercase;border-radius:2px;border:0;cursor:pointer;font-family:inherit;transition:transform .15s ease}',
    '.se-cta svg{width:14px;height:14px;transition:transform .25s cubic-bezier(.22,1,.36,1);stroke-width:2.5}',
    '.se-cta:hover svg{transform:translateX(3px)}',
    '.se-cta:active{transform:scale(.99)}',

    '@media(prefers-reduced-motion:reduce){.shein-toast-in,.shein-toast-out,.shein-toast-dot,.shein-pop-in,.shein-step-row.shein-revealed,.se-prog-fill,.se-flow-spin,.se-star.active svg,.se-bal.bump,.se-bal.glow{animation:none!important;transition:none!important}}'
  ].join('');

  function injectCSS(){if(document.getElementById('shein-premium-style'))return;var s=document.createElement('style');s.id='shein-premium-style';s.appendChild(document.createTextNode(CSS));document.head.appendChild(s);}

  /* Toasts / step rows / hero */
  var NAMES=[{n:'Rita Almeida',c:'Braga'},{n:'Sofia Marques',c:'Lisboa'},{n:'Marta Costa',c:'Porto'},{n:'Ana Ribeiro',c:'Coimbra'},{n:'Beatriz Sousa',c:'Aveiro'},{n:'Inês Pereira',c:'Faro'},{n:'Catarina Lopes',c:'Setúbal'},{n:'Joana Silva',c:'Évora'},{n:'Helena Cardoso',c:'Viseu'},{n:'Carolina Mendes',c:'Leiria'},{n:'Mariana Tavares',c:'Funchal'},{n:'Filipa Gomes',c:'Guimarães'},{n:'Diana Carvalho',c:'Viana do Castelo'},{n:'Patrícia Nunes',c:'Almada'},{n:'Daniela Faria',c:'Cascais'},{n:'Margarida Pinto',c:'Sintra'},{n:'Vera Antunes',c:'Matosinhos'},{n:'Cláudia Henriques',c:'Aveiro'}];
  function shuffle(a){var c=a.slice();for(var i=c.length-1;i>0;i--){var j=Math.floor(Math.random()*(i+1));var t=c[i];c[i]=c[j];c[j]=t;}return c;}
  function rndAmt(){return 120+Math.floor(Math.random()*770);}
  function inits(n){return n.split(' ').slice(0,2).map(function(p){return p[0];}).join('').toUpperCase();}
  function eur(n){try{return new Intl.NumberFormat('pt-PT',{style:'currency',currency:'EUR',minimumFractionDigits:0,maximumFractionDigits:0}).format(n);}catch(e){return '€'+n;}}
  function eur2(n){try{var s=new Intl.NumberFormat('pt-PT',{style:'currency',currency:'EUR',minimumFractionDigits:2,maximumFractionDigits:2}).format(n);return s.replace(/\s?€$/,'').replace(/^€\s?/,'').trim();}catch(e){return n.toFixed(2).replace('.',',');}}
  function esc(s){return String(s).replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;').replace(/"/g,'&quot;').replace(/'/g,'&#39;');}
  var TC=null;
  function getTC(){if(TC&&document.body.contains(TC))return TC;TC=document.createElement('div');TC.className='shein-toast-container';TC.setAttribute('role','region');TC.setAttribute('aria-label','Notificações');TC.setAttribute('aria-live','polite');document.body.appendChild(TC);return TC;}
  function buildToast(e){var el=document.createElement('button');el.type='button';el.className='shein-toast shein-toast-in';var f=e.name.split(' ')[0];el.innerHTML='<span class="shein-toast-avatar" aria-hidden="true">'+esc(inits(e.name))+'</span><span class="shein-toast-body"><span class="shein-toast-title">'+esc(f)+' de '+esc(e.city)+'</span><span class="shein-toast-sub">acabou de levantar <strong>'+esc(eur(e.amount))+'</strong></span></span><span class="shein-toast-dot" aria-hidden="true"></span>';var done=false;function dismiss(){if(done)return;done=true;el.classList.remove('shein-toast-in');el.classList.add('shein-toast-out');setTimeout(function(){if(el.parentNode)el.parentNode.removeChild(el);},300);}el.addEventListener('click',dismiss);setTimeout(dismiss,5500);return el;}
  function pushToast(e){if(document.hidden)return;getTC().appendChild(buildToast(e));}
  function startToasts(){var q=shuffle(NAMES),i=0;function tick(){var b=q[i++%q.length];pushToast({name:b.n,city:b.c,amount:rndAmt()});}setTimeout(tick,5000);setInterval(tick,15000);}
  function markStepRows(){var ns=document.querySelectorAll('.animate-slide-up');for(var i=0;i<ns.length;i++){var el=ns[i];if(!el.querySelector(':scope > div > .w-12.h-12.bg-secondary'))continue;if(!el.classList.contains('shein-step-row'))el.classList.add('shein-step-row');}}
  var IO=null;
  function getIO(){if(IO||typeof IntersectionObserver==='undefined')return IO;IO=new IntersectionObserver(function(es){for(var i=0;i<es.length;i++){if(es[i].isIntersecting){es[i].target.classList.add('shein-revealed');IO.unobserve(es[i].target);}}},{threshold:.1,rootMargin:'0px 0px 0px 0px'});return IO;}
  function observeRows(){var io=getIO();var ns=document.querySelectorAll('.shein-step-row');var vh=window.innerHeight||document.documentElement.clientHeight;for(var i=0;i<ns.length;i++){var el=ns[i];if(el.dataset.sheinObs)continue;el.dataset.sheinObs='1';var r=el.getBoundingClientRect();if(r.top<vh*1.2&&r.bottom>-40){el.classList.add('shein-revealed');}else if(io){io.observe(el);}else{el.classList.add('shein-revealed');}}setTimeout(function(){var miss=document.querySelectorAll('.shein-step-row:not(.shein-revealed)');for(var k=0;k<miss.length;k++)miss[k].classList.add('shein-revealed');},1500);}
  function applyHeroEnter(){var hs=document.querySelectorAll('[class*="min-h-screen"][class*="flex-col"]');for(var h=0;h<hs.length;h++){var hero=hs[h];if(hero.dataset.sheinEntered)continue;hero.dataset.sheinEntered='1';var k=hero.children,d=1;for(var i=0;i<k.length;i++){var x=k[i];if(!x.getBoundingClientRect)continue;if(d<=6){x.classList.add('shein-pop-in','shein-pop-in-'+d);d++;}}}}

  /* Fix mobile · força reveal de elementos Tailwind com opacity:0 stuck */
  function forceReveal(){
    try{
      var hidden=document.querySelectorAll('.opacity-0');
      for(var i=0;i<hidden.length;i++){
        var el=hidden[i];
        var op=parseFloat(getComputedStyle(el).opacity);
        if(op<.05)el.style.opacity='1';
      }
    }catch(e){}
  }

  /* === Tela de avaliação === */
  var REWARDS=[89,78,87,65,90,75,88,72,86,80,89,88]; /* soma 987 */
  var PRODUCTS=[
    {n:'SHEIN BAE Top Bandeau Cetim Bordô',p:34.99,sku:'sku-SHB47821'},
    {n:'SHEIN EZwear Calça Wide Leg Cintura Alta',p:29.99,sku:'sku-SEZ65302'},
    {n:'SHEIN Privé Vestido Midi Linho',p:42.99,sku:'sku-SPR91458'},
    {n:'SHEIN MOD Conjunto Coordenado Knit',p:39.99,sku:'sku-SMD27194'},
    {n:'SHEIN LUNE Body Decote em V Cetim',p:19.99,sku:'sku-SLU83621'},
    {n:'SHEIN Frenchy Vestido Floral Verão',p:36.99,sku:'sku-SFR48127'},
    {n:'SHEIN EZwear Top Crop Malha Canelada',p:17.99,sku:'sku-SEZ73519'},
    {n:'SHEIN BAE Saia Plissada Midi Acetinada',p:27.99,sku:'sku-SHB91047'},
    {n:'SHEIN Privé Blazer Oversize Lã',p:49.99,sku:'sku-SPR62380'},
    {n:'SHEIN MOD Calção Bermuda Linho',p:21.99,sku:'sku-SMD15924'},
    {n:'SHEIN Frenchy Camisa Cropped Bordada',p:24.99,sku:'sku-SFR47812'},
    {n:'SHEIN BAE Vestido Slip Acetinado Champanhe',p:32.99,sku:'sku-SHB58306'}
  ];
  var TOTAL=12;
  var IMG_CACHE=[];
  var EVAL_ROUTES=/^\/evaluacion(490|1990|2990)?\/?$/;
  var STAR_LBL=['Toca para classificar','Não gostei','Pouco interessante','Razoável','Gostei muito','Adoro, comprava já'];
  function sliderLabel(v){if(v<=20)return'Muito fraco';if(v<=40)return'Fraco';if(v<=60)return'Razoável';if(v<=80)return'Bom';return'Excelente';}

  var SVG_BACK='<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><path d="m15 18-6-6 6-6"/></svg>';
  var SVG_ARR='<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>';
  var SVG_STAR='<svg viewBox="0 0 24 24"><path d="M12 2.5l2.9 6.3 6.9.7-5.2 4.7 1.5 6.8L12 17.8l-6.1 3.2 1.5-6.8L2.2 9.5l6.9-.7L12 2.5z"/></svg>';
  var SVG_CHK='<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><path d="M20 6 9 17l-5-5"/></svg>';

  function cacheImgs(){var imgs=document.querySelectorAll('img[src*="/assets/img"]');var seen={},out=[];for(var i=0;i<imgs.length;i++){var s=imgs[i].src;if(!seen[s]){seen[s]=1;out.push(s);}}if(out.length>IMG_CACHE.length)IMG_CACHE=out;}

  var ev=null;
  function newEv(){return{idx:0,balance:0,look:{stars:0,slider:50,text:''},evals:[]};}
  function animateCounter(el,from,to,dur){var start=performance.now();function tick(now){var t=Math.min(1,(now-start)/dur);var ease=1-Math.pow(1-t,3);el.textContent=eur2(from+(to-from)*ease);if(t<1)requestAnimationFrame(tick);}requestAnimationFrame(tick);}
  function animateAmt(el,from,to,dur){var s=performance.now();function tick(now){var t=Math.min(1,(now-s)/dur);var e=1-Math.pow(1-t,3);el.textContent=eur2(from+(to-from)*e)+' €';if(t<1)requestAnimationFrame(tick);}requestAnimationFrame(tick);}
  function setProg(){var p=document.getElementById('se-prog');if(p)p.style.width=Math.min(100,(ev.idx/TOTAL)*100)+'%';}
  function setSliderTrack(s){var v=parseInt(s.value,10);s.style.background='linear-gradient(90deg,#000 0%,#000 '+v+'%,#eaeaea '+v+'%,#eaeaea 100%)';}

  function renderLook(){
    if(!ev)return;
    var i=ev.idx;
    var img=IMG_CACHE[i%IMG_CACHE.length]||IMG_CACHE[0]||'';
    var rew=REWARDS[i%REWARDS.length];
    var imgEl=document.getElementById('se-img');
    if(imgEl){imgEl.style.animation='none';void imgEl.offsetWidth;imgEl.style.animation='';imgEl.src=img;}
    document.getElementById('se-n').innerHTML='Look '+String(i+1).padStart(2,'0')+' <span>/ '+TOTAL+'</span>';
    document.getElementById('se-r').textContent='+ '+eur2(rew)+' €';
    var p=PRODUCTS[i%PRODUCTS.length];
    document.getElementById('se-pn').textContent=p.n;
    var orig=(p.p*1.85).toFixed(2).replace('.',',');
    var disc=Math.round((1-(1/1.85))*100);
    document.getElementById('se-pp').innerHTML=p.p.toFixed(2).replace('.',',')+' € <s>'+orig+' €</s><span class="se-pdisc">-'+disc+'%</span>';
    document.getElementById('se-ps').textContent='SKU '+p.sku;
    setProg();
    ev.look={stars:0,slider:50,text:''};
    var stars=document.querySelectorAll('.se-star');
    for(var s=0;s<stars.length;s++)stars[s].classList.remove('active');
    document.getElementById('se-slbl').innerHTML=STAR_LBL[0];
    var sl=document.getElementById('se-sl');sl.value=50;
    document.getElementById('se-sv').textContent='50';
    document.getElementById('se-slk').innerHTML='<b>'+sliderLabel(50)+'</b>';
    setSliderTrack(sl);
    var ta=document.getElementById('se-ta');ta.value='';
    var ch=document.getElementById('se-cc');ch.textContent='0 / 50 caracteres';ch.classList.remove('ok');
    validate();
    var ov=document.getElementById('se-overlay');if(ov)ov.scrollTop=0;
  }

  function validate(){var btn=document.getElementById('se-sub');if(!btn||!ev)return;btn.disabled=!(ev.look.stars>=1&&ev.look.text.length>=50);}

  function submit(){if(!ev)return;runEvalFlow();}

  /* Fluxo 3 fases */
  function runEvalFlow(){
    var rew=REWARDS[ev.idx%REWARDS.length];
    var flow=document.getElementById('se-flow');
    var box=flow.querySelector('.se-flow-box');

    /* Fase 1: spinner */
    flow.classList.add('on');
    box.innerHTML='<div class="se-flow-spin" aria-hidden="true"></div><p class="se-flow-t">A validar avaliação nos servidores SHEIN…</p><p class="se-flow-s">A confirmar a tua opinião com a base de dados</p>';

    setTimeout(function(){
      /* Fase 2: check + contador */
      box.innerHTML='<div class="se-flow-check">'+SVG_CHK+'</div><p class="se-flow-t">Avaliação aprovada!</p><p class="se-flow-s">A creditar no teu saldo</p><div class="se-flow-amt" id="se-flow-amt">0,00 €</div>';
      animateAmt(document.getElementById('se-flow-amt'),0,rew,900);

      setTimeout(function(){
        /* Fase 3: fly money + próximo look (ou fim) */
        ev.evals.push({stars:ev.look.stars,slider:ev.look.slider,text:ev.look.text,reward:rew});
        ev.idx++;
        if(ev.idx>=TOTAL){
          flow.classList.remove('on');
          flyMoney(rew);
          setTimeout(function(){
            setProg();
            document.getElementById('se-final').textContent=eur2(ev.balance)+' €';
            setTimeout(function(){document.getElementById('se-done').classList.remove('hidden');},650);
          },850);
        }else{
          renderLook();
          flow.classList.remove('on');
          flyMoney(rew);
        }
      },1000);
    },1800);
  }

  function flyMoney(amount){
    var bal=document.querySelector('.se-bal');
    if(!bal){ev.balance+=amount;return;}
    var br=bal.getBoundingClientRect();
    var endX=br.left+br.width/2-window.innerWidth/2;
    var endY=br.top+br.height/2-window.innerHeight/2;
    var fly=document.createElement('div');
    fly.className='se-fly';
    fly.textContent='+ '+eur2(amount)+' €';
    document.body.appendChild(fly);
    void fly.offsetWidth;
    requestAnimationFrame(function(){
      fly.style.transform='translate(calc(-50% + '+endX+'px),calc(-50% + '+endY+'px)) scale(.32)';
      fly.style.opacity='0';
    });
    setTimeout(function(){
      if(fly.parentNode)fly.remove();
      var balEl=document.getElementById('se-bal-val');
      var from=ev.balance,to=ev.balance+amount;
      animateCounter(balEl,from,to,500);
      ev.balance=to;
      bal.classList.remove('glow');void bal.offsetWidth;bal.classList.add('glow');
      playCashSound();
    },820);
  }

  var ACx=null;
  function playCashSound(){
    try{
      var AC=window.AudioContext||window.webkitAudioContext;if(!AC)return;
      if(!ACx)ACx=new AC();
      if(ACx.state==='suspended')ACx.resume();
      [0,90].forEach(function(d){
        var o=ACx.createOscillator(),g=ACx.createGain();
        o.type='triangle';
        o.frequency.setValueAtTime(1480,ACx.currentTime+d/1000);
        o.frequency.exponentialRampToValueAtTime(880,ACx.currentTime+d/1000+.16);
        g.gain.setValueAtTime(.0001,ACx.currentTime+d/1000);
        g.gain.exponentialRampToValueAtTime(.18,ACx.currentTime+d/1000+.02);
        g.gain.exponentialRampToValueAtTime(.0001,ACx.currentTime+d/1000+.22);
        o.connect(g);g.connect(ACx.destination);
        o.start(ACx.currentTime+d/1000);o.stop(ACx.currentTime+d/1000+.25);
      });
    }catch(e){}
  }

  function buildOverlay(){
    if(document.getElementById('se-overlay'))return;
    cacheImgs();
    if(IMG_CACHE.length<1){setTimeout(buildOverlay,250);return;}
    ev=newEv();
    var ov=document.createElement('div');
    ov.id='se-overlay';
    var starsHTML='';
    for(var s=1;s<=5;s++){starsHTML+='<button type="button" data-star="'+s+'" class="se-star" aria-label="'+s+' estrelas">'+SVG_STAR+'</button>';}
    ov.innerHTML=
      '<header class="se-h">'+
        '<button class="se-back" type="button" aria-label="Voltar">'+SVG_BACK+'</button>'+
        '<span class="se-logo">SHEIN</span>'+
        '<div class="se-bal"><span id="se-bal-val">0,00</span></div>'+
      '</header>'+
      '<div class="se-prog"><div class="se-prog-fill" id="se-prog"></div></div>'+
      '<main class="se-main">'+
        '<div class="se-meta"><span class="se-meta-num" id="se-n">Look 01 <span>/ '+TOTAL+'</span></span><span class="se-meta-r" id="se-r">+ '+eur2(REWARDS[0])+' €</span></div>'+
        '<div class="se-img"><img id="se-img" alt="Peça em avaliação" /></div>'+
        '<div class="se-pinfo"><p class="se-pname" id="se-pn">—</p><div class="se-prow"><span class="se-pprice" id="se-pp">— €</span><span class="se-psku" id="se-ps">SKU —</span></div></div>'+

        '<section class="se-c">'+
          '<div class="se-c-tag"><b>1</b> de 3 · Design</div>'+
          '<h3 class="se-c-t">Como classificas o <em>design</em> desta peça?</h3>'+
          '<div class="se-stars" role="radiogroup" aria-label="Classificação por estrelas">'+starsHTML+'</div>'+
          '<div class="se-star-lbl" id="se-slbl">Toca para classificar</div>'+
        '</section>'+

        '<section class="se-c">'+
          '<div class="se-c-tag"><b>2</b> de 3 · Conforto</div>'+
          '<div class="se-c-h"><h3 class="se-c-t">Que <em>conforto</em> transmite ao toque?</h3><span class="se-sval" id="se-sv">50</span></div>'+
          '<div class="se-slider-wrap"><input type="range" min="0" max="100" value="50" class="se-slider" id="se-sl" aria-label="Conforto e qualidade" /></div>'+
          '<div class="se-slider-ends"><span>Fraco</span><span id="se-slk"><b>Razoável</b></span><span>Excelente</span></div>'+
        '</section>'+

        '<section class="se-c">'+
          '<div class="se-c-tag"><b>3</b> de 3 · Opinião</div>'+
          '<h3 class="se-c-t">Porque <em>comprarias</em> esta peça?</h3>'+
          '<p class="se-c-d">Conta a tua opinião sincera. Mínimo de 50 caracteres para validar.</p>'+
          '<textarea id="se-ta" class="se-ta" placeholder="Comprava esta peça porque…" maxlength="500" rows="3"></textarea>'+
          '<div class="se-ta-foot"><span id="se-cc" class="se-ta-c">0 / 50 caracteres</span><span class="se-ta-hint">Mínimo</span></div>'+
        '</section>'+

        '<div class="se-sub-wrap">'+
          '<button type="button" id="se-sub" class="se-sub" disabled><span>Confirmar avaliação</span>'+SVG_ARR+'</button>'+
        '</div>'+
        '<p class="se-help">A tua opinião é registada de forma anónima e <b>paga em euros reais</b>.</p>'+
      '</main>'+

      '<div id="se-flow" class="se-flow"><div class="se-flow-box"></div></div>'+

      '<div id="se-done" class="se-done hidden">'+
        '<div class="se-done-c">'+
          '<div class="se-done-ic">'+SVG_CHK+'</div>'+
          '<h2>Avaliações concluídas</h2>'+
          '<p>Acumulaste <strong id="se-final">0,00 €</strong> em <strong>'+TOTAL+' avaliações</strong>. O teu saldo está pronto a ser levantado.</p>'+
          '<button type="button" id="se-go" class="se-cta"><span>Levantar agora</span>'+SVG_ARR+'</button>'+
        '</div>'+
      '</div>';
    document.body.appendChild(ov);
    bindEvents();
    renderLook();
  }

  function bindEvents(){
    var ov=document.getElementById('se-overlay');
    ov.querySelector('.se-back').addEventListener('click',function(){history.back();});
    var stars=ov.querySelectorAll('.se-star');
    var slbl=ov.querySelector('#se-slbl');
    for(var i=0;i<stars.length;i++){(function(idx){stars[idx].addEventListener('click',function(){var n=idx+1;ev.look.stars=n;for(var j=0;j<stars.length;j++)stars[j].classList.toggle('active',j<n);slbl.innerHTML='<b>'+STAR_LBL[n]+'</b>';validate();});})(i);}
    var sl=ov.querySelector('#se-sl'),sv=ov.querySelector('#se-sv'),slk=ov.querySelector('#se-slk');
    sl.addEventListener('input',function(){var v=parseInt(sl.value,10);ev.look.slider=v;sv.textContent=v;slk.innerHTML='<b>'+sliderLabel(v)+'</b>';setSliderTrack(sl);});
    setSliderTrack(sl);
    var ta=ov.querySelector('#se-ta'),cc=ov.querySelector('#se-cc');
    ta.addEventListener('input',function(){ev.look.text=ta.value;var len=ta.value.length;cc.textContent=len+' / 50 caracteres';cc.classList.toggle('ok',len>=50);validate();});
    ov.querySelector('#se-sub').addEventListener('click',submit);
    ov.querySelector('#se-go').addEventListener('click',function(){window.location.href='/confirmacao-taxa';});
  }

  function destroyOverlay(){var ov=document.getElementById('se-overlay');if(ov){ov.remove();ev=null;}}
  function isEvalRoute(){return EVAL_ROUTES.test(window.location.pathname);}
  function checkRoute(){if(isEvalRoute()){cacheImgs();if(!document.getElementById('se-overlay'))setTimeout(buildOverlay,150);}else if(document.getElementById('se-overlay'))destroyOverlay();}
  function patchHistory(){var o={pushState:history.pushState,replaceState:history.replaceState};['pushState','replaceState'].forEach(function(m){history[m]=function(){var r=o[m].apply(this,arguments);setTimeout(checkRoute,80);return r;};});window.addEventListener('popstate',function(){setTimeout(checkRoute,80);});}
  function watch(){if(typeof MutationObserver==='undefined')return;var mo=new MutationObserver(function(){markStepRows();observeRows();applyHeroEnter();cacheImgs();forceReveal();});mo.observe(document.body,{childList:true,subtree:true});}

  function init(){
    injectCSS();
    markStepRows();observeRows();applyHeroEnter();
    cacheImgs();
    patchHistory();
    checkRoute();
    startToasts();
    watch();
    setTimeout(forceReveal,1200);
    setTimeout(forceReveal,2500);
    setInterval(forceReveal,4000);
  }
  if(document.readyState==='loading'){document.addEventListener('DOMContentLoaded',function(){setTimeout(init,80);});}
  else{setTimeout(init,80);}
})();
