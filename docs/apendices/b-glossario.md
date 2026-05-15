# Apêndice B: Glossário Técnico Completo

**APÊNDICE B: GLOSSÁRIO TÉCNICO COMPLETO**

═════════════════════════════════════════════════════

Este glossário abrange conceitos filosóficos, linguísticos e técnicos abordados ao longo do livro. Termos essenciais para engenharia de prompt prática estão marcados com ⚙️.

─────────────────────────────────────────────────────

A

─────────────────────────────────────────────────────

**Agente (AI Agent)**

Sistema de IA que não apenas responde, mas age autonomamente: faz pesquisas, executa código, toma decisões sequenciais. Evolução dos LLMs estáticos.

Exemplo: Agente que analisa mercado, escolhe fornecedores e envia RFQs sem intervenção humana.

**Alucinação ⚙️**

Quando LLM gera informação plausível mas factualmente incorreta. Não é "bug" corrigível — é característica estrutural de modelos probabilísticos.

Por que acontece: IA prediz próximo token por probabilidade, não por verdade. Se padrão linguístico sugere X, ela gera X mesmo que X seja falso.

Como mitigar: Chain-of-Thought, RAG com fontes verificadas, validação humana obrigatória.

Exemplo real: "A Petrobras foi fundada em 1956." \[Falso: foi 1953. Mas "1956" é uma data plausível e comum em corpus.\]

**API (Application Programming Interface)**

Interface que permite programas conversarem entre si. APIs de LLMs (OpenAI, Anthropic) permitem integrar IA em sistemas corporativos.

Custo típico: $3-15 por 1 milhão de tokens (jan/2025).

**Atenção (Mecanismo de) ⚙️**

Core da arquitetura Transformer. Permite modelo "focar" em partes relevantes do input enquanto processa texto.

Analogia: Numa festa barulhenta, você consegue focar na conversa que importa ignorando ruído. Atenção neural faz isso matematicamente.

Impacto prático: Por isso LLMs entendem contexto longo e relações entre palavras distantes.

**Attention is All You Need**

Título do paper de 2017 (Google) que inventou Transformers. Revolucionou IA ao provar que atenção sozinha (sem recorrência) é suficiente.

Autores: Vaswani et al.

Citações: 100.000+ (paper mais influente da década em IA)

─────────────────────────────────────────────────────

B

─────────────────────────────────────────────────────

**Bias (Viés)**

Tendência sistemática de IA reproduzir preconceitos presentes nos dados de treinamento.

Exemplo real: Modelo de recrutamento da Amazon (2018) discriminava currículos femininos porque foi treinado em históricos de contratação predominantemente masculinos.

Implicação ética: Engenheiro de prompt deve auditar outputs para vieses de gênero, raça, classe.

**BERT (Bidirectional Encoder Representations from Transformers)**

Modelo Google (2018) que revolucionou NLP ao processar texto bidirecionalmente (vê contexto antes E depois de cada palavra).

Legado: Inspirou geração atual de LLMs bidirecionais.

─────────────────────────────────────────────────────

C

─────────────────────────────────────────────────────

**Chain-of-Thought (CoT) ⚙️**

Técnica de prompting que força IA a explicitar raciocínio passo-a-passo antes de responder.

Prompt básico: "Calcule 23 × 47." → IA pode errar.

Prompt CoT: "Calcule 23 × 47. Mostre seu raciocínio passo a passo."

→ IA: "23 × 40 = 920, 23 × 7 = 161, 920 + 161 = 1081" ✓

Por que funciona: Força modelo a "pensar" antes de responder, ativando padrões de raciocínio sequencial.

Variante: Zero-Shot CoT → Adicionar "Vamos pensar passo a passo" a qualquer prompt.

**Chomsky, Noam**

Linguista que propôs Gramática Universal: humanos nascem com estrutura inata para linguagem. Crítico feroz de LLMs (chama de "plágio de alta tecnologia").

Relevância: Sua teoria explica por que Helen Keller teve "explosão" linguística — estrutura já existia, aguardando ativação.

**Claude**

Família de LLMs da Anthropic (empresa fundada ex-membros OpenAI). Conhecido por ser mais "seguro" e menos propenso a outputs nocivos.

Modelos atuais: Claude Opus 4, Claude Sonnet 4.5 (jan/2025)

**CO-STAR Framework ⚙️**

