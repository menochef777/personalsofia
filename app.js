/* ==============================================================
   SOFIA DA ROCHA — PRIVATE FITNESS STUDIO
   Website Oficial & Plataforma de Conversão
   Praia da Vitória, Ilha Terceira, Açores
   ============================================================== */

var CFG = {
  trainerName: "Sofia da Rocha",
  trainerFirstName: "Sofia",
  jobTitle: "Personal Trainer · Studio Owner",
  cedula: "141706",
  location: "Praia da Vitória, Ilha Terceira · Portugal",
  studioName: "Private Fitness Studio",
  address: "Rua Serpa Pinto, nº 50, 9760-545 Praia da Vitória, Ilha Terceira, Portugal",
  phone: "351926017125",
  phoneDisplay: "+351 926 017 125",
  waDirect: "https://wa.me/message/EO23MIJJ4U2SN1",
  instagram: "https://www.instagram.com/sofia.darocha_pt/",
  partnerIg: "https://www.instagram.com/semperfit_official/",
  partnerCoupon: "DAROCHA10",
  msgs: {
    general: "Olá, Sofia! Visitei o teu website e gostaria de conhecer o acompanhamento no Private Fitness Studio.",
    avaliacao: "Olá, Sofia! Gostaria de agendar uma consulta inicial e conhecer as vagas para o treino presencial no estúdio.",
    presencial: "Olá, Sofia! Tenho interesse no treino presencial no Private Fitness Studio em Praia da Vitória. Como posso agendar?",
    online: "Olá, Sofia! Gostaria de receber informações sobre a consultoria online de treino."
  },
  nav: [
    ["Sobre", "#sobre"],
    ["Especialidades", "#areas"],
    ["Método", "#como-funciona"],
    ["Modalidades", "#modalidades"],
    ["Planos", "#planos"],
    ["Dúvidas", "#faq"]
  ],
  /* 8 cards de foco - Originais da Metodologia Sofia da Rocha */
  focus: [
    [
      "Hipertrofia & Definição Estrutural",
      "Protocolos progressivos para estimular massa muscular de qualidade, contorno corporal e firmeza estética.",
      "hip",
      true
    ],
    [
      "Foco em Glúteos & Cadeia Posterior",
      "Aperfeiçoamento técnico com foco nos padrões biomecânicos de maior ativação e sobrecarga sustentável.",
      "glu",
      true
    ],
    [
      "Recomposição Corporal Consciente",
      "Estratégia combinada para reduzir gordura preservando o tónus muscular de forma saudável e definitiva.",
      "cmp",
      false
    ],
    [
      "Desenvolvimento de Força Pura",
      "Evolução consistente nos movimentos estruturais para ganho de densidade óssea, postura e segurança articular.",
      "str",
      false
    ],
    [
      "Condicionamento & Vitalidade Diária",
      "Estímulos dinâmicos desenhados para elevar a tua energia, resistência aeróbica e disposição para a rotina.",
      "perf",
      false
    ],
    [
      "Emagrecimento Sustentável",
      "Planeamento ajustado aos teus hábitos reais, permitindo evolução contínua sem restrições insustentáveis.",
      "slim",
      false
    ],
    [
      "Mobilidade & Prevenção Articular",
      "Estabilidade e amplitude para corrigir desequilíbrios posturais e proteger a coluna e membros em cada série.",
      "mass",
      false
    ],
    [
      "Capacidade Atlética Global",
      "Construção de uma base física completa, adaptada rigorosamente ao teu ponto de partida e ritmo biológico.",
      "cap",
      false
    ]
  ],
  chips: [
    "Treino de Força",
    "Linha de Glúteos",
    "Remodelação Corporal",
    "Biomecânica Aplicada",
    "Massa Magra",
    "Saúde Articular",
    "Estúdio Privado"
  ],
  steps: [
    [
      "Diagnóstico & Anamnese Integral",
      "Avaliação inicial dos teus objetivos, rotina diária, histórico desportivo e eventuais restrições anatómicas."
    ],
    [
      "Prescrição Sob Medida",
      "Desenvolvimento da tua periodização individual, com seleção precisa de exercícios, volumes e cargas."
    ],
    [
      "Acompanhamento & Tutoria Ativa",
      "Orientação rigorosa no estúdio ou feedback contínuo via vídeo na consultoria online para máxima eficiência."
    ],
    [
      "Progressão & Reavaliação",
      "Monitorização sistemática da tua resposta biológica, com ajustes regulares para manter a evolução contínua."
    ]
  ],
  modes: [
    {
      id: "presencial",
      cls: "a",
      flags: ["pt"],
      where: "Praia da Vitória · Ilha Terceira",
      title: "Treino Presencial no Estúdio",
      text: "Sessões 1-para-1 exclusivas no Private Fitness Studio (Rua Serpa Pinto, nº 50). Ambiente reservado, equipamentos Semperfit e acompanhamento individualizado.",
      cta: "Conhecer o Treino Presencial",
      market: "pt",
      link: "Consultar valores em Portugal"
    },
    {
      id: "online",
      cls: "b",
      flags: ["pt", "br"],
      where: "Portugal & Internacional",
      title: "Consultoria de Treino Online",
      text: "Acompanhamento à distância com a mesma metodologia do estúdio. Fichas detalhadas, tutoriais de execução em vídeo e suporte direto no WhatsApp.",
      cta: "Quero Consultoria Online",
      market: "keep",
      link: "Ver planos e opções"
    }
  ],
  markets: {
    pt: {
      label: "Portugal",
      currency: "eur",
      of: "em Portugal",
      note: "Portugal · presencial no Private Fitness Studio (Praia da Vitória) e consultoria online · valores em euros (€)",
      prices: {
        mensal: { price: 39 },
        trimestral: { price: 109 },
        semestral: { price: 199 }
      }
    },
    br: {
      label: "Brasil & Exterior",
      currency: "brl",
      of: "no Brasil e Internacional",
      note: "Brasil e Internacional · consultoria de treino online personalizada · valores em reais (R$)",
      prices: {
        mensal: { price: 139 },
        trimestral: { price: 369 },
        semestral: { price: 699 }
      }
    }
  },
  planTypes: [
    {
      id: "mensal",
      name: "Mensal",
      word: "mensal",
      tag: "Foco Inicial · 1 Mês",
      desc: "Período inicial para adaptação neuromuscular e estabelecimento de rotina.",
      note: "Valor mensal"
    },
    {
      id: "trimestral",
      name: "Trimestral",
      word: "trimestral",
      tag: "Consistência · 3 Meses",
      desc: "Ciclo ideal para consolidar a técnica e alcançar transformações visíveis na composição corporal.",
      note: "Valor total do trimestre"
    },
    {
      id: "semestral",
      name: "Semestral",
      word: "semestral",
      tag: "Transformação Plena · 6 Meses",
      desc: "Programa contínuo com evolução sustentada de força, hipertrofia e consolidação de hábitos.",
      note: "Valor total do semestre",
      feat: true,
      badge: "Mais Recomendado"
    }
  ],
  included: [
    "Avaliação inicial e análise postural",
    "Planeamento 100% individualizado",
    "Vídeos demonstrativos de cada movimento",
    "Canal de suporte próximo por WhatsApp",
    "Registo e monitorização de cargas",
    "Reavaliações periódicas de evolução",
    "Benefício de 10% na Semperfit (Cupão DAROCHA10)"
  ],
  checkins: {
    intro: "O acompanhamento conta com análises regulares para acompanhar a tua evolução:",
    items: [
      "Progressão nas cargas e repetições",
      "Feedback de recuperação e energia diária",
      "Ajustes na biomecânica e postura",
      "Aderência à frequência estipulada",
      "Revisão contínua das metas traçadas"
    ],
    cycle: "A reformulação completa do planeamento é realizada sempre que o teu desenvolvimento exigir, habitualmente num ciclo de 8 a 12 semanas."
  },
  faq: [
    [
      "Como funcionam as sessões presenciais no estúdio?",
      "As sessões decorrem no Private Fitness Studio (Rua Serpa Pinto, nº 50, Praia da Vitória). É um espaço privado e focado, onde treinas com total reserva, sem filas de aparelhos e com orientação exclusiva."
    ],
    [
      "Como é realizada a consultoria online?",
      "A consultoria online adapta o método à tua rotina onde quer que estejas. Recebes o teu plano estruturado, vídeos orientadores de cada exercício e acompanhamento constante pelo WhatsApp para esclarecer dúvidas e ajustar cargas."
    ],
    [
      "É necessário ter experiência prévia com treino de força?",
      "Não. O plano é desenhado a partir do teu ponto de partida real, com atenção minuciosa à aprendizagem dos movimentos e progressão segura das cargas."
    ],
    [
      "Como é estruturado o meu programa individual?",
      "Iniciamos com uma anamnese detalhada para mapear objetivos, histórico físico e limitações articulares. A partir daí, o planeamento é construído e periodicamente adaptado conforme a tua evolução."
    ],
    [
      "Existe lista de espera para o estúdio?",
      "Sim. De forma a preservar a exclusividade e a qualidade do atendimento no Private Studio, as vagas são estritamente limitadas e preenchidas por ordem de candidatura via WhatsApp."
    ],
    [
      "Como posso usufruir da parceria com a Semperfit?",
      "Como aluna ou seguidora, tens acesso a 10% de desconto em todo o catálogo oficial da Semperfit (@semperfit_official) utilizando o código DAROCHA10."
    ],
    [
      "Como posso dar o primeiro passo para começar?",
      "Preenche o questionário rápido na secção abaixo e envia as tuas respostas diretamente à Sofia pelo WhatsApp para agendarmos a tua conversa inicial.",
      "Iniciar Questionário",
      "#questionario"
    ]
  ]
};

