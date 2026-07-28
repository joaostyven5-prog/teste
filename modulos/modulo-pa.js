// ============================================================
// MÓDULO: Progressão Aritmética (PA) – Versão com exportação ES6
// ============================================================

// Banco de questões (12 questões)
const bancoQuestoesPA = [
    {
        enunciado: 'Em uma PA, o 3º termo é 18 e o 7º termo é 42. Qual é o valor do 10º termo?',
        alternativas: ['A) 54', 'B) 60', 'C) 66', 'D) 72', 'E) 78'],
        gabarito: 1,
        explicacao: 'A razão é (42 - 18)/(7 - 3) = 24/4 = 6. a₁ = 18 - 2·6 = 6. a₁₀ = 6 + 9·6 = 60.',
        pegadinha: 'Muitos somam 24 diretamente a 42, esquecendo de dividir pelo número de passos.'
    },
    {
        enunciado: 'Qual é o 15º termo da PA (3, 8, 13, 18, ...)?',
        alternativas: ['A) 68', 'B) 70', 'C) 73', 'D) 78', 'E) 83'],
        gabarito: 2,
        explicacao: 'r = 5, a₁ = 3, a₁₅ = 3 + 14·5 = 73.',
        pegadinha: 'Confundir n com 14 (em vez de 15).'
    },
    {
        enunciado: 'O quarto termo de uma PA é 20 e o nono é 45. Qual é o primeiro termo?',
        alternativas: ['A) 5', 'B) 6', 'C) 8', 'D) 10', 'E) 12'],
        gabarito: 0,
        explicacao: 'r = (45 - 20)/(9 - 4) = 25/5 = 5. a₁ = 20 - 3·5 = 5.',
        pegadinha: 'Fazer 45 - 20 = 25 e dividir por 4 (número errado de passos).'
    },
    {
        enunciado: 'Em uma PA, a₅ = 31 e a₁₂ = 66. Qual é a razão?',
        alternativas: ['A) 3', 'B) 4', 'C) 5', 'D) 6', 'E) 7'],
        gabarito: 2,
        explicacao: 'r = (66 - 31)/(12 - 5) = 35/7 = 5.',
        pegadinha: 'Subtrair e dividir por 7 corretamente, mas errar a subtração (66-31=35).'
    },
    {
        enunciado: 'Qual é a soma dos 10 primeiros termos da PA (2, 5, 8, ...)?',
        alternativas: ['A) 150', 'B) 155', 'C) 160', 'D) 165', 'E) 170'],
        gabarito: 1,
        explicacao: 'a₁₀ = 2 + 9·3 = 29. Soma = (2 + 29)·10/2 = 31·5 = 155.',
        pegadinha: 'Esquecer de dividir por 2 na soma.'
    },
    {
        enunciado: 'Em uma PA, a₁ = 12 e r = -3. Qual é o valor de a₇?',
        alternativas: ['A) -6', 'B) -3', 'C) 0', 'D) 3', 'E) 6'],
        gabarito: 0,
        explicacao: 'a₇ = 12 + 6·(-3) = 12 - 18 = -6.',
        pegadinha: 'Esquecer o sinal negativo.'
    },
    {
        enunciado: 'Em uma PA, a₂ = 10 e a₆ = 26. Qual é o primeiro termo?',
        alternativas: ['A) 4', 'B) 5', 'C) 6', 'D) 7', 'E) 8'],
        gabarito: 2,
        explicacao: 'r = (26 - 10)/(6 - 2) = 16/4 = 4. a₁ = 10 - 4 = 6.',
        pegadinha: 'Calcular r = 16/4 = 4, mas depois fazer a₁ = 10 - 2·4 = 2 (erro de multiplicação).'
    },
    {
        enunciado: 'Em uma PA, a₄ = 14 e a₉ = 34. Qual é a razão?',
        alternativas: ['A) 2', 'B) 3', 'C) 4', 'D) 5', 'E) 6'],
        gabarito: 2,
        explicacao: 'r = (34 - 14)/(9 - 4) = 20/5 = 4.',
        pegadinha: 'Calcular 34-14=20 e dividir por 4 (número errado de passos).'
    },
    {
        enunciado: 'Qual é o 20º termo da PA (7, 13, 19, 25, ...)?',
        alternativas: ['A) 115', 'B) 118', 'C) 121', 'D) 124', 'E) 127'],
        gabarito: 2,
        explicacao: 'r = 6, a₁ = 7, a₂₀ = 7 + 19·6 = 7 + 114 = 121.',
        pegadinha: 'Usar 20 em vez de 19 na multiplicação.'
    },
    {
        enunciado: 'O 6º termo de uma PA é 45 e a razão é 8. Qual é o primeiro termo?',
        alternativas: ['A) -3', 'B) -1', 'C) 1', 'D) 3', 'E) 5'],
        gabarito: 4,
        explicacao: 'a₆ = a₁ + 5·8 = 45 => a₁ = 45 - 40 = 5.',
        pegadinha: 'Calcular 45 - 5·8 = 5, mas confundir a ordem.'
    },
    {
        enunciado: 'Em uma PA, a₁ = 4 e r = 7. Qual é o 12º termo?',
        alternativas: ['A) 77', 'B) 80', 'C) 81', 'D) 84', 'E) 88'],
        gabarito: 2,
        explicacao: 'a₁₂ = 4 + 11·7 = 4 + 77 = 81.',
        pegadinha: 'Usar 12 em vez de 11 na multiplicação.'
    },
    {
        enunciado: 'A soma dos 6 primeiros termos de uma PA é 72. Se a₁ = 2, qual é a razão?',
        alternativas: ['A) 2', 'B) 3', 'C) 4', 'D) 5', 'E) 6'],
        gabarito: 2,
        explicacao: 'S = n/2·(2a₁+(n-1)r) = 3·(4+5r) = 12+15r = 72 => 15r=60 => r=4.',
        pegadinha: 'Esquecer de dividir por 2 na fórmula da soma.'
    }
];