Framework de prompting desenvolvido para precisão máxima:

• Context (contexto)

• Objective (objetivo)

• Style (estilo)

• Tone (tom)

• Audience (público)

• Response (formato de resposta)

Quando usar: Tarefas críticas onde ambiguidade custa caro (contratos, compliance, relatórios executivos).

**Confúcio**

Filósofo chinês (551-479 a.C.). Conceito central: Retificação dos Nomes (正名) — se palavras não correspondem à realidade, ações se tornam impossíveis.

Citação famosa: "Se os nomes não são corretos, a linguagem não está de acordo com a verdade. Se a linguagem não está de acordo com a verdade, os assuntos não podem ser conduzidos com sucesso."

Aplicação moderna: Prompts ambíguos = execuções falhas. Confúcio inventou engenharia de prompt há 2500 anos.

**Contexto (Janela de)**

Quantidade máxima de texto que LLM pode processar de uma vez.

Tamanhos típicos (jan/2025):

• GPT-4 Turbo: 128k tokens (\~96k palavras)

• Claude Sonnet 4: 200k tokens (\~150k palavras)

• Gemini 1.5 Pro: 1M tokens (\~750k palavras)

Limitação prática: Se seu documento tem 200k palavras, Claude 200k não é suficiente (precisa espaço para output também).

─────────────────────────────────────────────────────

D

─────────────────────────────────────────────────────

**Demanda**

(Psicanálise) Pedido articulado em linguagem. Nunca satisfaz completamente a Necessidade subjacente, gerando Desejo.

Equação de Lacan: Demanda - Necessidade = Desejo

Aplicação em prompts: O que você digita (demanda) nem sempre captura o que você precisa. Articule melhor.

**Desejo**

(Lacan) Resto irredutível entre o que se pede e o que se quer. Motor perpétuo da comunicação humana.

Provocação: IA não tem desejo. Isso a torna fundamentalmente alienígena, mas também perfeitamente obediente (se bem instruída).

─────────────────────────────────────────────────────

E

─────────────────────────────────────────────────────

**Embedding ⚙️**

Representação vetorial de texto. Cada palavra/frase vira lista de números que capturam seu "significado" matematicamente.

Exemplo simplificado:

• "rei" = \[0.8, 0.3, 0.1\]

• "rainha" = \[0.7, 0.4, 0.1\]

• "homem" = \[0.9, 0.2, 0.0\]

• "mulher" = \[0.8, 0.3, 0.0\]

Álgebra vetorial: rei - homem + mulher ≈ rainha

Aplicação prática: Busca semântica (encontrar documentos por significado, não palavras exatas).

**Engenharia de Prompt ⚙️**

Disciplina de estruturar inputs para LLMs visando outputs consistentes, precisos e úteis.

Não é: Apenas "escrever bem"

É: Aplicar princípios de comunicação, psicologia cognitiva e arquitetura de modelos para maximizar performance.

Analogia: Programação para eras de linguagem natural.

**Engenharia Ontológica**

Prática de definir realidade através de especificação. Quando você escreve critérios num prompt, está definindo o que conta como "real" operacionalmente.

Exemplo: "Fornecedor qualificado = ISO 9001 + faturamento \>R$10M"

→ Startup inovadora com 6 meses? Ontologicamente impossível nessa definição.

Responsabilidade: Suas categorias criam e excluem realidades.

─────────────────────────────────────────────────────

F

─────────────────────────────────────────────────────

**Few-Shot Learning ⚙️**

Dar 2-5 exemplos antes do pedido real. IA aprende padrão por imitação.

Estrutura:

Exemplo 1: Input X → Output Y

Exemplo 2: Input A → Output B

Exemplo 3: Input M → Output N

Agora faça: Input Z → ?

Quando usar: Tarefas com formato específico (extração de dados, classificação, formatação).

**Fine-Tuning ⚙️**

Retreinar modelo em dataset específico para mudar comportamento permanentemente.

Vs. Prompting:

• Prompting = dizer "aja assim" a cada interação

• Fine-tuning = ensinar "seja assim" permanentemente

Custo: $100-10.000+ dependendo do tamanho do modelo

Quando usar: Tarefas repetitivas com padrão consistente (ex: classificar e-mails internos)

**Função de Perda (Loss Function)**