var ICONS = {
  hip: '<path d="M6 40A18 18 0 0 1 42 40"/><path d="M13 40A11 11 0 0 1 35 40"/><path d="M20 40A4 4 0 0 1 28 40"/>',
  glu: '<path d="M5 41C5 22 15 9 24 9s19 13 19 32"/><path d="M14 41c0-11 4-18 10-18s10 7 10 18"/>',
  cmp: '<circle cx="24" cy="24" r="17"/><path d="M24 7a17 17 0 0 1 0 34z" fill="currentColor"/>',
  slim: '<path d="M5 12l13 11 10-5 14 18"/><circle cx="42" cy="36" r="3" fill="currentColor"/>',
  mass: '<path d="M9 41V31M19 41V23M29 41V15M39 41V7" stroke-width="4"/>',
  str: '<path d="M4 41L24 8l20 33z"/><path d="M14 41l10-17 10 17"/>',
  perf: '<path d="M3 26h10l5-14 8 26 6-16h13"/>',
  cap: '<rect x="6" y="6" width="10" height="10"/><rect x="19" y="6" width="10" height="10"/><rect x="32" y="6" width="10" height="10" fill="currentColor"/><rect x="6" y="19" width="10" height="10"/><rect x="19" y="19" width="10" height="10" fill="currentColor"/><rect x="32" y="19" width="10" height="10"/><rect x="6" y="32" width="10" height="10" fill="currentColor"/><rect x="19" y="32" width="10" height="10"/><rect x="32" y="32" width="10" height="10"/>'
};