// Estado interno do módulo
let questaoAtual = null;

// Função para sortear uma questão
function sortearQuestao() {
    const idx = Math.floor(Math.random() * bancoQuestoesPA.length);
    return bancoQuestoesPA[idx];
}

// ===== FUNÇÕES EXPORTADAS =====

function iniciarQuestao() {
    const container = document.getElementById('questaoContainer');
    if (!container) return;
    questaoAtual = sortearQuestao();
    if (!questaoAtual) {
        container.innerHTML = '<p>Nenhuma questão disponível.</p>';
        return;
    }
    let html = `<p><strong>${questaoAtual.enunciado}</strong></p><div class="alternatives">`;
    questaoAtual.alternativas.forEach((alt, idx) => {
        html += `<div class="alt-item" data-index="${idx}">${alt}</div>`;
    });
    html += '</div>';
    container.innerHTML = html;

    const feedback = document.getElementById('questaoFeedback');
    if (feedback) feedback.innerHTML = '';

    const items = container.querySelectorAll('.alt-item');
    items.forEach(el => {
        el.addEventListener('click', function() {
            if (this.classList.contains('disabled')) return;
            const idx = parseInt(this.dataset.index);
            processarResposta(idx);
        });
    });
}

function processarResposta(idx) {
    const feedback = document.getElementById('questaoFeedback');
    const container = document.getElementById('questaoContainer');
    const items = container.querySelectorAll('.alt-item');
    items.forEach(i => i.classList.add('disabled'));

    const correta = questaoAtual.gabarito;
    if (idx === correta) {
        items[idx].classList.add('correct');
        feedback.innerHTML = `
            <div class="study-feedback success">
                <h4>✅ Correto!</h4>
                <p>${questaoAtual.explicacao}</p>
                <p><strong>⚠️ Pegadinha:</strong> ${questaoAtual.pegadinha || 'Nenhuma pegadinha específica.'}</p>
            </div>
        `;
        // Ganha XP (chamando a função global do App)
        if (window.App && window.App.state) {
            window.App.state.globalStats.totalCorrect++;
            if (window.Gamification && window.Gamification.addXp) {
                window.Gamification.addXp(window.App.state, window.CONFIG?.XP_PER_CORRECT || 20);
            }
            window.App.persist();
            window.App.renderHeader();
        }
    } else {
        items.forEach(i => { if (parseInt(i.dataset.index) === correta) i.classList.add('correct'); });
        items[idx].classList.add('wrong');
        feedback.innerHTML = `
            <div class="study-feedback error">
                <h4>❌ Errado.</h4>
                <p>A resposta correta é <strong>${questaoAtual.alternativas[correta]}</strong>.</p>
                <p>${questaoAtual.explicacao}</p>
                <p><strong>⚠️ Pegadinha:</strong> ${questaoAtual.pegadinha || 'Nenhuma pegadinha específica.'}</p>
                <p style="margin-top: 0.5rem;">💡 <strong>Dica:</strong> Reveja a fórmula do termo geral e pratique mais.</p>
            </div>
        `;
        if (window.App && window.App.state) {
            window.App.state.globalStats.totalWrong++;
            window.App.persist();
        }
    }
}