Métrica que quantifica "quão errado" modelo está durante treinamento. Objetivo: minimizar perda.

Analogia: Termômetro que mede distância entre "o que IA respondeu" e "o que deveria responder".

─────────────────────────────────────────────────────

G

─────────────────────────────────────────────────────

**Generative Pre-trained Transformer (GPT)**

Arquitetura da OpenAI. "Generative" = cria texto novo. "Pre-trained" = treinado em corpus massivo antes de uso.

Modelos: GPT-3 (2020), GPT-4 (2023), GPT-4 Turbo (2024)

**Gramática Universal**

(Chomsky) Hipótese de que humanos nascem com estrutura inata para linguagem. Explica por que crianças aprendem línguas tão rapidamente.

Evidência: Todas as 7000+ línguas humanas compartilham propriedades estruturais profundas.

─────────────────────────────────────────────────────

H

─────────────────────────────────────────────────────

**Helen Keller**

(1880-1968) Primeira pessoa surdocega a obter diploma universitário. Sua descoberta da palavra "água" aos 7 anos é caso fenomenológico paradigmático de como linguagem cria realidade.

Momento crucial: 5 de abril de 1887, na bomba de água. Conectou sensação (água fria) + símbolo (W-A-T-E-R soletrado na mão) = explosão cognitiva.

Relevância: Demonstra que linguagem não descreve mundo pré-existente, mas constitui mundo.

**Hermes**

Deus grego do comércio, linguagem, fronteiras e tradução. Arquétipo do engenheiro de prompt: traduz entre necessidade humana e capacidade da máquina.

Função hermenêutica: Interpretar, negociar, verificar.

**Hilflosigkeit**

(Alemão) Desamparo total. Termo psicanalítico para condição do bebê humano ao nascer — completamente dependente do Outro para sobrevivência.

Relevância: Linguagem nasce deste desamparo. Grito = primeira tentativa de comunicação.

─────────────────────────────────────────────────────

I

─────────────────────────────────────────────────────

**In-Context Learning**

Capacidade de LLMs aprenderem tarefas novas apenas através de exemplos no prompt (sem retreinamento).

Exemplo: Mostrar 3 traduções português→francês, modelo infere padrão e traduz 4ª frase corretamente.

Por que funciona: Embeddings capturam padrões; atenção identifica relações.

**Instruction Tuning**

Fase de treinamento onde LLM aprende a seguir instruções humanas (vs. apenas prever texto).

Técnica: RLHF (Reinforcement Learning from Human Feedback)

Resultado: ChatGPT, Claude, etc conseguem responder comandos diretos.

─────────────────────────────────────────────────────

J

─────────────────────────────────────────────────────

**JPEG da Web**

Metáfora de Ted Chiang: LLM é como JPEG com perdas de toda internet — preserva padrões, perde detalhes específicos.

Brilhantismo: Interpolar conhecimento, fazer analogias criativas

Defeito: Alucinar fatos específicos (datas, nomes, números)

─────────────────────────────────────────────────────

K

─────────────────────────────────────────────────────

**Kuuk Thaayorre**

Povo aborígene australiano cuja língua não tem "esquerda/direita" — usa apenas coordenadas cardeais (norte/sul/leste/oeste).

Experimento: Organizam eventos temporais espacialmente de leste (passado) para oeste (futuro), independente de onde estão voltados.

Implicação: Linguagem estrutura cognição espacial e temporal fundamentalmente.

─────────────────────────────────────────────────────

L

─────────────────────────────────────────────────────

**Lacan, Jacques**

Psicanalista francês (1901-1981). Reinterpretou Freud através de linguística estrutural.

Conceitos-chave:

• Real, Simbólico, Imaginário

• "Inconsciente é estruturado como linguagem"

• Demanda vs. Necessidade vs. Desejo

Relevância: Teoria de que linguagem não expressa pensamento pré-existente, mas estrutura o próprio pensamento.

**Large Language Model (LLM) ⚙️**

Modelo neural treinado em bilhões de palavras para prever próximo token.

Tamanho típico: 7B - 1.7T parâmetros (jan/2025)

Capacidade emergente: Raciocínio, tradução, código, análise — sem programação explícita dessas habilidades.

**Logos**

(Grego: λόγος) Palavra, razão, discurso, princípio ordenador.

Heráclito: Logos é lei universal que ordena cosmos