var QUIZ = [
  {
    key: "goal",
    q: "Qual é a tua meta física prioritária?",
    hint: "Seleciona o foco principal para o qual pretendes direcionar os teus treinos.",
    type: "single",
    label: "Objetivo Principal",
    opts: [
      "Hipertrofia & Ganho de Massa Magra",
      "Desenvolvimento de Glúteos & Membros Inferiores",
      "Recomposição Corporal & Tonificação",
      "Emagrecimento & Definição",
      "Construção de Força & Biomecânica",
      "Melhoria do Condicionamento & Disposição",
      "Outro Objetivo Específico"
    ]
  },
  {
    key: "country",
    q: "Onde resides atualmente?",
    hint: "Na Ilha Terceira dispões de sessões presenciais no estúdio privado ou acompanhamento online. Noutras localizações, o acompanhamento é online.",
    type: "single",
    label: "Localização",
    opts: ["Portugal (Ilha Terceira)", "Portugal (Continente e outras Ilhas)", "Brasil ou Internacional"]
  },
  {
    key: "format",
    q: "Qual é o formato pretendido para o teu treino?",
    hint: "Sessões 1-para-1 no Private Fitness Studio ou consultoria personalizada à distância.",
    type: "single",
    label: "Modalidade Preferida",
    opts: ["Presencial no Private Fitness Studio (Praia da Vitória)", "Consultoria Online Personalizada"],
    when: function() { return S.a.country && S.a.country.indexOf("Ilha Terceira") !== -1; }
  },
  {
    key: "level",
    q: "Como avalias a tua experiência com treino?",
    hint: "O método é calibrado com precisão para o teu nível atual.",
    type: "single",
    label: "Nível de Treino",
    opts: [
      "Iniciante (pouco ou nenhum contacto recente)",
      "Intermédio (pratico há alguns meses de forma irregular)",
      "Avançado (treino com consistência há mais de 1 ano)",
      "A regressar de uma pausa / recuperação"
    ]
  },
  {
    key: "avail",
    q: "Qual é a tua disponibilidade de horários?",
    hint: "Indica os dias da semana e períodos mais convenientes para ti.",
    type: "avail",
    label: "Disponibilidade"
  },
  {
    key: "support",
    q: "O que consideras mais decisivo no acompanhamento?",
    hint: "",
    type: "single",
    label: "Aspeto Mais Valorizado",
    opts: [
      "Privacidade e exclusividade num estúdio boutique",
      "Correção técnica rigorosa para evitar lesões",
      "Planeamento 100% individualizado para a minha rotina",
      "Motivação contínua e acompanhamento de métricas"
    ]
  },
  {
    key: "plan",
    q: "Qual é o horizonte de plano pretendido?",
    hint: "Podes rever as opções e respetivos valores na secção Planos.",
    type: "single",
    label: "Plano Pretendido",
    opts: CFG.planTypes.map(function(p) { return p.name; }).concat(["Gostaria de esclarecer primeiro com a Sofia"])
  }
];

