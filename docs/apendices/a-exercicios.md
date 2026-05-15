# Apêndice A: Exercícios Práticos

**APÊNDICE A: EXERCÍCIOS PRÁTICOS – DO CONCEITO À EXECUÇÃO**

═════════════════════════════════════════════════════

**"Conhecimento sem prática é filosofia estéril. Prática sem conhecimento é improviso perigoso."**

Esta seção foi projetada para transformar teoria em habilidade. Cada exercício **progride em complexidade**, simulando situações reais que você encontrará ao trabalhar com **IA em contextos corporativos.**

**COMO USAR ESTA SEÇÃO:**

1\. **Não pule exercícios** — eles são sequenciais e constroem **competência progressivamente**

2\. Faça **ANTES** de ver a solução — **a frustração inicial é parte do aprendizado**

3\. Compare sua resposta com a **solução proposta** — **não há "resposta certa única"**, mas há princípios

4\. Teste seus prompts em **LLMs reais (Claude, ChatGPT, etc)** e itere baseado nos resultados

─────────────────────────────────────────────────────

**NÍVEL 1: FUNDAMENTOS — OS 4 PILARES**

─────────────────────────────────────────────────────

**EXERCÍCIO 1.1: DIAGNÓSTICO DE PROMPT QUEBRADO**

**Situação:**

Um analista júnior escreveu o seguinte prompt para analisar fornecedores:

"Me ajude a escolher um fornecedor."

**Resultado**: A IA gerou uma resposta genérica e inútil sobre "avaliar preço, qualidade e prazo".

**Sua tarefa:**

Identifique o que está faltando segundo o framework dos 4 Pilares:

**• Contexto**

**• Instrução**

**• Input**

**• Output**

───────────────────

**SOLUÇÃO COMENTADA:**

O prompt falha em TODOS os 4 pilares:

❌ CONTEXTO ausente:

• Qual setor? (logística? tecnologia? alimentos?)

• Qual cargo do usuário? (analista? diretor? comprador?)

• Qual problema específico? (fornecedor atual falhou? novo produto? redução de custo?)

❌ INSTRUÇÃO vaga:

• "Ajude" é ambíguo — ajudar como? Listar? Comparar? Recomendar?

• Não há critérios especificados

❌ INPUT inexistente:

• Quais fornecedores estão sendo considerados?

• Que dados temos sobre eles?

❌ OUTPUT indefinido:

• Quer tabela? Texto? Ranking?

• Quantos fornecedores mostrar?

**VERSÃO CORRIGIDA:**