function proximaQuestao() {
    iniciarQuestao();
}

function verificarGuiado() {
    const input = document.getElementById('guiadoInput');
    if (!input) return;
    const val = parseFloat(input.value);
    const feedback = document.getElementById('guiadoFeedback');
    if (isNaN(val)) {
        feedback.innerHTML = `<div class="study-feedback error"><h4>❌ Digite um número válido.</h4></div>`;
        return;
    }
    const correct = 40;
    if (val === correct) {
        feedback.innerHTML = `<div class="study-feedback success"><h4>✅ Perfeito! a₈ = ${correct}.</h4><p>Você acertou! Continue assim.</p></div>`;
        if (window.App && window.App.state) {
            window.App.state.globalStats.totalCorrect++;
            if (window.Gamification && window.Gamification.addXp) {
                window.Gamification.addXp(window.App.state, window.CONFIG?.XP_PER_CORRECT || 20);
            }
            window.App.persist();
            window.App.renderHeader();
        }
        const btn = document.querySelector('#guiadoPA .btn');
        if (btn) btn.disabled = true;
    } else {
        feedback.innerHTML = `<div class="study-feedback error"><h4>❌ Não foi dessa vez.</h4><p>O valor correto é <strong>${correct}</strong>.</p><p>Lembre-se: a₈ = 12 + 7·4 = 40.</p><p>Tente novamente!</p></div>`;
        if (window.App && window.App.state) {
            window.App.state.globalStats.totalWrong++;
            window.App.persist();
        }
    }
}