var DAYS = ["Seg", "Ter", "Qua", "Qui", "Sex", "Sáb"];
var PERIODS = ["Manhã", "Tarde", "Noite"];
var FLEX = "Sem preferência definida";

/* ============ LÓGICA E NAVEGAÇÃO ============ */
if ('scrollRestoration' in history) {
  history.scrollRestoration = 'manual';
}
window.scrollTo(0, 0);

var S = {
  m: "pt",
  q: 0,
  a: {},
  avail: {}
};

function $(sel, ctx) { return (ctx || document).querySelector(sel); }
function $$(sel, ctx) { return [].slice.call((ctx || document).querySelectorAll(sel)); }
function esc(str) {
  return String(str || "").replace(/[&<>"']/g, function(s) {
    return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[s];
  });
}
function reduced() {
  return window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}
function headerH() {
  var h = $("#topo");
  return h ? h.offsetHeight : 68;
}

/* Construção da Navegação */
$("#nav").innerHTML = CFG.nav.map(function(n) {
  return '<a href="' + n[1] + '">' + esc(n[0]) + '</a>';
}).join("");

$("#mnav-in").innerHTML = CFG.nav.map(function(n) {
  return '<a class="ml" href="' + n[1] + '">' + esc(n[0]) + '</a>';
}).join("")
  + '<div class="macts" style="margin-top:24px"><a class="btn btn-primary" data-wa="avaliacao" href="' + CFG.waDirect + '" target="_blank" rel="noopener">Agendar Avaliação</a></div>';

/* Rodapé Navegação */
$("#f-nav").innerHTML = CFG.nav.map(function(n) {
  return '<li><a href="' + n[1] + '">' + esc(n[0]) + '</a></li>';
}).join("");

/* Ticker Strip */
var stripItems = [
  "Private Fitness Studio",
  "Praia da Vitória · Açores",
  "Treino de Força & Biomecânica",
  "Exclusividade 1-para-1",
  "A Força é o Caminho",
  "Consultoria Online Global",
  "Parceria Semperfit · Cupão DAROCHA10"
];
$("#strip").innerHTML = stripItems.concat(stripItems).concat(stripItems).map(function(t) {
  return '<span class="strip-item">' + esc(t) + '</span>';
}).join("");

/* Chips de Foco na Seção Sobre */
$("#fchips").innerHTML = CFG.chips.map(function(c) {
  return "<span>" + esc(c) + "</span>";
}).join("");