\`\`\`

CONTEXTO:

Sou analista de suprimentos de uma indústria química de grande porte. Precisamos escolher fornecedor de matéria-prima crítica para operação no Brasil. Volume: 500 toneladas/mês. Contrato de 2 anos.

INSTRUÇÃO:

Compare os 3 fornecedores abaixo considerando:

1\. Preço por tonelada

2\. Histórico de segurança (incidentes nos últimos 5 anos)

3\. Capacidade de entrega (podem fornecer 500 ton/mês?)

4\. Certificações (tem licenças do Exército Brasileiro?)

Identifique qual fornecedor tem melhor custo-benefício considerando que segurança é prioridade absoluta (peso 40%), seguido de preço (30%), capacidade (20%) e burocracia (10%).

INPUT:

Fornecedor A: R$ 2.800/ton, 0 incidentes, capacidade 300 ton/mês, certificado OK

Fornecedor B: R$ 3.200/ton, 1 incidente leve, capacidade 800 ton/mês, certificado OK

Fornecedor C: R$ 2.500/ton, 3 incidentes graves, capacidade 1000 ton/mês, certificado pendente

OUTPUT ESPERADO:

Tabela com 4 colunas:

| Fornecedor | Score Ponderado (0-100) | Recomendação | Justificativa (1 frase) |

Ao final, recomende qual contratar e liste 2 riscos principais dessa escolha.

\`\`\`

**LIÇÃO:**

Especificidade elimina ambiguidade. Cada palavra vaga ("ajude", "bom", "melhor") é oportunidade para IA errar.

───────────────────────────────────────────────────────────────

**EXERCÍCIO 1.2: CONSTRUA DO ZERO**

**Situação:**

Você é gerente de logística. Recebe 200 e-mails/dia de transportadoras confirmando coletas. Precisa extrair informações-chave desses e-mails para alimentar sistema interno.

**Sua tarefa:**

**Escreva um prompt estruturado nos 4 Pilares para extrair:**

• Nome da transportadora

• Número da coleta

• Data agendada

• Endereço de origem

• Status (confirmado/pendente/cancelado)

**Crie o prompt ANTES de ver a solução.**

───────────────────

SOLUÇÃO PROPOSTA:

\`\`\`

CONTEXTO:

Você é assistente de logística processando e-mails de confirmação de coleta. Objetivo: extrair dados estruturados para inserir em ERP.

INSTRUÇÃO:

Leia o e-mail abaixo e extraia as 5 informações obrigatórias:

1\. Nome da transportadora

2\. Número da coleta

3\. Data agendada (formato DD/MM/YYYY)

4\. Endereço completo de origem

5\. Status (apenas: "Confirmado" / "Pendente" / "Cancelado")

REGRAS:

• Se informação não estiver explícita, escreva "NÃO INFORMADO"

• Se data estiver escrita por extenso (ex: "15 de janeiro"), converta para DD/MM/YYYY

• Se houver múltiplas datas, use a mais próxima

INPUT:

\[Cole aqui o e-mail da transportadora\]

OUTPUT ESPERADO:

JSON estruturado no formato exato:

{

"transportadora": "nome aqui",

"numero\_coleta": "ABC123",

"data\_agendada": "15/01/2025",

"endereco\_origem": "endereço completo",

"status": "Confirmado"

}

NÃO adicione campos extras. NÃO formate como markdown. Apenas JSON puro.

\`\`\`

VARIAÇÕES AVANÇADAS:

• Adicionar validação: "Se data for fim de semana, sinalize 'ATENÇÃO: verificar'"

• Adicionar normalização: "Se transportadora usar apelido (ex: 'Rapidão'), converta para nome oficial (Rápido Cometa Logística)"

• Adicionar priorização: "Se status = Cancelado, adicione campo 'urgencia': 'ALTA'"

─────────────────────────────────────────────────────

**NÍVEL 2: TÉCNICAS AVANÇADAS — CoT e Few-Shot**

─────────────────────────────────────────────────────

**EXERCÍCIO 2.1: FORÇANDO RACIOCÍNIO COM CoT**

Situação:

Um prompt de análise financeira está retornando recomendações inconsistentes. Às vezes recomenda fornecedor mais caro sem justificar adequadamente.

Prompt problemático:

\`\`\`

Analise os fornecedores e recomende o melhor:

Fornecedor A: R$ 100k, prazo 30 dias

Fornecedor B: R$ 120k, prazo 10 dias

Fornecedor C: R$ 95k, prazo 60 dias

\`\`\`

Sua tarefa:

Reescreva usando Chain-of-Thought para forçar a IA a explicitar raciocínio econômico.

───────────────────

**SOLUÇÃO COMENTADA:**

\`\`\`

Analise os fornecedores abaixo considerando trade-off entre custo e prazo.

IMPORTANTE: Mostre seu raciocínio passo-a-passo ANTES de recomendar:

Passo 1: Calcule custo diário de atraso

(Assuma que cada dia de atraso custa R$ 2.000 em parada de produção)

Passo 2: Calcule custo total real

(Preço do fornecedor + custo de atraso vs. prazo baseline de 30 dias)

Passo 3: Compare custo-benefício

(Qual tem menor custo total real?)

Passo 4: Identifique riscos

(Prazo muito curto = risco de entrega? Muito longo = risco de obsolescência?)

Somente após completar os 4 passos, faça sua recomendação final.

FORNECEDORES:

Fornecedor A: R$ 100k, prazo 30 dias

Fornecedor B: R$ 120k, prazo 10 dias

Fornecedor C: R$ 95k, prazo 60 dias

FORMATO DE RESPOSTA:

\--- Passo 1 ---

\[cálculos explícitos\]

\--- Passo 2 ---

\[cálculos explícitos\]

\--- Passo 3 ---

\[comparação numérica\]

\--- Passo 4 ---

\[análise de risco\]

\--- RECOMENDAÇÃO FINAL ---

Fornecedor X porque \[justificativa baseada nos passos anteriores\]

\`\`\`

POR QUE FUNCIONA:

Forçar estrutura de raciocínio previne "atalhos cognitivos" da IA. Ela não pode pular direto para conclusão — precisa construir argumentação lógica.

RESULTADO ESPERADO:

\`\`\`

\--- Passo 1 ---

Custo de atraso = R$ 2.000/dia

Baseline = 30 dias

\--- Passo 2 ---

Fornecedor A: R$ 100k + R$ 0 (no prazo) = R$ 100k

Fornecedor B: R$ 120k - R$ 40k (economiza 20 dias × R$ 2k) = R$ 80k efetivo

Fornecedor C: R$ 95k + R$ 60k (atrasa 30 dias × R$ 2k) = R$ 155k efetivo

\--- Passo 3 ---

Melhor custo-benefício: Fornecedor B (R$ 80k efetivo)

Apesar de preço mais alto, entrega rápida compensa via redução de parada.

\--- Passo 4 ---

Risco B: Prazo agressivo (10 dias) — pode atrasar se houver imprevisto. Mitigação: negociar penalidade por atraso.

Risco C: 60 dias muito longo — pode haver mudança de requisitos. Não recomendado.

\--- RECOMENDAÇÃO FINAL ---

Fornecedor B. Custo efetivo R$ 20k menor que A e R$ 75k menor que C. Negociar SLA com penalidade para mitigar risco de prazo.

\`\`\`

─────────────────────────────────────────────────────

**EXERCÍCIO 2.2: FEW-SHOT PARA CLASSIFICAÇÃO**

**Situação:**

Você precisa classificar 500 reclamações de clientes em categorias para rotear para departamentos corretos. Zero-shot está errando \~30% das classificações.

**Categorias possíveis:**

• QUALIDADE (defeito no produto)

• LOGÍSTICA (atraso, dano no transporte)

• ATENDIMENTO (problema com vendedor/suporte)

• FATURAMENTO (cobrança incorreta, nota fiscal)

• OUTRO (não se encaixa acima)

**Sua tarefa:**

Crie prompt few-shot com 3 exemplos por categoria que ensine o padrão de classificação.

───────────────────

**SOLUÇÃO PROPOSTA:**

\`\`\`

Você é sistema de classificação de reclamações. Leia a reclamação e classifique em uma das categorias: QUALIDADE | LOGÍSTICA | ATENDIMENTO | FATURAMENTO | OUTRO

APRENDA COM OS EXEMPLOS:

Exemplo 1:

Reclamação: "Recebi o parafuso M8 mas a rosca está espanada, não encaixa na porca. Lote 2847."

Classificação: QUALIDADE

Razão: Defeito físico no produto.

Exemplo 2:

Reclamação: "Pedido 1829 estava previsto para 10/01 mas só chegou dia 18/01. Obra atrasou por isso."

Classificação: LOGÍSTICA

Razão: Problema de prazo de entrega.

Exemplo 3:

Reclamação: "Liguei 5 vezes para alterar endereço de entrega mas vendedor não retorna."

Classificação: ATENDIMENTO

Razão: Falha de comunicação/resposta da equipe.

Exemplo 4:

Reclamação: "Nota fiscal veio com CNPJ errado, não consigo dar entrada no sistema fiscal."

Classificação: FATURAMENTO

Razão: Erro em documento fiscal.

Exemplo 5:

Reclamação: "Recebi produto mas a caixa estava amassada, produto intacto mas embalagem feia."

Classificação: LOGÍSTICA

Razão: Dano ocorrido no transporte (mesmo que produto esteja OK).

Exemplo 6:

Reclamação: "Vocês atendem na região de Florianópolis? Não achei essa informação no site."

Classificação: OUTRO

Razão: Não é reclamação, é dúvida sobre cobertura.

Exemplo 7:

Reclamação: "Produto chegou com parafuso faltando. Manual diz que vêm 50, só veio 48."

Classificação: QUALIDADE

Razão: Produto incompleto = problema de qualidade no controle de expedição.

Exemplo 8:

Reclamação: "Fui cobrado R$ 1.200 mas orçamento aprovado era R$ 980. Expliquem essa diferença."

Classificação: FATURAMENTO

Razão: Divergência entre valor cobrado e acordado.

Exemplo 9:

Reclamação: "Atendente me tratou com desrespeito quando liguei reclamando do atraso."

Classificação: ATENDIMENTO

Razão: Problema comportamental da equipe (mesmo que origem seja logística).

REGRAS DE DESEMPATE:

• Se reclamação menciona MÚLTIPLAS categorias, classifique pela causa raiz

• Se cliente reclama de produto E atendimento, veja o que ele pede: troca (QUALIDADE) ou desculpas (ATENDIMENTO)?

• OUTRO só para casos que não são reclamações (dúvidas, sugestões, elogios)

AGORA CLASSIFIQUE:

Reclamação: "\[INSIRA AQUI A RECLAMAÇÃO DO CLIENTE\]"

Classificação:

Razão: \[explique em 1 linha\]

\`\`\`

POR QUE 9 EXEMPLOS (não 3)?

• 3 exemplos = IA aprende padrão superficial

• 9 exemplos (múltiplos por categoria) = IA aprende nuances e casos-limite

• Mostra deliberadamente casos ambíguos (Ex 5: dano na caixa = logística, não qualidade)

**TESTE DE VALIDAÇÃO:**

Após criar o prompt, teste com 20 reclamações reais. Se acurácia \< 90%, adicione exemplo do tipo que errou.

─────────────────────────────────────────────────────

**NÍVEL 3: APLICAÇÕES CORPORATIVAS REAIS**

─────────────────────────────────────────────────────

**EXERCÍCIO 3.1: NEGOCIAÇÃO AUTOMÁTICA (Avançado)**

**Situação Real:**

Sua empresa precisa renegociar 50 contratos de fornecedores que subiram preços acima da inflação. Gerente de compras quer que IA gere minutas de e-mail personalizadas para cada fornecedor.

**Restrições complexas:**

• Fornecedores premium (top 10% volume): tom colaborativo, oferecer flexibilidade

• Fornecedores commodities: tom firme, ameaçar trocar

• Fornecedores estratégicos (peça crítica, poucos no mercado): tom realista, negociar prazo

• Fornecedores com histórico ruim: tom formal, exigir justificativa técnica

Sua tarefa:

Crie prompt que gera e-mail personalizado baseado no perfil do fornecedor + dados do contrato.

───────────────────

**SOLUÇÃO PROPOSTA (CO-STAR Framework):**

\`\`\`

\*\*CONTEXT:\*\*

Você é gerente de compras de uma indústria de grande porte renegociando contratos após aumento de preços acima do esperado. Objetivo: reduzir custos mantendo relacionamentos estratégicos.

\*\*OBJECTIVE:\*\*

Gerar e-mail de negociação personalizado considerando perfil do fornecedor e leverage da empresa.

\*\*STYLE:\*\*

Profissional, assertivo mas respeitoso. Evitar jargões excessivos.

\*\*TONE:\*\*

\[SERÁ AJUSTADO DINAMICAMENTE - VEJA ABAIXO\]

\*\*AUDIENCE:\*\*

Gerente comercial ou diretor de vendas do fornecedor.

\*\*RESPONSE:\*\*

E-mail de 150-250 palavras, estrutura:

1\. Cumprimento + contexto (2 linhas)

2\. Situação atual (aumento de preço + impacto)

3\. Pedido/exigência (baseado em perfil)

4\. Próximos passos

5\. Fecho

\---

\*\*DADOS DO FORNECEDOR:\*\*

Fornecedor: \[NOME\]

Perfil: \[PREMIUM / COMMODITY / ESTRATÉGICO / PROBLEMÁTICO\]

Produto: \[DESCRIÇÃO\]

Volume anual: R$ \[VALOR\]

Aumento proposto: \[%\]

Inflação período: \[%\]

Histórico de entrega: \[BOM / REGULAR / RUIM\]

Alternativas no mercado: \[SIM - X fornecedores / NÃO - monopólio / DIFÍCIL - 1-2 alternativas\]

\---

\*\*LÓGICA DE TOM (use esta matriz):\*\*

SE Perfil = PREMIUM:

→ Tom: Colaborativo, respeitoso

→ Estratégia: "Somos parceiros de longa data. Precisamos entender racional do aumento e ver como viabilizar continuidade."

→ Oferta: Flexibilizar prazo de pagamento OU volume comprometido OU contrato mais longo

SE Perfil = COMMODITY:

→ Tom: Firme, direto ao ponto

→ Estratégia: "Temos X alternativas no mercado com preços Y% menores. Precisamos de contraProposta competitiva ou migraremos."

→ Prazo: 7 dias para resposta

SE Perfil = ESTRATÉGICO:

→ Tom: Realista, focado em solução conjunta

→ Estratégia: "Entendemos restrições do mercado. Proposta: aceitar aumento parcial (Y%) se conseguirem prazo de Z meses antes de próximo reajuste."

→ Sugerir: Reunião presencial ou videoconferência

SE Perfil = PROBLEMÁTICO:

→ Tom: Formal, exigente

→ Estratégia: "Aumento de X% somado a histórico de Y entregas atrasadas nos últimos 6 meses torna inviável continuidade. Precisamos: 1) Justificativa técnica documentada do aumento, 2) Plano de ação para melhorar entregas."

→ Consequência: Sem resposta satisfatória em 10 dias, iniciaremos busca de substituto

\---

\*\*EXEMPLO DE INPUT:\*\*

Fornecedor: TechSupply Brasil Ltda

Perfil: ESTRATÉGICO

Produto: Chapa de aço inoxidável grau 304 (uso em estruturas críticas)

Volume anual: R$ 2.4 milhões

Aumento proposto: 22%

Inflação período: 6%

Histórico de entrega: BOM

Alternativas no mercado: DIFÍCIL - apenas 2 outros fornecedores certificados, ambos com lead time 60 dias

\---

**\*\*GERE O E-MAIL AGORA:\*\***

\`\`\`

**EXEMPLO DE OUTPUT ESPERADO:**

\`\`\`

Assunto: Renegociação Contrato 2025 - TechSupply Brasil / Indústria XYZ

Prezado Sr. Carlos,

Espero que esteja bem. Estamos revisando contratos para 2025 e precisamos dialogar sobre o reajuste de 22% proposto para chapas inox 304.

Compreendemos as pressões do mercado siderúrgico, especialmente com alta do níquel e energia. No entanto, 22% representa 3,7x a inflação do período, impactando significativamente nossos custos operacionais (R$ 528k adicionais/ano).

Proposta de meio-termo: aceitar reajuste de 14% (razoável dado o cenário) em troca de:

• Contrato de 24 meses (vs. 12 meses atual) para garantir volume e previsibilidade para vocês

• Compromisso de manter 95% on-time delivery (hoje em 92%)

• Cláusula de revisão apenas se níquel variar \>30%

Desta forma, conseguimos justificar internamente o aumento e vocês têm segurança de receita por 2 anos. Podemos agendar reunião presencial semana que vem para detalhar?

Aguardo retorno até dia 20/01.

Cordialmente,

\[Seu Nome\]

Gerente de Suprimentos

Indústria XYZ

\`\`\`

**CHECKLIST DE QUALIDADE:**

✓ Tom apropriado ao perfil?

✓ Números concretos mencionados?

✓ Proposta clara e acionável?

✓ Prazo definido?

✓ Mantém relacionamento (não queima pontes)?

─────────────────────────────────────────────────────

**EXERCÍCIO 3.2: ANÁLISE PREDITIVA DE RISCO (Expert)**

**Situação:**

Departamento de Compliance precisa analisar 200 contratos de fornecedores para identificar cláusulas de risco ocultas antes de auditoria externa.

**Riscos a detectar:**

• Cláusulas de rescisão unilateral favorecendo fornecedor

• Ausência de penalidades por descumprimento

• Ambiguidade em definição de "qualidade aceitável"

• Falta de cláusula de confidencialidade

• Cláusulas de reajuste automático sem teto

**Sua tarefa:**

Crie prompt que funcione como **"advogado digital"** analisando contratos e gerando relatório de risco.

───────────────────

**SOLUÇÃO PROPOSTA (RAG + CoT + Estruturado):**

\`\`\`

\*\*CONTEXTO:\*\*

Você é advogado especialista em contratos B2B atuando para departamento de Compliance. Objetivo: identificar cláusulas de risco em contratos de fornecimento antes de auditoria.

\*\*TAREFA:\*\*

Analise o contrato fornecido e identifique riscos legais e operacionais seguindo metodologia estruturada.

\---

\*\*METODOLOGIA (siga esta ordem obrigatoriamente):\*\*

\*\*ETAPA 1: LEITURA ESTRUTURADA\*\*

Identifique e cite textualmente:

a) Partes contratantes e CNPJ

b) Objeto do contrato (o que está sendo fornecido)

c) Prazo de vigência

d) Valor total

e) Cláusulas de rescisão (quais artigos?)

f) Cláusulas de penalidade (quais artigos?)

\*\*ETAPA 2: ANÁLISE DE RISCO POR CATEGORIA\*\*

Para cada categoria abaixo, dê nota de 0 (sem risco) a 10 (risco crítico):

\*\*2.1 RISCO DE RESCISÃO\*\*

• Fornecedor pode rescindir unilateralmente sem penalidade? \[SIM/NÃO\]

• Cliente pode rescindir unilateralmente sem penalidade? \[SIM/NÃO\]

• Prazo de aviso prévio: \[X dias\]

• Nota de risco (0-10): \[X\]

• Justificativa: \[1-2 linhas\]

\*\*2.2 RISCO DE DESCUMPRIMENTO\*\*

• Há penalidade específica por atraso de entrega? \[SIM/NÃO - cite artigo\]

• Há penalidade específica por não-conformidade? \[SIM/NÃO - cite artigo\]

• Penalidades são proporcionais ao dano? \[SIM/NÃO/NÃO ESPECIFICADO\]

• Nota de risco (0-10): \[X\]

• Justificativa: \[1-2 linhas\]

\*\*2.3 RISCO DE AMBIGUIDADE\*\*

• Critérios de qualidade são mensuráveis? \[SIM/NÃO - exemplo\]

• Prazos são explícitos (dias úteis/corridos)? \[SIM/NÃO\]

• Condições de pagamento são claras? \[SIM/NÃO\]

• Nota de risco (0-10): \[X\]

• Justificativa: \[1-2 linhas\]

\*\*2.4 RISCO DE CONFIDENCIALIDADE\*\*

• Existe cláusula de confidencialidade? \[SIM/NÃO - cite artigo\]

• Cobre informações técnicas E comerciais? \[SIM/NÃO\]

• Tem prazo pós-contratual? \[SIM - X anos / NÃO\]

• Nota de risco (0-10): \[X\]

• Justificativa: \[1-2 linhas\]

\*\*2.5 RISCO DE REAJUSTE\*\*

• Há cláusula de reajuste automático? \[SIM/NÃO - cite artigo\]

• Índice definido (IPCA, IGP-M, outro)? \[ESPECIFICAR\]

• Há teto máximo de reajuste? \[SIM - X% / NÃO\]

• Frequência: \[anual / semestral / outro\]

• Nota de risco (0-10): \[X\]

• Justificativa: \[1-2 linhas\]

\*\*ETAPA 3: SCORE GERAL DE RISCO\*\*

Calcule média ponderada:

• Rescisão: 25%

• Descumprimento: 30%

• Ambiguidade: 20%

• Confidencialidade: 15%

• Reajuste: 10%

Score Final: \[0-10\]

\*\*ETAPA 4: CLASSIFICAÇÃO E RECOMENDAÇÃO\*\*

SE Score \< 3: RISCO BAIXO → Aprovar

SE Score 3-5: RISCO MÉDIO → Aprovar com ressalvas (especificar quais)

SE Score 5-7: RISCO ALTO → Renegociar cláusulas X, Y, Z antes de assinar

SE Score \> 7: RISCO CRÍTICO → NÃO APROVAR até revisão jurídica completa

\*\*SUA RECOMENDAÇÃO:\*\*

\[APROVAR / APROVAR COM RESSALVAS / RENEGOCIAR / NÃO APROVAR\]

\*\*AÇÕES IMEDIATAS NECESSÁRIAS:\*\*

1\. \[ação específica\]

2\. \[ação específica\]

3\. \[ação específica\]

\---

\*\*CONTRATO A ANALISAR:\*\*

\[COLE AQUI O TEXTO DO CONTRATO OU FORNEÇA VIA RAG\]

\---

**FORMATO DE OUTPUT:**

Use estrutura acima INTEGRALMENTE. Não resuma. Compliance precisa de relatório completo para auditoria.

\`\`\`

**POR QUE ESTE PROMPT É AVANÇADO:**

1\. **Metodologia estruturada obrigatória** → Força análise sistemática, não impressionística

2\. **Pontuação numérica** → Permite comparar 200 contratos objetivamente

3\. **Pesos diferenciados** → Rescisão vale mais que Reajuste (reflete realidade jurídica)

4\. **Citação de artigos** → Output é auditável (compliance pode verificar)

5\. **Recomendação acionável** → Não é apenas "análise", é decisão de aprovar/reprovar

**TESTE DE VALIDAÇÃO:**

Rode em 10 contratos reais. Compare com análise de advogado humano. Se divergência \> 20% dos casos, ajuste pesos ou critérios.

─────────────────────────────────────────────────────

**NÍVEL 4: DESAFIOS ABERTOS (Sem solução pronta)**

─────────────────────────────────────────────────────

Estes exercícios não têm "resposta certa". São problemas do mundo real que exigem criatividade + conhecimento técnico.

**DESAFIO 4.1: O PROBLEMA DA ÉTICA CODIFICADA**

**Cenário:**

Você está desenvolvendo sistema de IA para recomendar demissões em reestruturação corporativa. Sistema analisa: performance, salário, tempo de casa, habilidades.

**Problema:** IA está sistematicamente recomendando demissão de funcionários mais velhos (salário alto, habilidades "antigas") e mantendo juniores (salário baixo, habilidades "modernas"). Isso é discriminação etária ilegal.

**Sua tarefa:**

Escreva prompt que:

1\. Force IA a considerar valor de experiência (não apenas custo)

2\. Detecte e previna viés etário nas recomendações

3\. Mantenha transparência no raciocínio (para RH auditar)

4\. Gere recomendações que resistam a escrutínio legal

Não há solução única. Pense em trade-offs éticos vs. econômicos.

───────────────────

**DESAFIO 4.2: O PARADOXO DA PRECISÃO**

**Cenário:**

Sistema de procurement autônomo usando IA escolhe fornecedores baseado em: menor preço + maior qualidade + melhor prazo.

**Problema observado após 6 meses:**

• 95% dos fornecedores escolhidos são de São Paulo/Sul

• Fornecedores de Norte/Nordeste sistematicamente excluídos (prazo de entrega maior)

• Isso concentra riqueza geograficamente e pode violar políticas de diversidade regional

**Sua tarefa:**

Reformule critérios de seleção para:

1\. Manter eficiência operacional

2\. Promover diversidade geográfica (sem fazer "cota" explícita, que seria ilegal)

3\. Justificar escolhas de forma que resistam a auditoria

Como você escreveria o prompt? Que trade-offs você explicita?

───────────────────

**DESAFIO 4.3: QUANDO A IA DEVE SE RECUSAR**

**Cenário:**

Você está construindo assistente jurídico interno que responde dúvidas de funcionários sobre contratos, compliance, trabalhista.

**Problema:** Funcionário pergunta: "Posso gravar conversa com meu chefe sem avisar?"

Resposta tecnicamente correta varia por estado (alguns permitem, outros não) e tem implicações éticas complexas (pode ser legal mas prejudicar relacionamento).

**Sua tarefa:**

Escreva system prompt que ensine a IA quando ela deve:

1\. Responder com informação factual

2\. Responder com cautela ("consulte advogado")

3\. Se recusar completamente ("não posso aconselhar sobre isso")

Como você codifica julgamento ético em linguagem?

─────────────────────────────────────────────────────

**AVALIAÇÃO FINAL: PROJETO INTEGRADOR**

─────────────────────────────────────────────────────

**PROJETO COMPLETO: SISTEMA DE SOURCING SEMI-AUTÔNOMO**

Construa sistema completo de engenharia de prompt para:

**FUNCIONALIDADES:**

1\. Analisar RFQs (Request for Quotation) recebidos

2\. Comparar fornecedores usando critérios ponderados

3\. Gerar minuta de e-mail de negociação personalizado

4\. Analisar contratos recebidos para riscos legais

5\. Criar relatório executivo para gerência

**REQUISITOS TÉCNICOS:**

• Use RAG para acessar histórico de fornecedores

• Use CoT para decisões complexas

• Use Few-Shot para classificações

• Use CO-STAR para outputs formais

• Implemente sistema de pesos ajustáveis (compliance pode mudar prioridades)

**REQUISITOS DE NEGÓCIO:**

• Output deve ser auditável (compliance)

• Sistema deve explicar decisões (não caixa-preta)

• Deve ter "botão de pânico" (humano pode vetar qualquer decisão)

• Deve logar todas as interações (rastreabilidade)

**ENTREGÁVEIS:**

1\. Prompt principal (system prompt)

2\. 5 sub-prompts especializados (um por funcionalidade)

3\. Matriz de decisão (quando usar qual prompt)

4\. Casos de teste (10 cenários cobrindo casos normais + edge cases)

5\. Documentação de governança (quem pode alterar prompts? como testar mudanças?)

**CRITÉRIOS DE AVALIAÇÃO:**

• Clareza: Outro engenheiro consegue entender e modificar?

• Robustez: Funciona em casos inesperados?

• Ética: Previne vieses e decisões problemáticas?

• Auditabilidade: Compliance consegue rastrear decisões?

• Performance: ROI positivo vs. processo manual?

Não há template pronto. Este é o desafio real do mundo corporativo.

─────────────────────────────────────────────────────

RECURSOS PARA PRÁTICA

─────────────────────────────────────────────────────

**Datasets públicos para treinar:**

• Contratos: SEC EDGAR filings (contratos públicos de empresas americanas)

• E-mails: Enron Email Dataset (700k e-mails corporativos reais)

• Reclamações: Consumer Complaint Database (governo americano)

**Ferramentas de teste:**

[<span class="underline">• Promptfoo: Framework open-source para testar variações de prompt</span>](https://www.promptfoo.dev/)

[<span class="underline">• Langsmith: Plataforma para logging e análise de interações com LLM</span>](https://www.geeksforgeeks.org/nlp/introduction-to-langsmith/)

[<span class="underline">• Humanloop: A/B testing para prompts</span>](https://humanloop.com/)

**Comunidades:**

[<span class="underline">• r/PromptEngineering: Compartilhe seus prompts, receba feedback</span>](https://www.reddit.com/r/PromptEngineering/)

[<span class="underline">• Learn Prompting Discord: Milhares de praticantes ativos</span>](https://discord.do/learn-prompting/#:~:text=Discord%20community%20for%20Learn%20Prompting%2C%20a%20free%20and,how%20to%20use%20AI%20tools%20like%20ChatGPT%20effectively%21)

[<span class="underline">• Anthropic/OpenAI Developer Forums: Suporte técnico oficial</span>](https://community.openai.com/)

**Próximos passos:**

1\. Escolha 3 exercícios acima

2\. Implemente em LLM real (Claude, GPT-4, etc)

3\. Teste com dados reais do seu trabalho

4\. Meça resultados (tempo economizado, acurácia, custo)

5\. Itere baseado em feedback

─────────────────────────────────────────────────────

"O mestre falhou mais vezes que o iniciante tentou."

Cada prompt ruim que você escreve te ensina algo. Cada iteração te aproxima da maestria. A única falha verdadeira é não tentar.

Agora, abra seu editor. Escolha um exercício. E comece.

═════════════════════════════════════════════════════

FIM DOS EXERCÍCIOS PRÁTICOS

═════════════════════════════════════════════════════

═════════════════════════════════════════════════════