// ===== EXPORTAÇÃO PADRÃO =====
export default {
    situacao: {
        title: '💡 Situação – Economias Diárias',
        html: `
            <div style="display: flex; flex-direction: column; gap: 1.5rem;">
                <p>Você começa a guardar dinheiro para uma viagem.</p>
                <ul style="list-style: none; padding: 0;">
                    <li>📅 <strong>Dia 1:</strong> R$ 5,00</li>
                    <li>📅 <strong>Dia 2:</strong> R$ 10,00</li>
                    <li>📅 <strong>Dia 3:</strong> R$ 15,00</li>
                    <li>📅 <strong>Dia 4:</strong> R$ 20,00</li>
                </ul>
                <p style="font-weight: 600;">📌 Quanto você terá guardado no <strong>10º dia</strong>?</p>
                <div style="background: var(--bg); padding: 1rem; border-radius: var(--radius-md); border-left: 4px solid var(--accent);">
                    <p style="margin: 0;">💭 <em>Pense: a cada dia, o valor aumenta na mesma quantidade. Isso é uma Progressão Aritmética.</em></p>
                </div>
                <!-- Diagrama visual da PA -->
                <div style="background: var(--surface); padding: 1.5rem; border-radius: var(--radius-lg); border: 1px solid var(--border);">
                    <p style="font-weight: 700; text-align: center; margin-bottom: 1rem;">📊 Representação da PA</p>
                    <div style="display: flex; justify-content: space-between; align-items: center; gap: 0.5rem; flex-wrap: wrap; padding: 0.5rem 0;">
                        <div style="display: flex; flex-direction: column; align-items: center; background: var(--primary-light); color: white; padding: 0.5rem 1rem; border-radius: var(--radius-md); min-width: 50px;">
                            <span style="font-size: 0.75rem;">a₁</span>
                            <span style="font-weight: 700;">5</span>
                        </div>
                        <span style="font-size: 1.5rem; color: var(--text-muted);">→ +5</span>
                        <div style="display: flex; flex-direction: column; align-items: center; background: var(--primary-light); color: white; padding: 0.5rem 1rem; border-radius: var(--radius-md); min-width: 50px;">
                            <span style="font-size: 0.75rem;">a₂</span>
                            <span style="font-weight: 700;">10</span>
                        </div>
                        <span style="font-size: 1.5rem; color: var(--text-muted);">→ +5</span>
                        <div style="display: flex; flex-direction: column; align-items: center; background: var(--primary-light); color: white; padding: 0.5rem 1rem; border-radius: var(--radius-md); min-width: 50px;">
                            <span style="font-size: 0.75rem;">a₃</span>
                            <span style="font-weight: 700;">15</span>
                        </div>
                        <span style="font-size: 1.5rem; color: var(--text-muted);">→ +5</span>
                        <div style="display: flex; flex-direction: column; align-items: center; background: var(--primary-light); color: white; padding: 0.5rem 1rem; border-radius: var(--radius-md); min-width: 50px;">
                            <span style="font-size: 0.75rem;">a₄</span>
                            <span style="font-weight: 700;">20</span>
                        </div>
                        <span style="font-size: 1.5rem; color: var(--text-muted);">→ +5</span>
                        <div style="display: flex; flex-direction: column; align-items: center; background: var(--accent); color: white; padding: 0.5rem 1rem; border-radius: var(--radius-md); min-width: 50px; box-shadow: 0 0 0 3px var(--accent-light);">
                            <span style="font-size: 0.75rem;">a₁₀</span>
                            <span style="font-weight: 700;">?</span>
                        </div>
                    </div>
                    <p style="text-align: center; font-size: 0.875rem; color: var(--text-muted); margin-top: 0.5rem;">A diferença (razão) é sempre 5.</p>
                </div>
            </div>
        `
    },
    explicacao: {
        title: '📚 Conceito – O que é uma PA?',
        html: `
            <div style="display: flex; flex-direction: column; gap: 1rem;">
                <p>Uma <strong>Progressão Aritmética (PA)</strong> é uma sequência de números onde cada termo, a partir do segundo, é obtido adicionando-se uma <strong>constante</strong> ao anterior.</p>
                <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 1rem; background: var(--bg); padding: 1rem; border-radius: var(--radius-md);">
                    <div>
                        <p style="font-weight: 700;">🔑 Elementos:</p>
                        <ul style="list-style: none; padding: 0;">
                            <li><strong>a₁</strong> → primeiro termo</li>
                            <li><strong>r</strong> → razão (diferença constante)</li>
                            <li><strong>n</strong> → posição do termo</li>
                            <li><strong>aₙ</strong> → termo na posição n</li>
                        </ul>
                    </div>
                    <div>
                        <p style="font-weight: 700;">📐 Exemplo:</p>
                        <p style="background: var(--surface); padding: 0.5rem; border-radius: var(--radius-sm); text-align: center;">(2, 5, 8, 11, ...)</p>
                        <p>a₁ = 2, r = 3</p>
                    </div>
                </div>
                <div style="background: var(--surface); padding: 1rem; border-radius: var(--radius-md); border: 1px solid var(--border);">
                    <p style="font-weight: 700;">🧠 Classificação:</p>
                    <ul style="list-style: none; padding: 0;">
                        <li><span style="color: var(--success);">●</span> <strong>Crescente</strong> (r > 0) → ex: (3, 6, 9, ...)</li>
                        <li><span style="color: var(--error);">●</span> <strong>Decrescente</strong> (r < 0) → ex: (10, 7, 4, ...)</li>
                        <li><span style="color: var(--text-muted);">●</span> <strong>Constante</strong> (r = 0) → ex: (5, 5, 5, ...)</li>
                    </ul>
                </div>
            </div>
        `
    },
    formula: {
        title: '🔢 Fórmula do Termo Geral',
        html: `
            <div style="display: flex; flex-direction: column; gap: 1.5rem;">
                <div class="study-formula" style="font-size: 1.5rem; padding: 1.5rem; background: var(--bg);">
                    aₙ = a₁ + (n − 1) · r
                </div>
                <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 1rem;">
                    <div style="background: var(--surface); padding: 1rem; border-radius: var(--radius-md); border: 1px solid var(--border);">
                        <p style="font-weight: 700;">📌 De onde vem?</p>
                        <p>Partimos do primeiro termo e damos (n-1) passos de tamanho r.</p>
                    </div>
                    <div style="background: var(--surface); padding: 1rem; border-radius: var(--radius-md); border: 1px solid var(--border);">
                        <p style="font-weight: 700;">⚡ Quando usar?</p>
                        <p>Para encontrar qualquer termo específico, sem listar toda a sequência.</p>
                    </div>
                </div>
                <div style="background: var(--warning); padding: 0.75rem; border-radius: var(--radius-md); color: var(--text-primary);">
                    <p style="margin: 0;"><strong>⚠️ Atenção:</strong> A fórmula só vale se a sequência for realmente uma PA (diferença constante).</p>
                </div>
            </div>
        `
    },
    exemplo: {
        title: '✏️ Exemplo Resolvido',
        html: `
            <div style="display: flex; flex-direction: column; gap: 1rem;">
                <p><strong>Problema:</strong> Em uma PA, a₁ = 5 e r = 3. Calcule o 8º termo.</p>
                <div style="background: var(--bg); padding: 1.5rem; border-radius: var(--radius-md);">
                    <p><strong>Passo 1:</strong> Identificar dados</p>
                    <p>a₁ = 5, r = 3, n = 8</p>
                    <p><strong>Passo 2:</strong> Aplicar a fórmula</p>
                    <p>a₈ = 5 + (8-1)·3 = 5 + 7·3 = 5 + 21 = <strong>26</strong></p>
                    <p style="margin-top: 0.5rem;">✅ <strong>Resposta:</strong> o 8º termo é 26.</p>
                </div>
                <div style="display: flex; gap: 0.5rem; flex-wrap: wrap; justify-content: center;">
                    <span style="background: var(--primary-light); color: white; padding: 0.25rem 0.75rem; border-radius: var(--radius-full);">a₁=5</span>
                    <span style="color: var(--text-muted);">→ +3</span>
                    <span style="background: var(--primary-light); color: white; padding: 0.25rem 0.75rem; border-radius: var(--radius-full);">a₂=8</span>
                    <span style="color: var(--text-muted);">→ +3</span>
                    <span style="background: var(--primary-light); color: white; padding: 0.25rem 0.75rem; border-radius: var(--radius-full);">a₃=11</span>
                    <span style="color: var(--text-muted);">…</span>
                    <span style="background: var(--accent); color: white; padding: 0.25rem 0.75rem; border-radius: var(--radius-full);">a₈=26</span>
                </div>
            </div>
        `
    },
    guiado: {
        title: '🎯 Pratique com Acompanhamento',
        html: `
            <div style="display: flex; flex-direction: column; gap: 1.5rem;">
                <p>Vamos resolver juntos. Uma PA tem a₁ = 12 e r = 4.</p>
                <p><strong>Calcule o valor de a₈.</strong></p>
                <div class="study-input" id="guiadoPA">
                    <input type="number" id="guiadoInput" placeholder="Digite o valor de a₈" />
                    <button class="btn btn--primary" onclick="App.verificarGuiado()">Verificar</button>
                </div>
                <div id="guiadoFeedback" style="margin-top: 0.5rem;"></div>
                <div style="background: var(--surface); padding: 1rem; border-radius: var(--radius-md); border: 1px solid var(--border);">
                    <p style="font-weight: 700; margin-bottom: 0.5rem;">📐 Dica visual:</p>
                    <div style="display: flex; gap: 0.25rem; flex-wrap: wrap; justify-content: center;">
                        <span style="background: var(--bg); padding: 0.25rem 0.75rem; border-radius: var(--radius-sm);">a₁=12</span>
                        <span style="color: var(--text-muted);">→ +4</span>
                        <span style="background: var(--bg); padding: 0.25rem 0.75rem; border-radius: var(--radius-sm);">a₂=16</span>
                        <span style="color: var(--text-muted);">→ +4</span>
                        <span style="background: var(--bg); padding: 0.25rem 0.75rem; border-radius: var(--radius-sm);">a₃=20</span>
                        <span style="color: var(--text-muted);">→ +4</span>
                        <span style="background: var(--bg); padding: 0.25rem 0.75rem; border-radius: var(--radius-sm);">a₄=24</span>
                        <span style="color: var(--text-muted);">…</span>
                        <span style="background: var(--accent); color: white; padding: 0.25rem 0.75rem; border-radius: var(--radius-sm);">a₈=?</span>
                    </div>
                    <p style="font-size: 0.875rem; color: var(--text-muted); margin-top: 0.5rem;">Lembre-se: a₈ = a₁ + 7·r</p>
                </div>
            </div>
        `
    },
    questao: {
        title: '🧩 Desafio CESGRANRIO (Banco de Questões)',
        html: `
            <div style="display: flex; flex-direction: column; gap: 1.5rem;">
                <p style="font-weight: 600;">Responda a questão abaixo. Se errar, outra questão será gerada.</p>
                <div id="questaoContainer">
                    <!-- As questões são injetadas via JS -->
                </div>
                <div id="questaoFeedback" style="margin-top: 0.5rem;"></div>
                <div style="display: flex; gap: 0.5rem; flex-wrap: wrap; justify-content: center;">
                    <button class="btn btn--secondary btn--small" onclick="App.proximaQuestao()">🔄 Próxima Questão</button>
                </div>
            </div>
        `
    },
    progresso: {
        title: '✅ Parabéns! Você dominou a PA.',
        html: `
            <div style="display: flex; flex-direction: column; gap: 1.5rem; text-align: center;">
                <div style="font-size: 4rem;">🏆</div>
                <h3 style="color: var(--primary);">Você completou o tópico Progressão Aritmética!</h3>
                <ul style="list-style: none; padding: 0; text-align: left; max-width: 400px; margin: 0 auto;">
                    <li>✔ Entendeu o conceito de PA e razão</li>
                    <li>✔ Conhece a fórmula do termo geral</li>
                    <li>✔ Resolveu exemplos práticos</li>
                    <li>✔ Enfrentou múltiplas questões estilo CESGRANRIO</li>
                </ul>
                <div style="display: flex; gap: 1rem; justify-content: center; flex-wrap: wrap;">
                    <button class="btn btn--success" onclick="App.completeTopic()">✅ Concluir Tópico</button>
                    <button class="btn btn--secondary" onclick="App.proximaQuestao()">📚 Revisar com mais questões</button>
                </div>
            </div>
        `
    },
    // Funções auxiliares exportadas
    verificarGuiado,
    iniciarQuestao,
    proximaQuestao
};