/* Áreas de foco - 8 cards em grid alternado */
$("#focus-grid").innerHTML = CFG.focus.map(function(f, i) {
  return '<article class="fc' + (f[3] ? ' feat' : '') + '" data-reveal style="--d:' + ((i % 3) * 0.07) + 's">'
    + '<svg class="fi" viewBox="0 0 48 48" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linejoin="miter" aria-hidden="true">' + ICONS[f[2]] + '</svg>'
    + '<h3>' + esc(f[0]) + '</h3><p>' + esc(f[1]) + '</p></article>';
}).join("");
document.querySelectorAll("#focus-grid .fi > *").forEach(function(n) { n.setAttribute("pathLength", "1"); });

/* Passos do Método */
$("#steps").innerHTML = CFG.steps.map(function(s, i) {
  return '<li class="step" data-reveal style="--d:' + (i * 0.09) + 's"><span class="n" aria-hidden="true">0' + (i + 1) + '</span><h3>' + esc(s[0]) + '</h3><p>' + esc(s[1]) + '</p></li>';
}).join("");

/* Modalidades */
$("#modes").innerHTML = CFG.modes.map(function(m, i) {
  return '<article class="mode mode-' + m.cls + '" data-reveal style="--d:' + (i * 0.12) + 's">'
    + '<div class="where"><span class="loc-pin" aria-hidden="true">📍</span> ' + esc(m.where) + '</div>'
    + '<h3>' + esc(m.title) + '</h3>'
    + '<p>' + esc(m.text) + '</p>'
    + '<div class="m-foot">'
    + '<a class="btn ' + (m.cls === 'a' ? 'btn-primary' : 'btn-ghost on-light') + '" data-wa="' + m.id + '" href="' + CFG.waDirect + '" target="_blank" rel="noopener">'
    + esc(m.cta) + '</a>'
    + '<a class="m-lnk" href="#planos">' + esc(m.link) + ' →</a>'
    + '</div></article>';
}).join("");

/* Stack Cards em Planos */
$("#stack").innerHTML =
  '<article class="scard light" style="--i:0"><div><p class="sk">Acompanhamento</p><h3>' + esc(CFG.checkins.intro) + '</h3></div>'
  + '<div><ul class="incl-list">' + CFG.checkins.items.map(function(x) { return "<li>" + esc(x) + "</li>"; }).join("") + '</ul><p class="cyc" style="margin-top:16px;font-size:.9rem;color:#666">' + esc(CFG.checkins.cycle) + '</p></div></article>'
  + '<article class="scard deep" style="--i:1"><div><p class="sk">Garantias do Programa</p><h3>Incluído em Todas as Opções</h3></div>'
  + '<div><ul class="incl-list">' + CFG.included.map(function(x) { return "<li>" + esc(x) + "</li>"; }).join("") + '</ul></div></article>';

/* Renderização dos Planos */
function priceHTML(m, p) {
  if (m.currency === "eur") {
    return '<span class="cur">€</span><span class="val">' + p.price + '</span>';
  } else {
    return '<span class="cur">R$</span><span class="val">' + p.price + '</span>';
  }
}

function renderPlans(mk, animate) {
  var m = CFG.markets[mk], grid = $("#plan-grid");
  grid.innerHTML = CFG.planTypes.map(function(pt) {
    var p = m.prices[pt.id];
    return '<article class="plan' + (pt.feat ? ' feat dark' : '') + '" aria-labelledby="pl-' + pt.id + '">'
      + (pt.badge ? '<span class="pbadge">' + esc(pt.badge) + '</span>' : '')
      + '<p class="ptag">' + esc(pt.tag) + '</p>'
      + '<div><h3 class="pn" id="pl-' + pt.id + '">' + esc(pt.name) + '</h3><p class="pd">' + esc(pt.desc) + '</p></div>'
      + '<div class="price">' + priceHTML(m, p) + '</div><p class="pnote">' + esc(pt.note) + '</p>'
      + '<div class="acts"><button type="button" class="btn btn-primary" data-plan="' + pt.id + '">Escolher Plano →</button></div></article>';
  }).join("");
  $("#mkt-note").textContent = m.note;
}
renderPlans("pt", false);

/* Alternância de Mercados */
$("#tab-pt").addEventListener("click", function() {
  $("#tab-pt").setAttribute("aria-selected", "true");
  $("#tab-br").setAttribute("aria-selected", "false");
  renderPlans("pt", true);
});
$("#tab-br").addEventListener("click", function() {
  $("#tab-br").setAttribute("aria-selected", "true");
  $("#tab-pt").setAttribute("aria-selected", "false");
  renderPlans("br", true);
});