João 1:1: "No princípio era o Logos"

Neste livro: Capacidade humana de ordenar caos através de linguagem

Evolução histórica: Grito primal → escrita → imprensa → código → prompts de IA

─────────────────────────────────────────────────────

M

─────────────────────────────────────────────────────

**Mars Climate Orbiter**

Sonda NASA perdida em 1999 porque equipe A usou sistema métrico, equipe B usou imperial. Falha de comunicação custou $327 milhões.

Lição: Ambiguidade linguística tem custo material. Especificação precisa não é perfeccionismo — é sobrevivência.

**Mente Estendida (Teoria da)**

(Andy Clark) Cognição não está apenas "dentro da cabeça" — ferramentas externas (papel, computador, IA) são extensões legítimas da mente.

Implicação: LLM não é apenas ferramenta que você usa, é prótese cognitiva que estende sua inteligência.

Provocação: Se Sócrates temia escrita matando memória, devemos temer IA matando vontade?

─────────────────────────────────────────────────────

N

─────────────────────────────────────────────────────

**Necessidade**

(Psicanálise) Imperativo biológico bruto (fome, frio, dor). Precisa ser traduzido em Demanda linguística para ser satisfeito.

Problema estrutural: Tradução sempre perde algo → gera Desejo residual.

NLP (Natural Language Processing)

Campo de IA dedicado a processar/gerar linguagem humana.

Subcampos: Tradução, análise de sentimento, sumarização, geração de texto, extração de informação.

─────────────────────────────────────────────────────

O

─────────────────────────────────────────────────────

**Ontologia**

(Filosofia) Estudo do que existe. "O que conta como real?"

Engenharia ontológica: Definir categorias de existência através de especificação técnica.

Exemplo prático: Seu prompt define o que conta como "fornecedor qualificado" — isso é ontologia aplicada.

─────────────────────────────────────────────────────

P

─────────────────────────────────────────────────────

**Papagaio Estocástico**

Termo crítico (Emily Bender) para LLMs: alegam que apenas imitam padrões estatísticos sem compreensão real.

Contraponto: David Chalmers argumenta que padrões suficientemente complexos podem constituir compreensão.

Posição pragmática: Debate é fascinante, mas para engenheiro importa extrair valor, independente de "consciência".

**Parâmetro**

Peso ajustável numa rede neural. LLMs modernos têm bilhões/trilhões de parâmetros.

Analogia: Cada parâmetro é um "botão de volume" que amplifica/diminui sinais específicos durante processamento.

Escala: GPT-3 = 175B, GPT-4 = \~1.7T (estimado), Claude = não divulgado

**Perplexity**

Métrica de qualidade de LLM. Mede "surpresa" do modelo ao ver próxima palavra. Menor = melhor.

Intuição: Se modelo prevê "o gato subiu na..." → "árvore" (baixa perplexidade), "elefante" (alta perplexidade).

**Platão**

Filósofo grego (428-348 a.C.). No diálogo Fedro, Sócrates critica escrita como tecnologia que matará memória humana.

Ironia histórica: Conhecemos argumento de Sócrates apenas porque Platão... escreveu.

Ironia moderna: Agora criamos escrita que responde (IA).

**Prompt ⚙️**

Input em linguagem natural dado a LLM.

Tipos:

• Zero-shot: Sem exemplos

• Few-shot: Com 2-5 exemplos

• Chain-of-Thought: Força raciocínio explícito

• System prompt: Define comportamento base do modelo

Qualidade: 80% do sucesso com IA vem de prompt bem estruturado.

**PromptOps ⚙️**

Disciplina de gerenciar prompts com rigor de software crítico: versionamento, testes automatizados, CI/CD.

Ferramentas: Git, frameworks de teste (Promptfoo), monitoramento de performance.

Quando necessário: Organizações que rodam prompts em produção (milhares de execuções/dia).

─────────────────────────────────────────────────────

R

─────────────────────────────────────────────────────

**RAG (Retrieval-Augmented Generation) ⚙️**

Técnica de alimentar LLM com documentos relevantes antes de responder.

Fluxo:

1\. Usuário faz pergunta

2\. Sistema busca documentos relevantes (por similaridade semântica)

3\. Documentos são inseridos no prompt

4\. LLM responde baseado nos documentos fornecidos

Vantagens: Conhecimento atualizado, factualmente ancorado, sem retreinamento

