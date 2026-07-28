export const modulo = {
  id: "progressoes",
  nome: "Progressões Aritméticas e Geométricas",
  disciplina: "Matemática",
  nivel: "Intermediário",
  ordem: 1,

  introducao: {
    titulo: "O Poder das Sequências no Mundo Real",
    descricao: `
      <p>Você já reparou como a natureza e a sociedade seguem padrões? O crescimento de uma planta, a economia de uma poupança, a produção de uma fábrica, a propagação de um vírus – todos esses fenômenos podem ser descritos por sequências numéricas. Duas das mais importantes são a <strong>Progressão Aritmética (PA)</strong> e a <strong>Progressão Geométrica (PG)</strong>.</p>
      <p>Na PA, os números crescem ou decrescem de forma <strong>linear</strong>, somando sempre a mesma quantidade (a razão). Exemplo: se você economiza R$ 50 por mês, seu saldo mês a mês forma uma PA: 50, 100, 150, 200…</p>
      <p>Já na PG, o crescimento é <strong>exponencial</strong>, multiplicando sempre pelo mesmo fator (a razão). Exemplo: uma população de bactérias que dobra a cada hora: 100, 200, 400, 800…</p>
      <p>Este módulo foi desenvolvido para você dominar esses dois tipos de progressões, desde os conceitos básicos até as aplicações mais sofisticadas, com foco em concursos da CESGRANRIO. Vamos explorar fórmulas, propriedades, truques de resolução e muitos exercícios práticos, sempre com exemplos do dia a dia para fixar o aprendizado.</p>
    `,
    imagem: `<svg viewBox="0 0 600 220" xmlns="http://www.w3.org/2000/svg" style="background:#f7f9fc;border-radius:12px;">
      <rect width="600" height="220" fill="#f7f9fc" rx="12"/>
      <text x="30" y="30" font-family="'Segoe UI', Arial, sans-serif" font-size="16" fill="#2c3e50" font-weight="bold">Sequências no cotidiano</text>
      
      <!-- Ilustração PA -->
      <text x="40" y="70" font-family="'Segoe UI', sans-serif" font-size="13" fill="#2980b9">PA (crescimento linear)</text>
      <rect x="40" y="90" width="30" height="20" fill="#3498db" rx="4"/>
      <rect x="80" y="80" width="30" height="30" fill="#3498db" rx="4"/>
      <rect x="120" y="70" width="30" height="40" fill="#3498db" rx="4"/>
      <rect x="160" y="60" width="30" height="50" fill="#3498db" rx="4"/>
      <rect x="200" y="50" width="30" height="60" fill="#3498db" rx="4"/>
      <line x1="55" y1="120" x2="215" y2="120" stroke="#2980b9" stroke-width="2" stroke-dasharray="4,4"/>
      <text x="260" y="95" font-family="'Segoe UI', sans-serif" font-size="12" fill="#2c3e50">+ r</text>
      <path d="M80,120 L80,130 L200,130 L200,120" stroke="#e67e22" stroke-width="2" fill="none"/>

      <!-- Ilustração PG -->
      <text x="40" y="160" font-family="'Segoe UI', sans-serif" font-size="13" fill="#27ae60">PG (crescimento exponencial)</text>
      <rect x="40" y="180" width="30" height="20" fill="#2ecc71" rx="4"/>
      <rect x="90" y="160" width="30" height="40" fill="#2ecc71" rx="4"/>
      <rect x="140" y="130" width="30" height="70" fill="#2ecc71" rx="4"/>
      <rect x="190" y="90" width="30" height="110" fill="#2ecc71" rx="4"/>
      <rect x="240" y="30" width="30" height="170" fill="#2ecc71" rx="4"/>
      <line x1="55" y1="200" x2="270" y2="200" stroke="#27ae60" stroke-width="2" stroke-dasharray="4,4"/>
      <text x="310" y="130" font-family="'Segoe UI', sans-serif" font-size="12" fill="#2c3e50">× q</text>
      <path d="M80,200 L80,210 L255,210 L255,200" stroke="#e67e22" stroke-width="2" fill="none"/>

      <!-- Destaque -->
      <rect x="380" y="60" width="190" height="120" fill="#fef9e7" rx="8" stroke="#f1c40f" stroke-width="2"/>
      <text x="400" y="85" font-family="'Segoe UI', sans-serif" font-size="13" fill="#2c3e50" font-weight="bold">📈 Por que estudar?</text>
      <text x="400" y="110" font-family="'Segoe UI', sans-serif" font-size="11" fill="#555">• Juros compostos</text>
      <text x="400" y="130" font-family="'Segoe UI', sans-serif" font-size="11" fill="#555">• Planejamento financeiro</text>
      <text x="400" y="150" font-family="'Segoe UI', sans-serif" font-size="11" fill="#555">• Demografia e biologia</text>
      <text x="400" y="170" font-family="'Segoe UI', sans-serif" font-size="11" fill="#555">• Física e engenharia</text>
    </svg>`
  },

  objetivos: [
    "Compreender o conceito de sequência numérica e sua representação formal, identificando a lei de formação.",
    "Reconhecer e diferenciar Progressões Aritméticas (PA) e Progressões Geométricas (PG) por suas características.",
    "Calcular o termo geral de uma PA e de uma PG utilizando as fórmulas $a_n = a_1 + (n-1)r$ e $b_n = b_1 \\cdot q^{n-1}$.",
    "Determinar a soma dos termos de uma PA finita ($S_n = \\dfrac{(a_1+a_n)n}{2}$) e de uma PG finita ($S_n = \\dfrac{b_1(q^n-1)}{q-1}$).",
    "Aplicar a soma de PG infinita convergente ($S_\\infty = \\dfrac{b_1}{1-q}$) em problemas de dízimas periódicas e limites.",
    "Resolver problemas de interpolação de meios aritméticos e geométricos, entendendo a relação entre os termos.",
    "Aplicar as progressões em situações práticas como matemática financeira (juros, depreciação, valor presente) e outras áreas.",
    "Utilizar as propriedades das progressões (média aritmética, média geométrica, termo central) para resolver problemas com elegância.",
    "Desenvolver raciocínio lógico e estratégias de resolução para questões de concursos, incluindo sequências mistas e problemas contextuais.",
    "Capacitar-se para enfrentar questões da CESGRANRIO e outras bancas com confiança e agilidade."
  ],

  teoria: [
    {
      titulo: "1. Sequências Numéricas: A Base de Tudo",
      conteudo: `
        <p>Uma <strong>sequência numérica</strong> é uma lista ordenada de números (reais) que obedece a uma lei de formação. Cada número é chamado de <strong>termo</strong> e sua posição é indicada por um índice, geralmente $n$ (positivo e inteiro).</p>
        <p>Exemplos:</p>
        <ul>
          <li><strong>Sequência dos números pares:</strong> $(2, 4, 6, 8, 10, \\dots)$ – cada termo é o anterior somado a 2.</li>
          <li><strong>Sequência das potências de 2:</strong> $(2, 4, 8, 16, 32, \\dots)$ – cada termo é o anterior multiplicado por 2.</li>
        </ul>
        <p>No primeiro caso, temos uma <strong>Progressão Aritmética (PA)</strong>; no segundo, uma <strong>Progressão Geométrica (PG)</strong>.</p>
        <p>As sequências podem ser <strong>finitas</strong> (com um número determinado de termos) ou <strong>infinitas</strong> (com termos indefinidamente). É comum representarmos o último termo de uma sequência finita por $a_n$ ou $a_m$.</p>
        <p>A <strong>lei de formação</strong> é a regra que permite calcular qualquer termo a partir da posição $n$. Por exemplo, a sequência dos números ímpares pode ser descrita por $a_n = 2n-1$.</p>
        <p>Entender sequências é fundamental não apenas para matemática, mas também para ciências da computação, estatística, engenharia e economia.</p>
      `,
      imagem: `<svg viewBox="0 0 500 150" xmlns="http://www.w3.org/2000/svg" style="background:#f4f9fc;border-radius:8px;">
        <rect width="500" height="150" fill="#f4f9fc" rx="8"/>
        <text x="20" y="30" font-family="'Segoe UI', Arial" font-size="14" fill="#2c3e50" font-weight="bold">Estrutura de uma sequência</text>
        <text x="20" y="60" font-family="'Segoe UI', Arial" font-size="12" fill="#2c3e50">(a₁, a₂, a₃, …, aₙ)</text>
        <line x1="30" y1="80" x2="470" y2="80" stroke="#bdc3c7" stroke-width="2"/>
        <!-- Círculos representando termos -->
        <circle cx="60" cy="80" r="18" fill="#3498db"/><text x="54" y="86" font-family="Arial" font-size="12" fill="white">a₁</text>
        <circle cx="130" cy="80" r="18" fill="#3498db"/><text x="124" y="86" font-family="Arial" font-size="12" fill="white">a₂</text>
        <circle cx="200" cy="80" r="18" fill="#3498db"/><text x="194" y="86" font-family="Arial" font-size="12" fill="white">a₃</text>
        <circle cx="270" cy="80" r="18" fill="#3498db"/><text x="264" y="86" font-family="Arial" font-size="12" fill="white">…</text>
        <circle cx="370" cy="80" r="18" fill="#3498db"/><text x="364" y="86" font-family="Arial" font-size="12" fill="white">aₙ</text>
        <text x="60" y="130" font-family="'Segoe UI', Arial" font-size="12" fill="#555">Termo geral: aₙ = f(n)</text>
        <text x="280" y="130" font-family="'Segoe UI', Arial" font-size="12" fill="#555">Lei de formação</text>
        <!-- Seta -->
        <line x1="290" y1="110" x2="350" y2="110" stroke="#e74c3c" stroke-width="2" marker-end="url(#arrowSeq)"/>
        <defs>
          <marker id="arrowSeq" markerWidth="8" markerHeight="8" refX="4" refY="4" orient="auto">
            <path d="M0,0 L8,4 L0,8 Z" fill="#e74c3c"/>
          </marker>
        </defs>
      </svg>`
    },
    {
      titulo: "2. Progressão Aritmética (PA) – Definição, Termo Geral e Propriedades",
      conteudo: `
        <p>Uma <strong>Progressão Aritmética</strong> é uma sequência onde a diferença entre um termo e seu antecessor é constante. Essa diferença é chamada de <strong>razão</strong> e representada por $r$.</p>
        <p>Formalmente: se $(a_1, a_2, a_3, \\dots)$ é PA, então $a_2 - a_1 = a_3 - a_2 = \\dots = r$.</p>
        <p><strong>Termo geral:</strong></p>
        <p style="text-align:center; font-size:1.2em; background:#f0f8ff; padding:10px; border-radius:8px; display:inline-block;">$a_n = a_1 + (n-1) \\cdot r$</p>
        <p>Exemplo: na PA $(3, 7, 11, 15, \\dots)$, temos $a_1=3$ e $r=4$. O 10º termo é $a_{10}=3+9\\cdot4=39$.</p>
        <p><strong>Propriedades importantes:</strong></p>
        <ul>
          <li><strong>Média aritmética:</strong> em uma PA finita, a média dos extremos é igual ao termo central (se número de termos for ímpar) ou à média dos dois termos centrais (se par). Isso é útil para interpolação.</li>
          <li><strong>Termos equidistantes:</strong> $a_{i} + a_{k} = a_{p} + a_{q}$ quando $i+k = p+q$.</li>
          <li><strong>Classificação:</strong> PA crescente ($r>0$), decrescente ($r<0$) ou constante ($r=0$).</li>
        </ul>
        <p><strong>Dica para concursos:</strong> muitas questões fornecem a soma de termos para descobrir a razão. Monte sistemas usando a fórmula do termo geral.</p>
      `,
      imagem: `<svg viewBox="0 0 500 180" xmlns="http://www.w3.org/2000/svg" style="background:#fef9e7;border-radius:8px;">
        <rect width="500" height="180" fill="#fef9e7" rx="8"/>
        <text x="20" y="30" font-family="'Segoe UI', Arial" font-size="14" fill="#2c3e50" font-weight="bold">PA crescente (r > 0)</text>
        <line x1="40" y1="100" x2="460" y2="100" stroke="#bdc3c7" stroke-width="2"/>
        <!-- Termos -->
        <circle cx="70" cy="100" r="15" fill="#e67e22"/><text x="64" y="105" font-family="Arial" font-size="10" fill="white">a₁</text>
        <circle cx="140" cy="100" r="15" fill="#e67e22"/><text x="134" y="105" font-family="Arial" font-size="10" fill="white">a₂</text>
        <circle cx="210" cy="100" r="15" fill="#e67e22"/><text x="204" y="105" font-family="Arial" font-size="10" fill="white">a₃</text>
        <circle cx="280" cy="100" r="15" fill="#e67e22"/><text x="274" y="105" font-family="Arial" font-size="10" fill="white">a₄</text>
        <circle cx="350" cy="100" r="15" fill="#e67e22"/><text x="344" y="105" font-family="Arial" font-size="10" fill="white">a₅</text>
        <circle cx="420" cy="100" r="15" fill="#e67e22"/><text x="414" y="105" font-family="Arial" font-size="10" fill="white">…</text>
        <!-- Setas razão -->
        <path d="M85,70 L128,70" stroke="#c0392b" stroke-width="2" marker-end="url(#arrowR)"/>
        <text x="98" y="65" font-family="Arial" font-size="10" fill="#c0392b">r</text>
        <path d="M155,70 L198,70" stroke="#c0392b" stroke-width="2" marker-end="url(#arrowR)"/>
        <text x="168" y="65" font-family="Arial" font-size="10" fill="#c0392b">r</text>
        <path d="M225,70 L268,70" stroke="#c0392b" stroke-width="2" marker-end="url(#arrowR)"/>
        <text x="238" y="65" font-family="Arial" font-size="10" fill="#c0392b">r</text>
        <defs>
          <marker id="arrowR" markerWidth="8" markerHeight="8" refX="4" refY="4" orient="auto">
            <path d="M0,0 L8,4 L0,8 Z" fill="#c0392b"/>
          </marker>
        </defs>
        <text x="40" y="150" font-family="'Segoe UI', Arial" font-size="13" fill="#2c3e50">Fórmula: aₙ = a₁ + (n-1)·r</text>
        <text x="280" y="150" font-family="'Segoe UI', Arial" font-size="12" fill="#555">Exemplo: (3,7,11,15,…) → r=4</text>
      </svg>`
    },
    {
      titulo: "3. Soma dos Termos de uma PA Finita",
      conteudo: `
        <p>A soma dos $n$ primeiros termos de uma PA é calculada pela fórmula:</p>
        <p style="text-align:center; font-size:1.2em; background:#f0f8ff; padding:10px; border-radius:8px; display:inline-block;">$S_n = \\dfrac{(a_1 + a_n) \\cdot n}{2}$</p>
        <p>Essa fórmula é obtida somando os termos aos pares (primeiro com último, segundo com penúltimo, etc.), que sempre resultam em $a_1 + a_n$.</p>
        <p><strong>Exemplo prático:</strong> uma fábrica produz 200 unidades no primeiro mês e aumenta a produção em 25 unidades por mês. Quantas unidades produzirá nos primeiros 12 meses?</p>
        <p>PA: $a_1=200$, $r=25$, $n=12$. $a_{12}=200+11\\cdot25=475$. $S_{12} = \\dfrac{(200+475)\\cdot12}{2} = \\dfrac{675\\cdot12}{2}=4050$ unidades.</p>
        <p><strong>Dica:</strong> quando o número de termos é ímpar, a soma pode ser calculada como $S_n = n \\cdot a_{\\text{central}}$.</p>
        <p>Essa fórmula é frequentemente cobrada em problemas de planejamento, produção, poupança e outras áreas.</p>
      `,
      imagem: `<svg viewBox="0 0 500 150" xmlns="http://www.w3.org/2000/svg" style="background:#eaf2f8;border-radius:8px;">
        <rect width="500" height="150" fill="#eaf2f8" rx="8"/>
        <text x="20" y="30" font-family="'Segoe UI', Arial" font-size="14" fill="#2c3e50" font-weight="bold">Soma de PA: visualização</text>
        <!-- Barras representando termos -->
        <rect x="40" y="120" width="30" height="15" fill="#3498db" rx="3"/>
        <text x="45" y="112" font-family="Arial" font-size="10" fill="#2c3e50">a₁</text>
        <rect x="90" y="105" width="30" height="30" fill="#3498db" rx="3"/>
        <text x="95" y="97" font-family="Arial" font-size="10" fill="#2c3e50">a₂</text>
        <rect x="140" y="90" width="30" height="45" fill="#3498db" rx="3"/>
        <text x="145" y="82" font-family="Arial" font-size="10" fill="#2c3e50">a₃</text>
        <rect x="190" y="75" width="30" height="60" fill="#3498db" rx="3"/>
        <text x="195" y="67" font-family="Arial" font-size="10" fill="#2c3e50">a₄</text>
        <rect x="240" y="60" width="30" height="75" fill="#3498db" rx="3"/>
        <text x="245" y="52" font-family="Arial" font-size="10" fill="#2c3e50">a₅</text>
        <rect x="290" y="45" width="30" height="90" fill="#3498db" rx="3"/>
        <text x="295" y="37" font-family="Arial" font-size="10" fill="#2c3e50">…</text>
        <rect x="360" y="30" width="30" height="105" fill="#e74c3c" opacity="0.6" rx="3"/>
        <text x="365" y="22" font-family="Arial" font-size="10" fill="#e74c3c">aₙ</text>
        <text x="40" y="142" font-family="'Segoe UI', Arial" font-size="12" fill="#2c3e50">Sₙ = (a₁ + aₙ) · n / 2</text>
      </svg>`
    },
    {
      titulo: "4. Progressão Geométrica (PG) – Definição, Termo Geral e Propriedades",
      conteudo: `
        <p>Uma <strong>Progressão Geométrica</strong> é uma sequência onde a razão entre um termo e seu antecessor é constante. Essa razão é chamada de <strong>razão da PG</strong> e denotada por $q$ (ou $r$ em alguns livros, mas aqui usaremos $q$ para diferenciar da PA).</p>
        <p>Se $(b_1, b_2, b_3, \\dots)$ é PG, então $\\dfrac{b_2}{b_1} = \\dfrac{b_3}{b_2} = \\dots = q$.</p>
        <p><strong>Termo geral:</strong></p>
        <p style="text-align:center; font-size:1.2em; background:#f0f8ff; padding:10px; border-radius:8px; display:inline-block;">$b_n = b_1 \\cdot q^{n-1}$</p>
        <p><strong>Propriedades:</strong></p>
        <ul>
          <li><strong>Média geométrica:</strong> o quadrado de qualquer termo (exceto extremos) é igual ao produto do anterior pelo posterior: $b_k^2 = b_{k-1} \\cdot b_{k+1}$.</li>
          <li><strong>Produto dos extremos:</strong> em uma PG finita, o produto de dois termos equidistantes dos extremos é constante e igual ao produto do primeiro pelo último.</li>
          <li><strong>Classificação:</strong> PG crescente (q > 1, com termos positivos), decrescente (0 < q < 1), alternante (q < 0) ou constante (q = 1).</li>
        </ul>
        <p><strong>Aplicações no dia a dia:</strong> juros compostos, depreciação de bens, crescimento populacional, propagação de vírus, séries de pagamentos, etc.</p>
      `,
      imagem: `<svg viewBox="0 0 500 180" xmlns="http://www.w3.org/2000/svg" style="background:#fef9e7;border-radius:8px;">
        <rect width="500" height="180" fill="#fef9e7" rx="8"/>
        <text x="20" y="30" font-family="'Segoe UI', Arial" font-size="14" fill="#2c3e50" font-weight="bold">PG crescente (q > 1)</text>
        <line x1="40" y1="100" x2="460" y2="100" stroke="#bdc3c7" stroke-width="2"/>
        <!-- Termos com tamanhos proporcionais -->
        <circle cx="70" cy="100" r="15" fill="#27ae60"/><text x="64" y="105" font-family="Arial" font-size="10" fill="white">b₁</text>
        <circle cx="130" cy="100" r="20" fill="#27ae60"/><text x="123" y="105" font-family="Arial" font-size="10" fill="white">b₂</text>
        <circle cx="200" cy="100" r="28" fill="#27ae60"/><text x="191" y="105" font-family="Arial" font-size="10" fill="white">b₃</text>
        <circle cx="290" cy="100" r="38" fill="#27ae60"/><text x="280" y="105" font-family="Arial" font-size="10" fill="white">b₄</text>
        <circle cx="400" cy="100" r="50" fill="#27ae60"/><text x="390" y="105" font-family="Arial" font-size="10" fill="white">…</text>
        <!-- Setas ×q -->
        <path d="M85,70 L115,70" stroke="#c0392b" stroke-width="2" marker-end="url(#arrowQ)"/>
        <text x="92" y="65" font-family="Arial" font-size="10" fill="#c0392b">×q</text>
        <path d="M150,70 L180,70" stroke="#c0392b" stroke-width="2" marker-end="url(#arrowQ)"/>
        <text x="157" y="65" font-family="Arial" font-size="10" fill="#c0392b">×q</text>
        <path d="M228,70 L268,70" stroke="#c0392b" stroke-width="2" marker-end="url(#arrowQ)"/>
        <text x="235" y="65" font-family="Arial" font-size="10" fill="#c0392b">×q</text>
        <defs>
          <marker id="arrowQ" markerWidth="8" markerHeight="8" refX="4" refY="4" orient="auto">
            <path d="M0,0 L8,4 L0,8 Z" fill="#c0392b"/>
          </marker>
        </defs>
        <text x="40" y="150" font-family="'Segoe UI', Arial" font-size="13" fill="#2c3e50">Fórmula: bₙ = b₁ · q<sup>n-1</sup></text>
        <text x="280" y="150" font-family="'Segoe UI', Arial" font-size="12" fill="#555">Exemplo: (2,6,18,54,…) → q=3</text>
      </svg>`
    },
    {
      titulo: "5. Soma dos Termos de uma PG Finita e Infinita",
      conteudo: `
        <p>A soma dos $n$ primeiros termos de uma PG finita é dada por:</p>
        <p style="text-align:center; font-size:1.2em; background:#f0f8ff; padding:10px; border-radius:8px; display:inline-block;">$S_n = \\dfrac{b_1 (q^n - 1)}{q - 1}$ para $q \\neq 1$.</p>
        <p>Se $q=1$, a soma é $S_n = n \\cdot b_1$.</p>
        <p><strong>Exemplo 1:</strong> calcule a soma dos 6 primeiros termos da PG $(2, 4, 8, 16, 32, 64)$: $S_6 = \\dfrac{2(2^6-1)}{2-1} = 2(64-1)=126$.</p>
        <p><strong>PG infinita convergente:</strong> quando $|q| < 1$, a soma de todos os termos da PG infinita é:</p>
        <p style="text-align:center; font-size:1.2em; background:#f0f8ff; padding:10px; border-radius:8px; display:inline-block;">$S_{\\infty} = \\dfrac{b_1}{1 - q}$</p>
        <p><strong>Exemplo 2:</strong> a soma da PG infinita $(1, \\frac{1}{3}, \\frac{1}{9}, \\frac{1}{27}, \\dots)$ é $S_{\\infty} = \\dfrac{1}{1 - \\frac{1}{3}} = \\dfrac{1}{\\frac{2}{3}} = \\frac{3}{2}$.</p>
        <p>Essa fórmula é muito utilizada para converter dízimas periódicas em frações (ex: 0,333… = 1/3).</p>
      `,
      imagem: `<svg viewBox="0 0 500 160" xmlns="http://www.w3.org/2000/svg" style="background:#eaf2f8;border-radius:8px;">
        <rect width="500" height="160" fill="#eaf2f8" rx="8"/>
        <text x="20" y="30" font-family="'Segoe UI', Arial" font-size="14" fill="#2c3e50" font-weight="bold">Soma de PG infinita</text>
        <!-- Barras decrescentes -->
        <rect x="40" y="120" width="30" height="20" fill="#2980b9" rx="3"/>
        <text x="45" y="112" font-family="Arial" font-size="10" fill="#2c3e50">b₁</text>
        <rect x="90" y="125" width="20" height="15" fill="#2980b9" rx="3"/>
        <text x="93" y="118" font-family="Arial" font-size="10" fill="#2c3e50">b₂</text>
        <rect x="130" y="128" width="13" height="12" fill="#2980b9" rx="3"/>
        <text x="132" y="122" font-family="Arial" font-size="10" fill="#2c3e50">b₃</text>
        <rect x="160" y="130" width="8" height="10" fill="#2980b9" rx="3"/>
        <text x="161" y="125" font-family="Arial" font-size="10" fill="#2c3e50">b₄</text>
        <text x="200" y="138" font-family="'Segoe UI', Arial" font-size="14" fill="#2c3e50">+ … = b₁/(1-q)</text>
        <text x="40" y="155" font-family="'Segoe UI', Arial" font-size="11" fill="#555">Converge se |q| < 1</text>
      </svg>`
    },
    {
      titulo: "6. Interpolação de Meios Aritméticos e Geométricos",
      conteudo: `
        <p><strong>Interpolar meios aritméticos</strong> significa inserir termos entre dois números dados de modo que todos formem uma PA. Se temos os extremos $a_1$ e $a_n$ e queremos inserir $k$ meios, então o número total de termos será $n = k+2$. A razão é calculada por $r = \\dfrac{a_n - a_1}{n-1}$.</p>
        <p><strong>Exemplo:</strong> interpolar 5 meios aritméticos entre 3 e 21. Temos $a_1=3$, $a_7=21$, $n=7$. $r = \\dfrac{21-3}{6} = 3$. A PA é $(3, 6, 9, 12, 15, 18, 21)$.</p>
        <p><strong>Interpolar meios geométricos</strong> é análogo, mas os termos formam uma PG. Se temos $b_1$ e $b_n$ e queremos $k$ meios, a razão é $q = \\left( \\dfrac{b_n}{b_1} \\right)^{\\frac{1}{n-1}}$ (considerando termos positivos).</p>
        <p><strong>Exemplo:</strong> interpolar 3 meios geométricos entre 2 e 32. Temos $b_1=2$, $b_5=32$, $n=5$. $q = (32/2)^{1/4} = 16^{1/4} = 2$. A PG é $(2, 4, 8, 16, 32)$.</p>
        <p>Esses conceitos são úteis em problemas de média, escalas e progressões em geral.</p>
      `,
      imagem: `<svg viewBox="0 0 500 140" xmlns="http://www.w3.org/2000/svg" style="background:#f4f9fc;border-radius:8px;">
        <rect width="500" height="140" fill="#f4f9fc" rx="8"/>
        <text x="20" y="30" font-family="'Segoe UI', Arial" font-size="14" fill="#2c3e50" font-weight="bold">Interpolação de meios</text>
        <circle cx="60" cy="70" r="12" fill="#3498db"/><text x="54" y="75" font-family="Arial" font-size="10" fill="white">a₁</text>
        <circle cx="140" cy="70" r="12" fill="#3498db"/><text x="134" y="75" font-family="Arial" font-size="10" fill="white">a₂</text>
        <circle cx="220" cy="70" r="12" fill="#3498db"/><text x="214" y="75" font-family="Arial" font-size="10" fill="white">a₃</text>
        <circle cx="300" cy="70" r="12" fill="#3498db"/><text x="294" y="75" font-family="Arial" font-size="10" fill="white">a₄</text>
        <circle cx="380" cy="70" r="12" fill="#3498db"/><text x="374" y="75" font-family="Arial" font-size="10" fill="white">a₅</text>
        <circle cx="460" cy="70" r="12" fill="#e74c3c"/><text x="454" y="75" font-family="Arial" font-size="10" fill="white">a₆</text>
        <!-- Setas -->
        <line x1="72" y1="90" x2="128" y2="90" stroke="#e67e22" stroke-width="2" marker-end="url(#setaInterp)"/>
        <text x="88" y="105" font-family="Arial" font-size="10" fill="#e67e22">r</text>
        <line x1="152" y1="90" x2="208" y2="90" stroke="#e67e22" stroke-width="2" marker-end="url(#setaInterp)"/>
        <text x="168" y="105" font-family="Arial" font-size="10" fill="#e67e22">r</text>
        <line x1="232" y1="90" x2="288" y2="90" stroke="#e67e22" stroke-width="2" marker-end="url(#setaInterp)"/>
        <text x="248" y="105" font-family="Arial" font-size="10" fill="#e67e22">r</text>
        <line x1="312" y1="90" x2="368" y2="90" stroke="#e67e22" stroke-width="2" marker-end="url(#setaInterp)"/>
        <text x="328" y="105" font-family="Arial" font-size="10" fill="#e67e22">r</text>
        <line x1="392" y1="90" x2="448" y2="90" stroke="#e67e22" stroke-width="2" marker-end="url(#setaInterp)"/>
        <text x="408" y="105" font-family="Arial" font-size="10" fill="#e67e22">r</text>
        <defs>
          <marker id="setaInterp" markerWidth="8" markerHeight="8" refX="4" refY="4" orient="auto">
            <path d="M0,0 L8,4 L0,8 Z" fill="#e67e22"/>
          </marker>
        </defs>
        <text x="20" y="130" font-family="'Segoe UI', Arial" font-size="11" fill="#555">Meios interpolados: a₂, a₃, a₄, a₅</text>
      </svg>`
    }
  ],

  exemplos: [
    {
      titulo: "Exemplo 1 – PA simples: identificando a razão e o termo geral",
      enunciado: "Em uma PA, o 5º termo é 17 e o 10º termo é 37. Qual é o 1º termo e a razão?",
      resolucao: `
        <p><strong>Passo 1:</strong> Usamos a fórmula do termo geral: $a_n = a_1 + (n-1)r$.</p>
        <p>Para $n=5$: $a_5 = a_1 + 4r = 17$.</p>
        <p>Para $n=10$: $a_{10} = a_1 + 9r = 37$.</p>
        <p><strong>Passo 2:</strong> Subtraímos a primeira equação da segunda:</p>
        <p>$(a_1 + 9r) - (a_1 + 4r) = 37 - 17 \\Rightarrow 5r = 20 \\Rightarrow r = 4$.</p>
        <p><strong>Passo 3:</strong> Substituímos $r=4$ em $a_1 + 4r = 17$: $a_1 + 16 = 17 \\Rightarrow a_1 = 1$.</p>
        <p><strong>Resposta:</strong> O primeiro termo é 1 e a razão é 4.</p>
        <p><strong>Verificação:</strong> PA (1, 5, 9, 13, 17, 21, 25, 29, 33, 37).</p>
      `,
      observacao: "Nesse tipo de questão, a diferença entre os termos é proporcional à diferença dos índices. Use sempre a fórmula geral.",
      imagem: `<svg viewBox="0 0 400 120" xmlns="http://www.w3.org/2000/svg" style="background:#f4f9fc;border-radius:8px;">
        <rect width="400" height="120" fill="#f4f9fc" rx="8"/>
        <text x="20" y="30" font-family="'Segoe UI', Arial" font-size="13" fill="#2c3e50">a₅=17, a₁₀=37</text>
        <line x1="40" y1="70" x2="360" y2="70" stroke="#bdc3c7" stroke-width="2"/>
        <circle cx="80" cy="70" r="12" fill="#3498db"/><text x="74" y="75" font-family="Arial" font-size="10" fill="white">a₁</text>
        <circle cx="160" cy="70" r="12" fill="#3498db"/><text x="154" y="75" font-family="Arial" font-size="10" fill="white">a₅</text>
        <circle cx="240" cy="70" r="12" fill="#3498db"/><text x="234" y="75" font-family="Arial" font-size="10" fill="white">a₁₀</text>
        <text x="80" y="100" font-family="'Segoe UI', Arial" font-size="11" fill="#2c3e50">4 passos</text>
        <line x1="172" y1="85" x2="228" y2="85" stroke="#e74c3c" stroke-width="2" marker-end="url(#setaEx1)"/>
        <text x="188" y="105" font-family="Arial" font-size="10" fill="#e74c3c">20</text>
        <defs>
          <marker id="setaEx1" markerWidth="8" markerHeight="8" refX="4" refY="4" orient="auto">
            <path d="M0,0 L8,4 L0,8 Z" fill="#e74c3c"/>
          </marker>
        </defs>
      </svg>`
    },
    {
      titulo: "Exemplo 2 – Soma de PA: aplicação em produção",
      enunciado: "Uma fábrica produz 100 peças no primeiro mês e aumenta a produção em 15 peças por mês. Quantas peças serão produzidas ao longo de 12 meses?",
      resolucao: `
        <p>A produção mensal forma uma PA: $a_1 = 100$, $r = 15$.</p>
        <p>O 12º termo (produção no 12º mês) é: $a_{12} = 100 + 11 \\cdot 15 = 100 + 165 = 265$.</p>
        <p>A soma total em 12 meses é a soma dos 12 primeiros termos:</p>
        <p>$S_{12} = \\dfrac{(a_1 + a_{12}) \\cdot 12}{2} = \\dfrac{(100 + 265) \\cdot 12}{2} = \\dfrac{365 \\cdot 12}{2} = 365 \\cdot 6 = 2190$.</p>
        <p><strong>Resposta:</strong> Serão produzidas 2190 peças ao longo dos 12 meses.</p>
        <p><strong>Interpretação:</strong> a produção cresce linearmente, e a soma total é a área sob a linha de produção.</p>
      `,
      observacao: "Aqui a PA modela um crescimento linear. Em concursos, é comum adaptar esse problema para cenários como venda de produtos, produção, ou até economia de dinheiro.",
      imagem: `<svg viewBox="0 0 400 140" xmlns="http://www.w3.org/2000/svg" style="background:#fef9e7;border-radius:8px;">
        <rect width="400" height="140" fill="#fef9e7" rx="8"/>
        <text x="20" y="30" font-family="'Segoe UI', Arial" font-size="13" fill="#2c3e50">Produção mensal (PA)</text>
        <rect x="40" y="110" width="20" height="10" fill="#e67e22" rx="2"/>
        <text x="35" y="100" font-family="Arial" font-size="8" fill="#2c3e50">m1</text>
        <rect x="80" y="100" width="20" height="20" fill="#e67e22" rx="2"/>
        <text x="75" y="90" font-family="Arial" font-size="8" fill="#2c3e50">m2</text>
        <rect x="120" y="90" width="20" height="30" fill="#e67e22" rx="2"/>
        <text x="115" y="80" font-family="Arial" font-size="8" fill="#2c3e50">m3</text>
        <rect x="160" y="80" width="20" height="40" fill="#e67e22" rx="2"/>
        <text x="155" y="70" font-family="Arial" font-size="8" fill="#2c3e50">…</text>
        <rect x="220" y="20" width="20" height="100" fill="#e74c3c" opacity="0.6" rx="2"/>
        <text x="215" y="15" font-family="Arial" font-size="8" fill="#e74c3c">m12</text>
        <text x="40" y="130" font-family="'Segoe UI', Arial" font-size="11" fill="#2c3e50">Soma = 2190 peças</text>
      </svg>`
    },
    {
      titulo: "Exemplo 3 – PG com aplicação em juros compostos",
      enunciado: "Um investimento de R$ 1000,00 rende 5% ao mês, no regime de juros compostos. Qual o montante após 6 meses? E qual o total de juros ganhos?",
      resolucao: `
        <p>O montante a cada mês forma uma PG com $b_1 = 1000 \\cdot 1,05 = 1050$ (já no primeiro mês), e razão $q = 1,05$.</p>
        <p>O montante após 6 meses é o 6º termo da PG: $b_6 = 1000 \\cdot (1,05)^6$ (usando a forma com $b_1=1000$ e $n=6$).</p>
        <p>Calculando: $(1,05)^6 \\approx 1,3401$. Então $b_6 \\approx 1000 \\times 1,3401 = 1340,10$.</p>
        <p>O total de juros é o montante final menos o capital inicial: $1340,10 - 1000 = 340,10$.</p>
        <p><strong>Resposta:</strong> Montante após 6 meses = R$ 1340,10; juros totais = R$ 340,10.</p>
        <p><strong>Dica:</strong> sempre confira se o período inicial é contado como termo 0 ou termo 1. Em geral, o montante após n períodos é $M = C \\cdot (1+i)^n$.</p>
      `,
      observacao: "Juros compostos são uma aplicação clássica de PG. Cuidado: o primeiro termo pode ser o capital inicial ou o montante após o primeiro período. Prefira sempre usar a fórmula com $b_1$ sendo o montante inicial e $n$ o número de períodos.",
      imagem: `<svg viewBox="0 0 400 150" xmlns="http://www.w3.org/2000/svg" style="background:#eaf2f8;border-radius:8px;">
        <rect width="400" height="150" fill="#eaf2f8" rx="8"/>
        <text x="20" y="30" font-family="'Segoe UI', Arial" font-size="13" fill="#2c3e50">Crescimento exponencial (PG)</text>
        <polyline points="40,130 80,115 120,95 160,70 200,40 240,10" stroke="#27ae60" stroke-width="3" fill="none"/>
        <circle cx="40" cy="130" r="6" fill="#27ae60"/><text x="30" y="145" font-family="Arial" font-size="8" fill="#2c3e50">m0</text>
        <circle cx="80" cy="115" r="6" fill="#27ae60"/><text x="70" y="145" font-family="Arial" font-size="8" fill="#2c3e50">m1</text>
        <circle cx="120" cy="95" r="6" fill="#27ae60"/><text x="110" y="145" font-family="Arial" font-size="8" fill="#2c3e50">m2</text>
        <circle cx="160" cy="70" r="6" fill="#27ae60"/><text x="150" y="145" font-family="Arial" font-size="8" fill="#2c3e50">m3</text>
        <circle cx="200" cy="40" r="6" fill="#27ae60"/><text x="190" y="145" font-family="Arial" font-size="8" fill="#2c3e50">m4</text>
        <circle cx="240" cy="10" r="6" fill="#e74c3c"/><text x="230" y="145" font-family="Arial" font-size="8" fill="#e74c3c">m6</text>
      </svg>`
    },
    {
      titulo: "Exemplo 4 – PG infinita: dízima periódica",
      enunciado: "Calcule a soma da série: $0,333\\ldots$ (dízima periódica) utilizando PG infinita.",
      resolucao: `
        <p>Sabemos que $0,333\\ldots = 0,3 + 0,03 + 0,003 + \\dots$</p>
        <p>Essa é uma PG infinita com $b_1 = 0,3$ e $q = 0,1$ (pois cada termo é o anterior dividido por 10).</p>
        <p>Como $|q| < 1$, a soma é: $S_{\\infty} = \\dfrac{0,3}{1 - 0,1} = \\dfrac{0,3}{0,9} = \\dfrac{1}{3}$.</p>
        <p><strong>Resposta:</strong> A soma é $\\frac{1}{3}$.</p>
        <p><strong>Generalização:</strong> qualquer dízima periódica pode ser convertida em fração usando essa técnica.</p>
      `,
      observacao: "Esse truque é muito útil para converter dízimas periódicas em frações. Também cai em questões de limites e séries.",
      imagem: `<svg viewBox="0 0 400 100" xmlns="http://www.w3.org/2000/svg" style="background:#fef9e7;border-radius:8px;">
        <rect width="400" height="100" fill="#fef9e7" rx="8"/>
        <text x="20" y="30" font-family="'Segoe UI', Arial" font-size="13" fill="#2c3e50">PG infinita: 0,3 + 0,03 + 0,003 + ...</text>
        <text x="20" y="65" font-family="'Segoe UI', Arial" font-size="15" fill="#2c3e50">S = 0,3 / (1 - 0,1) = 1/3</text>
        <rect x="280" y="45" width="40" height="30" fill="#3498db" rx="4"/>
        <text x="290" y="65" font-family="'Segoe UI', Arial" font-size="14" fill="white">1/3</text>
      </svg>`
    },
    {
      titulo: "Exemplo 5 – Interpolação de meios aritméticos",
      enunciado: "Interpole 4 meios aritméticos entre 5 e 25.",
      resolucao: `
        <p>Queremos inserir 4 termos entre 5 e 25, formando uma PA de 6 termos: $a_1=5$, $a_6=25$.</p>
        <p>A razão é $r = \\dfrac{a_6 - a_1}{6-1} = \\dfrac{25-5}{5} = 4$.</p>
        <p>Os termos são: $5, 9, 13, 17, 21, 25$.</p>
        <p><strong>Resposta:</strong> Os meios interpolados são 9, 13, 17, 21.</p>
      `,
      observacao: "Verifique sempre que a diferença entre os extremos é divisível pelo número de intervalos.",
      imagem: `<svg viewBox="0 0 500 100" xmlns="http://www.w3.org/2000/svg" style="background:#f4f9fc;border-radius:8px;">
        <rect width="500" height="100" fill="#f4f9fc" rx="8"/>
        <circle cx="50" cy="50" r="14" fill="#3498db"/><text x="44" y="55" font-family="Arial" font-size="10" fill="white">5</text>
        <circle cx="130" cy="50" r="14" fill="#3498db"/><text x="124" y="55" font-family="Arial" font-size="10" fill="white">9</text>
        <circle cx="210" cy="50" r="14" fill="#3498db"/><text x="204" y="55" font-family="Arial" font-size="10" fill="white">13</text>
        <circle cx="290" cy="50" r="14" fill="#3498db"/><text x="284" y="55" font-family="Arial" font-size="10" fill="white">17</text>
        <circle cx="370" cy="50" r="14" fill="#3498db"/><text x="364" y="55" font-family="Arial" font-size="10" fill="white">21</text>
        <circle cx="450" cy="50" r="14" fill="#e74c3c"/><text x="444" y="55" font-family="Arial" font-size="10" fill="white">25</text>
        <text x="50" y="90" font-family="'Segoe UI', Arial" font-size="11" fill="#555">r = 4</text>
      </svg>`
    }
  ],

  diagramasSVG: [
    `<svg viewBox="0 0 500 220" xmlns="http://www.w3.org/2000/svg" style="background:#f4f9fc;border-radius:10px;">
      <rect width="500" height="220" fill="#f4f9fc" rx="10"/>
      <text x="20" y="30" font-family="'Segoe UI', Arial" font-size="14" fill="#2c3e50" font-weight="bold">Comparação PA × PG</text>
      <!-- PA -->
      <line x1="40" y1="110" x2="460" y2="110" stroke="#bdc3c7" stroke-width="1"/>
      <circle cx="70" cy="110" r="10" fill="#3498db"/><text x="64" y="135" font-family="Arial" font-size="10" fill="#3498db">1</text>
      <circle cx="130" cy="110" r="10" fill="#3498db"/><text x="124" y="135" font-family="Arial" font-size="10" fill="#3498db">2</text>
      <circle cx="190" cy="110" r="10" fill="#3498db"/><text x="184" y="135" font-family="Arial" font-size="10" fill="#3498db">3</text>
      <circle cx="250" cy="110" r="10" fill="#3498db"/><text x="244" y="135" font-family="Arial" font-size="10" fill="#3498db">4</text>
      <circle cx="310" cy="110" r="10" fill="#3498db"/><text x="304" y="135" font-family="Arial" font-size="10" fill="#3498db">5</text>
      <text x="40" y="160" font-family="'Segoe UI', Arial" font-size="12" fill="#2c3e50">PA: linear (soma constante)</text>
      <!-- PG -->
      <circle cx="70" cy="190" r="8" fill="#e67e22"/><text x="64" y="210" font-family="Arial" font-size="10" fill="#e67e22">1</text>
      <circle cx="130" cy="170" r="10" fill="#e67e22"/><text x="124" y="210" font-family="Arial" font-size="10" fill="#e67e22">2</text>
      <circle cx="190" cy="145" r="14" fill="#e67e22"/><text x="183" y="210" font-family="Arial" font-size="10" fill="#e67e22">3</text>
      <circle cx="250" cy="115" r="18" fill="#e67e22"/><text x="243" y="210" font-family="Arial" font-size="10" fill="#e67e22">4</text>
      <circle cx="310" cy="80" r="24" fill="#e67e22"/><text x="303" y="210" font-family="Arial" font-size="10" fill="#e67e22">5</text>
      <text x="40" y="215" font-family="'Segoe UI', Arial" font-size="12" fill="#2c3e50">PG: exponencial (multiplicação constante)</text>
    </svg>`,
    `<svg viewBox="0 0 500 180" xmlns="http://www.w3.org/2000/svg" style="background:#fef9e7;border-radius:10px;">
      <rect width="500" height="180" fill="#fef9e7" rx="10"/>
      <text x="20" y="30" font-family="'Segoe UI', Arial" font-size="14" fill="#2c3e50" font-weight="bold">Soma de PG infinita</text>
      <rect x="40" y="130" width="30" height="20" fill="#2980b9" rx="3"/>
      <text x="35" y="125" font-family="Arial" font-size="10" fill="#2c3e50">b₁</text>
      <rect x="90" y="135" width="20" height="15" fill="#2980b9" rx="3"/>
      <text x="85" y="130" font-family="Arial" font-size="10" fill="#2c3e50">b₂</text>
      <rect x="130" y="138" width="12" height="12" fill="#2980b9" rx="3"/>
      <text x="125" y="134" font-family="Arial" font-size="10" fill="#2c3e50">b₃</text>
      <rect x="160" y="140" width="8" height="10" fill="#2980b9" rx="3"/>
      <text x="155" y="136" font-family="Arial" font-size="10" fill="#2c3e50">b₄</text>
      <text x="200" y="146" font-family="'Segoe UI', Arial" font-size="14" fill="#2c3e50">+ … = b₁/(1-q)</text>
      <text x="40" y="170" font-family="'Segoe UI', Arial" font-size="11" fill="#555">Converge se |q| < 1</text>
      <rect x="330" y="60" width="130" height="90" fill="#f0f8ff" rx="8" stroke="#3498db" stroke-width="2"/>
      <text x="345" y="85" font-family="'Segoe UI', Arial" font-size="12" fill="#2c3e50" font-weight="bold">Exemplo:</text>
      <text x="345" y="105" font-family="'Segoe UI', Arial" font-size="11" fill="#2c3e50">1 + 1/2 + 1/4 + ...</text>
      <text x="345" y="125" font-family="'Segoe UI', Arial" font-size="11" fill="#2c3e50">= 1 / (1 - 1/2) = 2</text>
    </svg>`,
    `<svg viewBox="0 0 500 160" xmlns="http://www.w3.org/2000/svg" style="background:#eaf2f8;border-radius:10px;">
      <rect width="500" height="160" fill="#eaf2f8" rx="10"/>
      <text x="20" y="30" font-family="'Segoe UI', Arial" font-size="14" fill="#2c3e50" font-weight="bold">Interpolação de meios</text>
      <circle cx="60" cy="80" r="15" fill="#3498db"/><text x="54" y="85" font-family="Arial" font-size="10" fill="white">a₁</text>
      <circle cx="140" cy="80" r="15" fill="#3498db"/><text x="134" y="85" font-family="Arial" font-size="10" fill="white">a₂</text>
      <circle cx="220" cy="80" r="15" fill="#3498db"/><text x="214" y="85" font-family="Arial" font-size="10" fill="white">a₃</text>
      <circle cx="300" cy="80" r="15" fill="#3498db"/><text x="294" y="85" font-family="Arial" font-size="10" fill="white">a₄</text>
      <circle cx="380" cy="80" r="15" fill="#3498db"/><text x="374" y="85" font-family="Arial" font-size="10" fill="white">a₅</text>
      <circle cx="460" cy="80" r="15" fill="#e74c3c"/><text x="454" y="85" font-family="Arial" font-size="10" fill="white">a₆</text>
      <text x="60" y="130" font-family="'Segoe UI', Arial" font-size="11" fill="#2c3e50">Meios interpolados: a₂, a₃, a₄, a₅</text>
      <line x1="75" y1="100" x2="125" y2="100" stroke="#e67e22" stroke-width="2" marker-end="url(#setaInterp2)"/>
      <text x="90" y="115" font-family="Arial" font-size="10" fill="#e67e22">r</text>
      <line x1="155" y1="100" x2="205" y2="100" stroke="#e67e22" stroke-width="2" marker-end="url(#setaInterp2)"/>
      <text x="170" y="115" font-family="Arial" font-size="10" fill="#e67e22">r</text>
      <line x1="235" y1="100" x2="285" y2="100" stroke="#e67e22" stroke-width="2" marker-end="url(#setaInterp2)"/>
      <text x="250" y="115" font-family="Arial" font-size="10" fill="#e67e22">r</text>
      <line x1="315" y1="100" x2="365" y2="100" stroke="#e67e22" stroke-width="2" marker-end="url(#setaInterp2)"/>
      <text x="330" y="115" font-family="Arial" font-size="10" fill="#e67e22">r</text>
      <defs>
        <marker id="setaInterp2" markerWidth="8" markerHeight="8" refX="4" refY="4" orient="auto">
          <path d="M0,0 L8,4 L0,8 Z" fill="#e67e22"/>
        </marker>
      </defs>
    </svg>`
  ],

  etapasAprendizagem: [
    {
      tipo: "exercicio",
      titulo: "Etapa 1 – Identificando a razão de uma PA",
      conteudo: "Dada a sequência: (10, 14, 18, 22, ...). Determine a razão e o 20º termo.",
      pergunta: "Qual é o valor do 20º termo?",
      alternativas: ["86", "90", "94", "98", "102"],
      correta: 0,
      explicacaoAcerto: "Parabéns! A razão é 4. O 20º termo: a₂₀ = 10 + 19·4 = 10 + 76 = 86.",
      explicacaoErro: "Cuidado! Lembre-se que a fórmula é aₙ = a₁ + (n-1)·r. Não confunda com n·r. Aqui n=20, então (20-1)=19."
    },
    {
      tipo: "exercicio",
      titulo: "Etapa 2 – Soma de PA",
      conteudo: "Calcule a soma dos 15 primeiros termos da PA: (5, 9, 13, 17, ...).",
      pergunta: "Qual é a soma?",
      alternativas: ["495", "500", "505", "510", "525"],
      correta: 0,
      explicacaoAcerto: "Excelente! A razão é 4, a₁₅ = 5 + 14·4 = 61. S₁₅ = (5+61)·15/2 = 66·7,5 = 495.",
      explicacaoErro: "Verifique se você calculou o último termo corretamente. A soma usa (a₁ + aₙ)·n/2. Não esqueça de dividir por 2."
    },
    {
      tipo: "exercicio",
      titulo: "Etapa 3 – Termo geral da PG",
      conteudo: "Em uma PG, o 1º termo é 3 e a razão é 2. Determine o 10º termo.",
      pergunta: "Qual é o valor de b₁₀?",
      alternativas: ["512", "1024", "1536", "2048", "3072"],
      correta: 2,
      explicacaoAcerto: "Correto! b₁₀ = 3 · 2^(10-1) = 3 · 512 = 1536.",
      explicacaoErro: "Lembre-se: bₙ = b₁ · q^(n-1). Aqui q=2, n=10, então 2^9 = 512, multiplicado por 3 = 1536."
    },
    {
      tipo: "exercicio",
      titulo: "Etapa 4 – Soma de PG finita",
      conteudo: "Calcule a soma dos 6 primeiros termos da PG (2, 4, 8, 16, 32, 64).",
      pergunta: "Qual é a soma?",
      alternativas: ["126", "128", "130", "132", "136"],
      correta: 0,
      explicacaoAcerto: "S₆ = 2(2⁶-1)/(2-1) = 2(64-1) = 126.",
      explicacaoErro: "Use a fórmula Sₙ = b₁(qⁿ-1)/(q-1)."
    },
    {
      tipo: "exercicio",
      titulo: "Etapa 5 – PG infinita",
      conteudo: "Calcule a soma da PG infinita: (1, 1/2, 1/4, 1/8, ...).",
      pergunta: "Qual é o valor da soma?",
      alternativas: ["1", "2", "3", "4", "5"],
      correta: 1,
      explicacaoAcerto: "S∞ = 1/(1 - 1/2) = 2.",
      explicacaoErro: "Lembre-se: S∞ = b₁/(1-q)."
    },
    {
      tipo: "questao",
      titulo: "Questão estilo CESGRANRIO 1",
      conteudo: "(CESGRANRIO – adaptada) Em uma PA, a soma do 3º com o 7º termo é 30, e a soma do 5º com o 9º termo é 50. Qual é a razão dessa PA?",
      pergunta: "Qual é o valor da razão?",
      alternativas: ["2", "3", "4", "5", "6"],
      correta: 3,
      explicacaoAcerto: "Resolução: (a₃ + a₇) = (a₁+2r)+(a₁+6r)=2a₁+8r=30. (a₅+a₉)=(a₁+4r)+(a₁+8r)=2a₁+12r=50. Subtraindo: 4r = 20 ⇒ r=5.",
      explicacaoErro: "Cuidado com a soma dos termos: a₃ = a₁+2r, a₇=a₁+6r. A diferença entre as equações deve ser 4r, não 2r."
    },
    {
      tipo: "questao",
      titulo: "Questão estilo CESGRANRIO 2",
      conteudo: "(CESGRANRIO) Uma sequência é tal que a₁ = 2 e aₙ = aₙ₋₁ + 3 para n≥2. Qual é a soma dos 20 primeiros termos?",
      pergunta: "Qual é a soma?",
      alternativas: ["580", "590", "610", "630", "650"],
      correta: 2,
      explicacaoAcerto: "Trata-se de uma PA com a₁=2, r=3. a₂₀ = 2 + 19·3 = 59. S₂₀ = (2+59)·20/2 = 61·10 = 610.",
      explicacaoErro: "A fórmula da soma é (a₁+aₙ)·n/2. Confira os valores: a₁=2, n=20, a₂₀=59. S= (61*20)/2=610."
    },
    {
      tipo: "questao",
      titulo: "Questão estilo CESGRANRIO 3",
      conteudo: "(CESGRANRIO) O número de bactérias em uma cultura dobra a cada hora. Se inicialmente há 100 bactérias, quantas haverá após 5 horas?",
      pergunta: "Qual é o total de bactérias após 5 horas?",
      alternativas: ["1600", "3200", "6400", "12800", "25600"],
      correta: 1,
      explicacaoAcerto: "A população forma uma PG com b₁=100, q=2. Após 5 horas (n=5, considerando hora 0 como b₁? Cuidado: se no início são 100, após 1 hora são 200, então b₁ (após 0h) = 100. Após 5h, n=6? Mas o problema diz 'após 5 horas', então podemos considerar o termo b₆ = 100·2^5 = 100·32 = 3200.",
      explicacaoErro: "Atenção: após 5 horas significa 5 períodos de dobra a partir do instante inicial. Se inicial é t=0, então t=5 corresponde a 5 dobras, então 100*2^5 = 3200. Não confunda com o termo de ordem 5 (que seria após 4 dobras)."
    },
    {
      tipo: "questao",
      titulo: "Questão estilo CESGRANRIO 4",
      conteudo: "(CESGRANRIO) Em uma PG, o 2º termo é 6 e o 5º termo é 48. Qual é a razão?",
      pergunta: "Qual é a razão?",
      alternativas: ["2", "3", "4", "6", "8"],
      correta: 0,
      explicacaoAcerto: "Temos b₂ = b₁·q = 6 e b₅ = b₁·q⁴ = 48. Dividindo: q³ = 48/6 = 8 ⇒ q = 2.",
      explicacaoErro: "Cuidado: b₅ / b₂ = q³, e não q². A diferença de índices é 3."
    }
  ],

  questoes: [
    {
      dificuldade: "Fácil",
      pergunta: "Qual é a razão da PA (2, 5, 8, 11, ...)?",
      alternativas: ["2", "3", "4", "5", "6"],
      correta: 1,
      explicacaoAcerto: "A razão é a diferença entre quaisquer dois termos consecutivos: 5-2 = 3.",
      explicacaoErro: "Cuidado: razão de PA é subtração, não divisão."
    },
    {
      dificuldade: "Fácil",
      pergunta: "Qual é o 6º termo da PA (1, 4, 7, 10, ...)?",
      alternativas: ["13", "14", "15", "16", "19"],
      correta: 3,
      explicacaoAcerto: "a₁=1, r=3. a₆ = 1 + 5·3 = 16.",
      explicacaoErro: "Não esqueça de multiplicar (n-1) pela razão. Para n=6, (6-1)=5."
    },
    {
      dificuldade: "Fácil",
      pergunta: "A soma dos 10 primeiros termos da PA (2, 5, 8, ...) é?",
      alternativas: ["145", "155", "165", "175", "185"],
      correta: 1,
      explicacaoAcerto: "a₁=2, r=3, a₁₀=2+9·3=29. S₁₀ = (2+29)·10/2 = 31·5 = 155.",
      explicacaoErro: "Confira os cálculos: a₁₀ = 2 + 9*3 = 29, soma = (2+29)*10/2 = 155."
    },
    {
      dificuldade: "Fácil",
      pergunta: "Qual é o termo geral da PA (7, 11, 15, 19, ...)?",
      alternativas: ["aₙ = 3n + 4", "aₙ = 4n + 3", "aₙ = 4n + 7", "aₙ = 3n + 7", "aₙ = 4n - 1"],
      correta: 1,
      explicacaoAcerto: "a₁=7, r=4. aₙ = 7 + (n-1)·4 = 7 + 4n - 4 = 4n + 3.",
      explicacaoErro: "Lembre-se que a fórmula geral é a₁ + (n-1)r. Substitua corretamente."
    },
    {
      dificuldade: "Médio",
      pergunta: "Em uma PA, a₃ = 10 e a₇ = 26. Qual é a razão?",
      alternativas: ["4", "5", "6", "7", "8"],
      correta: 0,
      explicacaoAcerto: "a₇ - a₃ = 4r ⇒ 26 - 10 = 16 ⇒ 4r = 16 ⇒ r = 4.",
      explicacaoErro: "A diferença entre os termos é igual a (7-3)r = 4r. Não divida por 2."
    },
    {
      dificuldade: "Médio",
      pergunta: "Quantos termos tem a PA (3, 7, 11, ..., 79)?",
      alternativas: ["18", "19", "20", "21", "22"],
      correta: 2,
      explicacaoAcerto: "a₁=3, r=4, aₙ=79. 79 = 3 + (n-1)·4 ⇒ 76 = 4(n-1) ⇒ n-1=19 ⇒ n=20.",
      explicacaoErro: "Cuidado com a equação: 79-3 = 76, dividido por 4 dá 19, então n = 20."
    },
    {
      dificuldade: "Médio",
      pergunta: "A soma dos termos de uma PA finita é 420, o primeiro termo é 5 e o último é 37. Quantos termos tem essa PA?",
      alternativas: ["15", "18", "20", "21", "24"],
      correta: 2,
      explicacaoAcerto: "S = (a₁ + aₙ)n/2 ⇒ 420 = (5+37)n/2 ⇒ 420 = 42n/2 ⇒ 420 = 21n ⇒ n = 20.",
      explicacaoErro: "Verifique a fórmula: S = (a₁+aₙ)*n/2. Substitua e resolva para n."
    },
    {
      dificuldade: "Médio",
      pergunta: "Qual é a soma dos 8 primeiros termos da PG (2, 6, 18, 54, ...)?",
      alternativas: ["4374", "6560", "6561", "6562", "13122"],
      correta: 1,
      explicacaoAcerto: "b₁=2, q=3. S₈ = 2(3⁸ - 1)/(3-1) = 2(6561-1)/2 = 6560.",
      explicacaoErro: "A fórmula da soma da PG finita: b₁(qⁿ - 1)/(q - 1). Aqui q=3, n=8."
    },
    {
      dificuldade: "Médio",
      pergunta: "Em uma PG, b₃ = 24 e b₆ = 192. Qual é a razão?",
      alternativas: ["2", "3", "4", "6", "8"],
      correta: 0,
      explicacaoAcerto: "b₆ / b₃ = q³ ⇒ 192/24 = 8 ⇒ q³ = 8 ⇒ q = 2.",
      explicacaoErro: "A diferença de índices é 3, então a razão é a raiz cúbica da divisão."
    },
    {
      dificuldade: "Médio",
      pergunta: "Calcule a soma da PG infinita: (1, 1/3, 1/9, 1/27, ...).",
      alternativas: ["1/2", "2/3", "1", "3/2", "2"],
      correta: 3,
      explicacaoAcerto: "b₁=1, q=1/3. S∞ = 1/(1 - 1/3) = 1/(2/3) = 3/2 = 1,5.",
      explicacaoErro: "Para PG infinita com |q|<1, a soma é b₁/(1-q)."
    },
    {
      dificuldade: "Difícil",
      pergunta: "Interpole 5 meios aritméticos entre 2 e 32.",
      alternativas: ["(7, 12, 17, 22, 27)", "(6, 10, 14, 18, 22)", "(8, 14, 20, 26, 32)", "(5, 9, 13, 17, 21)", "(4, 8, 12, 16, 20)"],
      correta: 0,
      explicacaoAcerto: "Inserir 5 termos entre 2 e 32 resulta em uma PA com 7 termos: a₁=2, a₇=32. r = (32-2)/6 = 5. Termos: 2, 7, 12, 17, 22, 27, 32.",
      explicacaoErro: "O número de intervalos é 6 (5 meios + 1). A razão é (32-2)/6."
    },
    {
      dificuldade: "Difícil",
      pergunta: "Interpole 4 meios geométricos entre 2 e 64 (termos positivos).",
      alternativas: ["(4, 8, 16, 32)", "(3, 9, 27, 81)", "(4, 12, 36, 108)", "(2, 4, 8, 16)", "(6, 12, 24, 48)"],
      correta: 0,
      explicacaoAcerto: "Inserir 4 meios entre 2 e 64: PG com 6 termos, b₁=2, b₆=64. q = (64/2)^(1/5) = 32^(1/5)=2. Termos: 2, 4, 8, 16, 32, 64.",
      explicacaoErro: "A razão é a raiz quinta de 32, que é 2."
    },
    {
      dificuldade: "Difícil",
      pergunta: "A soma dos termos de uma PG infinita é 12 e a razão é 1/3. Qual é o primeiro termo?",
      alternativas: ["4", "6", "8", "9", "12"],
      correta: 2,
      explicacaoAcerto: "S∞ = b₁/(1-q) ⇒ 12 = b₁/(1-1/3) = b₁/(2/3) ⇒ b₁ = 12 * 2/3 = 8.",
      explicacaoErro: "Isolar b₁."
    },
    {
      dificuldade: "Difícil",
      pergunta: "Em uma PA, a soma do 2º com o 5º termo é 28, e a soma do 3º com o 6º é 34. Qual é a razão?",
      alternativas: ["2", "3", "4", "5", "6"],
      correta: 1,
      explicacaoAcerto: "(a₂+a₅) = (a₁+r)+(a₁+4r)=2a₁+5r=28. (a₃+a₆)=(a₁+2r)+(a₁+5r)=2a₁+7r=34. Subtraindo: 2r=6 ⇒ r=3.",
      explicacaoErro: "Cuidado com os índices."
    },
    {
      dificuldade: "Difícil",
      pergunta: "O número de termos de uma PA é ímpar. A soma dos termos de ordem ímpar é 75 e a soma dos de ordem par é 60. Qual é o termo central?",
      alternativas: ["10", "12", "15", "18", "20"],
      correta: 2,
      explicacaoAcerto: "Em PA com n ímpar, a soma dos termos de ordem ímpar menos a soma dos de ordem par é igual ao termo central. Então termo central = 75 - 60 = 15.",
      explicacaoErro: "Essa propriedade é válida para PA com número ímpar de termos."
    },
    {
      dificuldade: "Médio",
      pergunta: "Qual é o 5º termo da PA ( -3, -1, 1, 3, ...)?",
      alternativas: ["5", "6", "7", "8", "9"],
      correta: 0,
      explicacaoAcerto: "a₁=-3, r=2, a₅ = -3 + 4·2 = 5.",
      explicacaoErro: "Cuidado com sinais."
    },
    {
      dificuldade: "Médio",
      pergunta: "A soma dos 20 primeiros termos da PA (1, 3, 5, 7, ...) é?",
      alternativas: ["380", "400", "420", "440", "460"],
      correta: 1,
      explicacaoAcerto: "a₁=1, r=2, a₂₀ = 1+19·2=39. S₂₀ = (1+39)·20/2 = 40·10 = 400.",
      explicacaoErro: "Fórmula da soma."
    },
    {
      dificuldade: "Médio",
      pergunta: "Em uma PG, b₁ = 5 e q = 3. Qual é o 4º termo?",
      alternativas: ["45", "135", "405", "1215", "3645"],
      correta: 1,
      explicacaoAcerto: "b₄ = 5·3³ = 5·27 = 135.",
      explicacaoErro: "Expoente é n-1."
    },
    {
      dificuldade: "Médio",
      pergunta: "A soma dos 5 primeiros termos da PG (2, -4, 8, -16, 32) é?",
      alternativas: ["22", "20", "18", "16", "14"],
      correta: 0,
      explicacaoAcerto: "b₁=2, q=-2, S₅ = 2((-2)^5 -1)/(-2-1) = 2(-32-1)/(-3) = 2(-33)/(-3) = 22.",
      explicacaoErro: "A fórmula funciona com q negativo também."
    },
    {
      dificuldade: "Difícil",
      pergunta: "A sequência (aₙ) é tal que a₁ = 1 e aₙ = aₙ₋₁ + n, para n≥2. Qual é o valor de a₁₀?",
      alternativas: ["45", "55", "60", "66", "78"],
      correta: 1,
      explicacaoAcerto: "aₙ = 1 + ∑_{k=2}^{n} k = 1 + (n(n+1)/2 -1) = n(n+1)/2. Para n=10, a₁₀ = 10·11/2 = 55.",
      explicacaoErro: "A soma dos inteiros de 2 a n."
    },
    {
      dificuldade: "Difícil",
      pergunta: "Em uma PA, a soma dos 6 primeiros termos é 54 e a soma dos 10 primeiros é 130. Qual é a razão?",
      alternativas: ["2", "3", "4", "5", "6"],
      correta: 0,
      explicacaoAcerto: "S₆ = (2a₁ + 5r)·6/2 = 3(2a₁+5r)=54 ⇒ 2a₁+5r=18. S₁₀ = (2a₁+9r)·10/2 = 5(2a₁+9r)=130 ⇒ 2a₁+9r=26. Subtraindo: 4r = 8 ⇒ r=2.",
      explicacaoErro: "Use a fórmula Sₙ = n/2 (2a₁ + (n-1)r). Monte o sistema."
    }
  ],

  avaliacaoFinal: {
    quantidade: 20,
    questoes: [
      {
        dificuldade: "Médio",
        pergunta: "Qual é a razão da PA (8, 12, 16, 20, ...)?",
        alternativas: ["3", "4", "5", "6", "8"],
        correta: 1,
        explicacaoAcerto: "A razão é 12-8 = 4.",
        explicacaoErro: "Razão de PA é a diferença constante."
      },
      {
        dificuldade: "Médio",
        pergunta: "Calcule o 12º termo da PA (3, 6, 9, 12, ...).",
        alternativas: ["33", "36", "39", "42", "45"],
        correta: 1,
        explicacaoAcerto: "a₁=3, r=3, a₁₂ = 3 + 11·3 = 36.",
        explicacaoErro: "Use a fórmula aₙ = a₁ + (n-1)r."
      },
      {
        dificuldade: "Médio",
        pergunta: "A soma dos 8 primeiros termos da PA (2, 5, 8, 11, ...) é?",
        alternativas: ["96", "100", "104", "108", "112"],
        correta: 1,
        explicacaoAcerto: "a₁=2, r=3, a₈ = 2+7·3=23, S₈ = (2+23)·8/2 = 25·4 = 100.",
        explicacaoErro: "Soma = (a₁+aₙ)n/2."
      },
      {
        dificuldade: "Médio",
        pergunta: "Em uma PA, a₄ = 12 e a₉ = 27. Qual é a razão?",
        alternativas: ["3", "4", "5", "6", "7"],
        correta: 0,
        explicacaoAcerto: "a₉ - a₄ = 5r ⇒ 27-12=15 ⇒ 5r=15 ⇒ r=3.",
        explicacaoErro: "A diferença de índices é 5."
      },
      {
        dificuldade: "Médio",
        pergunta: "Quantos termos tem a PA (5, 9, 13, ..., 49)?",
        alternativas: ["11", "12", "13", "14", "15"],
        correta: 1,
        explicacaoAcerto: "a₁=5, r=4, aₙ=49 ⇒ 49=5+(n-1)4 ⇒ 44=4(n-1) ⇒ n-1=11 ⇒ n=12.",
        explicacaoErro: "Resolva a equação corretamente."
      },
      {
        dificuldade: "Médio",
        pergunta: "A soma dos termos de uma PA finita é 210, o primeiro termo é 6 e o último é 36. Quantos termos tem a PA?",
        alternativas: ["8", "10", "12", "14", "16"],
        correta: 1,
        explicacaoAcerto: "S = (6+36)n/2 = 210 ⇒ 42n/2 = 210 ⇒ 21n = 210 ⇒ n=10.",
        explicacaoErro: "Use a fórmula da soma."
      },
      {
        dificuldade: "Médio",
        pergunta: "Qual é o 8º termo da PG (3, 6, 12, 24, ...)?",
        alternativas: ["192", "384", "576", "768", "1536"],
        correta: 1,
        explicacaoAcerto: "b₁=3, q=2, b₈ = 3·2⁷ = 3·128 = 384.",
        explicacaoErro: "bₙ = b₁·q^(n-1)."
      },
      {
        dificuldade: "Médio",
        pergunta: "A soma dos 6 primeiros termos da PG (2, 4, 8, 16, ...) é?",
        alternativas: ["62", "64", "126", "128", "254"],
        correta: 2,
        explicacaoAcerto: "b₁=2, q=2, S₆ = 2(2⁶-1)/(2-1) = 2(64-1)=126.",
        explicacaoErro: "Fórmula da soma: b₁(qⁿ-1)/(q-1)."
      },
      {
        dificuldade: "Médio",
        pergunta: "Em uma PG, b₂ = 6 e b₄ = 24. Qual é o primeiro termo?",
        alternativas: ["1", "2", "3", "4", "6"],
        correta: 2,
        explicacaoAcerto: "b₄ / b₂ = q² ⇒ 24/6=4 ⇒ q²=4 ⇒ q=2 (ou -2, mas com termos positivos, q=2). Então b₂ = b₁·2 = 6 ⇒ b₁=3.",
        explicacaoErro: "Use a relação entre termos."
      },
      {
        dificuldade: "Médio",
        pergunta: "Calcule a soma da PG infinita: (4, 2, 1, 1/2, ...).",
        alternativas: ["4", "6", "8", "10", "12"],
        correta: 2,
        explicacaoAcerto: "b₁=4, q=1/2. S∞ = 4/(1-1/2) = 4/(1/2)=8.",
        explicacaoErro: "S∞ = b₁/(1-q)."
      },
      {
        dificuldade: "Difícil",
        pergunta: "Interpole 5 meios aritméticos entre 2 e 32.",
        alternativas: ["(7, 12, 17, 22, 27)", "(6, 10, 14, 18, 22)", "(8, 14, 20, 26, 32)", "(5, 9, 13, 17, 21)", "(4, 8, 12, 16, 20)"],
        correta: 0,
        explicacaoAcerto: "Inserir 5 termos entre 2 e 32 resulta em uma PA com 7 termos: a₁=2, a₇=32. r = (32-2)/6 = 5. Termos: 2, 7, 12, 17, 22, 27, 32.",
        explicacaoErro: "O número de intervalos é 6 (5 meios + 1). A razão é (32-2)/6."
      },
      {
        dificuldade: "Difícil",
        pergunta: "Interpole 4 meios geométricos entre 2 e 64 (termos positivos).",
        alternativas: ["(4, 8, 16, 32)", "(3, 9, 27, 81)", "(4, 12, 36, 108)", "(2, 4, 8, 16)", "(6, 12, 24, 48)"],
        correta: 0,
        explicacaoAcerto: "Inserir 4 meios entre 2 e 64: PG com 6 termos, b₁=2, b₆=64. q = (64/2)^(1/5) = 32^(1/5)=2. Termos: 2, 4, 8, 16, 32, 64.",
        explicacaoErro: "A razão é a raiz quinta de 32, que é 2."
      },
      {
        dificuldade: "Difícil",
        pergunta: "A soma dos termos de uma PG infinita é 12 e a razão é 1/3. Qual é o primeiro termo?",
        alternativas: ["4", "6", "8", "9", "12"],
        correta: 2,
        explicacaoAcerto: "S∞ = b₁/(1-q) ⇒ 12 = b₁/(1-1/3) = b₁/(2/3) ⇒ b₁ = 12 * 2/3 = 8.",
        explicacaoErro: "Isolar b₁."
      },
      {
        dificuldade: "Difícil",
        pergunta: "Em uma PA, a soma do 2º com o 5º termo é 28, e a soma do 3º com o 6º é 34. Qual é a razão?",
        alternativas: ["2", "3", "4", "5", "6"],
        correta: 1,
        explicacaoAcerto: "(a₂+a₅) = (a₁+r)+(a₁+4r)=2a₁+5r=28. (a₃+a₆)=(a₁+2r)+(a₁+5r)=2a₁+7r=34. Subtraindo: 2r=6 ⇒ r=3.",
        explicacaoErro: "Cuidado com os índices."
      },
      {
        dificuldade: "Difícil",
        pergunta: "O número de termos de uma PA é ímpar. A soma dos termos de ordem ímpar é 75 e a soma dos de ordem par é 60. Qual é o termo central?",
        alternativas: ["10", "12", "15", "18", "20"],
        correta: 2,
        explicacaoAcerto: "Em PA com n ímpar, a soma dos termos de ordem ímpar menos a soma dos de ordem par é igual ao termo central. Então termo central = 75 - 60 = 15.",
        explicacaoErro: "Essa propriedade é válida para PA com número ímpar de termos."
      },
      {
        dificuldade: "Médio",
        pergunta: "Qual é o 5º termo da PA ( -3, -1, 1, 3, ...)?",
        alternativas: ["5", "6", "7", "8", "9"],
        correta: 0,
        explicacaoAcerto: "a₁=-3, r=2, a₅ = -3 + 4·2 = 5.",
        explicacaoErro: "Cuidado com sinais."
      },
      {
        dificuldade: "Médio",
        pergunta: "A soma dos 20 primeiros termos da PA (1, 3, 5, 7, ...) é?",
        alternativas: ["380", "400", "420", "440", "460"],
        correta: 1,
        explicacaoAcerto: "a₁=1, r=2, a₂₀ = 1+19·2=39. S₂₀ = (1+39)·20/2 = 40·10 = 400.",
        explicacaoErro: "Fórmula da soma."
      },
      {
        dificuldade: "Médio",
        pergunta: "Em uma PG, b₁ = 5 e q = 3. Qual é o 4º termo?",
        alternativas: ["45", "135", "405", "1215", "3645"],
        correta: 1,
        explicacaoAcerto: "b₄ = 5·3³ = 5·27 = 135.",
        explicacaoErro: "Expoente é n-1."
      },
      {
        dificuldade: "Médio",
        pergunta: "A soma dos 5 primeiros termos da PG (2, -4, 8, -16, 32) é?",
        alternativas: ["22", "20", "18", "16", "14"],
        correta: 0,
        explicacaoAcerto: "b₁=2, q=-2, S₅ = 2((-2)^5 -1)/(-2-1) = 2(-32-1)/(-3) = 2(-33)/(-3) = 22.",
        explicacaoErro: "A fórmula funciona com q negativo também."
      },
      {
        dificuldade: "Difícil",
        pergunta: "A sequência (aₙ) é tal que a₁ = 1 e aₙ = aₙ₋₁ + n, para n≥2. Qual é o valor de a₁₀?",
        alternativas: ["45", "55", "60", "66", "78"],
        correta: 1,
        explicacaoAcerto: "aₙ = 1 + ∑_{k=2}^{n} k = 1 + (n(n+1)/2 -1) = n(n+1)/2. Para n=10, a₁₀ = 10·11/2 = 55.",
        explicacaoErro: "A soma dos inteiros de 2 a n."
      }
    ],
    percentualAprovacao: 80
  },

  criterioConclusao: {
    minimoAcertos: 80,
    tempoEstimado: "4h"
  }
};