/* Accordion de Perguntas Frequentes (FAQ) */
$("#acc").innerHTML = CFG.faq.map(function(f, i) {
  var link = f[2] ? ' <p style="margin-top:12px"><a class="inl" href="' + f[3] + '">' + esc(f[2]) + ' →</a></p>' : '';
  return '<div class="acc-item"><h3 style="font-size:inherit"><button class="acc-q" type="button" aria-expanded="false" aria-controls="fa-' + i + '" id="fq-' + i + '"><span>' + esc(f[0]) + '</span><i aria-hidden="true">+</i></button></h3>'
    + '<div class="acc-a" id="fa-' + i + '" role="region" aria-labelledby="fq-' + i + '" hidden><div class="acc-in"><p>' + esc(f[1]) + '</p>' + link + '</div></div></div>';
}).join("");

$("#acc").addEventListener("click", function(e) {
  var b = e.target.closest(".acc-q");
  if (!b) return;
  var item = b.closest(".acc-item");
  var wasOpen = item.classList.contains("open");
  $$(".acc-item.open").forEach(function(o) {
    o.classList.remove("open");
    $(".acc-q", o).setAttribute("aria-expanded", "false");
    $(".acc-a", o).hidden = true;
  });
  if (!wasOpen) {
    item.classList.add("open");
    b.setAttribute("aria-expanded", "true");
    $(".acc-a", item).hidden = false;
  }
});

/* Questionário Interativo */
function validQuestions() {
  return QUIZ.filter(function(q) {
    return !q.when || q.when();
  });
}

function renderQuiz() {
  var qs = validQuestions();
  if (S.q >= qs.length) {
    renderQuizFinish();
    return;
  }
  var cur = qs[S.q];
  $("#q-count").textContent = "Pergunta " + (S.q + 1) + " de " + qs.length;
  var pct = Math.round((S.q / qs.length) * 100);
  $("#q-pct").textContent = pct + "%";
  $("#q-bar i").style.width = pct + "%";
  $("#q-bar").setAttribute("aria-valuenow", pct);

  var html = '<h3 class="qh">' + esc(cur.q) + '</h3>';
  if (cur.hint) {
    html += '<p class="qhint">' + esc(cur.hint) + '</p>';
  }

  if (cur.type === "single") {
    html += '<div class="qopts">' + cur.opts.map(function(opt) {
      var sel = S.a[cur.key] === opt ? ' sel' : '';
      return '<button type="button" class="opt' + sel + '" data-val="' + esc(opt) + '">' + esc(opt) + '</button>';
    }).join("") + '</div>';
  } else if (cur.type === "avail") {
    html += '<div class="avail-grid"><table class="atab"><thead><tr><th>Período</th>'
      + DAYS.map(function(d) { return '<th>' + esc(d) + '</th>'; }).join("") + '</tr></thead><tbody>';
    PERIODS.forEach(function(p) {
      html += '<tr><td class="pl">' + esc(p) + '</td>'
        + DAYS.map(function(d) {
          var k = d + "_" + p;
          var on = S.avail[k] ? ' on' : '';
          return '<td><button type="button" class="abtn' + on + '" data-slot="' + k + '" aria-label="' + d + ' ' + p + '"></button></td>';
        }).join("") + '</tr>';
    });
    html += '</tbody></table></div>';
  }

  $("#stage").innerHTML = html;
  $("#q-err").textContent = "";

  var navHtml = '';
  if (S.q > 0) {
    navHtml += '<button type="button" class="btn btn-ghost btn-sm" id="q-prev">← Anterior</button>';
  }
  if (cur.type === "avail") {
    navHtml += '<button type="button" class="btn btn-primary btn-sm" id="q-next">Avançar →</button>';
  }
  $("#q-nav").innerHTML = navHtml;
}