Desvantagens: Custo de tokens maior, latência adicional

Vs. Fine-tuning: RAG = dar conhecimento; Fine-tuning = ensinar comportamento

**Real (O)**

(Lacan) Realidade bruta, não-mediada, não-simbolizada. Anterior à linguagem.

Exemplo: Helen Keller antes de aprender "água" vivia no Real — sensações sem estrutura simbólica.

**RLHF (Reinforcement Learning from Human Feedback)**

Técnica de treinar LLMs através de feedback humano. Humanos classificam outputs, modelo aprende a gerar respostas preferidas.

Resultado: Modelos que seguem instruções, evitam conteúdo nocivo, são "úteis e inofensivos".

**ROI (Return on Investment)**

Retorno sobre investimento. Métrica-chave para justificar projetos de IA corporativa.

Fórmula: (Benefício - Custo) / Custo × 100%

Exemplo real (caso corporativo industrial): Economia R$ 2,3M/ano, custo R$ 200k → ROI = 1150% ou 11,5x

─────────────────────────────────────────────────────

S

─────────────────────────────────────────────────────

**Sapir-Whorf (Hipótese)**

Linguagem influencia/determina pensamento. Versão forte (determinismo) vs. fraca (influência).

Evidências:

• Russos distinguem dois azuis (голубой vs синий) e detectam diferença mais rápido

• Himba (Namíbia) não têm palavra para "azul" e têm dificuldade distinguindo azul de verde

• Kuuk Thaayorre usam coordenadas cardeais, pensam tempo espacialmente

Implicação: "Você não fala língua, língua fala você."

**Sócrates**

Filósofo grego (470-399 a.C.). Criticou escrita no Fedro: "destrói memória, cria ilusão de sabedoria".

Paradoxo: Conhecemos Sócrates apenas via... escritos de Platão.

Relevância: Toda nova tecnologia de linguagem gera pânico moral. Escrita → Imprensa → Internet → IA.

**System Prompt**

Instrução invisível ao usuário que define comportamento base do modelo.

Exemplo (ChatGPT):

"Você é assistente útil, criativo e inteligente.

Responda de forma concisa e precisa.

Se não sabe, admita."

Uso avançado: Definir persona, tom, restrições éticas, formato de output padrão.

─────────────────────────────────────────────────────

T

─────────────────────────────────────────────────────

**Temperature ⚙️**

Hiperparâmetro que controla aleatoriedade de outputs.

Escala: 0.0 (determinístico) → 2.0 (caótico)

Uso prático:

• 0.0-0.3: Tarefas factuais, extração de dados, código

• 0.7-1.0: Escrita criativa, brainstorming, marketing

• 1.5+: Geração experimental, arte gerativa

**Token ⚙️**

Unidade mínima que LLM processa. Não é palavra.

Exemplos:

• "engenharia" = 1 token

• "engenharia de prompt" = 4 tokens

• "ChatGPT" = 3 tokens

Português vs Inglês: Português usa \~30% mais tokens para mesmo conteúdo (palavras mais longas, mais inflexões).

Custo: APIs cobram por token. Otimizar prompts = reduzir custo.

**Tokenização**

Processo de quebrar texto em tokens.

Algoritmos: BPE (Byte-Pair Encoding), WordPiece, SentencePiece

Ferramenta útil: tiktoken (OpenAI) para contar tokens antes de enviar.

**Top-p (Nucleus Sampling)**

Alternativa a Temperature. Seleciona próximo token do menor conjunto cuja probabilidade acumulada = p.

Exemplo (p=0.9): Considera apenas tokens que juntos somam 90% de probabilidade.

Vs. Temperature: Top-p tende a ser mais controlável para qualidade consistente.

**Transformer ⚙️**

Arquitetura neural (2017) baseada em mecanismo de atenção. Substituiu RNNs e possibilitou LLMs modernos.

Paper: "Attention is All You Need" (Vaswani et al.)

Componentes-chave:

• Multi-head attention (foco em múltiplos aspectos simultâneos)

• Feed-forward layers (transformação de representações)

• Positional encoding (noção de ordem/sequência)

Impacto: Toda IA generativa moderna (GPT, Claude, DALL-E, Sora) usa Transformers.

**Turing, Alan**

