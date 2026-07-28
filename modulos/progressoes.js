export const modulo = {
  id: "progressoes",
  nome: "Progressões Aritméticas e Geométricas",
  disciplina: "Matemática",
  nivel: "Intermediário",
  ordem: 1,

  introducao: {
    titulo: "O que são progressões?",
    descricao: "Progressões são sequências numéricas que seguem uma regra. Na PA, a diferença entre termos é constante; na PG, a razão é constante. Vamos explorar essas duas principais progressões com exemplos do dia a dia.",
    imagem: `<svg viewBox="0 0 400 100" xmlns="http://www.w3.org/2000/svg">
      <rect x="10" y="20" width="30" height="30" fill="#6366f1" />
      <rect x="50" y="20" width="30" height="30" fill="#818cf8" />
      <rect x="90" y="20" width="30" height="30" fill="#10b981" />
      <rect x="130" y="20" width="30" height="30" fill="#f59e0b" />
      <text x="15" y="42" fill="white" font-size="12">2</text>
      <text x="55" y="42" fill="white" font-size="12">5</text>
      <text x="95" y="42" fill="white" font-size="12">8</text>
      <text x="135" y="42" fill="white" font-size="12">11</text>
      <text x="200" y="42" fill="#475569" font-size="14">PA: +3</text>
    </svg>`
  },

  objetivos: [
    "Identificar uma progressão aritmética (PA) e sua razão",
    "Calcular termos de uma PA usando a fórmula do termo geral",
    "Identificar uma progressão geométrica (PG) e sua razão",
    "Calcular termos de uma PG usando a fórmula do termo geral",
    "Resolver problemas de aplicação com PA e PG"
  ],

  teoria: [
    {
      titulo: "Progressão Aritmética (PA)",
      conteudo: `<p>Uma progressão aritmética é uma sequência onde cada termo, a partir do segundo, é igual ao anterior somado a uma constante chamada <strong>razão</strong> (r).</p>
<p><strong>Fórmula do termo geral:</strong> a<sub>n</sub> = a<sub>1</sub> + (n - 1) · r</p>
<p>Onde:</p>
<ul>
  <li>a<sub>1</sub>: primeiro termo</li>
  <li>n: posição do termo</li>
  <li>r: razão</li>
</ul>`,
      imagem: `<svg viewBox="0 0 400 80" xmlns="http://www.w3.org/2000/svg">
        <line x1="20" y1="40" x2="380" y2="40" stroke="#ccc" stroke-width="2" />
        <circle cx="50" cy="40" r="20" fill="#6366f1" />
        <text x="45" y="46" fill="white" font-size="14">a₁</text>
        <circle cx="150" cy="40" r="20" fill="#818cf8" />
        <text x="145" y="46" fill="white" font-size="14">a₂</text>
        <circle cx="250" cy="40" r="20" fill="#10b981" />
        <text x="245" y="46" fill="white" font-size="14">a₃</text>
        <circle cx="350" cy="40" r="20" fill="#f59e0b" />
        <text x="345" y="46" fill="white" font-size="14">aₙ</text>
        <text x="70" y="30" fill="#475569" font-size="12">+r</text>
        <text x="170" y="30" fill="#475569" font-size="12">+r</text>
        <text x="270" y="30" fill="#475569" font-size="12">+r</text>
      </svg>`
    },
    {
      titulo: "Progressão Geométrica (PG)",
      conteudo: `<p>Uma progressão geométrica é uma sequência onde cada termo, a partir do segundo, é igual ao anterior multiplicado por uma constante chamada <strong>razão</strong> (q).</p>
<p><strong>Fórmula do termo geral:</strong> a<sub>n</sub> = a<sub>1</sub> · q<sup>(n-1)</sup></p>
<p>Onde:</p>
<ul>
  <li>a<sub>1</sub>: primeiro termo</li>
  <li>n: posição do termo</li>
  <li>q: razão</li>
</ul>`,
      imagem: `<svg viewBox="0 0 400 80" xmlns="http://www.w3.org/2000/svg">
        <line x1="20" y1="40" x2="380" y2="40" stroke="#ccc" stroke-width="2" />
        <circle cx="50" cy="40" r="20" fill="#6366f1" />
        <text x="45" y="46" fill="white" font-size="14">a₁</text>
        <circle cx="150" cy="40" r="20" fill="#818cf8" />
        <text x="145" y="46" fill="white" font-size="14">a₂</text>
        <circle cx="250" cy="40" r="20" fill="#10b981" />
        <text x="245" y="46" fill="white" font-size="14">a₃</text>
        <circle cx="350" cy="40" r="20" fill="#f59e0b" />
        <text x="345" y="46" fill="white" font-size="14">aₙ</text>
        <text x="70" y="30" fill="#475569" font-size="12">×q</text>
        <text x="170" y="30" fill="#475569" font-size="12">×q</text>
        <text x="270" y="30" fill="#475569" font-size="12">×q</text>
      </svg>`
    }
  ],

  exemplos: [
    {
      titulo: "Exemplo 1 – PA",
      enunciado: "Determine o 10º termo da PA (2, 5, 8, 11, ...)",
      resolucao: "a₁ = 2, r = 3, n = 10<br>a₁₀ = 2 + (10-1)·3 = 2 + 27 = 29",
      observacao: "Sempre identifique o primeiro termo e a razão antes de aplicar a fórmula.",
      imagem: `<svg viewBox="0 0 400 60" xmlns="http://www.w3.org/2000/svg">
        <rect x="10" y="10" width="30" height="30" fill="#6366f1" />
        <text x="18" y="30" fill="white" font-size="14">2</text>
        <rect x="50" y="10" width="30" height="30" fill="#818cf8" />
        <text x="58" y="30" fill="white" font-size="14">5</text>
        <rect x="90" y="10" width="30" height="30" fill="#10b981" />
        <text x="98" y="30" fill="white" font-size="14">8</text>
        <rect x="130" y="10" width="30" height="30" fill="#f59e0b" />
        <text x="138" y="30" fill="white" font-size="14">11</text>
        <text x="180" y="30" fill="#475569" font-size="14">... → a₁₀ = 29</text>
      </svg>`
    },
    {
      titulo: "Exemplo 2 – PG",
      enunciado: "Calcule o 6º termo da PG (3, 6, 12, 24, ...)",
      resolucao: "a₁ = 3, q = 2, n = 6<br>a₆ = 3 · 2^(6-1) = 3 · 32 = 96",
      observacao: "A razão pode ser maior que 1 (crescente) ou entre 0 e 1 (decrescente).",
      imagem: `<svg viewBox="0 0 400 60" xmlns="http://www.w3.org/2000/svg">
        <rect x="10" y="10" width="30" height="30" fill="#6366f1" />
        <text x="18" y="30" fill="white" font-size="14">3</text>
        <rect x="50" y="10" width="30" height="30" fill="#818cf8" />
        <text x="58" y="30" fill="white" font-size="14">6</text>
        <rect x="90" y="10" width="30" height="30" fill="#10b981" />
        <text x="98" y="30" fill="white" font-size="14">12</text>
        <rect x="130" y="10" width="30" height="30" fill="#f59e0b" />
        <text x="138" y="30" fill="white" font-size="14">24</text>
        <text x="180" y="30" fill="#475569" font-size="14">... → a₆ = 96</text>
      </svg>`
    }
  ],

  diagramasSVG: [],

  etapasAprendizagem: [
    {
      tipo: "exercicio",
      titulo: "Exercício Guiado – PA",
      conteudo: "Vamos praticar! Determine o 15º termo da PA (4, 9, 14, ...).",
      pergunta: "Qual é o valor de a₁₅?",
      alternativas: ["64", "69", "74", "79", "84"],
      correta: 2,
      explicacaoAcerto: "Excelente! a₁ = 4, r = 5 → a₁₅ = 4 + 14·5 = 74.",
      explicacaoErro: "Reveja a fórmula: aₙ = a₁ + (n-1)·r. Substitua corretamente."
    },
    {
      tipo: "questao",
      titulo: "Questão CESGRANRIO – PA",
      conteudo: "(CESGRANRIO) Em uma PA, o 5º termo é 17 e o 10º termo é 32. Qual é a razão?",
      pergunta: "Qual é o valor da razão r?",
      alternativas: ["2", "3", "4", "5", "6"],
      correta: 1,
      explicacaoAcerto: "Correto! a₅ = a₁ + 4r = 17; a₁₀ = a₁ + 9r = 32. Subtraindo: 5r = 15 → r = 3.",
      explicacaoErro: "Use o sistema: a₁ + 4r = 17 e a₁ + 9r = 32. Subtraia as equações."
    },
    {
      tipo: "questao",
      titulo: "Questão CESGRANRIO – PG",
      conteudo: "(CESGRANRIO) O 4º termo de uma PG é 54 e o 1º termo é 2. Qual é a razão?",
      pergunta: "Qual é o valor de q?",
      alternativas: ["2", "3", "4", "5", "6"],
      correta: 1,
      explicacaoAcerto: "Boa! a₄ = a₁ · q³ → 54 = 2·q³ → q³ = 27 → q = 3.",
      explicacaoErro: "Lembre-se: aₙ = a₁ · q^(n-1). Isole q."
    }
  ],

  questoes: [
    {
      dificuldade: "Fácil",
      pergunta: "Qual é o 20º termo da PA (1, 4, 7, ...)?",
      alternativas: ["58", "60", "62", "64", "66"],
      correta: 0,
      explicacaoAcerto: "a₂₀ = 1 + 19·3 = 58.",
      explicacaoErro: "Use a fórmula aₙ = a₁ + (n-1)·r."
    },
    {
      dificuldade: "Médio",
      pergunta: "A soma dos 10 primeiros termos de uma PA é 220. Se a₁ = 4, qual é a razão?",
      alternativas: ["4", "5", "6", "7", "8"],
      correta: 2,
      explicacaoAcerto: "Sₙ = n/2 · (a₁ + aₙ) → 220 = 10/2 · (4 + a₁₀) → 44 = 4 + a₁₀ → a₁₀ = 40. a₁₀ = a₁ + 9r → 40 = 4 + 9r → r = 4.",
      explicacaoErro: "Revise a fórmula da soma da PA."
    },
    {
      dificuldade: "Difícil",
      pergunta: "Uma PG tem razão 3 e o 5º termo é 162. Qual é o primeiro termo?",
      alternativas: ["2", "3", "4", "5", "6"],
      correta: 0,
      explicacaoAcerto: "a₅ = a₁ · 3⁴ → 162 = a₁ · 81 → a₁ = 2.",
      explicacaoErro: "a₅ = a₁ · q^(5-1). Isole a₁."
    }
  ],

  avaliacaoFinal: {
    quantidade: 20,
    questoes: [
      // Você pode adicionar aqui 20 questões ou gerar automaticamente a partir de 'questoes' (o sistema faz isso se não houver)
    ],
    percentualAprovacao: 80
  },

  criterioConclusao: {
    minimoAcertos: 80,
    tempoEstimado: "2h"
  }
};