function renderQuizFinish() {
  $("#q-count").textContent = "Questionário Concluído";
  $("#q-pct").textContent = "100%";
  $("#q-bar i").style.width = "100%";
  $("#q-bar").setAttribute("aria-valuenow", 100);

  var sumItems = Object.keys(S.a).map(function(k) {
    return '<li><b>' + esc(k) + ':</b> ' + esc(S.a[k]) + '</li>';
  });

  var waText = "Olá, Sofia! Completei o questionário no website do Private Fitness Studio:%0A%0A"
    + Object.keys(S.a).map(function(k) {
      return "• " + encodeURIComponent(k) + ": " + encodeURIComponent(S.a[k]);
    }).join("%0A")
    + "%0A%0AGostaria de saber a disponibilidade para iniciarmos o acompanhamento.";

  var waUrl = CFG.waDirect + "?text=" + waText;

  $("#stage").innerHTML = '<div class="qfin">'
    + '<h3 class="qh">Excelente! As tuas respostas estão prontas.</h3>'
    + '<p class="lead" style="margin-bottom:24px">Clica no botão abaixo para enviares as respostas à Sofia pelo WhatsApp e receberes a proposta ideal para o teu perfil.</p>'
    + '<a class="btn btn-primary btn-xl" href="' + waUrl + '" target="_blank" rel="noopener">Enviar Respostas no WhatsApp →</a>'
    + '</div>';
  $("#q-nav").innerHTML = '<button type="button" class="btn btn-ghost btn-sm" id="q-restart">Recomeçar</button>';
}

$("#stage").addEventListener("click", function(e) {
  var b = e.target.closest(".opt");
  if (b) {
    var qs = validQuestions(), cur = qs[S.q];
    S.a[cur.label || cur.key] = b.getAttribute("data-val");
    S.q++;
    renderQuiz();
    return;
  }
  var ab = e.target.closest(".abtn");
  if (ab) {
    var sl = ab.getAttribute("data-slot");
    if (S.avail[sl]) {
      delete S.avail[sl];
      ab.classList.remove("on");
    } else {
      S.avail[sl] = true;
      ab.classList.add("on");
    }
  }
});

$("#q-nav").addEventListener("click", function(e) {
  if (e.target.id === "q-prev") {
    if (S.q > 0) {
      S.q--;
      renderQuiz();
    }
  } else if (e.target.id === "q-next") {
    var qs = validQuestions(), cur = qs[S.q];
    var slots = Object.keys(S.avail);
    S.a[cur.label || cur.key] = slots.length > 0 ? slots.join(", ") : "Horário flexível";
    S.q++;
    renderQuiz();
  } else if (e.target.id === "q-restart") {
    S.q = 0;
    S.a = {};
    S.avail = {};
    renderQuiz();
  }
});
renderQuiz();

/* Mobile Menu */
$("#burger").addEventListener("click", function() {
  var open = $("#mnav").classList.toggle("open");
  $("#burger").setAttribute("aria-expanded", open ? "true" : "false");
});

$("#mnav").addEventListener("click", function(e) {
  if (e.target.closest(".ml") || e.target.closest(".btn")) {
    $("#mnav").classList.remove("open");
    $("#burger").setAttribute("aria-expanded", "false");
  }
});

/* Botões com Destino Dinâmico de WhatsApp */
document.addEventListener("click", function(e) {
  var b = e.target.closest("[data-wa]");
  if (b) {
    var typ = b.getAttribute("data-wa");
    var msg = CFG.msgs[typ] || CFG.msgs.general;
    b.href = CFG.waDirect + "?text=" + encodeURIComponent(msg);
  }
  var pbtn = e.target.closest("[data-plan]");
  if (pbtn) {
    var pid = pbtn.getAttribute("data-plan");
    var ptext = "Olá, Sofia! Tenho interesse no Plano " + pid.toUpperCase() + ". Podes dizer-me os próximos passos para começar?";
    window.open(CFG.waDirect + "?text=" + encodeURIComponent(ptext), "_blank", "noopener");
  }
});

/* Observer para Animações Reveal */
if ('IntersectionObserver' in window && !reduced()) {
  var obs = new IntersectionObserver(function(entries) {
    entries.forEach(function(entry) {
      if (entry.isIntersecting) {
        entry.target.classList.remove("pre");
        obs.unobserve(entry.target);
      }
    });
  }, { rootMargin: "0px 0px -40px 0px", threshold: 0.1 });

  document.querySelectorAll("[data-reveal], .focus-grid .fc").forEach(function(el) {
    el.classList.add("pre");
    obs.observe(el);
  });
}