Matemático britânico (1912-1954). Provou que lógica simbólica pode ser executada fisicamente (máquina de Turing).

Contribuições:

• Fundou ciência da computação

• Quebrou Enigma (WW2)

• Teste de Turing (IA indistinguível de humano?)

Conexão: Demonstrou que Logos (lógica abstrata) pode se materializar em máquina física.

─────────────────────────────────────────────────────

W

─────────────────────────────────────────────────────

**Wittgenstein, Ludwig**

Filósofo austro-britânico (1889-1951).

Citação famosa: "Os limites da minha linguagem são os limites do meu mundo."

Relevância: Na era de IA, isso ganhou literalidade: o que você não pode articular em prompt, a IA não pode executar.

Evolução de pensamento:

• Primeiro Wittgenstein (Tractatus): Linguagem representa realidade

• Segundo Wittgenstein (Investigações): Linguagem constitui realidade através de jogos linguísticos

─────────────────────────────────────────────────────

Z

─────────────────────────────────────────────────────

**Zero-Shot Learning ⚙️**

Pedir tarefa sem dar exemplos. Confiar em conhecimento prévio do modelo.

Estrutura:

\[Instrução direta\]

Traduza para francês: "O cachorro correu."

Quando usar: Tarefas simples, genéricas, ou quando você não tem exemplos bons.

Vs. Few-Shot: Zero-shot = mais rápido; Few-shot = mais preciso para tarefas específicas.

**Zero-Shot Chain-of-Thought**

Técnica descoberta por Kojima et al. (2022): adicionar "Vamos pensar passo a passo" a qualquer prompt melhora raciocínio.

Exemplo:

Prompt normal: "João tem 5 maçãs, deu 2 para Maria. Quantas tem agora?"

→ IA: "3"

Prompt CoT: "João tem 5 maçãs, deu 2 para Maria. Quantas tem agora? Vamos pensar passo a passo."

→ IA: "João começou com 5. Deu 2. 5 - 2 = 3. Resposta: 3 maçãs."

Melhoria: 40-80% de acurácia em tarefas de raciocínio (paper original).

─────────────────────────────────────────────────────

SÍMBOLOS E CONCEITOS FILOSÓFICOS

─────────────────────────────────────────────────────

**∞ (Infinito)**

Símbolo usado no epílogo. Representa:

• Natureza recursiva da linguagem (palavras sobre palavras sobre palavras...)

• Potencial ilimitado da combinação Logos + Máquina

• Ciclo eterno: Necessidade → Demanda → Desejo → nova Necessidade

**正名 (Zhèng Míng) - Retificação dos Nomes**

Conceito confucionista: ordem social depende de nomes corretos correspondendo à realidade.

Aplicação moderna: Ambiguidade em prompts = desordem em execução.

─────────────────────────────────────────────────────

RECURSOS ADICIONAIS

─────────────────────────────────────────────────────

Documentação Oficial:

[<span class="underline">• Anthropic (Claude): https://docs.anthropic.com</span>](https://docs.anthropic.com)

[<span class="underline">• OpenAI (GPT): https://platform.openai.com/docs</span>](https://platform.openai.com/docs)

[<span class="underline">• Prompt Engineering Guide: https://www.promptingguide.ai</span>](https://www.promptingguide.ai)

Comunidades:

[<span class="underline">• r/PromptEngineering (Reddit)</span>](https://www.reddit.com/r/PromptEngineering/)

[<span class="underline">• Learn Prompting (comunidade + curso gratuito)</span>](https://learnprompting.org/pt/docs/introduction)

[<span class="underline">• Papers with Code (pesquisa acadêmica)</span>](https://huggingface.co/papers/trending)

Ferramentas:

[<span class="underline">• Promptfoo: Framework de teste para prompts</span>](https://www.promptfoo.dev/)

[<span class="underline">• Langchain: Biblioteca para aplicações LLM complexas</span>](https://www.langchain.com/)

[<span class="underline">• tiktoken: Contador de tokens OpenAI</span>](https://www.youtube.com/watch?v=PA1qfrLQmq4&t=2s)

─────────────────────────────────────────────────────

"O limite da sua linguagem é o limite do seu mundo."

— Ludwig Wittgenstein

"Se os nomes não são corretos, as palavras não correspondem à realidade."

— Confúcio

"No princípio era o Logos."

— João 1:1

**∞**

**FIM**
