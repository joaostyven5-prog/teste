export const modulo = {
  id: "razoes-proporcoes",
  nome: "Razões, Proporções e Regra de Três",
  disciplina: "Matemática",
  nivel: "Básico",
  ordem: 2,

  introducao: {
    titulo: "Introdução ao Mundo das Razões e Proporções",
    descricao: `
      <p>Se você já ajustou uma receita culinária, calculou a velocidade média de uma viagem, interpretou um mapa ou analisou um gráfico financeiro, você já utilizou razões e proporções — mesmo sem perceber. Esses conceitos são a espinha dorsal da matemática aplicada ao cotidiano e, por isso, são recorrentes em concursos públicos, especialmente no Banco do Brasil (CESGRANRIO).</p>
      <p>Uma <strong>razão</strong> nada mais é do que uma comparação entre duas grandezas, expressa como uma divisão. Já uma <strong>proporção</strong> é a igualdade entre duas razões, e ela nos permite resolver problemas que envolvem relações de dependência entre variáveis. A <strong>regra de três</strong>, seja simples ou composta, é a ferramenta prática que emerge desse raciocínio proporcional.</p>
      <p>Neste módulo, você vai dominar desde a interpretação de razões até a resolução de problemas complexos com porcentagens, juros simples, misturas e divisão proporcional. Cada tópico é apresentado com teoria clara, exemplos detalhados e exercícios no estilo CESGRANRIO, para que você desenvolva não apenas a habilidade de calcular, mas também a intuição matemática necessária para acertar as questões da prova.</p>
      <p>Prepare-se para encarar problemas que envolvem escalas em mapas, taxas de juros, índices de inflação, velocidade média, consumo de combustível, e muito mais. Ao final, você estará apto a resolver qualquer questão de razão, proporção e regra de três com confiança e agilidade.</p>
      <p>Vamos começar? Acompanhe cada seção, faça os exercícios propostos e, acima de tudo, entenda a lógica por trás de cada operação. A matemática de concursos não é um bicho de sete cabeças; é uma ferramenta poderosa que está ao seu alcance.</p>
      <p>Além disso, as bancas como a CESGRANRIO costumam cobrar esses tópicos de forma integrada: por exemplo, uma questão pode envolver escala em um mapa (razão), depois calcular a área real (proporção) e, em seguida, aplicar um percentual de aumento no valor do terreno. Por isso, treine a leitura atenta e a capacidade de traduzir o enunciado em equações matemáticas simples.</p>
    `,
    imagem: `
      <svg viewBox="0 0 600 280" xmlns="http://www.w3.org/2000/svg">
        <rect x="0" y="0" width="600" height="280" fill="#f8fafc" rx="10"/>
        <text x="30" y="40" fill="#1e293b" font-size="20" font-weight="bold">Proporções no cotidiano</text>
        <!-- Receita -->
        <rect x="30" y="60" width="120" height="80" fill="#f59e0b" rx="5"/>
        <text x="50" y="90" fill="#fff" font-size="14" font-weight="bold">Receita</text>
        <text x="50" y="110" fill="#fff" font-size="12">2 xícaras de farinha</text>
        <text x="50" y="130" fill="#fff" font-size="12">1 xícara de açúcar</text>
        <!-- Mapa -->
        <rect x="190" y="60" width="120" height="80" fill="#10b981" rx="5"/>
        <text x="210" y="90" fill="#fff" font-size="14" font-weight="bold">Mapa</text>
        <text x="210" y="110" fill="#fff" font-size="12">Escala 1:100000</text>
        <text x="210" y="130" fill="#fff" font-size="12">5 cm → 5 km</text>
        <!-- Finanças -->
        <rect x="350" y="60" width="120" height="80" fill="#6366f1" rx="5"/>
        <text x="370" y="90" fill="#fff" font-size="14" font-weight="bold">Finanças</text>
        <text x="370" y="110" fill="#fff" font-size="12">Juros 10% a.m.</text>
        <text x="370" y="130" fill="#fff" font-size="12">Montante = C·(1+in)</text>
        <!-- Seta ligando -->
        <line x1="150" y1="100" x2="185" y2="100" stroke="#94a3b8" stroke-width="2" marker-end="url(#arrow)"/>
        <line x1="310" y1="100" x2="345" y2="100" stroke="#94a3b8" stroke-width="2" marker-end="url(#arrow)"/>
        <text x="30" y="175" fill="#475569" font-size="14">Razão farinha:açúcar = 2:1 (dobrando: 4:2)</text>
        <text x="30" y="195" fill="#475569" font-size="14">Distância real = medida no mapa × denominador da escala</text>
        <text x="30" y="215" fill="#475569" font-size="14">Juros simples: J = C·i·t; Montante M = C + J</text>
        <text x="30" y="240" fill="#475569" font-size="14">Dica CESGRANRIO: Fique atento às unidades de tempo e taxa!</text>
        <defs>
          <marker id="arrow" markerWidth="10" markerHeight="7" refX="10" refY="3.5" orient="auto">
            <polygon points="0 0, 10 3.5, 0 7" fill="#94a3b8"/>
          </marker>
        </defs>
      </svg>
    `
  },

  objetivos: [
    "Compreender o conceito de razão e suas representações (fracionária, decimal, percentual e notação a:b).",
    "Reconhecer e aplicar a propriedade fundamental das proporções (produto dos meios = produto dos extremos).",
    "Identificar grandezas direta e inversamente proporcionais em contextos variados.",
    "Resolver problemas de divisão proporcional (direta, inversa e composta) com segurança.",
    "Dominar a regra de três simples e composta, montando corretamente as relações entre as grandezas.",
    "Calcular porcentagens, aumentos e descontos percentuais, incluindo operações sucessivas.",
    "Aplicar juros simples e compreender sua relação com proporções e porcentagens.",
    "Resolver problemas de misturas e concentrações utilizando razões e proporções.",
    "Aplicar todos esses conceitos em questões do estilo CESGRANRIO, com alto nível de interpretação.",
    "Desenvolver a habilidade de converter unidades em problemas de escala e velocidade.",
    "Interpretar gráficos e tabelas que envolvem índices percentuais e taxas de crescimento."
  ],

  teoria: [
    {
      titulo: "1. Razão – Comparando Quantidades",
      conteudo: `
        <p>Uma <strong>razão</strong> é uma comparação entre duas grandezas, expressa pela divisão de uma pela outra. Se temos duas quantidades A e B, a razão entre elas é dada por A/B ou A:B (lê-se "A está para B"). A razão indica quantas vezes uma quantidade contém a outra, ou qual fração uma representa da outra.</p>
        <p><strong>Representações:</strong> A razão pode ser escrita como fração (3/5), decimal (0,6), percentual (60%) ou na forma a:b (3:5).</p>
        <p><strong>Leitura:</strong> "3 para 5" significa que para cada 3 unidades de A, temos 5 de B.</p>
        <p><strong>Razões equivalentes:</strong> Multiplicando ou dividindo ambos os termos da razão por um mesmo número (diferente de zero), obtemos uma razão equivalente. Ex: 2:3 = 4:6 = 6:9.</p>
        <p><strong>Simplificação:</strong> Para simplificar uma razão, dividimos ambos os termos pelo máximo divisor comum (MDC). Ex: 12:18 → dividindo por 6 → 2:3.</p>
        <p><strong>Comparação entre razões:</strong> Para comparar duas razões, basta comparar seus valores decimais ou frações equivalentes.</p>
        <p><strong>Razão inversa:</strong> A inversa de a:b é b:a.</p>
        <p><strong>Escalas:</strong> Muito usadas em mapas e plantas, a escala é uma razão entre a medida no desenho e a medida real. Ex: escala 1:100 significa que 1 cm no desenho corresponde a 100 cm na realidade.</p>
        <p><strong>Razões entre grandezas de unidades diferentes:</strong> Exemplos: velocidade média (km/h), densidade demográfica (hab/km²), consumo (km/L). Nessas razões, as unidades devem ser mantidas.</p>
        <h4>Dicas para concursos CESGRANRIO</h4>
        <ul>
          <li>Fique atento à ordem solicitada: "razão de homens para mulheres" é H/M, já "razão de mulheres para o total" é M/(H+M).</li>
          <li>Em questões de escala, lembre-se: 1 km = 100.000 cm. Erros de conversão são a principal causa de perda de pontos.</li>
          <li>Razões equivalentes são úteis para simplificar cálculos: se a razão é 18:24, simplifique para 3:4 antes de operar.</li>
          <li>Quando a razão for entre quantidades com unidades diferentes, o resultado é uma grandeza derivada (ex: km/h). Não simplifique as unidades de forma incorreta.</li>
        </ul>
        <h4>Erro comum</h4>
        <p>Inverter a ordem da razão. Por exemplo, se a questão pede "razão entre o número de meninas e o número de meninos", e há 12 meninas e 8 meninos, a razão é 12/8 = 3/2, e não 2/3. Sempre leia atentamente o que está sendo comparado.</p>
      `,
      imagem: `
        <svg viewBox="0 0 500 240" xmlns="http://www.w3.org/2000/svg">
          <rect x="0" y="0" width="500" height="240" fill="#f1f5f9" rx="8"/>
          <text x="20" y="30" fill="#0f172a" font-size="16" font-weight="bold">Razão 3:2 (parte/todo)</text>
          <rect x="20" y="50" width="50" height="80" fill="#6366f1"/>
          <rect x="70" y="50" width="50" height="80" fill="#6366f1"/>
          <rect x="120" y="50" width="50" height="80" fill="#6366f1"/>
          <rect x="170" y="50" width="50" height="80" fill="#f59e0b"/>
          <rect x="220" y="50" width="50" height="80" fill="#f59e0b"/>
          <text x="20" y="155" fill="#475569" font-size="14">3 partes azuis : 2 partes laranjas</text>
          <text x="20" y="175" fill="#475569" font-size="14">Razão = 3/2 = 1,5 = 150%</text>
          <text x="20" y="195" fill="#475569" font-size="14">Inversa: 2:3 ≈ 0,67 = 66,7%</text>
          <line x1="300" y1="50" x2="380" y2="50" stroke="#94a3b8" stroke-width="2" stroke-dasharray="4"/>
          <text x="300" y="80" fill="#0f172a" font-size="14">Equivalente</text>
          <text x="300" y="100" fill="#0f172a" font-size="14">6:4, 9:6, ...</text>
          <text x="300" y="130" fill="#0f172a" font-size="14">Ex: Velocidade</text>
          <text x="300" y="150" fill="#0f172a" font-size="14">120 km / 2 h = 60 km/h</text>
          <text x="300" y="180" fill="#0f172a" font-size="14">Ex: Densidade</text>
          <text x="300" y="200" fill="#0f172a" font-size="14">20 hab / 5 km² = 4 hab/km²</text>
        </svg>
      `
    },
    {
      titulo: "2. Proporção – Igualdade de Razões",
      conteudo: `
        <p>Uma <strong>proporção</strong> é a igualdade entre duas razões. Escrevemos a:b = c:d, que se lê "a está para b assim como c está para d". Os termos a e d são chamados <strong>extremos</strong>, e b e c são os <strong>meios</strong>.</p>
        <p><strong>Propriedade fundamental:</strong> Em toda proporção, o produto dos meios é igual ao produto dos extremos: a × d = b × c. Essa propriedade é a base para resolver problemas com termo desconhecido.</p>
        <p>Exemplo: Se 2:3 = 4:x, então 2x = 12 → x = 6.</p>
        <p><strong>Propriedades adicionais:</strong></p>
        <ul>
          <li>Alternância: a:b = c:d ⇒ a:c = b:d</li>
          <li>Inversão: a:b = c:d ⇒ b:a = d:c</li>
          <li>Soma dos termos: a:b = c:d ⇒ (a+b):b = (c+d):d</li>
        </ul>
        <p><strong>Proporções contínuas:</strong> Quando os meios são iguais, temos a:b = b:c, e b é a média geométrica entre a e c: b² = a·c.</p>
        <h4>Dicas para resolver proporções</h4>
        <ul>
          <li>Use a propriedade fundamental sempre que um termo for desconhecido. Multiplique cruzado com cuidado.</li>
          <li>Em problemas com soma ou diferença, use a propriedade da soma/diferença dos termos.</li>
          <li>Se a proporção envolver frações, multiplique todos os termos pelo MMC para eliminar denominadores antes de aplicar a propriedade.</li>
        </ul>
        <h4>Erro comum</h4>
        <p>Multiplicar incorretamente: (a+b)/c = d/e → (a+b)·e = c·d. Muitos alunos esquecem de multiplicar o parêntese corretamente.</p>
      `,
      imagem: `
        <svg viewBox="0 0 500 220" xmlns="http://www.w3.org/2000/svg">
          <rect x="0" y="0" width="500" height="220" fill="#f1f5f9" rx="8"/>
          <text x="20" y="30" fill="#0f172a" font-size="16" font-weight="bold">Propriedade Fundamental da Proporção</text>
          <rect x="30" y="60" width="100" height="40" fill="#6366f1" rx="4"/>
          <text x="70" y="85" fill="#fff" font-size="16">a (extremo)</text>
          <rect x="150" y="60" width="100" height="40" fill="#10b981" rx="4"/>
          <text x="180" y="85" fill="#fff" font-size="16">b (meio)</text>
          <text x="130" y="85" fill="#0f172a" font-size="20">:</text>
          <text x="260" y="85" fill="#0f172a" font-size="20">=</text>
          <rect x="290" y="60" width="100" height="40" fill="#f59e0b" rx="4"/>
          <text x="320" y="85" fill="#fff" font-size="16">c (meio)</text>
          <rect x="410" y="60" width="100" height="40" fill="#ef4444" rx="4"/>
          <text x="440" y="85" fill="#fff" font-size="16">d (extremo)</text>
          <text x="380" y="85" fill="#0f172a" font-size="20">:</text>
          <text x="30" y="140" fill="#475569" font-size="14">Extremos: a e d → a×d</text>
          <text x="30" y="160" fill="#475569" font-size="14">Meios: b e c → b×c</text>
          <text x="30" y="180" fill="#475569" font-size="14">a×d = b×c (produto dos extremos = produto dos meios)</text>
          <text x="30" y="200" fill="#475569" font-size="14">Se 2:3 = 4:x → 2x = 12 → x=6</text>
        </svg>
      `
    },
    {
      titulo: "3. Grandezas Direta e Inversamente Proporcionais",
      conteudo: `
        <p>Duas grandezas são <strong>diretamente proporcionais</strong> quando, ao multiplicar (ou dividir) uma delas por um número, a outra fica multiplicada (ou dividida) pelo <strong>mesmo</strong> número. Ou seja, a razão entre elas é constante. Exemplo: distância percorrida e tempo (com velocidade constante) – se dobra o tempo, dobra a distância.</p>
        <p>Duas grandezas são <strong>inversamente proporcionais</strong> quando, ao multiplicar uma por um número, a outra é dividida pelo mesmo número, e vice-versa. O produto entre elas é constante. Exemplo: velocidade e tempo para percorrer uma distância fixa – se dobra a velocidade, o tempo cai pela metade.</p>
        <p>Para identificar a relação, pergunte-se: se uma grandeza aumenta, o que acontece com a outra? Se aumenta, é direta; se diminui, é inversa.</p>
        <p><strong>Critério do produto/razão constante:</strong> Calcule a razão (y/x) para cada par; se for constante, é direta. Calcule o produto (x·y); se for constante, é inversa.</p>
        <h4>Método prático para regra de três</h4>
        <ul>
          <li>Na regra de três simples, isole a grandeza que contém a incógnita.</li>
          <li>Compare a grandeza da incógnita com a outra: se for direta, mantenha a fração; se inversa, inverta.</li>
          <li>Multiplique cruzado e resolva.</li>
        </ul>
        <h4>Erro comum</h4>
        <p>Confundir a relação. Por exemplo, em problemas de "mais operários, menos dias" muitos alunos montam a proporção direta. Sempre verifique a lógica: aumentar uma grandeza deve fazer a outra aumentar (direta) ou diminuir (inversa)?</p>
      `,
      imagem: `
        <svg viewBox="0 0 500 220" xmlns="http://www.w3.org/2000/svg">
          <rect x="0" y="0" width="500" height="220" fill="#f1f5f9" rx="8"/>
          <text x="20" y="30" fill="#0f172a" font-size="16" font-weight="bold">Direta vs Inversa</text>
          <rect x="30" y="50" width="180" height="80" fill="#dbeafe" rx="4"/>
          <text x="40" y="70" fill="#1e293b" font-size="14" font-weight="bold">Direta</text>
          <text x="40" y="90" fill="#475569" font-size="12">↑ A → ↑ B (mesmo fator)</text>
          <text x="40" y="105" fill="#475569" font-size="12">Razão A/B constante</text>
          <text x="40" y="120" fill="#475569" font-size="12">Ex: Distância × Tempo</text>
          <rect x="250" y="50" width="180" height="80" fill="#fee2e2" rx="4"/>
          <text x="260" y="70" fill="#1e293b" font-size="14" font-weight="bold">Inversa</text>
          <text x="260" y="90" fill="#475569" font-size="12">↑ A → ↓ B (inverso)</text>
          <text x="260" y="105" fill="#475569" font-size="12">Produto A×B constante</text>
          <text x="260" y="120" fill="#475569" font-size="12">Ex: Velocidade × Tempo</text>
          <text x="30" y="170" fill="#0f172a" font-size="14">Dica: se a relação for direta, a fração é A/B; se inversa, B/A.</text>
          <text x="30" y="190" fill="#0f172a" font-size="14">CESGRANRIO adora usar contextos de produção e eficiência.</text>
        </svg>
      `
    },
    {
      titulo: "4. Números Proporcionais e Sequências",
      conteudo: `
        <p>Dizemos que dois números são proporcionais a dois outros quando suas razões são iguais. Por exemplo, (2,3) e (4,6) são proporcionais porque 2/4 = 3/6 = 1/2.</p>
        <p>Uma <strong>sequência de números diretamente proporcionais</strong> é aquela em que cada número é obtido multiplicando o correspondente por uma constante k. Ex: 2, 4, 6, 8 são proporcionais a 1, 2, 3, 4 com k=2.</p>
        <p>Para calcular termos desconhecidos em uma proporção, usamos a propriedade fundamental.</p>
        <p><strong>Aplicação:</strong> Se três números são proporcionais a 2, 3 e 5 e a soma é 200, então eles são 2k, 3k, 5k com 10k=200 → k=20 → 40, 60, 100.</p>
        <h4>Dicas para sequências</h4>
        <ul>
          <li>Em problemas de "dividir em partes proporcionais", sempre identifique a constante k.</li>
          <li>Se a divisão for inversamente proporcional, transforme em direta invertendo os números.</li>
          <li>Para três ou mais números, use a soma dos coeficientes para achar k.</li>
        </ul>
        <h4>Erro comum</h4>
        <p>Quando a divisão é inversa, muitos esquecem de inverter os números antes de calcular k. Por exemplo, divisão inversa a 2,3,4 → partes proporcionais a 1/2,1/3,1/4. Multiplique pelo MMC (12) → 6,4,3.</p>
      `,
      imagem: `
        <svg viewBox="0 0 500 180" xmlns="http://www.w3.org/2000/svg">
          <rect x="0" y="0" width="500" height="180" fill="#f1f5f9" rx="8"/>
          <text x="20" y="30" fill="#0f172a" font-size="16" font-weight="bold">Sequência Proporcional</text>
          <rect x="40" y="50" width="40" height="40" fill="#6366f1" rx="4"/>
          <text x="55" y="75" fill="#fff" font-size="16">2</text>
          <rect x="100" y="50" width="40" height="40" fill="#10b981" rx="4"/>
          <text x="115" y="75" fill="#fff" font-size="16">4</text>
          <rect x="160" y="50" width="40" height="40" fill="#f59e0b" rx="4"/>
          <text x="175" y="75" fill="#fff" font-size="16">6</text>
          <rect x="220" y="50" width="40" height="40" fill="#ef4444" rx="4"/>
          <text x="235" y="75" fill="#fff" font-size="16">8</text>
          <line x1="80" y1="70" x2="100" y2="70" stroke="#94a3b8" stroke-width="2" marker-end="url(#arrow2)"/>
          <line x1="140" y1="70" x2="160" y2="70" stroke="#94a3b8" stroke-width="2" marker-end="url(#arrow2)"/>
          <line x1="200" y1="70" x2="220" y2="70" stroke="#94a3b8" stroke-width="2" marker-end="url(#arrow2)"/>
          <text x="40" y="130" fill="#475569" font-size="14">Razão constante = 2:4 = 4:6 = 6:8 = 1:2</text>
          <text x="40" y="155" fill="#0f172a" font-size="14">k = 2 (cada termo é 2× o correspondente)</text>
          <defs>
            <marker id="arrow2" markerWidth="10" markerHeight="7" refX="10" refY="3.5" orient="auto">
              <polygon points="0 0, 10 3.5, 0 7" fill="#94a3b8"/>
            </marker>
          </defs>
        </svg>
      `
    },
    {
      titulo: "5. Divisão Proporcional",
      conteudo: `
        <p>A <strong>divisão proporcional</strong> é usada para repartir uma quantidade em partes diretamente ou inversamente proporcionais a certos números.</p>
        <ul>
          <li><strong>Diretamente proporcional:</strong> Se dividimos um valor em partes proporcionais a a, b, c, então cada parte é k·a, k·b, k·c, onde k é uma constante encontrada pela soma: k = total / (a+b+c).</li>
          <li><strong>Inversamente proporcional:</strong> Se dividimos um valor em partes inversamente proporcionais a a, b, c, então as partes são proporcionais a 1/a, 1/b, 1/c. Para facilitar, multiplicamos os inversos pelo MMC dos números dados.</li>
          <li><strong>Divisão composta:</strong> Envolve mais de um critério (ex: direta a um e inversa a outro). Nesse caso, a parte de cada um é proporcional ao produto (valor direto) × (1/valor inverso).</li>
        </ul>
        <p>Aplicações: rateio de despesas, distribuição de lucros, divisão de heranças, etc.</p>
        <h4>Passo a passo para divisão composta</h4>
        <ul>
          <li>Atribua a cada participante um coeficiente baseado nos critérios.</li>
          <li>Se o critério for direto, multiplique o valor pelo coeficiente.</li>
          <li>Se for inverso, multiplique pelo inverso do coeficiente.</li>
          <li>Some todos os coeficientes, encontre k e multiplique.</li>
        </ul>
        <h4>Erro comum</h4>
        <p>Na divisão inversa, é comum esquecer de inverter os números. Por exemplo, inversamente proporcional a 2,3,5 não significa 2k,3k,5k. Significa que as partes são proporcionais a 1/2,1/3,1/5.</p>
      `,
      imagem: `
        <svg viewBox="0 0 500 240" xmlns="http://www.w3.org/2000/svg">
          <rect x="0" y="0" width="500" height="240" fill="#f1f5f9" rx="8"/>
          <text x="20" y="30" fill="#0f172a" font-size="16" font-weight="bold">Divisão Proporcional</text>
          <text x="20" y="55" fill="#1e293b" font-size="14">Divisão direta a 2,3,5 (total 100):</text>
          <rect x="30" y="70" width="60" height="30" fill="#6366f1" rx="4"/>
          <text x="40" y="90" fill="#fff" font-size="12">2k=20</text>
          <rect x="110" y="70" width="60" height="30" fill="#10b981" rx="4"/>
          <text x="120" y="90" fill="#fff" font-size="12">3k=30</text>
          <rect x="190" y="70" width="60" height="30" fill="#f59e0b" rx="4"/>
          <text x="200" y="90" fill="#fff" font-size="12">5k=50</text>
          <text x="20" y="130" fill="#1e293b" font-size="14">Inversa a 2,3,6 (total 180):</text>
          <text x="20" y="150" fill="#475569" font-size="12">MMC=6, partes prop. a 3,2,1 → 3k+2k+1k=180 → k=30 → 90,60,30</text>
          <text x="20" y="180" fill="#1e293b" font-size="14">Composta (direta a 2 e inversa a 3):</text>
          <text x="20" y="200" fill="#475569" font-size="12">Coeficientes: 2×(1/3)=2/3, 3×(1/2)=3/2, ...</text>
          <text x="20" y="220" fill="#0f172a" font-size="12">Dica: Use k = total / soma dos coeficientes.</text>
        </svg>
      `
    },
    {
      titulo: "6. Regra de Três Simples",
      conteudo: `
        <p>A <strong>regra de três simples</strong> é um método prático para resolver problemas que envolvem duas grandezas proporcionais (diretas ou inversas).</p>
        <p><strong>Passos:</strong></p>
        <ul>
          <li>Identifique as duas grandezas e os valores conhecidos.</li>
          <li>Determine se a relação é direta ou inversa.</li>
          <li>Monte a proporção: se for direta, mantenha a ordem; se for inversa, inverta uma das razões.</li>
          <li>Resolva a equação usando a propriedade fundamental.</li>
        </ul>
        <p><strong>Exemplo direto:</strong> Se 3 kg de arroz custam R$ 12, quanto custam 5 kg? (direta). Montagem: 3/5 = 12/x → 3x = 60 → x = 20.</p>
        <p><strong>Exemplo inverso:</strong> Se 4 operários fazem um serviço em 6 dias, em quantos dias 6 operários farão o mesmo serviço? (inversa). Produto constante: 4×6 = 6×d → d = 4 dias.</p>
        <h4>Dicas de interpretação CESGRANRIO</h4>
        <ul>
          <li>Sublinhe as palavras-chave: "se... então...", "para", "quando", "cada".</li>
          <li>Desconfie de questões que misturam unidades diferentes (ex: km/h e minutos). Converta tudo para a mesma unidade antes de montar a regra.</li>
          <li>Na regra de três inversa, lembre-se de que o produto é constante, então você pode multiplicar diretamente os valores conhecidos.</li>
        </ul>
        <h4>Erro comum</h4>
        <p>Montar a regra de três invertida quando a relação é direta, ou direta quando é inversa. Para evitar, faça o teste lógico: se aumentar a primeira grandeza, o que acontece com a segunda?</p>
      `,
      imagem: `
        <svg viewBox="0 0 500 200" xmlns="http://www.w3.org/2000/svg">
          <rect x="0" y="0" width="500" height="200" fill="#f1f5f9" rx="8"/>
          <text x="20" y="30" fill="#0f172a" font-size="16" font-weight="bold">Regra de Três Simples – Direta</text>
          <rect x="30" y="60" width="100" height="40" fill="#6366f1" rx="4"/>
          <text x="60" y="85" fill="#fff" font-size="14">3 kg</text>
          <rect x="160" y="60" width="100" height="40" fill="#10b981" rx="4"/>
          <text x="190" y="85" fill="#fff" font-size="14">R$ 12</text>
          <text x="140" y="85" fill="#0f172a" font-size="20">→</text>
          <rect x="290" y="60" width="100" height="40" fill="#f59e0b" rx="4"/>
          <text x="320" y="85" fill="#fff" font-size="14">5 kg</text>
          <rect x="420" y="60" width="100" height="40" fill="#ef4444" rx="4"/>
          <text x="450" y="85" fill="#fff" font-size="14">R$ x</text>
          <text x="140" y="85" fill="#0f172a" font-size="20">→</text>
          <text x="30" y="135" fill="#475569" font-size="14">Montagem: 3/5 = 12/x → 3x = 60 → x = 20</text>
          <text x="30" y="155" fill="#475569" font-size="14">Logo, 5 kg custam R$ 20.</text>
          <text x="30" y="175" fill="#0f172a" font-size="12">Na inversa: ex: 4 op → 6d, 6 op → xd → 4×6=6x → x=4</text>
        </svg>
      `
    },
    {
      titulo: "7. Regra de Três Composta",
      conteudo: `
        <p>A <strong>regra de três composta</strong> envolve três ou mais grandezas. O procedimento é semelhante, mas devemos analisar cada grandeza em relação à incógnita, verificando se é direta ou inversamente proporcional.</p>
        <p><strong>Passos:</strong></p>
        <ul>
          <li>Monte uma tabela com as grandezas e os valores conhecidos.</li>
          <li>Isole a grandeza que contém a incógnita.</li>
          <li>Compare cada uma das outras grandezas com a grandeza da incógnita, determinando se a relação é direta ou inversa.</li>
          <li>Multiplique os fatores de correção: se direta, mantenha; se inversa, inverta a fração correspondente.</li>
          <li>Resolva a equação resultante.</li>
        </ul>
        <p>Exemplo: 5 máquinas produzem 600 peças em 4 dias. Quantas peças produzem 7 máquinas em 6 dias? (grandezas: máquinas, peças, dias). A relação peças/máquinas é direta; peças/dias é direta. Então montamos: 600/x = (5/7) × (4/6) → x = 600 × 42/20 = 1260 peças.</p>
        <p>Se houver uma grandeza inversa, inverta a fração correspondente.</p>
        <h4>Método prático (produto das grandezas)</h4>
        <p>Para problemas com três grandezas, onde uma é a incógnita, podemos usar a fórmula: (valor conhecido da incógnita) / (valor procurado) = (fator de correção 1) × (fator de correção 2), onde cada fator é a razão entre os valores da grandeza correspondente, invertida se for inversa.</p>
        <h4>Dica CESGRANRIO</h4>
        <p>Monte a tabela com três linhas: a primeira linha com os dados, a segunda com a incógnita. Depois, use setas para indicar se a relação é direta (seta para cima) ou inversa (seta para baixo). Isso ajuda a não errar a inversão.</p>
      `,
      imagem: `
        <svg viewBox="0 0 500 250" xmlns="http://www.w3.org/2000/svg">
          <rect x="0" y="0" width="500" height="250" fill="#f1f5f9" rx="8"/>
          <text x="20" y="30" fill="#0f172a" font-size="16" font-weight="bold">Regra de Três Composta</text>
          <text x="30" y="60" fill="#1e293b" font-size="14">Tabela:</text>
          <rect x="30" y="70" width="100" height="30" fill="#e2e8f0"/>
          <text x="40" y="90" fill="#0f172a" font-size="12">Máquinas</text>
          <rect x="130" y="70" width="100" height="30" fill="#e2e8f0"/>
          <text x="140" y="90" fill="#0f172a" font-size="12">Dias</text>
          <rect x="230" y="70" width="100" height="30" fill="#e2e8f0"/>
          <text x="240" y="90" fill="#0f172a" font-size="12">Peças</text>
          <rect x="30" y="100" width="100" height="30" fill="#dbeafe"/>
          <text x="60" y="120" fill="#0f172a" font-size="12">5</text>
          <rect x="130" y="100" width="100" height="30" fill="#dbeafe"/>
          <text x="160" y="120" fill="#0f172a" font-size="12">4</text>
          <rect x="230" y="100" width="100" height="30" fill="#dbeafe"/>
          <text x="260" y="120" fill="#0f172a" font-size="12">600</text>
          <rect x="30" y="130" width="100" height="30" fill="#fee2e2"/>
          <text x="60" y="150" fill="#0f172a" font-size="12">7</text>
          <rect x="130" y="130" width="100" height="30" fill="#fee2e2"/>
          <text x="160" y="150" fill="#0f172a" font-size="12">6</text>
          <rect x="230" y="130" width="100" height="30" fill="#fee2e2"/>
          <text x="260" y="150" fill="#0f172a" font-size="12">x</text>
          <text x="30" y="185" fill="#475569" font-size="12">600/x = (5/7)×(4/6) → x = 600×42/20 = 1260</text>
          <text x="30" y="205" fill="#475569" font-size="12">Se houver inversa, inverte-se a fração da grandeza.</text>
          <text x="30" y="225" fill="#0f172a" font-size="12">Ex: se mais máquinas → menos dias (inversa).</text>
        </svg>
      `
    },
    {
      titulo: "8. Porcentagem – Conceitos Básicos e Conversões",
      conteudo: `
        <p>A <strong>porcentagem</strong> é uma razão cujo denominador é 100. Representa uma parte de um todo dividido em 100 partes iguais. O símbolo % significa "por cento".</p>
        <p><strong>Conversões:</strong></p>
        <ul>
          <li>Porcentagem → fração: dividir por 100. Ex: 25% = 25/100 = 1/4.</li>
          <li>Fração → porcentagem: multiplicar por 100. Ex: 3/5 = 0,6 × 100 = 60%.</li>
          <li>Porcentagem → decimal: dividir por 100. Ex: 15% = 0,15.</li>
        </ul>
        <p><strong>Cálculos:</strong></p>
        <ul>
          <li>Calcular p% de um valor V: (p/100) × V.</li>
          <li>Determinar o valor total conhecendo a parte e a taxa: V = parte / (p/100).</li>
          <li>Determinar a taxa percentual: p = (parte/total) × 100.</li>
        </ul>
        <h4>Dicas para CESGRANRIO</h4>
        <ul>
          <li>Muitas questões envolvem descontos e aumentos sucessivos. Não some as porcentagens; multiplique os fatores.</li>
          <li>Lembre-se que 100% é o todo. Aumento de 20% → 120% → fator 1,20.</li>
          <li>Desconto de 20% → 80% → fator 0,80.</li>
        </ul>
        <h4>Erro comum</h4>
        <p>Confundir a base de cálculo: "lucro sobre o custo" vs "lucro sobre a venda". Se o lucro é 20% sobre o custo, venda = custo × 1,20. Se é sobre a venda, custo = venda × 0,80 (já que lucro = 20% da venda).</p>
      `,
      imagem: `
        <svg viewBox="0 0 500 220" xmlns="http://www.w3.org/2000/svg">
          <rect x="0" y="0" width="500" height="220" fill="#f1f5f9" rx="8"/>
          <text x="20" y="30" fill="#0f172a" font-size="16" font-weight="bold">Porcentagem e Fatores</text>
          <circle cx="120" cy="120" r="60" fill="#6366f1" stroke="#1e293b" stroke-width="2"/>
          <path d="M120 120 L120 60 A60 60 0 0 1 180 120 Z" fill="#f59e0b" stroke="#1e293b" stroke-width="2"/>
          <text x="130" y="90" fill="#fff" font-size="12">60%</text>
          <text x="130" y="140" fill="#fff" font-size="12">40%</text>
          <text x="220" y="80" fill="#0f172a" font-size="14">60% = 60/100 = 3/5</text>
          <text x="220" y="100" fill="#0f172a" font-size="14">40% = 40/100 = 2/5</text>
          <text x="220" y="120" fill="#0f172a" font-size="14">0,6 = 60%</text>
          <text x="220" y="140" fill="#0f172a" font-size="14">0,4 = 40%</text>
          <text x="220" y="170" fill="#0f172a" font-size="14">Aumento de 10% → 1,10</text>
          <text x="220" y="190" fill="#0f172a" font-size="14">Desconto de 10% → 0,90</text>
        </svg>
      `
    },
    {
      titulo: "9. Aumentos, Descontos e Variação Percentual",
      conteudo: `
        <p><strong>Aumento percentual:</strong> Para aumentar um valor em p%, multiplicamos por (1 + p/100). Ex: R$ 200 com aumento de 10% → 200 × 1,10 = 220.</p>
        <p><strong>Desconto percentual:</strong> Para descontar p%, multiplicamos por (1 – p/100). Ex: R$ 200 com desconto de 10% → 200 × 0,90 = 180.</p>
        <p><strong>Acréscimos e descontos sucessivos:</strong> Quando há mais de uma operação, multiplicamos os fatores sucessivamente. Ex: Aumento de 10% seguido de desconto de 10% → fator = 1,10 × 0,90 = 0,99 (equivale a 1% de desconto total).</p>
        <p><strong>Variação percentual:</strong> A variação entre um valor inicial V₀ e final V₁ é dada por (V₁ – V₀)/V₀ × 100. Se positivo, aumento; se negativo, redução.</p>
        <p><strong>Lucro sobre custo e sobre venda:</strong> Se um produto é vendido com lucro de 20% sobre o custo, então Venda = Custo × 1,20. Se o lucro é sobre o preço de venda, a fórmula é Lucro = Venda × taxa, e Custo = Venda × (1 – taxa).</p>
        <h4>Dicas para sucessivos</h4>
        <ul>
          <li>Sempre use fatores multiplicativos. Ex: 20% de aumento + 30% de aumento → 1,20 × 1,30 = 1,56 → 56% de aumento.</li>
          <li>Para descontos sucessivos: 20% e 30% → 0,80 × 0,70 = 0,56 → 44% de desconto.</li>
        </ul>
        <h4>Erro comum</h4>
        <p>Muitos alunos somam os percentuais: 20% + 30% = 50%. Isso está errado, pois a base muda após o primeiro desconto/aumento. Sempre multiplique os fatores.</p>
      `,
      imagem: `
        <svg viewBox="0 0 500 220" xmlns="http://www.w3.org/2000/svg">
          <rect x="0" y="0" width="500" height="220" fill="#f1f5f9" rx="8"/>
          <text x="20" y="30" fill="#0f172a" font-size="16" font-weight="bold">Aumentos e Descontos Sucessivos</text>
          <rect x="30" y="60" width="80" height="40" fill="#6366f1" rx="4"/>
          <text x="50" y="85" fill="#fff" font-size="14">100</text>
          <text x="120" y="85" fill="#0f172a" font-size="20">→</text>
          <rect x="150" y="60" width="80" height="40" fill="#10b981" rx="4"/>
          <text x="170" y="85" fill="#fff" font-size="14">110</text>
          <text x="240" y="85" fill="#0f172a" font-size="20">→</text>
          <rect x="270" y="60" width="80" height="40" fill="#f59e0b" rx="4"/>
          <text x="290" y="85" fill="#fff" font-size="14">99</text>
          <text x="30" y="130" fill="#475569" font-size="14">+10% → 100×1,10 = 110</text>
          <text x="30" y="150" fill="#475569" font-size="14">–10% → 110×0,90 = 99</text>
          <text x="30" y="170" fill="#475569" font-size="14">Variação total: (99–100)/100 = –1%</text>
          <text x="30" y="195" fill="#0f172a" font-size="12">Lucro sobre custo: V = C(1+i); sobre venda: C = V(1–i)</text>
        </svg>
      `
    },
    {
      titulo: "10. Juros Simples",
      conteudo: `
        <p>Os <strong>juros simples</strong> são uma aplicação direta de proporções e porcentagens. O juro é calculado sempre sobre o capital inicial, proporcionalmente ao tempo e à taxa.</p>
        <p><strong>Fórmulas:</strong></p>
        <ul>
          <li>J = C · i · t</li>
          <li>Montante M = C + J = C · (1 + i · t)</li>
        </ul>
        <p>Onde C é o capital, i é a taxa de juros (em decimal, ex: 5% → 0,05) e t é o tempo (na mesma unidade da taxa).</p>
        <p><strong>Exemplo:</strong> Um capital de R$ 1000 aplicado a 2% ao mês durante 5 meses renderá J = 1000 × 0,02 × 5 = R$ 100. Montante = R$ 1100.</p>
        <p>Problemas de juros simples frequentemente pedem o capital, a taxa ou o tempo, utilizando regra de três ou manipulação algébrica.</p>
        <h4>Dicas para CESGRANRIO</h4>
        <ul>
          <li>Unidade de tempo e taxa devem ser compatíveis: se a taxa é ao ano, o tempo deve ser em anos.</li>
          <li>Cuidado com a conversão de meses para anos (dividir por 12) e dias para anos (dividir por 360 ou 365, dependendo do regime).</li>
          <li>Juros simples são lineares. O gráfico é uma reta.</li>
        </ul>
        <h4>Erro comum</h4>
        <p>Esquecer de transformar a taxa percentual em decimal. 5% = 0,05, não 5. Também confundir juros simples com compostos (juros simples não tem juros sobre juros).</p>
      `,
      imagem: `
        <svg viewBox="0 0 500 180" xmlns="http://www.w3.org/2000/svg">
          <rect x="0" y="0" width="500" height="180" fill="#f1f5f9" rx="8"/>
          <text x="20" y="30" fill="#0f172a" font-size="16" font-weight="bold">Juros Simples</text>
          <line x1="40" y1="80" x2="440" y2="80" stroke="#94a3b8" stroke-width="2"/>
          <text x="40" y="70" fill="#475569" font-size="12">0</text>
          <text x="430" y="70" fill="#475569" font-size="12">t (meses)</text>
          <line x1="40" y1="80" x2="40" y2="140" stroke="#94a3b8" stroke-width="2"/>
          <text x="20" y="100" fill="#475569" font-size="12">C</text>
          <rect x="40" y="80" width="50" height="10" fill="#6366f1"/>
          <rect x="90" y="80" width="50" height="20" fill="#6366f1"/>
          <rect x="140" y="80" width="50" height="30" fill="#6366f1"/>
          <rect x="190" y="80" width="50" height="40" fill="#6366f1"/>
          <rect x="240" y="80" width="50" height="50" fill="#6366f1"/>
          <rect x="290" y="80" width="50" height="60" fill="#6366f1"/>
          <rect x="340" y="80" width="50" height="70" fill="#6366f1"/>
          <text x="340" y="160" fill="#0f172a" font-size="12">J = C·i·t (reta)</text>
          <text x="40" y="170" fill="#475569" font-size="12">M = C + J</text>
        </svg>
      `
    },
    {
      titulo: "11. Misturas e Proporções",
      conteudo: `
        <p>Problemas de <strong>misturas</strong> envolvem combinar substâncias com diferentes concentrações ou quantidades. A chave é trabalhar com a proporção dos componentes em relação ao total.</p>
        <p><strong>Mistura de soluções:</strong> Ex: misturando x litros de solução a 20% com y litros a 50% para obter uma solução a 30%. A quantidade de soluto é 0,20x + 0,50y = 0,30(x+y). Resolve-se com sistema ou proporção.</p>
        <p><strong>Regra do "cruzar" (para duas misturas):</strong> Para duas soluções de concentrações c1 e c2, a proporção das quantidades é inversa às diferenças em relação à concentração desejada cm: x/y = |c2 – cm| / |c1 – cm|.</p>
        <p><strong>Ligas metálicas:</strong> Mesmo raciocínio, usando massas ou volumes.</p>
        <h4>Dicas para questões de mistura</h4>
        <ul>
          <li>Calcule a quantidade total de soluto (ou componente) em cada parte.</li>
          <li>A concentração final é a razão entre o soluto total e o volume total.</li>
          <li>Em problemas com três componentes, use sistema de equações.</li>
        </ul>
        <h4>Erro comum</h4>
        <p>Muitos alunos simplesmente fazem a média aritmética das concentrações. Isso só funciona se os volumes forem iguais. Caso contrário, a média é ponderada.</p>
      `,
      imagem: `
        <svg viewBox="0 0 500 180" xmlns="http://www.w3.org/2000/svg">
          <rect x="0" y="0" width="500" height="180" fill="#f1f5f9" rx="8"/>
          <text x="20" y="30" fill="#0f172a" font-size="16" font-weight="bold">Mistura de Soluções</text>
          <rect x="30" y="60" width="80" height="40" fill="#a7f3d0" rx="4"/>
          <text x="40" y="85" fill="#0f172a" font-size="12">20%</text>
          <rect x="140" y="60" width="80" height="40" fill="#fde68a" rx="4"/>
          <text x="150" y="85" fill="#0f172a" font-size="12">50%</text>
          <text x="230" y="85" fill="#0f172a" font-size="20">→</text>
          <rect x="260" y="60" width="80" height="40" fill="#93c5fd" rx="4"/>
          <text x="270" y="85" fill="#0f172a" font-size="12">30%</text>
          <text x="30" y="130" fill="#475569" font-size="12">Proporção: x/y = (50–30)/(30–20) = 20/10 = 2:1</text>
          <text x="30" y="150" fill="#0f172a" font-size="12">Ou seja, 2 partes da 20% para 1 parte da 50%.</text>
        </svg>
      `
    },
    {
      titulo: "12. Aplicações em Problemas Financeiros e do Cotidiano",
      conteudo: `
        <p>Razões, proporções e porcentagens são onipresentes no dia a dia e em questões de concursos. Aqui estão algumas situações comuns:</p>
        <ul>
          <li><strong>Juros simples:</strong> J = C × i × t, onde a taxa i é uma porcentagem.</li>
          <li><strong>Descontos em lojas:</strong> Calcular o preço final após descontos sucessivos.</li>
          <li><strong>Índices econômicos:</strong> Inflação, crescimento do PIB, etc.</li>
          <li><strong>Escalas em mapas:</strong> Converter distâncias reais a partir de uma escala.</li>
          <li><strong>Velocidade média:</strong> v = Δs/Δt.</li>
          <li><strong>Densidade demográfica:</strong> habitantes/km².</li>
          <li><strong>Misturas e receitas:</strong> Manter a proporção ao alterar quantidades.</li>
        </ul>
        <p>Dominar esses conceitos é essencial para resolver as questões da CESGRANRIO, que frequentemente cobram esses tópicos de forma contextualizada.</p>
        <h4>Estratégia para questões mistas</h4>
        <p>Muitas questões combinam dois ou mais tópicos. Por exemplo: uma questão pode pedir a distância real em um mapa (escala) e depois calcular o custo de viagem com base no consumo de combustível (regra de três). Leia o enunciado duas vezes e identifique cada etapa necessária.</p>
        <h4>Erro comum</h4>
        <p>Não converter unidades. Por exemplo, escala 1:100.000, distância no mapa 5 cm → distância real 5×100.000 = 500.000 cm = 5 km. Muitos esquecem de converter e marcam 500.000 km.</p>
      `,
      imagem: `
        <svg viewBox="0 0 500 180" xmlns="http://www.w3.org/2000/svg">
          <rect x="0" y="0" width="500" height="180" fill="#f1f5f9" rx="8"/>
          <text x="20" y="30" fill="#0f172a" font-size="16" font-weight="bold">Aplicações Cotidianas</text>
          <rect x="30" y="50" width="120" height="30" fill="#dbeafe" rx="4"/>
          <text x="50" y="70" fill="#1e293b" font-size="12">✧ Mapas (escala)</text>
          <rect x="170" y="50" width="120" height="30" fill="#dbeafe" rx="4"/>
          <text x="190" y="70" fill="#1e293b" font-size="12">✧ Finanças (juros)</text>
          <rect x="310" y="50" width="120" height="30" fill="#dbeafe" rx="4"/>
          <text x="330" y="70" fill="#1e293b" font-size="12">✧ Compras (descontos)</text>
          <rect x="30" y="100" width="120" height="30" fill="#dbeafe" rx="4"/>
          <text x="50" y="120" fill="#1e293b" font-size="12">✧ Viagens (velocidade)</text>
          <rect x="170" y="100" width="120" height="30" fill="#dbeafe" rx="4"/>
          <text x="190" y="120" fill="#1e293b" font-size="12">✧ Estatística (índices)</text>
          <rect x="310" y="100" width="120" height="30" fill="#dbeafe" rx="4"/>
          <text x="330" y="120" fill="#1e293b" font-size="12">✧ Receitas (proporções)</text>
          <text x="30" y="155" fill="#0f172a" font-size="12">Dica: sempre anote as unidades e faça a conversão antes de operar.</text>
        </svg>
      `
    }
  ],

  exemplos: [
    // Exemplo 1 (existente)
    {
      titulo: "Exemplo 1 – Razão e Escala",
      enunciado: "Em um mapa, a distância entre duas cidades é de 12 cm. Sabendo que a escala do mapa é 1:250.000, qual é a distância real entre as cidades em quilômetros?",
      resolucao: `
        <p>A escala 1:250.000 significa que 1 cm no mapa equivale a 250.000 cm na realidade. Portanto, 12 cm no mapa equivalem a 12 × 250.000 = 3.000.000 cm.</p>
        <p>Convertendo para quilômetros: 1 km = 100.000 cm, então 3.000.000 cm / 100.000 = 30 km.</p>
        <p><strong>Resposta:</strong> 30 km.</p>
      `,
      observacao: "Em questões de escala, sempre preste atenção às unidades de medida. Muitas vezes a resposta é pedida em km, então faça a conversão corretamente.",
      imagem: `
        <svg viewBox="0 0 400 150" xmlns="http://www.w3.org/2000/svg">
          <rect x="0" y="0" width="400" height="150" fill="#f8fafc" rx="8"/>
          <text x="20" y="30" fill="#0f172a" font-size="14">Mapa: 12 cm → Real: ?</text>
          <line x1="50" y1="70" x2="150" y2="70" stroke="#6366f1" stroke-width="4"/>
          <circle cx="50" cy="70" r="5" fill="#ef4444"/>
          <circle cx="150" cy="70" r="5" fill="#ef4444"/>
          <text x="60" y="60" fill="#0f172a" font-size="12">12 cm</text>
          <text x="180" y="75" fill="#0f172a" font-size="20">→</text>
          <text x="220" y="75" fill="#0f172a" font-size="14">250.000 × 12 = 3.000.000 cm = 30 km</text>
        </svg>
      `
    },
    // Exemplo 2 (existente)
    {
      titulo: "Exemplo 2 – Propriedade Fundamental da Proporção",
      enunciado: "Determine o valor de x na proporção: (x+3)/5 = (2x-1)/7.",
      resolucao: `
        <p>Usando a propriedade fundamental: (x+3) × 7 = 5 × (2x-1).</p>
        <p>7x + 21 = 10x – 5</p>
        <p>21 + 5 = 10x – 7x → 26 = 3x → x = 26/3.</p>
        <p><strong>Resposta:</strong> x = 26/3 ≈ 8,67.</p>
      `,
      observacao: "Cuidado ao distribuir os produtos: lembre-se de multiplicar cada termo corretamente. Verifique sempre se a proporção está montada na ordem correta.",
      imagem: `
        <svg viewBox="0 0 400 120" xmlns="http://www.w3.org/2000/svg">
          <rect x="0" y="0" width="400" height="120" fill="#f8fafc" rx="8"/>
          <text x="20" y="30" fill="#0f172a" font-size="14">(x+3)/5 = (2x-1)/7</text>
          <text x="20" y="60" fill="#475569" font-size="14">Produto dos extremos: (x+3)·7</text>
          <text x="20" y="80" fill="#475569" font-size="14">Produto dos meios: 5·(2x-1)</text>
          <text x="20" y="100" fill="#475569" font-size="14">7x+21 = 10x-5 → x = 26/3</text>
        </svg>
      `
    },
    // Exemplo 3 (existente)
    {
      titulo: "Exemplo 3 – Grandezas Diretamente Proporcionais",
      enunciado: "Uma torneira despeja 15 litros de água a cada 2 minutos. Quantos litros despejará em 7 minutos, mantendo a mesma vazão?",
      resolucao: `
        <p>Trata-se de uma relação direta: mais tempo, mais água.</p>
        <p>Montamos a proporção: 15/2 = x/7 (litros por minutos).</p>
        <p>Resolvendo: 2x = 15 × 7 → 2x = 105 → x = 52,5 litros.</p>
        <p><strong>Resposta:</strong> 52,5 litros.</p>
      `,
      observacao: "Sempre identifique se a relação é direta ou inversa. Aqui, quanto maior o tempo, maior a quantidade de água, portanto direta.",
      imagem: `
        <svg viewBox="0 0 400 120" xmlns="http://www.w3.org/2000/svg">
          <rect x="0" y="0" width="400" height="120" fill="#f8fafc" rx="8"/>
          <text x="20" y="30" fill="#0f172a" font-size="14">15 L → 2 min</text>
          <text x="20" y="50" fill="#0f172a" font-size="14">x L → 7 min</text>
          <line x1="180" y1="40" x2="220" y2="40" stroke="#94a3b8" stroke-width="2" marker-end="url(#arrow)"/>
          <text x="20" y="80" fill="#475569" font-size="14">15/2 = x/7 → x = 15×7/2 = 52,5 L</text>
        </svg>
      `
    },
    // Exemplo 4 (existente)
    {
      titulo: "Exemplo 4 – Grandezas Inversamente Proporcionais",
      enunciado: "Um carro, a uma velocidade média de 80 km/h, faz um percurso em 3 horas. Se a velocidade aumentar para 120 km/h, quanto tempo levará para fazer o mesmo percurso?",
      resolucao: `
        <p>Relação inversa: maior velocidade, menor tempo.</p>
        <p>Produto constante: 80 × 3 = 120 × t → 240 = 120t → t = 2 horas.</p>
        <p><strong>Resposta:</strong> 2 horas.</p>
      `,
      observacao: "No caso inverso, não se monta a proporção com as grandezas na mesma ordem; multiplica-se diretamente os valores.",
      imagem: `
        <svg viewBox="0 0 400 120" xmlns="http://www.w3.org/2000/svg">
          <rect x="0" y="0" width="400" height="120" fill="#f8fafc" rx="8"/>
          <text x="20" y="30" fill="#0f172a" font-size="14">80 km/h → 3 h</text>
          <text x="20" y="50" fill="#0f172a" font-size="14">120 km/h → x h</text>
          <text x="20" y="80" fill="#475569" font-size="14">80×3 = 120x → x=2 h</text>
        </svg>
      `
    },
    // Exemplo 5 (existente)
    {
      titulo: "Exemplo 5 – Divisão Proporcional Direta",
      enunciado: "Três sócios investiram R$ 2.000, R$ 3.000 e R$ 5.000 em um negócio. O lucro foi de R$ 10.000. Quanto cada um deve receber, se a divisão for diretamente proporcional ao investimento?",
      resolucao: `
        <p>Investimentos totais: 2.000 + 3.000 + 5.000 = 10.000.</p>
        <p>Razão de cada um: 2/10, 3/10, 5/10.</p>
        <p>Lucro de R$ 10.000: cada um recebe:</p>
        <ul>
          <li>Sócio 1: 10.000 × 2/10 = R$ 2.000</li>
          <li>Sócio 2: 10.000 × 3/10 = R$ 3.000</li>
          <li>Sócio 3: 10.000 × 5/10 = R$ 5.000</li>
        </ul>
        <p><strong>Resposta:</strong> R$ 2.000, R$ 3.000 e R$ 5.000.</p>
      `,
      observacao: "A soma das partes deve ser igual ao total. Verifique sempre.",
      imagem: `
        <svg viewBox="0 0 400 140" xmlns="http://www.w3.org/2000/svg">
          <rect x="0" y="0" width="400" height="140" fill="#f8fafc" rx="8"/>
          <text x="20" y="30" fill="#0f172a" font-size="14">Investimentos: 2k, 3k, 5k → total 10k</text>
          <text x="20" y="60" fill="#0f172a" font-size="14">Lucro 10.000 → k = 1.000</text>
          <rect x="30" y="80" width="60" height="20" fill="#6366f1"/>
          <text x="40" y="95" fill="#fff" font-size="10">2.000</text>
          <rect x="100" y="80" width="60" height="20" fill="#10b981"/>
          <text x="110" y="95" fill="#fff" font-size="10">3.000</text>
          <rect x="170" y="80" width="60" height="20" fill="#f59e0b"/>
          <text x="180" y="95" fill="#fff" font-size="10">5.000</text>
        </svg>
      `
    },
    // Exemplo 6 (existente)
    {
      titulo: "Exemplo 6 – Divisão Inversamente Proporcional",
      enunciado: "Um prêmio de R$ 1.800 será dividido entre três funcionários em partes inversamente proporcionais aos seus atrasos no mês: 2, 3 e 6 dias. Quanto receberá cada um?",
      resolucao: `
        <p>Partes inversamente proporcionais a 2,3,6: proporcionais a 1/2, 1/3, 1/6. MMC=6, multiplicando: 3, 2, 1.</p>
        <p>Soma das partes: 3+2+1=6. k = 1800/6 = 300.</p>
        <p>Partes: 3×300 = 900; 2×300 = 600; 1×300 = 300.</p>
        <p><strong>Resposta:</strong> R$ 900, R$ 600 e R$ 300.</p>
      `,
      observacao: "Na divisão inversa, transforme em uma divisão direta usando os inversos e o MMC.",
      imagem: `
        <svg viewBox="0 0 400 140" xmlns="http://www.w3.org/2000/svg">
          <rect x="0" y="0" width="400" height="140" fill="#f8fafc" rx="8"/>
          <text x="20" y="30" fill="#0f172a" font-size="14">Atrasos: 2, 3, 6 → inversos: 1/2,1/3,1/6</text>
          <text x="20" y="55" fill="#0f172a" font-size="14">Proporcionais a 3,2,1 (MMC=6)</text>
          <rect x="30" y="70" width="80" height="20" fill="#6366f1"/>
          <text x="40" y="85" fill="#fff" font-size="12">3×300=900</text>
          <rect x="130" y="70" width="80" height="20" fill="#10b981"/>
          <text x="140" y="85" fill="#fff" font-size="12">2×300=600</text>
          <rect x="230" y="70" width="80" height="20" fill="#f59e0b"/>
          <text x="240" y="85" fill="#fff" font-size="12">1×300=300</text>
          <text x="20" y="120" fill="#475569" font-size="12">Soma = 6, k = 1800/6 = 300</text>
        </svg>
      `
    },
    // Exemplo 7 (existente)
    {
      titulo: "Exemplo 7 – Regra de Três Simples Inversa",
      enunciado: "Um grupo de 5 trabalhadores constrói um muro em 8 dias. Se forem contratados 8 trabalhadores, com a mesma eficiência, em quantos dias o muro ficará pronto?",
      resolucao: `
        <p>Relação inversa: mais trabalhadores, menos dias.</p>
        <p>Produto constante: 5 × 8 = 8 × d → 40 = 8d → d = 5 dias.</p>
        <p><strong>Resposta:</strong> 5 dias.</p>
      `,
      observacao: "Cuidado para não montar a regra de três direta nesse tipo de problema. Identifique a inversão.",
      imagem: `
        <svg viewBox="0 0 400 120" xmlns="http://www.w3.org/2000/svg">
          <rect x="0" y="0" width="400" height="120" fill="#f8fafc" rx="8"/>
          <text x="20" y="30" fill="#0f172a" font-size="14">5 trab. → 8 dias</text>
          <text x="20" y="50" fill="#0f172a" font-size="14">8 trab. → x dias</text>
          <text x="20" y="80" fill="#475569" font-size="14">5×8 = 8x → x=5</text>
        </svg>
      `
    },
    // Exemplo 8 (existente)
    {
      titulo: "Exemplo 8 – Regra de Três Composta",
      enunciado: "Em uma fábrica, 6 máquinas produzem 1.200 peças em 5 dias. Quantas peças serão produzidas por 9 máquinas em 8 dias, considerando a mesma produtividade?",
      resolucao: `
        <p>Grandezas: máquinas, peças, dias. Todas diretas com peças.</p>
        <p>Montagem: 1200/x = (6/9) × (5/8).</p>
        <p>1200/x = (30)/(72) = 5/12.</p>
        <p>5x = 1200 × 12 → 5x = 14400 → x = 2880 peças.</p>
        <p><strong>Resposta:</strong> 2880 peças.</p>
      `,
      observacao: "Se houvesse uma grandeza inversa, teríamos que inverter a fração correspondente. Aqui todas são diretas.",
      imagem: `
        <svg viewBox="0 0 400 140" xmlns="http://www.w3.org/2000/svg">
          <rect x="0" y="0" width="400" height="140" fill="#f8fafc" rx="8"/>
          <text x="20" y="30" fill="#0f172a" font-size="14">6 máq → 5 dias → 1200 peças</text>
          <text x="20" y="50" fill="#0f172a" font-size="14">9 máq → 8 dias → x peças</text>
          <text x="20" y="80" fill="#475569" font-size="14">1200/x = (6/9)×(5/8) → x = 2880</text>
        </svg>
      `
    },
    // Exemplo 9 (existente)
    {
      titulo: "Exemplo 9 – Regra de Três Composta com Grandeza Inversa",
      enunciado: "Se 10 operários, trabalhando 6 horas por dia, constroem um muro em 8 dias, quantos dias levarão 15 operários trabalhando 8 horas por dia?",
      resolucao: `
        <p>Grandezas: operários (inversa com dias), horas/dia (inversa com dias).</p>
        <p>Montagem: 8/x = (15/10) × (8/6). Invertem-se as frações porque as grandezas são inversas em relação ao número de dias.</p>
        <p>8/x = (15/10)×(8/6) = (3/2)×(4/3) = 12/6 = 2 → 8/x = 2 → x = 4 dias.</p>
        <p><strong>Resposta:</strong> 4 dias.</p>
      `,
      observacao: "Ao comparar com a incógnita (dias), se aumentar operários, dias diminuem → inversa, então inverter a fração. Mesmo para horas/dia.",
      imagem: `
        <svg viewBox="0 0 400 140" xmlns="http://www.w3.org/2000/svg">
          <rect x="0" y="0" width="400" height="140" fill="#f8fafc" rx="8"/>
          <text x="20" y="30" fill="#0f172a" font-size="14">10 op → 6 h/d → 8 dias</text>
          <text x="20" y="50" fill="#0f172a" font-size="14">15 op → 8 h/d → x dias</text>
          <text x="20" y="80" fill="#475569" font-size="14">8/x = (15/10)×(8/6) → x=4</text>
        </svg>
      `
    },
    // Exemplo 10 (existente)
    {
      titulo: "Exemplo 10 – Juros Simples",
      enunciado: "Um capital de R$ 2.500 foi aplicado a uma taxa de 4% ao mês, no regime de juros simples, durante 10 meses. Qual o montante obtido?",
      resolucao: `
        <p>Juros: J = C·i·t = 2500 × 0,04 × 10 = 2500 × 0,4 = R$ 1.000.</p>
        <p>Montante: M = C + J = 2500 + 1000 = R$ 3.500.</p>
        <p><strong>Resposta:</strong> R$ 3.500.</p>
      `,
      observacao: "Em juros simples, a taxa e o tempo devem estar na mesma unidade. Aqui taxa mensal e tempo em meses.",
      imagem: `
        <svg viewBox="0 0 400 120" xmlns="http://www.w3.org/2000/svg">
          <rect x="0" y="0" width="400" height="120" fill="#f8fafc" rx="8"/>
          <text x="20" y="30" fill="#0f172a" font-size="14">C = 2500, i = 4% a.m., t = 10 m</text>
          <text x="20" y="55" fill="#0f172a" font-size="14">J = 2500×0,04×10 = 1000</text>
          <text x="20" y="80" fill="#475569" font-size="14">M = 2500 + 1000 = 3500</text>
        </svg>
      `
    },
    // Exemplo 11 (existente)
    {
      titulo: "Exemplo 11 – Porcentagem com Desconto Sucessivo",
      enunciado: "Uma loja oferece um desconto de 20% sobre o preço de um produto, e em seguida, um desconto adicional de 10%. Qual o desconto total equivalente?",
      resolucao: `
        <p>Desconto de 20%: fator = 0,80.</p>
        <p>Desconto de 10%: fator = 0,90.</p>
        <p>Fator total = 0,80 × 0,90 = 0,72.</p>
        <p>Isso significa que o preço final é 72% do original, ou seja, desconto total de 28%.</p>
        <p><strong>Resposta:</strong> 28%.</p>
      `,
      observacao: "Descontos sucessivos não se somam. 20% + 10% ≠ 30%.",
      imagem: `
        <svg viewBox="0 0 400 140" xmlns="http://www.w3.org/2000/svg">
          <rect x="0" y="0" width="400" height="140" fill="#f8fafc" rx="8"/>
          <text x="20" y="30" fill="#0f172a" font-size="14">Preço original: 100</text>
          <text x="20" y="50" fill="#0f172a" font-size="14">Após 20%: 100×0,80 = 80</text>
          <text x="20" y="70" fill="#0f172a" font-size="14">Após 10%: 80×0,90 = 72</text>
          <text x="20" y="100" fill="#475569" font-size="14">Desconto total: 100 – 72 = 28 → 28%</text>
        </svg>
      `
    },
    // Exemplo 12 (existente)
    {
      titulo: "Exemplo 12 – Mistura de Soluções",
      enunciado: "Temos 5 litros de uma solução salina a 20% e 3 litros a 60%. Qual a concentração da mistura resultante?",
      resolucao: `
        <p>Quantidade de sal na primeira: 5 × 0,20 = 1,0 L. Na segunda: 3 × 0,60 = 1,8 L. Total de sal = 2,8 L.</p>
        <p>Volume total = 5 + 3 = 8 L. Concentração = 2,8 / 8 = 0,35 = 35%.</p>
        <p><strong>Resposta:</strong> 35%.</p>
      `,
      observacao: "A concentração final é a média ponderada das concentrações pelas quantidades.",
      imagem: `
        <svg viewBox="0 0 400 120" xmlns="http://www.w3.org/2000/svg">
          <rect x="0" y="0" width="400" height="120" fill="#f8fafc" rx="8"/>
          <text x="20" y="30" fill="#0f172a" font-size="14">5L a 20%: sal = 1,0L</text>
          <text x="20" y="50" fill="#0f172a" font-size="14">3L a 60%: sal = 1,8L</text>
          <text x="20" y="75" fill="#475569" font-size="14">Total: 8L com 2,8L de sal → 2,8/8 = 35%</text>
        </svg>
      `
    },
    // Exemplo 13 (novo) – Regra de três composta com grandezas mistas
    {
      titulo: "Exemplo 13 – Regra de Três Composta com três grandezas",
      enunciado: "Para construir um muro, 6 operários trabalhando 8 horas por dia levam 10 dias. Quantas horas por dia devem trabalhar 10 operários para construir o mesmo muro em 6 dias?",
      resolucao: `
        <p>Grandezas: operários (inversa com horas/dia), dias (inversa com horas/dia).</p>
        <p>Montagem: 8/x = (10/6) × (6/10)? Cuidado.</p>
        <p>Vamos usar o método do produto constante: operários × horas/dia × dias = constante (total de horas trabalhadas).</p>
        <p>Total de horas = 6 op × 8 h/d × 10 d = 480 h.</p>
        <p>Para 10 op em 6 dias: 10 × x × 6 = 480 → 60x = 480 → x = 8 horas/dia.</p>
        <p><strong>Resposta:</strong> 8 horas por dia.</p>
      `,
      observacao: "Neste caso, o método do produto constante simplifica a resolução. A regra de três composta também funciona, mas evita inversões erradas.",
      imagem: `
        <svg viewBox="0 0 400 150" xmlns="http://www.w3.org/2000/svg">
          <rect x="0" y="0" width="400" height="150" fill="#f8fafc" rx="8"/>
          <text x="20" y="30" fill="#0f172a" font-size="14">6 op × 8 h/d × 10 d = 480 h</text>
          <text x="20" y="55" fill="#0f172a" font-size="14">10 op × x h/d × 6 d = 480 h</text>
          <text x="20" y="80" fill="#475569" font-size="14">60x = 480 → x = 8 h/d</text>
        </svg>
      `
    },
    // Exemplo 14 (novo) – Divisão proporcional composta
    {
      titulo: "Exemplo 14 – Divisão Proporcional Composta",
      enunciado: "Uma empresa distribuiu R$ 12.000 de bônus entre três funcionários, de modo que a divisão seja diretamente proporcional ao tempo de serviço (3, 5 e 7 anos) e inversamente proporcional ao número de faltas (2, 4 e 6 faltas). Quanto recebeu cada um?",
      resolucao: `
        <p>Para cada funcionário, o coeficiente é: (tempo de serviço) × (1/faltas).</p>
        <ul>
          <li>F1: 3 × 1/2 = 1,5 = 3/2</li>
          <li>F2: 5 × 1/4 = 1,25 = 5/4</li>
          <li>F3: 7 × 1/6 = 7/6</li>
        </ul>
        <p>Para eliminar frações, multiplicamos todos pelo MMC(2,4,6)=12:</p>
        <ul>
          <li>F1: (3/2)×12 = 18</li>
          <li>F2: (5/4)×12 = 15</li>
          <li>F3: (7/6)×12 = 14</li>
        </ul>
        <p>Soma dos coeficientes = 18+15+14 = 47. k = 12000/47.</p>
        <p>Partes: F1 = 18×(12000/47) ≈ 4595,74; F2 ≈ 3829,79; F3 ≈ 3574,47.</p>
        <p><strong>Resposta:</strong> Aproximadamente R$ 4.595,74; R$ 3.829,79; R$ 3.574,47.</p>
      `,
      observacao: "Em divisão composta, multiplique os fatores diretos e inversos, depois normalize com o MMC.",
      imagem: `
        <svg viewBox="0 0 400 160" xmlns="http://www.w3.org/2000/svg">
          <rect x="0" y="0" width="400" height="160" fill="#f8fafc" rx="8"/>
          <text x="20" y="30" fill="#0f172a" font-size="14">Coeficientes: 3/2, 5/4, 7/6</text>
          <text x="20" y="55" fill="#0f172a" font-size="14">MMC=12 → 18, 15, 14</text>
          <text x="20" y="80" fill="#475569" font-size="14">Soma=47, k=12000/47</text>
          <text x="20" y="105" fill="#475569" font-size="14">Partes: 4595,74; 3829,79; 3574,47</text>
        </svg>
      `
    },
    // Exemplo 15 (novo) – Sucessivos descontos e aumentos
    {
      titulo: "Exemplo 15 – Aumentos e Descontos Sucessivos",
      enunciado: "Um produto sofreu um aumento de 15% e, em seguida, um desconto de 20%. Qual a variação percentual total em relação ao preço original?",
      resolucao: `
        <p>Aumento de 15%: fator = 1,15.</p>
        <p>Desconto de 20%: fator = 0,80.</p>
        <p>Fator total = 1,15 × 0,80 = 0,92.</p>
        <p>Isso significa que o preço final é 92% do original, ou seja, houve uma redução de 8%.</p>
        <p><strong>Resposta:</strong> Variação de –8% (desconto de 8%).</p>
      `,
      observacao: "A ordem dos fatores não altera o produto final. O resultado seria o mesmo se o desconto viesse primeiro.",
      imagem: `
        <svg viewBox="0 0 400 140" xmlns="http://www.w3.org/2000/svg">
          <rect x="0" y="0" width="400" height="140" fill="#f8fafc" rx="8"/>
          <text x="20" y="30" fill="#0f172a" font-size="14">Preço original: 100</text>
          <text x="20" y="50" fill="#0f172a" font-size="14">+15% → 100×1,15 = 115</text>
          <text x="20" y="70" fill="#0f172a" font-size="14">–20% → 115×0,80 = 92</text>
          <text x="20" y="100" fill="#475569" font-size="14">Variação: 92 – 100 = –8 → –8%</text>
        </svg>
      `
    },
    // Exemplo 16 (novo) – Juros simples (determinação do capital)
    {
      titulo: "Exemplo 16 – Juros Simples – Capital Desconhecido",
      enunciado: "Um investimento rendeu R$ 600,00 de juros simples após 8 meses, a uma taxa de 5% ao mês. Qual era o capital aplicado?",
      resolucao: `
        <p>J = C × i × t → 600 = C × 0,05 × 8 = C × 0,4.</p>
        <p>C = 600 / 0,4 = 1500.</p>
        <p><strong>Resposta:</strong> R$ 1.500,00.</p>
      `,
      observacao: "Isolar o capital na fórmula. Lembre-se de que a taxa deve estar em decimal.",
      imagem: `
        <svg viewBox="0 0 400 120" xmlns="http://www.w3.org/2000/svg">
          <rect x="0" y="0" width="400" height="120" fill="#f8fafc" rx="8"/>
          <text x="20" y="30" fill="#0f172a" font-size="14">J = 600, i = 5% a.m. = 0,05, t = 8 m</text>
          <text x="20" y="55" fill="#0f172a" font-size="14">600 = C × 0,05 × 8 = 0,4C</text>
          <text x="20" y="80" fill="#475569" font-size="14">C = 600 / 0,4 = 1500</text>
        </svg>
      `
    },
    // Exemplo 17 (novo) – Mistura com proporção inversa
    {
      titulo: "Exemplo 17 – Mistura de Combustíveis",
      enunciado: "Um tanque contém 40 litros de gasolina pura. Deseja-se obter uma mistura com 25% de álcool, adicionando álcool puro. Quantos litros de álcool devem ser adicionados?",
      resolucao: `
        <p>Inicialmente: 40 L de gasolina, 0 de álcool. Queremos que a mistura final tenha 25% de álcool e 75% de gasolina.</p>
        <p>Seja x a quantidade de álcool adicionada. Volume final = 40 + x.</p>
        <p>Quantidade de gasolina permanece 40 L, que deve corresponder a 75% do total.</p>
        <p>Assim: 40 = 0,75 × (40 + x) → 40 = 30 + 0,75x → 10 = 0,75x → x = 10 / 0,75 = 13,33 L.</p>
        <p><strong>Resposta:</strong> 13,33 litros de álcool.</p>
      `,
      observacao: "Nesse tipo de problema, fixe um componente (gasolina) e use a porcentagem final para achar o volume total.",
      imagem: `
        <svg viewBox="0 0 400 140" xmlns="http://www.w3.org/2000/svg">
          <rect x="0" y="0" width="400" height="140" fill="#f8fafc" rx="8"/>
          <text x="20" y="30" fill="#0f172a" font-size="14">Gasolina = 40 L (75% final)</text>
          <text x="20" y="50" fill="#0f172a" font-size="14">Total final = 40 / 0,75 = 53,33 L</text>
          <text x="20" y="75" fill="#0f172a" font-size="14">Álcool adicionado = 53,33 – 40 = 13,33 L</text>
        </svg>
      `
    },
    // Exemplo 18 (novo) – Regra de três com porcentagem
    {
      titulo: "Exemplo 18 – Regra de Três com Porcentagem",
      enunciado: "Em uma pesquisa, 60% dos entrevistados preferem a marca A. Se 1.200 pessoas preferem a marca A, qual o total de entrevistados?",
      resolucao: `
        <p>60% = 60/100 = 0,6. Se 0,6 do total equivale a 1200, então total = 1200 / 0,6 = 2000.</p>
        <p><strong>Resposta:</strong> 2000 entrevistados.</p>
      `,
      observacao: "Use a regra de três: 1200 está para 60% assim como x está para 100%.",
      imagem: `
        <svg viewBox="0 0 400 120" xmlns="http://www.w3.org/2000/svg">
          <rect x="0" y="0" width="400" height="120" fill="#f8fafc" rx="8"/>
          <text x="20" y="30" fill="#0f172a" font-size="14">60% → 1200</text>
          <text x="20" y="55" fill="#0f172a" font-size="14">100% → x</text>
          <text x="20" y="80" fill="#475569" font-size="14">x = 1200 × 100 / 60 = 2000</text>
        </svg>
      `
    },
    // Exemplo 19 (novo) – Divisão proporcional com números grandes
    {
      titulo: "Exemplo 19 – Divisão Proporcional com Frações",
      enunciado: "Divida R$ 5.500 em partes diretamente proporcionais a 1/2, 2/3 e 3/4.",
      resolucao: `
        <p>Primeiro, encontre frações equivalentes com um denominador comum. MMC(2,3,4) = 12.</p>
        <p>1/2 = 6/12, 2/3 = 8/12, 3/4 = 9/12.</p>
        <p>Assim, as partes são proporcionais a 6, 8, 9.</p>
        <p>Soma = 6+8+9 = 23. k = 5500 / 23.</p>
        <p>Partes: 6k, 8k, 9k.</p>
        <p>6×(5500/23) ≈ 1434,78; 8×(5500/23) ≈ 1913,04; 9×(5500/23) ≈ 2152,17.</p>
        <p><strong>Resposta:</strong> Aproximadamente R$ 1.434,78; R$ 1.913,04; R$ 2.152,17.</p>
      `,
      observacao: "Multiplique todas as frações pelo MMC para obter coeficientes inteiros.",
      imagem: `
        <svg viewBox="0 0 400 150" xmlns="http://www.w3.org/2000/svg">
          <rect x="0" y="0" width="400" height="150" fill="#f8fafc" rx="8"/>
          <text x="20" y="30" fill="#0f172a" font-size="14">1/2, 2/3, 3/4 → MMC=12 → 6,8,9</text>
          <text x="20" y="55" fill="#0f172a" font-size="14">Soma=23, k=5500/23</text>
          <text x="20" y="80" fill="#475569" font-size="14">Partes: 1434,78; 1913,04; 2152,17</text>
        </svg>
      `
    },
    // Exemplo 20 (novo) – Contextualizado CESGRANRIO (escala + juros)
    {
      titulo: "Exemplo 20 – Contexto CESGRANRIO (Escala e Juros)",
      enunciado: "Um terreno retangular mede 4 cm por 6 cm em uma planta com escala 1:500. O proprietário deseja cercar o terreno com uma tela que custa R$ 15 o metro. Além disso, ele aplicou o valor da tela em um investimento a juros simples de 2% ao mês por 5 meses. Qual o montante obtido ao final?",
      resolucao: `
        <p>Escala 1:500 → 1 cm = 500 cm = 5 m. As dimensões reais são 4×5 = 20 m e 6×5 = 30 m.</p>
        <p>Perímetro = 2×(20+30) = 100 m.</p>
        <p>Custo da tela = 100 × 15 = R$ 1.500.</p>
        <p>Aplicando a juros simples: J = 1500 × 0,02 × 5 = 150. Montante = 1500 + 150 = 1650.</p>
        <p><strong>Resposta:</strong> R$ 1.650,00.</p>
      `,
      observacao: "Leia atentamente o enunciado e identifique as etapas: escala, perímetro, custo, juros.",
      imagem: `
        <svg viewBox="0 0 400 160" xmlns="http://www.w3.org/2000/svg">
          <rect x="0" y="0" width="400" height="160" fill="#f8fafc" rx="8"/>
          <text x="20" y="30" fill="#0f172a" font-size="14">Planta: 4 cm × 6 cm → Real: 20 m × 30 m</text>
          <text x="20" y="55" fill="#0f172a" font-size="14">Perímetro = 100 m → Custo = 1500</text>
          <text x="20" y="80" fill="#0f172a" font-size="14">Juros: 1500×0,02×5 = 150</text>
          <text x="20" y="105" fill="#475569" font-size="14">Montante = 1500 + 150 = 1650</text>
        </svg>
      `
    }
  ],

  diagramasSVG: [
    // Diagrama 1 (existente) – Razões equivalentes
    `<svg viewBox="0 0 400 150" xmlns="http://www.w3.org/2000/svg">
      <rect x="0" y="0" width="400" height="150" fill="#f1f5f9" rx="8"/>
      <text x="20" y="30" fill="#0f172a" font-size="16" font-weight="bold">Razões Equivalentes</text>
      <rect x="30" y="60" width="80" height="30" fill="#6366f1" rx="4"/>
      <text x="55" y="80" fill="#fff" font-size="14">1:2</text>
      <text x="120" y="80" fill="#0f172a" font-size="20">=</text>
      <rect x="150" y="60" width="80" height="30" fill="#10b981" rx="4"/>
      <text x="175" y="80" fill="#fff" font-size="14">2:4</text>
      <text x="240" y="80" fill="#0f172a" font-size="20">=</text>
      <rect x="270" y="60" width="80" height="30" fill="#f59e0b" rx="4"/>
      <text x="295" y="80" fill="#fff" font-size="14">3:6</text>
      <text x="30" y="130" fill="#475569" font-size="14">Multiplicando ou dividindo os termos por um mesmo número, obtemos razões equivalentes.</text>
    </svg>`,
    // Diagrama 2 (existente) – Proporcionalidade direta vs inversa
    `<svg viewBox="0 0 400 150" xmlns="http://www.w3.org/2000/svg">
      <rect x="0" y="0" width="400" height="150" fill="#f1f5f9" rx="8"/>
      <text x="20" y="30" fill="#0f172a" font-size="16" font-weight="bold">Gráficos de Proporcionalidade</text>
      <line x1="40" y1="120" x2="180" y2="120" stroke="#94a3b8" stroke-width="2"/>
      <line x1="40" y1="120" x2="40" y2="30" stroke="#94a3b8" stroke-width="2"/>
      <line x1="40" y1="120" x2="160" y2="40" stroke="#6366f1" stroke-width="3"/>
      <text x="100" y="20" fill="#6366f1" font-size="12">Direta (reta)</text>
      <line x1="220" y1="120" x2="360" y2="120" stroke="#94a3b8" stroke-width="2"/>
      <line x1="220" y1="120" x2="220" y2="30" stroke="#94a3b8" stroke-width="2"/>
      <path d="M220 120 Q290 80 360 40" stroke="#ef4444" stroke-width="3" fill="none"/>
      <text x="280" y="20" fill="#ef4444" font-size="12">Inversa (hipérbole)</text>
    </svg>`,
    // Diagrama 3 (existente) – Fatores de multiplicação
    `<svg viewBox="0 0 400 150" xmlns="http://www.w3.org/2000/svg">
      <rect x="0" y="0" width="400" height="150" fill="#f1f5f9" rx="8"/>
      <text x="20" y="30" fill="#0f172a" font-size="16" font-weight="bold">Fatores de Multiplicação</text>
      <rect x="30" y="60" width="120" height="30" fill="#10b981" rx="4"/>
      <text x="50" y="80" fill="#fff" font-size="12">Aumento: (1 + i)</text>
      <rect x="170" y="60" width="120" height="30" fill="#ef4444" rx="4"/>
      <text x="190" y="80" fill="#fff" font-size="12">Desconto: (1 – i)</text>
      <text x="30" y="120" fill="#475569" font-size="14">Ex: +20% → 1,20 ; –20% → 0,80</text>
    </svg>`,
    // Diagrama 4 (existente) – Regra de três composta
    `<svg viewBox="0 0 400 150" xmlns="http://www.w3.org/2000/svg">
      <rect x="0" y="0" width="400" height="150" fill="#f1f5f9" rx="8"/>
      <text x="20" y="30" fill="#0f172a" font-size="16" font-weight="bold">Regra de Três Composta</text>
      <rect x="30" y="60" width="80" height="30" fill="#6366f1" rx="4"/>
      <text x="50" y="80" fill="#fff" font-size="12">A1</text>
      <rect x="120" y="60" width="80" height="30" fill="#10b981" rx="4"/>
      <text x="140" y="80" fill="#fff" font-size="12">B1</text>
      <rect x="210" y="60" width="80" height="30" fill="#f59e0b" rx="4"/>
      <text x="230" y="80" fill="#fff" font-size="12">C1</text>
      <rect x="30" y="100" width="80" height="30" fill="#6366f1" rx="4"/>
      <text x="50" y="120" fill="#fff" font-size="12">A2</text>
      <rect x="120" y="100" width="80" height="30" fill="#10b981" rx="4"/>
      <text x="140" y="120" fill="#fff" font-size="12">B2</text>
      <rect x="210" y="100" width="80" height="30" fill="#f59e0b" rx="4"/>
      <text x="230" y="120" fill="#fff" font-size="12">C2</text>
      <text x="310" y="80" fill="#0f172a" font-size="12">Analisar</text>
      <text x="310" y="100" fill="#0f172a" font-size="12">cada relação</text>
    </svg>`,
    // Diagrama 5 (existente) – Juros simples
    `<svg viewBox="0 0 400 150" xmlns="http://www.w3.org/2000/svg">
      <rect x="0" y="0" width="400" height="150" fill="#f1f5f9" rx="8"/>
      <text x="20" y="30" fill="#0f172a" font-size="16" font-weight="bold">Evolução dos Juros Simples</text>
      <line x1="40" y1="110" x2="340" y2="110" stroke="#94a3b8" stroke-width="2"/>
      <line x1="40" y1="110" x2="40" y2="30" stroke="#94a3b8" stroke-width="2"/>
      <line x1="40" y1="100" x2="340" y2="70" stroke="#6366f1" stroke-width="3"/>
      <text x="340" y="65" fill="#0f172a" font-size="12">M = C + J</text>
      <text x="100" y="130" fill="#475569" font-size="12">Tempo</text>
      <circle cx="90" cy="95" r="3" fill="#ef4444"/>
      <text x="90" y="85" fill="#0f172a" font-size="10">C</text>
    </svg>`,
    // Diagrama 6 (existente) – Mistura
    `<svg viewBox="0 0 400 150" xmlns="http://www.w3.org/2000/svg">
      <rect x="0" y="0" width="400" height="150" fill="#f1f5f9" rx="8"/>
      <text x="20" y="30" fill="#0f172a" font-size="16" font-weight="bold">Mistura – Método da Cruz</text>
      <rect x="40" y="60" width="60" height="30" fill="#a7f3d0" rx="4"/>
      <text x="55" y="80" fill="#0f172a" font-size="12">20%</text>
      <rect x="250" y="60" width="60" height="30" fill="#fde68a" rx="4"/>
      <text x="265" y="80" fill="#0f172a" font-size="12">50%</text>
      <rect x="145" y="90" width="60" height="30" fill="#93c5fd" rx="4"/>
      <text x="155" y="110" fill="#0f172a" font-size="12">30%</text>
      <line x1="100" y1="75" x2="145" y2="105" stroke="#94a3b8" stroke-width="2"/>
      <line x1="280" y1="75" x2="205" y2="105" stroke="#94a3b8" stroke-width="2"/>
      <text x="110" y="70" fill="#ef4444" font-size="10">dif 20</text>
      <text x="200" y="70" fill="#ef4444" font-size="10">dif 10</text>
      <text x="30" y="135" fill="#475569" font-size="12">Proporção: 20:10 = 2:1 (2 partes da 20% para 1 da 50%)</text>
    </svg>`,
    // Diagrama 7 (novo) – Fluxograma para decidir direta ou inversa
    `<svg viewBox="0 0 400 180" xmlns="http://www.w3.org/2000/svg">
      <rect x="0" y="0" width="400" height="180" fill="#f1f5f9" rx="8"/>
      <text x="20" y="30" fill="#0f172a" font-size="16" font-weight="bold">Como identificar a relação?</text>
      <rect x="50" y="50" width="100" height="30" fill="#6366f1" rx="4"/>
      <text x="60" y="70" fill="#fff" font-size="12">Aumenta A?</text>
      <line x1="100" y1="80" x2="100" y2="100" stroke="#94a3b8" stroke-width="2" marker-end="url(#arrow3)"/>
      <rect x="50" y="100" width="100" height="30" fill="#10b981" rx="4"/>
      <text x="60" y="120" fill="#fff" font-size="12">B aumenta?</text>
      <line x1="150" y1="115" x2="190" y2="115" stroke="#94a3b8" stroke-width="2" marker-end="url(#arrow3)"/>
      <rect x="190" y="100" width="80" height="30" fill="#f59e0b" rx="4"/>
      <text x="200" y="120" fill="#fff" font-size="12">Direta</text>
      <line x1="100" y1="115" x2="50" y2="115" stroke="#94a3b8" stroke-width="2"/>
      <line x1="50" y1="115" x2="50" y2="130" stroke="#94a3b8" stroke-width="2"/>
      <rect x="10" y="130" width="80" height="30" fill="#ef4444" rx="4"/>
      <text x="20" y="150" fill="#fff" font-size="12">Inversa</text>
      <defs>
        <marker id="arrow3" markerWidth="10" markerHeight="7" refX="10" refY="3.5" orient="auto">
          <polygon points="0 0, 10 3.5, 0 7" fill="#94a3b8"/>
        </marker>
      </defs>
    </svg>`,
    // Diagrama 8 (novo) – Escala e conversão
    `<svg viewBox="0 0 400 150" xmlns="http://www.w3.org/2000/svg">
      <rect x="0" y="0" width="400" height="150" fill="#f1f5f9" rx="8"/>
      <text x="20" y="30" fill="#0f172a" font-size="16" font-weight="bold">Escala – Conversão de Unidades</text>
      <rect x="30" y="60" width="100" height="30" fill="#6366f1" rx="4"/>
      <text x="40" y="80" fill="#fff" font-size="12">cm no mapa</text>
      <text x="140" y="80" fill="#0f172a" font-size="20">× escala</text>
      <rect x="210" y="60" width="100" height="30" fill="#10b981" rx="4"/>
      <text x="220" y="80" fill="#fff" font-size="12">cm real</text>
      <text x="320" y="80" fill="#0f172a" font-size="20">÷ 100.000</text>
      <rect x="30" y="110" width="100" height="30" fill="#f59e0b" rx="4"/>
      <text x="40" y="130" fill="#fff" font-size="12">km real</text>
      <line x1="130" y1="75" x2="210" y2="75" stroke="#94a3b8" stroke-width="2" marker-end="url(#arrow4)"/>
      <line x1="310" y1="75" x2="330" y2="125" stroke="#94a3b8" stroke-width="2" marker-end="url(#arrow4)"/>
      <defs>
        <marker id="arrow4" markerWidth="10" markerHeight="7" refX="10" refY="3.5" orient="auto">
          <polygon points="0 0, 10 3.5, 0 7" fill="#94a3b8"/>
        </marker>
      </defs>
    </svg>`,
    // Diagrama 9 (novo) – Comparação juros simples vs composto (conceitual)
    `<svg viewBox="0 0 400 150" xmlns="http://www.w3.org/2000/svg">
      <rect x="0" y="0" width="400" height="150" fill="#f1f5f9" rx="8"/>
      <text x="20" y="30" fill="#0f172a" font-size="16" font-weight="bold">Juros Simples vs Compostos</text>
      <line x1="40" y1="120" x2="340" y2="120" stroke="#94a3b8" stroke-width="2"/>
      <line x1="40" y1="120" x2="40" y2="30" stroke="#94a3b8" stroke-width="2"/>
      <line x1="40" y1="120" x2="300" y2="70" stroke="#6366f1" stroke-width="3"/>
      <text x="300" y="65" fill="#6366f1" font-size="12">Simples</text>
      <path d="M40 120 Q170 80 300 40" stroke="#ef4444" stroke-width="3" fill="none"/>
      <text x="300" y="35" fill="#ef4444" font-size="12">Composto</text>
      <text x="100" y="140" fill="#475569" font-size="12">Tempo</text>
    </svg>`,
    // Diagrama 10 (novo) – Proporção contínua (média geométrica)
    `<svg viewBox="0 0 400 150" xmlns="http://www.w3.org/2000/svg">
      <rect x="0" y="0" width="400" height="150" fill="#f1f5f9" rx="8"/>
      <text x="20" y="30" fill="#0f172a" font-size="16" font-weight="bold">Proporção Contínua</text>
      <rect x="30" y="60" width="80" height="30" fill="#6366f1" rx="4"/>
      <text x="55" y="80" fill="#fff" font-size="14">a</text>
      <text x="120" y="80" fill="#0f172a" font-size="20">:</text>
      <rect x="140" y="60" width="80" height="30" fill="#10b981" rx="4"/>
      <text x="165" y="80" fill="#fff" font-size="14">b</text>
      <text x="230" y="80" fill="#0f172a" font-size="20">=</text>
      <rect x="250" y="60" width="80" height="30" fill="#10b981" rx="4"/>
      <text x="275" y="80" fill="#fff" font-size="14">b</text>
      <text x="340" y="80" fill="#0f172a" font-size="20">:</text>
      <rect x="360" y="60" width="80" height="30" fill="#f59e0b" rx="4"/>
      <text x="385" y="80" fill="#fff" font-size="14">c</text>
      <text x="30" y="125" fill="#475569" font-size="14">b² = a·c → b = √(a·c) (média geométrica)</text>
    </svg>`,
    // Diagrama 11 (novo) – Passo a passo regra de três composta
    `<svg viewBox="0 0 400 180" xmlns="http://www.w3.org/2000/svg">
      <rect x="0" y="0" width="400" height="180" fill="#f1f5f9" rx="8"/>
      <text x="20" y="30" fill="#0f172a" font-size="16" font-weight="bold">Passo a passo – Regra de Três Composta</text>
      <rect x="30" y="50" width="140" height="25" fill="#e2e8f0" rx="4"/>
      <text x="35" y="67" fill="#0f172a" font-size="12">1. Montar tabela com grandezas</text>
      <rect x="30" y="80" width="140" height="25" fill="#e2e8f0" rx="4"/>
      <text x="35" y="97" fill="#0f172a" font-size="12">2. Isolar a incógnita</text>
      <rect x="30" y="110" width="140" height="25" fill="#e2e8f0" rx="4"/>
      <text x="35" y="127" fill="#0f172a" font-size="12">3. Analisar relações</text>
      <rect x="30" y="140" width="140" height="25" fill="#e2e8f0" rx="4"/>
      <text x="35" y="157" fill="#0f172a" font-size="12">4. Montar equação e resolver</text>
      <line x1="170" y1="62" x2="250" y2="62" stroke="#94a3b8" stroke-width="2" marker-end="url(#arrow5)"/>
      <line x1="170" y1="92" x2="250" y2="92" stroke="#94a3b8" stroke-width="2" marker-end="url(#arrow5)"/>
      <line x1="170" y1="122" x2="250" y2="122" stroke="#94a3b8" stroke-width="2" marker-end="url(#arrow5)"/>
      <line x1="170" y1="152" x2="250" y2="152" stroke="#94a3b8" stroke-width="2" marker-end="url(#arrow5)"/>
      <defs>
        <marker id="arrow5" markerWidth="10" markerHeight="7" refX="10" refY="3.5" orient="auto">
          <polygon points="0 0, 10 3.5, 0 7" fill="#94a3b8"/>
        </marker>
      </defs>
    </svg>`,
    // Diagrama 12 (novo) – Divisão proporcional visual
    `<svg viewBox="0 0 400 150" xmlns="http://www.w3.org/2000/svg">
      <rect x="0" y="0" width="400" height="150" fill="#f1f5f9" rx="8"/>
      <text x="20" y="30" fill="#0f172a" font-size="16" font-weight="bold">Divisão Proporcional (Direta)</text>
      <rect x="30" y="60" width="60" height="30" fill="#6366f1" rx="4"/>
      <text x="40" y="80" fill="#fff" font-size="12">2k</text>
      <rect x="100" y="60" width="90" height="30" fill="#10b981" rx="4"/>
      <text x="110" y="80" fill="#fff" font-size="12">3k</text>
      <rect x="200" y="60" width="150" height="30" fill="#f59e0b" rx="4"/>
      <text x="210" y="80" fill="#fff" font-size="12">5k</text>
      <text x="30" y="120" fill="#475569" font-size="14">Soma = 10k → k = Total/10</text>
      <text x="30" y="140" fill="#0f172a" font-size="12">Cada parte = k × coeficiente</text>
    </svg>`
  ],

  etapasAprendizagem: [
    // Exercício 1 (existente)
    {
      tipo: "exercicio",
      titulo: "Exercício 1 – Identificando razões",
      conteudo: "Leia a situação e identifique a razão pedida.",
      pergunta: "Em uma sala de aula, há 12 meninos e 18 meninas. Qual é a razão entre o número de meninos e o número total de alunos?",
      alternativas: [],
      correta: null,
      explicacaoAcerto: "A razão é meninos/total = 12/(12+18) = 12/30 = 2/5.",
      explicacaoErro: "Não confunda com a razão meninos/meninas, que seria 12/18 = 2/3."
    },
    // Exercício 2 (existente)
    {
      tipo: "exercicio",
      titulo: "Exercício 2 – Simplificação de razões",
      conteudo: "Simplifique a razão a seguir.",
      pergunta: "Simplifique a razão 24:36.",
      alternativas: [],
      correta: null,
      explicacaoAcerto: "Dividimos ambos os termos por 12 (MDC de 24 e 36) → 2:3.",
      explicacaoErro: "Lembre-se de dividir pelo máximo divisor comum para obter a forma irredutível."
    },
    // Exercício 3 (existente)
    {
      tipo: "exercicio",
      titulo: "Exercício 3 – Proporção desconhecida",
      conteudo: "Encontre o valor de x na proporção.",
      pergunta: "Resolva: 5/x = 15/9.",
      alternativas: [],
      correta: null,
      explicacaoAcerto: "Multiplicando cruzado: 5×9 = 15x → 45 = 15x → x = 3.",
      explicacaoErro: "Cuidado com a ordem: 5/x = 15/9 → 5·9 = 15·x."
    },
    // Exercício 4 (existente)
    {
      tipo: "exercicio",
      titulo: "Exercício 4 – Regra de três simples direta",
      conteudo: "Resolva o problema.",
      pergunta: "Se 4 litros de tinta pintam 60 m² de parede, quantos litros são necessários para pintar 90 m²?",
      alternativas: [],
      correta: null,
      explicacaoAcerto: "4/60 = x/90 → 60x = 360 → x = 6 litros.",
      explicacaoErro: "A relação é direta, então monte a proporção na mesma ordem."
    },
    // Exercício 5 (existente)
    {
      tipo: "exercicio",
      titulo: "Exercício 5 – Juros simples",
      conteudo: "Calcule os juros simples.",
      pergunta: "Qual o juro produzido por R$ 800,00 a 3% ao mês durante 4 meses?",
      alternativas: [],
      correta: null,
      explicacaoAcerto: "J = 800 × 0,03 × 4 = R$ 96,00.",
      explicacaoErro: "Juros simples: J = C·i·t. Lembre de transformar a taxa em decimal."
    },
    // Questão 1 (existente)
    {
      tipo: "questao",
      titulo: "Questão 1 – CESGRANRIO (estilo)",
      conteudo: "Leia atentamente e assinale a alternativa correta.",
      pergunta: "Uma empresa tem 120 funcionários, sendo 72 homens e 48 mulheres. A razão entre o número de mulheres e o número de homens é:",
      alternativas: ["A) 2:3", "B) 3:2", "C) 2:5", "D) 5:2", "E) 3:5"],
      correta: 0,
      explicacaoAcerto: "Mulheres/homens = 48/72 = 2/3 = 2:3.",
      explicacaoErro: "Cuidado com a ordem: a questão pede mulheres para homens, não homens para mulheres."
    },
    // Questão 2 (existente)
    {
      tipo: "questao",
      titulo: "Questão 2 – CESGRANRIO (estilo)",
      conteudo: "Proporção e termo desconhecido.",
      pergunta: "Sabendo que x/12 = 18/27, o valor de x é:",
      alternativas: ["A) 6", "B) 8", "C) 9", "D) 12", "E) 15"],
      correta: 1,
      explicacaoAcerto: "x·27 = 12·18 → 27x = 216 → x = 8.",
      explicacaoErro: "Não se esqueça de multiplicar cruzado corretamente."
    },
    // Questão 3 (existente)
    {
      tipo: "questao",
      titulo: "Questão 3 – CESGRANRIO (estilo)",
      conteudo: "Regra de três inversa.",
      pergunta: "Um trem viaja a 60 km/h e faz um percurso em 4 horas. Se a velocidade aumentar para 80 km/h, o tempo de viagem será de:",
      alternativas: ["A) 2h", "B) 2,5h", "C) 3h", "D) 3,5h", "E) 4h"],
      correta: 2,
      explicacaoAcerto: "60×4 = 80×t → t = 3h.",
      explicacaoErro: "A relação é inversa, então não se monta como regra de três direta."
    },
    // Questão 4 (existente)
    {
      tipo: "questao",
      titulo: "Questão 4 – CESGRANRIO (estilo)",
      conteudo: "Porcentagem e desconto.",
      pergunta: "Um produto custa R$ 200,00. Se sofrer um desconto de 15%, qual será seu preço final?",
      alternativas: ["A) R$ 170,00", "B) R$ 175,00", "C) R$ 180,00", "D) R$ 185,00", "E) R$ 190,00"],
      correta: 0,
      explicacaoAcerto: "200 × 0,85 = 170.",
      explicacaoErro: "Desconto de 15% significa pagar 85% do valor."
    },
    // Questão 5 (existente)
    {
      tipo: "questao",
      titulo: "Questão 5 – CESGRANRIO (estilo)",
      conteudo: "Mistura de soluções.",
      pergunta: "Misturando-se 4 litros de álcool a 70% com 6 litros de álcool a 40%, qual a concentração da mistura?",
      alternativas: ["A) 48%", "B) 50%", "C) 52%", "D) 54%", "E) 55%"],
      correta: 2,
      explicacaoAcerto: "Álcool puro: 4×0,70 + 6×0,40 = 2,8+2,4=5,2L. Volume total 10L. Concentração = 5,2/10 = 0,52 = 52%.",
      explicacaoErro: "Calcule a quantidade total do soluto e divida pelo volume total."
    },
    // Questão 6 (existente)
    {
      tipo: "questao",
      titulo: "Questão 6 – CESGRANRIO (estilo)",
      conteudo: "Divisão inversamente proporcional.",
      pergunta: "Divida R$ 6.200 em partes inversamente proporcionais a 2, 3 e 5. A menor parte será:",
      alternativas: ["A) R$ 1.200", "B) R$ 1.500", "C) R$ 1.800", "D) R$ 2.000", "E) R$ 2.400"],
      correta: 0,
      explicacaoAcerto: "Inversos: 1/2, 1/3, 1/5 → MMC=30 → 15,10,6. Soma=31, k=6200/31=200. Menor=6×200=1200.",
      explicacaoErro: "Transforme em direta usando os inversos e o MMC."
    },
    // Exercício 7 (novo) – Regra de três composta
    {
      tipo: "exercicio",
      titulo: "Exercício 7 – Regra de três composta",
      conteudo: "Resolva com três grandezas.",
      pergunta: "Se 3 máquinas produzem 1200 peças em 4 dias, quantas peças produzirão 5 máquinas em 6 dias?",
      alternativas: [],
      correta: null,
      explicacaoAcerto: "1200/x = (3/5)×(4/6) = 12/30 = 2/5 → x = 1200×5/2 = 3000.",
      explicacaoErro: "A relação é direta para máquinas e dias. Monte a proporção corretamente."
    },
    // Exercício 8 (novo) – Desconto sucessivo
    {
      tipo: "exercicio",
      titulo: "Exercício 8 – Descontos sucessivos",
      conteudo: "Calcule o desconto total.",
      pergunta: "Uma mercadoria sofre dois descontos sucessivos de 10% e 15%. Qual o desconto total percentual?",
      alternativas: [],
      correta: null,
      explicacaoAcerto: "Fator = 0,90 × 0,85 = 0,765 → desconto = 1 – 0,765 = 0,235 = 23,5%.",
      explicacaoErro: "Não some os percentuais: 10%+15% ≠ 25%."
    },
    // Exercício 9 (novo) – Juros simples com tempo em dias
    {
      tipo: "exercicio",
      titulo: "Exercício 9 – Juros simples com dias",
      conteudo: "Calcule o juros.",
      pergunta: "Qual o juro de R$ 1.000,00 aplicado a 5% ao mês durante 60 dias? (considere mês de 30 dias)",
      alternativas: [],
      correta: null,
      explicacaoAcerto: "t = 60/30 = 2 meses. J = 1000 × 0,05 × 2 = R$ 100,00.",
      explicacaoErro: "Converta dias em meses antes de aplicar a fórmula."
    },
    // Exercício 10 (novo) – Divisão proporcional composta
    {
      tipo: "exercicio",
      titulo: "Exercício 10 – Divisão composta",
      conteudo: "Divida proporcionalmente.",
      pergunta: "Divida 240 em partes diretamente proporcionais a 2 e 3 e inversamente proporcionais a 4 e 5. Quais são as partes?",
      alternativas: [],
      correta: null,
      explicacaoAcerto: "Coeficientes: (2/4) = 0,5 e (3/5) = 0,6 → 5 e 6 (multiplicando por 10). Soma=11, k=240/11. Partes: 5k e 6k ≈ 109,09 e 130,91.",
      explicacaoErro: "Multiplique direto e inverso para obter os coeficientes."
    },
    // Questão 11 (nova) – Escala
    {
      tipo: "questao",
      titulo: "Questão 11 – CESGRANRIO (Escala)",
      conteudo: "Escala e distância real.",
      pergunta: "Em um mapa de escala 1:50.000, a distância entre dois pontos é de 8 cm. Qual a distância real em km?",
      alternativas: ["A) 4 km", "B) 5 km", "C) 6 km", "D) 7 km", "E) 8 km"],
      correta: 0,
      explicacaoAcerto: "8 × 50.000 = 400.000 cm = 4 km.",
      explicacaoErro: "Lembre-se: 1 km = 100.000 cm."
    },
    // Questão 12 (nova) – Porcentagem e lucro
    {
      tipo: "questao",
      titulo: "Questão 12 – CESGRANRIO (Lucro)",
      conteudo: "Lucro sobre o custo.",
      pergunta: "Um produto é vendido por R$ 220,00 com lucro de 10% sobre o custo. Qual o custo?",
      alternativas: ["A) R$ 180", "B) R$ 190", "C) R$ 200", "D) R$ 210", "E) R$ 220"],
      correta: 2,
      explicacaoAcerto: "Venda = Custo × 1,10 → Custo = 220 / 1,10 = 200.",
      explicacaoErro: "O preço de venda é 110% do custo."
    },
    // Questão 13 (nova) – Regra de três composta com inversa
    {
      tipo: "questao",
      titulo: "Questão 13 – CESGRANRIO (Composta)",
      conteudo: "Regra de três composta.",
      pergunta: "10 operários, trabalhando 6 horas por dia, realizam uma obra em 12 dias. Em quantos dias 15 operários, trabalhando 8 horas por dia, realizariam a mesma obra?",
      alternativas: ["A) 4", "B) 5", "C) 6", "D) 7", "E) 8"],
      correta: 2,
      explicacaoAcerto: "12/x = (15/10)×(8/6) = 12/6 = 2 → x = 6.",
      explicacaoErro: "Operários e horas/dia são inversamente proporcionais aos dias."
    },
    // Questão 14 (nova) – Mistura de ligas
    {
      tipo: "questao",
      titulo: "Questão 14 – CESGRANRIO (Mistura)",
      conteudo: "Mistura de metais.",
      pergunta: "Uma liga de ouro 18 quilates contém 75% de ouro. Quantos gramas de ouro puro devem ser adicionados a 200g dessa liga para que a nova liga tenha 80% de ouro?",
      alternativas: ["A) 40 g", "B) 50 g", "C) 60 g", "D) 70 g", "E) 80 g"],
      correta: 1,
      explicacaoAcerto: "Ouro inicial: 200×0,75 = 150g. Seja x adicionado. (150+x)/(200+x) = 0,80 → 150+x = 160+0,80x → 0,20x = 10 → x=50.",
      explicacaoErro: "A equação é sobre a nova concentração."
    },
    // Questão 15 (nova) – Aumento e desconto sucessivo
    {
      tipo: "questao",
      titulo: "Questão 15 – CESGRANRIO (Sucessivos)",
      conteudo: "Aumento e desconto.",
      pergunta: "Um salário de R$ 1.000,00 sofre um aumento de 20% e depois um desconto de 10%. O salário final é:",
      alternativas: ["A) R$ 1.080", "B) R$ 1.100", "C) R$ 1.120", "D) R$ 1.140", "E) R$ 1.160"],
      correta: 0,
      explicacaoAcerto: "1000 × 1,20 × 0,90 = 1080.",
      explicacaoErro: "Não some 20% – 10% = 10%. O resultado é 8% de aumento."
    }
  ],

  questoes: [
    // 14 Fáceis (7 existentes + 7 novos)
    {
      dificuldade: "Fácil",
      pergunta: "Qual é a razão entre 3 e 4?",
      alternativas: ["A) 0,75", "B) 1,33", "C) 0,25", "D) 0,5", "E) 1"],
      correta: 0,
      explicacaoAcerto: "3/4 = 0,75.",
      explicacaoErro: "A razão é a divisão do primeiro pelo segundo."
    },
    {
      dificuldade: "Fácil",
      pergunta: "Simplifique a razão 12:18.",
      alternativas: ["A) 2:3", "B) 3:2", "C) 4:6", "D) 6:9", "E) 1:2"],
      correta: 0,
      explicacaoAcerto: "Dividindo por 6, temos 2:3.",
      explicacaoErro: "Não confunda a ordem; 12:18 simplificado é 2:3."
    },
    {
      dificuldade: "Fácil",
      pergunta: "Se 2:3 = 4:x, qual o valor de x?",
      alternativas: ["A) 6", "B) 8", "C) 12", "D) 10", "E) 4"],
      correta: 0,
      explicacaoAcerto: "2x = 3×4 → 2x = 12 → x=6.",
      explicacaoErro: "Aplique a propriedade fundamental corretamente."
    },
    {
      dificuldade: "Fácil",
      pergunta: "Calcule 20% de 80.",
      alternativas: ["A) 10", "B) 16", "C) 18", "D) 20", "E) 24"],
      correta: 1,
      explicacaoAcerto: "80 × 0,20 = 16.",
      explicacaoErro: "20% é 20/100 = 0,20."
    },
    {
      dificuldade: "Fácil",
      pergunta: "Um mapa tem escala 1:100.000. Se duas cidades estão a 5 cm no mapa, qual a distância real em km?",
      alternativas: ["A) 0,5 km", "B) 5 km", "C) 50 km", "D) 500 km", "E) 5000 km"],
      correta: 1,
      explicacaoAcerto: "5 × 100.000 = 500.000 cm = 5 km.",
      explicacaoErro: "Converta corretamente cm para km (1 km = 100.000 cm)."
    },
    {
      dificuldade: "Fácil",
      pergunta: "Qual a representação decimal de 45%?",
      alternativas: ["A) 0,045", "B) 0,45", "C) 4,5", "D) 0,405", "E) 4,05"],
      correta: 1,
      explicacaoAcerto: "45% = 45/100 = 0,45.",
      explicacaoErro: "Divida por 100."
    },
    {
      dificuldade: "Fácil",
      pergunta: "A razão entre 10 e 25 é equivalente a:",
      alternativas: ["A) 2:5", "B) 1:2", "C) 3:5", "D) 4:10", "E) 5:2"],
      correta: 0,
      explicacaoAcerto: "10/25 = 2/5 = 2:5.",
      explicacaoErro: "Simplifique dividindo por 5."
    },
    // Novas fáceis (7)
    {
      dificuldade: "Fácil",
      pergunta: "Qual a razão entre 5 e 8?",
      alternativas: ["A) 0,625", "B) 1,6", "C) 0,8", "D) 0,5", "E) 2,5"],
      correta: 0,
      explicacaoAcerto: "5/8 = 0,625.",
      explicacaoErro: "A razão é a divisão."
    },
    {
      dificuldade: "Fácil",
      pergunta: "Simplifique 36:48.",
      alternativas: ["A) 3:4", "B) 4:3", "C) 6:8", "D) 9:12", "E) 2:3"],
      correta: 0,
      explicacaoAcerto: "Dividindo por 12, obtemos 3:4.",
      explicacaoErro: "O MDC é 12."
    },
    {
      dificuldade: "Fácil",
      pergunta: "Se x/5 = 8/10, qual é x?",
      alternativas: ["A) 2", "B) 4", "C) 6", "D) 8", "E) 10"],
      correta: 1,
      explicacaoAcerto: "10x = 40 → x=4.",
      explicacaoErro: "Multiplique cruzado."
    },
    {
      dificuldade: "Fácil",
      pergunta: "Calcule 10% de 250.",
      alternativas: ["A) 15", "B) 20", "C) 25", "D) 30", "E) 35"],
      correta: 2,
      explicacaoAcerto: "250 × 0,10 = 25.",
      explicacaoErro: "10% = 0,10."
    },
    {
      dificuldade: "Fácil",
      pergunta: "Um produto custa R$ 80,00 e tem um aumento de 15%. Qual o novo preço?",
      alternativas: ["A) R$ 88", "B) R$ 90", "C) R$ 92", "D) R$ 94", "E) R$ 96"],
      correta: 2,
      explicacaoAcerto: "80 × 1,15 = 92.",
      explicacaoErro: "Aumento de 15% → fator 1,15."
    },
    {
      dificuldade: "Fácil",
      pergunta: "Em uma turma, a razão entre meninos e meninas é 1:2. Se há 10 meninos, quantas meninas há?",
      alternativas: ["A) 10", "B) 15", "C) 20", "D) 25", "E) 30"],
      correta: 2,
      explicacaoAcerto: "Meninos/Meninas = 1/2 → 10/M = 1/2 → M=20.",
      explicacaoErro: "Multiplique cruzado."
    },
    {
      dificuldade: "Fácil",
      pergunta: "A razão 30:40 simplificada é:",
      alternativas: ["A) 3:4", "B) 4:3", "C) 6:8", "D) 2:3", "E) 5:6"],
      correta: 0,
      explicacaoAcerto: "30/40 = 3/4.",
      explicacaoErro: "Divida por 10."
    },
    // 14 Médias (7 existentes + 7 novas)
    {
      dificuldade: "Médio",
      pergunta: "Em uma proporção, a:b = 3:5 e b:c = 10:7. Qual é a razão a:c?",
      alternativas: ["A) 6:7", "B) 3:7", "C) 10:7", "D) 30:35", "E) 3:10"],
      correta: 0,
      explicacaoAcerto: "a/b = 3/5, b/c = 10/7 → a/c = (3/5)×(10/7) = 30/35 = 6/7.",
      explicacaoErro: "Multiplique as razões para eliminar b."
    },
    {
      dificuldade: "Médio",
      pergunta: "Uma torneira enche um tanque em 6 horas. Outra torneira enche o mesmo tanque em 4 horas. Em quanto tempo as duas juntas enchem o tanque?",
      alternativas: ["A) 2h", "B) 2,4h", "C) 3h", "D) 3,6h", "E) 4h"],
      correta: 1,
      explicacaoAcerto: "Taxas: 1/6 e 1/4; juntas: 1/6 + 1/4 = 5/12 → tempo = 12/5 = 2,4h.",
      explicacaoErro: "Some as frações de vazão, não os tempos diretamente."
    },
    {
      dificuldade: "Médio",
      pergunta: "Se 3/5 de um número é 120, qual é o número?",
      alternativas: ["A) 180", "B) 200", "C) 240", "D) 300", "E) 360"],
      correta: 1,
      explicacaoAcerto: "(3/5)x = 120 → x = 120 × 5/3 = 200.",
      explicacaoErro: "A fração 3/5 corresponde a 120, então o total é 200."
    },
    {
      dificuldade: "Médio",
      pergunta: "Um produto teve aumento de 10% e depois outro de 20%. Qual foi o aumento total percentual?",
      alternativas: ["A) 30%", "B) 32%", "C) 33%", "D) 35%", "E) 40%"],
      correta: 1,
      explicacaoAcerto: "Fator = 1,10 × 1,20 = 1,32 → aumento de 32%.",
      explicacaoErro: "Não some os percentuais; use fatores multiplicativos."
    },
    {
      dificuldade: "Médio",
      pergunta: "Em uma turma, a razão entre homens e mulheres é 5:3. Se há 24 mulheres, quantos homens há?",
      alternativas: ["A) 30", "B) 36", "C) 40", "D) 45", "E) 50"],
      correta: 2,
      explicacaoAcerto: "Homens/Mulheres = 5/3 → H/24 = 5/3 → H = 24×5/3 = 40.",
      explicacaoErro: "Cuidado com a ordem da proporção."
    },
    {
      dificuldade: "Médio",
      pergunta: "Uma mercadoria foi vendida por R$ 540,00 com lucro de 20% sobre o custo. Qual era o preço de custo?",
      alternativas: ["A) R$ 432", "B) R$ 450", "C) R$ 480", "D) R$ 500", "E) R$ 432,50"],
      correta: 1,
      explicacaoAcerto: "Venda = Custo × 1,20 → 540 = 1,20C → C = 450.",
      explicacaoErro: "O lucro é sobre o custo; 540 é 120% do custo."
    },
    {
      dificuldade: "Médio",
      pergunta: "Uma mistura de 50 kg contém areia e cimento na razão 3:2. Qual a quantidade de cimento?",
      alternativas: ["A) 10 kg", "B) 20 kg", "C) 25 kg", "D) 30 kg", "E) 35 kg"],
      correta: 1,
      explicacaoAcerto: "3+2=5 partes; cada parte 10 kg; cimento = 2×10 = 20 kg.",
      explicacaoErro: "Divida 50 por 5 e multiplique pela parte do cimento."
    },
    // Novas médias (7)
    {
      dificuldade: "Médio",
      pergunta: "Se x/2 = y/3 e x+y=50, qual o valor de x?",
      alternativas: ["A) 10", "B) 15", "C) 20", "D) 25", "E) 30"],
      correta: 2,
      explicacaoAcerto: "x = 2k, y = 3k → 2k+3k=50 → k=10 → x=20.",
      explicacaoErro: "Use a constante de proporcionalidade."
    },
    {
      dificuldade: "Médio",
      pergunta: "Uma prova tem 40 questões. Um aluno acertou 32. Qual a porcentagem de acertos?",
      alternativas: ["A) 75%", "B) 80%", "C) 85%", "D) 90%", "E) 95%"],
      correta: 1,
      explicacaoAcerto: "32/40 = 0,8 = 80%.",
      explicacaoErro: "Multiplique por 100."
    },
    {
      dificuldade: "Médio",
      pergunta: "Um carro percorre 180 km com 15 litros de combustível. Quantos km percorre com 25 litros?",
      alternativas: ["A) 250 km", "B) 280 km", "C) 300 km", "D) 320 km", "E) 350 km"],
      correta: 2,
      explicacaoAcerto: "180/15 = x/25 → 15x = 4500 → x=300.",
      explicacaoErro: "Regra de três direta."
    },
    {
      dificuldade: "Médio",
      pergunta: "Um trabalhador recebe R$ 1.200,00 por 20 dias. Quanto receberá por 30 dias?",
      alternativas: ["A) R$ 1.600", "B) R$ 1.700", "C) R$ 1.800", "D) R$ 1.900", "E) R$ 2.000"],
      correta: 2,
      explicacaoAcerto: "1200/20 = x/30 → x = 1800.",
      explicacaoErro: "Direta."
    },
    {
      dificuldade: "Médio",
      pergunta: "Se 6 máquinas produzem 720 peças em 8 horas, quantas peças produzirão 4 máquinas em 6 horas?",
      alternativas: ["A) 320", "B) 340", "C) 360", "D) 380", "E) 400"],
      correta: 2,
      explicacaoAcerto: "720/x = (6/4)×(8/6) = 48/24 = 2 → x=360.",
      explicacaoErro: "Regra de três composta."
    },
    {
      dificuldade: "Médio",
      pergunta: "Um número aumentado em 15% resulta em 115. Qual é o número?",
      alternativas: ["A) 90", "B) 95", "C) 100", "D) 105", "E) 110"],
      correta: 2,
      explicacaoAcerto: "1,15x = 115 → x=100.",
      explicacaoErro: "Divida por 1,15."
    },
    {
      dificuldade: "Médio",
      pergunta: "Três números são proporcionais a 2, 5 e 7. Se a soma é 140, qual é o maior?",
      alternativas: ["A) 40", "B) 50", "C) 60", "D) 70", "E) 80"],
      correta: 3,
      explicacaoAcerto: "2k+5k+7k=14k=140 → k=10 → maior=70.",
      explicacaoErro: "Soma dos coeficientes = 14."
    },
    // 14 Difíceis (7 existentes + 7 novas)
    {
      dificuldade: "Difícil",
      pergunta: "Dois números são proporcionais a 2 e 3, e sua soma é 60. Qual é o maior número?",
      alternativas: ["A) 24", "B) 30", "C) 36", "D) 40", "E) 45"],
      correta: 2,
      explicacaoAcerto: "Números: 2k e 3k; soma = 5k = 60 → k=12 → maior = 3×12 = 36.",
      explicacaoErro: "Use a constante de proporcionalidade."
    },
    {
      dificuldade: "Difícil",
      pergunta: "Uma fábrica produz 1200 peças em 5 dias com 8 máquinas. Quantas máquinas são necessárias para produzir 3000 peças em 10 dias?",
      alternativas: ["A) 8", "B) 10", "C) 12", "D) 15", "E) 20"],
      correta: 1,
      explicacaoAcerto: "8/x = (1200/3000) × (10/5) → 8/x = (2/5)×2 = 4/5 → x = 10.",
      explicacaoErro: "Peças: direta; dias: inversa em relação a máquinas."
    },
    {
      dificuldade: "Difícil",
      pergunta: "Três números são proporcionais a 2, 3 e 5. Se a soma é 200, qual é a diferença entre o maior e o menor?",
      alternativas: ["A) 30", "B) 40", "C) 50", "D) 60", "E) 80"],
      correta: 3,
      explicacaoAcerto: "Números: 2k, 3k, 5k → soma = 10k = 200 → k=20. Maior=100, menor=40 → dif=60.",
      explicacaoErro: "A soma dos coeficientes é 10, então k=20."
    },
    {
      dificuldade: "Difícil",
      pergunta: "Um investimento de R$ 5.000 rende juros simples de 10% ao ano. Após 3 anos, qual o montante?",
      alternativas: ["A) R$ 5.500", "B) R$ 6.000", "C) R$ 6.500", "D) R$ 7.000", "E) R$ 7.500"],
      correta: 2,
      explicacaoAcerto: "Juros: 5000 × 0,10 × 3 = 1500. Montante = 6500.",
      explicacaoErro: "Juros simples: J = C·i·t."
    },
    {
      dificuldade: "Difícil",
      pergunta: "Uma loja vende um produto com lucro de 20% sobre o preço de custo. Se o preço de venda é R$ 240, qual o custo?",
      alternativas: ["A) R$ 180", "B) R$ 192", "C) R$ 200", "D) R$ 210", "E) R$ 220"],
      correta: 2,
      explicacaoAcerto: "Venda = Custo × 1,20 → 240 = 1,20C → C = 200.",
      explicacaoErro: "O lucro é sobre o custo, então venda = custo + 20% do custo."
    },
    {
      dificuldade: "Difícil",
      pergunta: "Uma pessoa aplicou R$ 2.000,00 a juros simples de 3% ao mês e obteve R$ 360,00 de juros. Qual foi o tempo da aplicação?",
      alternativas: ["A) 4 meses", "B) 5 meses", "C) 6 meses", "D) 7 meses", "E) 8 meses"],
      correta: 2,
      explicacaoAcerto: "J = C·i·t → 360 = 2000×0,03×t → 360 = 60t → t=6.",
      explicacaoErro: "Isole t na fórmula."
    },
    {
      dificuldade: "Difícil",
      pergunta: "Misturam-se 12 litros de uma solução ácida a 25% com 8 litros de outra solução ácida a 40%. Qual a concentração da mistura?",
      alternativas: ["A) 30%", "B) 31%", "C) 32%", "D) 33%", "E) 34%"],
      correta: 1,
      explicacaoAcerto: "Ácido: 12×0,25 + 8×0,40 = 3+3,2=6,2L. Total 20L. Conc. = 6,2/20 = 0,31 = 31%.",
      explicacaoErro: "Calcule a massa total do soluto e divida pelo volume total."
    },
    // Novas difíceis (7)
    {
      dificuldade: "Difícil",
      pergunta: "Um capital de R$ 1.000,00 foi aplicado a juros simples de 4% ao mês. Qual o montante após 1 ano?",
      alternativas: ["A) R$ 1.400", "B) R$ 1.480", "C) R$ 1.520", "D) R$ 1.600", "E) R$ 1.680"],
      correta: 1,
      explicacaoAcerto: "t = 12 meses. J = 1000×0,04×12 = 480. M = 1480.",
      explicacaoErro: "1 ano = 12 meses."
    },
    {
      dificuldade: "Difícil",
      pergunta: "Se 5 operários, trabalhando 6 horas por dia, constroem um muro em 12 dias, em quantos dias 8 operários, trabalhando 5 horas por dia, construirão o mesmo muro?",
      alternativas: ["A) 6", "B) 7", "C) 8", "D) 9", "E) 10"],
      correta: 3,
      explicacaoAcerto: "12/x = (8/5)×(5/6) = 40/30 = 4/3 → x=9.",
      explicacaoErro: "Operários inverso, horas inverso."
    },
    {
      dificuldade: "Difícil",
      pergunta: "Divida 360 em partes inversamente proporcionais a 3, 4 e 6. A maior parte é:",
      alternativas: ["A) 120", "B) 140", "C) 160", "D) 180", "E) 200"],
      correta: 2,
      explicacaoAcerto: "Inversos: 1/3,1/4,1/6 → MMC=12 → 4,3,2. Soma=9, k=360/9=40. Maior = 4×40=160.",
      explicacaoErro: "Transforme inversos em diretos."
    },
    {
      dificuldade: "Difícil",
      pergunta: "Um produto sofreu um desconto de 10% e depois um aumento de 10%. O preço final em relação ao original é:",
      alternativas: ["A) 99%", "B) 100%", "C) 101%", "D) 98%", "E) 102%"],
      correta: 0,
      explicacaoAcerto: "Fator = 0,90 × 1,10 = 0,99 = 99%.",
      explicacaoErro: "A ordem não importa, o fator é o mesmo."
    },
    {
      dificuldade: "Difícil",
      pergunta: "Em uma proporção contínua, a:b = b:c, e a+c=50, b=10. Qual o valor de a?",
      alternativas: ["A) 5", "B) 8", "C) 10", "D) 15", "E) 20"],
      correta: 0,
      explicacaoAcerto: "b² = a·c → 100 = a·c. E a+c=50 → a e c são raízes de t²-50t+100=0 → a=5, c=45.",
      explicacaoErro: "Use a média geométrica."
    },
    {
      dificuldade: "Difícil",
      pergunta: "Um trem viaja a uma velocidade constante de 80 km/h e leva 3 horas para percorrer um trajeto. Se a velocidade for reduzida para 60 km/h, quanto tempo levará?",
      alternativas: ["A) 3h", "B) 3,5h", "C) 4h", "D) 4,5h", "E) 5h"],
      correta: 2,
      explicacaoAcerto: "Distância = 80×3 = 240 km. Tempo = 240/60 = 4h.",
      explicacaoErro: "Relação inversa."
    },
    {
      dificuldade: "Difícil",
      pergunta: "Misturando 20 kg de uma liga com 50% de cobre e 30 kg com 80% de cobre, obtém-se uma liga com qual porcentagem de cobre?",
      alternativas: ["A) 60%", "B) 62%", "C) 65%", "D) 68%", "E) 70%"],
      correta: 3,
      explicacaoAcerto: "Cobre: 20×0,50 + 30×0,80 = 10+24=34 kg. Total 50 kg. % = 34/50 = 68%.",
      explicacaoErro: "Calcule o total de cobre e divida pelo total da liga."
    }
  ],

  avaliacaoFinal: {
    quantidade: 30,
    questoes: [
      // Questão 1 (existente)
      {
        dificuldade: "Fácil",
        pergunta: "Qual é a razão entre 15 e 25?",
        alternativas: ["A) 0,6", "B) 1,5", "C) 0,4", "D) 0,2", "E) 0,8"],
        correta: 0,
        explicacaoAcerto: "15/25 = 0,6.",
        explicacaoErro: "Simplifique ou divida diretamente."
      },
      // Questão 2 (existente)
      {
        dificuldade: "Fácil",
        pergunta: "Simplifique a razão 16:24.",
        alternativas: ["A) 2:3", "B) 3:2", "C) 4:6", "D) 8:12", "E) 1:1,5"],
        correta: 0,
        explicacaoAcerto: "Dividindo por 8, obtemos 2:3.",
        explicacaoErro: "O MDC de 16 e 24 é 8."
      },
      // Questão 3 (existente)
      {
        dificuldade: "Fácil",
        pergunta: "Na proporção 3/x = 6/10, qual é x?",
        alternativas: ["A) 3", "B) 4", "C) 5", "D) 6", "E) 7"],
        correta: 2,
        explicacaoAcerto: "3×10 = 6x → 30 = 6x → x=5.",
        explicacaoErro: "Multiplique cruzado."
      },
      // Questão 4 (existente)
      {
        dificuldade: "Fácil",
        pergunta: "Calcule 15% de 200.",
        alternativas: ["A) 25", "B) 30", "C) 35", "D) 40", "E) 45"],
        correta: 1,
        explicacaoAcerto: "200 × 0,15 = 30.",
        explicacaoErro: "15% = 15/100."
      },
      // Questão 5 (existente)
      {
        dificuldade: "Fácil",
        pergunta: "Em uma prova, acertei 18 de 20 questões. Qual a porcentagem de acertos?",
        alternativas: ["A) 85%", "B) 90%", "C) 95%", "D) 80%", "E) 70%"],
        correta: 1,
        explicacaoAcerto: "18/20 = 0,9 = 90%.",
        explicacaoErro: "Multiplique por 100."
      },
      // Questão 6 (existente)
      {
        dificuldade: "Médio",
        pergunta: "Se 2:3 = 8:x, qual é x?",
        alternativas: ["A) 10", "B) 12", "C) 14", "D) 16", "E) 18"],
        correta: 1,
        explicacaoAcerto: "2x = 3×8 → 2x = 24 → x=12.",
        explicacaoErro: "Aplique a propriedade fundamental."
      },
      // Questão 7 (existente)
      {
        dificuldade: "Médio",
        pergunta: "Um automóvel percorre 240 km com 20 litros de combustível. Quantos litros são necessários para percorrer 360 km?",
        alternativas: ["A) 25", "B) 28", "C) 30", "D) 32", "E) 35"],
        correta: 2,
        explicacaoAcerto: "240/20 = 360/x → 240x = 7200 → x=30.",
        explicacaoErro: "Relação direta."
      },
      // Questão 8 (existente)
      {
        dificuldade: "Médio",
        pergunta: "Se 3 operários fazem um serviço em 10 dias, em quantos dias 5 operários farão o mesmo serviço?",
        alternativas: ["A) 4", "B) 5", "C) 6", "D) 7", "E) 8"],
        correta: 2,
        explicacaoAcerto: "3×10 = 5×d → d=6.",
        explicacaoErro: "Relação inversa."
      },
      // Questão 9 (existente)
      {
        dificuldade: "Médio",
        pergunta: "Um produto custa R$ 150,00 e teve um aumento de 12%. Qual o novo preço?",
        alternativas: ["A) R$ 162", "B) R$ 168", "C) R$ 170", "D) R$ 175", "E) R$ 180"],
        correta: 1,
        explicacaoAcerto: "150 × 1,12 = 168.",
        explicacaoErro: "Aumento de 12% → fator 1,12."
      },
      // Questão 10 (existente)
      {
        dificuldade: "Médio",
        pergunta: "Um número aumentado em 20% resulta em 72. Qual é o número?",
        alternativas: ["A) 50", "B) 55", "C) 60", "D) 65", "E) 70"],
        correta: 2,
        explicacaoAcerto: "x × 1,20 = 72 → x = 60.",
        explicacaoErro: "Divida por 1,20."
      },
      // Questão 11 (existente)
      {
        dificuldade: "Médio",
        pergunta: "Três números são proporcionais a 1, 2 e 4. Se a soma é 140, qual é o maior?",
        alternativas: ["A) 60", "B) 70", "C) 80", "D) 90", "E) 100"],
        correta: 2,
        explicacaoAcerto: "1k+2k+4k=7k=140 → k=20 → maior = 80.",
        explicacaoErro: "A soma dos coeficientes é 7."
      },
      // Questão 12 (existente)
      {
        dificuldade: "Difícil",
        pergunta: "Em uma proporção contínua, a:b = b:c, com a=2 e c=8, qual é b?",
        alternativas: ["A) 3", "B) 4", "C) 5", "D) 6", "E) 7"],
        correta: 1,
        explicacaoAcerto: "b² = a·c = 16 → b=4.",
        explicacaoErro: "b é a média geométrica."
      },
      // Questão 13 (existente)
      {
        dificuldade: "Difícil",
        pergunta: "Um capital de R$ 2.000,00 aplicado a juros simples de 5% ao mês, por 8 meses, rende quanto de juros?",
        alternativas: ["A) R$ 600", "B) R$ 700", "C) R$ 800", "D) R$ 900", "E) R$ 1000"],
        correta: 2,
        explicacaoAcerto: "J = 2000×0,05×8 = 800.",
        explicacaoErro: "Juros simples: J = C·i·t."
      },
      // Questão 14 (existente)
      {
        dificuldade: "Difícil",
        pergunta: "Se 8 máquinas produzem 1600 peças em 6 dias, quantas peças produzirão 10 máquinas em 9 dias?",
        alternativas: ["A) 2400", "B) 2600", "C) 2800", "D) 3000", "E) 3200"],
        correta: 3,
        explicacaoAcerto: "1600/x = (8/10)×(6/9) → 1600/x = 48/90 → x=3000.",
        explicacaoErro: "Regra de três composta."
      },
      // Questão 15 (existente)
      {
        dificuldade: "Difícil",
        pergunta: "Um comerciante oferece um desconto de 15% e depois um desconto adicional de 5%. Qual o desconto total?",
        alternativas: ["A) 19,25%", "B) 20%", "C) 19%", "D) 18,75%", "E) 18%"],
        correta: 0,
        explicacaoAcerto: "Fator = 0,85 × 0,95 = 0,8075 → desconto = 19,25%.",
        explicacaoErro: "Não some os descontos."
      },
      // Questão 16 (existente)
      {
        dificuldade: "Difícil",
        pergunta: "A razão entre a idade de Maria e a de João é 3:4. Se a soma das idades é 56 anos, qual a idade de Maria?",
        alternativas: ["A) 20", "B) 22", "C) 24", "D) 26", "E) 28"],
        correta: 2,
        explicacaoAcerto: "3k+4k=7k=56 → k=8 → Maria=24.",
        explicacaoErro: "Use a constante k."
      },
      // Questão 17 (existente)
      {
        dificuldade: "Difícil",
        pergunta: "Uma mistura contém água e álcool na razão 5:3. Se há 45 litros de água, qual o total da mistura?",
        alternativas: ["A) 60", "B) 65", "C) 70", "D) 72", "E) 75"],
        correta: 3,
        explicacaoAcerto: "5/3 = 45/A → A = 27; total = 45+27 = 72.",
        explicacaoErro: "Calcule o álcool primeiro."
      },
      // Questão 18 (existente)
      {
        dificuldade: "Difícil",
        pergunta: "Um número é tal que 40% dele é 28. Qual é o número?",
        alternativas: ["A) 60", "B) 65", "C) 70", "D) 75", "E) 80"],
        correta: 2,
        explicacaoAcerto: "0,40x = 28 → x=70.",
        explicacaoErro: "Divida 28 por 0,40."
      },
      // Questão 19 (existente)
      {
        dificuldade: "Médio",
        pergunta: "Se 5 kg de arroz custam R$ 20, quanto custam 8 kg?",
        alternativas: ["A) R$ 28", "B) R$ 30", "C) R$ 32", "D) R$ 34", "E) R$ 36"],
        correta: 2,
        explicacaoAcerto: "5/20 = 8/x → x=32.",
        explicacaoErro: "Regra de três direta."
      },
      // Questão 20 (existente)
      {
        dificuldade: "Médio",
        pergunta: "Após um desconto de 20%, um produto passou a custar R$ 160,00. Qual era o preço original?",
        alternativas: ["A) R$ 180", "B) R$ 190", "C) R$ 200", "D) R$ 210", "E) R$ 220"],
        correta: 2,
        explicacaoAcerto: "0,80x = 160 → x=200.",
        explicacaoErro: "Divida por 0,80."
      },
      // Novas questões 21 a 30
      {
        dificuldade: "Fácil",
        pergunta: "A razão entre 7 e 14 é:",
        alternativas: ["A) 1:2", "B) 2:1", "C) 1:3", "D) 3:1", "E) 4:1"],
        correta: 0,
        explicacaoAcerto: "7/14 = 1/2.",
        explicacaoErro: "Simplifique."
      },
      {
        dificuldade: "Fácil",
        pergunta: "Calcule 8% de 250.",
        alternativas: ["A) 15", "B) 18", "C) 20", "D) 22", "E) 25"],
        correta: 2,
        explicacaoAcerto: "250 × 0,08 = 20.",
        explicacaoErro: "8% = 0,08."
      },
      {
        dificuldade: "Médio",
        pergunta: "Se 4/5 de um número é 100, qual é o número?",
        alternativas: ["A) 120", "B) 125", "C) 130", "D) 135", "E) 140"],
        correta: 1,
        explicacaoAcerto: "(4/5)x = 100 → x=125.",
        explicacaoErro: "Multiplique pelo inverso."
      },
      {
        dificuldade: "Médio",
        pergunta: "Em um tanque, a razão entre água e óleo é 3:2. Se há 18 litros de água, quantos litros de óleo há?",
        alternativas: ["A) 8", "B) 10", "C) 12", "D) 14", "E) 16"],
        correta: 2,
        explicacaoAcerto: "3/2 = 18/O → 3O = 36 → O=12.",
        explicacaoErro: "Multiplique cruzado."
      },
      {
        dificuldade: "Difícil",
        pergunta: "Um capital aplicado a juros simples de 6% ao mês rende R$ 900,00 em 5 meses. Qual o capital?",
        alternativas: ["A) R$ 2.500", "B) R$ 3.000", "C) R$ 3.500", "D) R$ 4.000", "E) R$ 4.500"],
        correta: 1,
        explicacaoAcerto: "J = C·i·t → 900 = C×0,06×5 = 0,3C → C=3000.",
        explicacaoErro: "Isole C."
      },
      {
        dificuldade: "Difícil",
        pergunta: "Se 5 pintores pintam um prédio em 8 dias, em quantos dias 10 pintores pintarão o mesmo prédio, trabalhando 6 horas por dia? (considere que os 5 pintores trabalharam 8 horas por dia)",
        alternativas: ["A) 4", "B) 5", "C) 6", "D) 7", "E) 8"],
        correta: 1,
        explicacaoAcerto: "Total de horas = 5×8×8 = 320. 10 pintores × 6 h/d × d = 60d = 320 → d = 5,33 ≈ 5 (considerando dias inteiros).",
        explicacaoErro: "Calcule o total de horas e divida."
      },
      {
        dificuldade: "Médio",
        pergunta: "Um produto teve um desconto de 15% e foi vendido por R$ 170,00. Qual era o preço original?",
        alternativas: ["A) R$ 190", "B) R$ 195", "C) R$ 200", "D) R$ 205", "E) R$ 210"],
        correta: 2,
        explicacaoAcerto: "0,85x = 170 → x=200.",
        explicacaoErro: "Divida por 0,85."
      },
      {
        dificuldade: "Fácil",
        pergunta: "A razão 20:30 simplificada é:",
        alternativas: ["A) 2:3", "B) 3:2", "C) 4:6", "D) 5:8", "E) 1:1,5"],
        correta: 0,
        explicacaoAcerto: "20/30 = 2/3.",
        explicacaoErro: "Divida por 10."
      },
      {
        dificuldade: "Difícil",
        pergunta: "Dois números estão na razão 3:7 e sua diferença é 48. Qual é o menor?",
        alternativas: ["A) 18", "B) 24", "C) 30", "D) 36", "E) 42"],
        correta: 3,
        explicacaoAcerto: "3k e 7k → 7k-3k=4k=48 → k=12. Menor = 3×12=36.",
        explicacaoErro: "Use a diferença para achar k."
      },
      {
        dificuldade: "Difícil",
        pergunta: "Uma mistura de 60 litros contém 20% de sal. Quantos litros de água devem ser adicionados para que a nova mistura tenha 15% de sal?",
        alternativas: ["A) 10 L", "B) 15 L", "C) 20 L", "D) 25 L", "E) 30 L"],
        correta: 2,
        explicacaoAcerto: "Sal = 60×0,20 = 12 L. Novo total = 12 / 0,15 = 80 L. Água adicionada = 80-60 = 20 L.",
        explicacaoErro: "Use a quantidade de sal constante."
      }
    ],
    percentualAprovacao: 80
  },

  criterioConclusao: {
    minimoAcertos: 80,
    tempoEstimado: "4h"
  },

  dicasGerais: {
    interpretacao: `
      <h4>Como interpretar enunciados de razões e proporções</h4>
      <ul>
        <li><strong>Leia com atenção:</strong> Identifique quais grandezas são comparadas. Sublinhe termos como "razão entre", "proporcional a", "para cada", "equivale a".</li>
        <li><strong>Identifique a ordem:</strong> "razão de A para B" é A/B. Não troque a ordem.</li>
        <li><strong>Unidades:</strong> Verifique se as unidades são compatíveis. Converta antes de operar (ex: km/h para m/s).</li>
        <li><strong>Contexto:</strong> Questões CESGRANRIO geralmente misturam tópicos. Leia o problema todo antes de começar a resolver.</li>
      </ul>
    `,
    macetes: `
      <h4>Macetes e truques para resolução rápida</h4>
      <ul>
        <li><strong>Regra de três:</strong> Se for direta, a fração é montada com os valores na mesma ordem. Se for inversa, inverta uma das razões.</li>
        <li><strong>Descontos sucessivos:</strong> Multiplique os fatores. Ex: 10% e 20% → 0,90 × 0,80 = 0,72 → 28% de desconto.</li>
        <li><strong>Divisão proporcional:</strong> Use a constante k. Para inversa, inverta os números e use o MMC.</li>
        <li><strong>Juros simples:</strong> Lembre-se de J = C·i·t. A unidade de i e t deve ser a mesma.</li>
        <li><strong>Misturas:</strong> A concentração final é soluto total / volume total.</li>
      </ul>
    `,
    calculosAteis: `
      <h4>Atalhos de cálculo</h4>
      <ul>
        <li>Para calcular porcentagem, use a regra de três ou o fator decimal.</li>
        <li>Em regra de três composta, monte a equação: (valor conhecido da incógnita) / (x) = (razão1) × (razão2) × ...</li>
        <li>Para divisão proporcional, some os coeficientes e divida o total pela soma para achar k.</li>
        <li>Para escalas, lembre-se que 1 cm no mapa equivale a (denominador da escala) cm na realidade. Converta para km dividindo por 100.000.</li>
      </ul>
    `,
    errosComuns: `
      <h4>Erros que derrubam muitos candidatos</h4>
      <ul>
        <li><strong>Inverter a razão:</strong> Sempre confira a ordem pedida no enunciado.</li>
        <li><strong>Somar percentuais:</strong> Descontos/aumentos sucessivos não se somam.</li>
        <li><strong>Confundir direta/inversa:</strong> Pergunte-se: se A aumenta, B aumenta? (direta) ou B diminui? (inversa).</li>
        <li><strong>Esquecer de converter unidades:</strong> Taxa ao ano com tempo em meses, ou escala cm para km.</li>
        <li><strong>Erro de sinal em juros:</strong> Juros é positivo; montante = capital + juros.</li>
      </ul>
    `
  }
};
