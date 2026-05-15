# Capítulo 18B: Quando o Prompt Não Basta — Limitações Honestas

**"A ferramenta perfeita não existe. Existe a ferramenta certa para o contexto certo."**

Passamos 18 capítulos celebrando o poder da engenharia de prompt. Agora, honestidade intelectual exige que falemos das fronteiras — situações onde prompting, por mais sofisticado, não resolve.

**1. O Problema do Contexto Limitado**

LLMs têm "memória de trabalho" finita. Claude Sonnet 4 processa \~200 mil tokens (\~150 mil palavras). Parece muito até você tentar:

\- Analisar 500 contratos simultaneamente

\- Processar 2 anos de e-mails de procurement

\- Comparar catálogos de 1000 fornecedores

**Solução:** Arquitetura híbrida (RAG + chunking inteligente + summary chains).

Mas isso já não é "apenas prompting" — é engenharia de sistema.

**2. O Problema da Latência**

Você escreve o prompt perfeito. IA gera resposta brilhante. Demora 8 segundos. Aplicações que exigem sub-segundo de resposta (sistemas de trading, controle industrial em tempo real) não podem esperar. A física dos modelos grandes impõe limites.

**Solução:** Modelos menores e especializados (fine-tuned) para tarefas críticas. Ou aceitar latência.

**3. O Problema do Custo**

Prompt de 5000 tokens + output de 3000 tokens = $0.40 (Claude Sonnet 4, preços jan/2025) Rodar isso 10 mil vezes por dia = $4000/dia = $1.4 milhão/ano

Para tarefas repetitivas e previsíveis, fine-tuning de modelos menores ou até regras clássicas podem ser mais econômicos.

**4. O Problema da Alucinação Irredutível**

LLMs **SEMPRE** podem alucinar. Mesmo com CoT, mesmo com few-shot, mesmo com RAG. A arquitetura fundamental (prever próximo token por probabilidade) não garante verdade factual.

Casos onde isso é **inaceitável:**

\- Dosagem de medicamentos

\- Cálculos estruturais de engenharia

\- Decisões legais finais

**Solução:** Humano no loop obrigatório. IA sugere, humano verifica e decide.

**5. O Problema da Explicabilidade**

"Por que a IA escolheu fornecedor A sobre B?" Mesmo com CoT forçando raciocínio explícito, há opacidade irredutível.

Transformers têm bilhões de parâmetros; nenhum humano pode auditar completamente o "porquê".

Setores regulados (saúde, financeiro, defesa) exigem explicabilidade que LLMs não podem totalmente fornecer.

**Quando NÃO usar engenharia de prompt:**

✗ Decisões onde erro tem custo humano irreversível (cirurgia, sentença judicial)

✗ Sistemas críticos de segurança em tempo real

✗ Tarefas 100% determinísticas onde regras clássicas são mais baratas

✗ Processamento de dados sensíveis que não podem sair de ambiente local

✗ Quando stakeholders exigem explicabilidade linha-por-linha

**Quando SIM usar:**

✓ Tarefas criativas/exploratórias (draft de textos, brainstorming, pesquisa)

✓ Análise de padrões em dados não-estruturados (e-mails, contratos, PDFs)

✓ Automação de tarefas repetitivas com supervisão humana

✓ Prototipagem rápida antes de construir solução custom

✓ Quando flexibilidade linguística supera necessidade de determinismo

**Síntese realista:** Engenharia de prompt é uma **ferramenta** extraordinária. Mas é **\>ferramenta\<**, não magia. O engenheiro sofisticado sabe quando usá-la e quando não

**∞**

**PARTE VI: O FUTURO E O HUMANO**
