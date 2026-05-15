# Capítulo 13: Few-Shot vs. Zero-Shot — Instruir ou Demonstrar?

**I. A Distinção Fundamental**

Até agora, usamos prompts que **instruem** a IA sobre o que fazer:

"Analise este contrato e liste os riscos."

Mas há uma segunda abordagem, frequentemente mais poderosa: **demonstrar** o que você quer através de exemplos.

Esta é a diferença entre:

\- **Zero-Shot:** Dar instruções sem exemplos

\- **Few-Shot:** Dar exemplos antes da tarefa real

**Analogia:**

Zero-Shot = Ensinar alguém a fazer bolo dizendo: "Misture farinha, ovos, açúcar e asse a 180°C."

Few-Shot = Mostrar 2-3 bolos prontos, explicar como você fez cada um, e então pedir para fazerem um novo.

**II. Zero-Shot Prompting: Quando Funciona**

**Definição**

Zero-Shot significa fornecer **zero exemplos** – apenas a instrução direta e a tarefa.

> **Quando Usar:**

  - > Tarefas simples e autoexplicativas (ex: tradução básica, resumo).

  - > Quando o modelo já possui forte familiaridade com o domínio.

  - > Para maximizar a flexibilidade e a criatividade (exemplos podem "ancorar" demais a resposta).

**Exemplo Eficaz:**

  - > **Tarefa:** Traduza a seguinte frase do Português para Inglês: "A implementação da nova política de compliance iniciará em janeiro."

  - > **Output:** "The implementation of the new compliance policy will begin in January."

  - > *Funciona porque a tradução é uma tarefa comum e as instruções são claras.*

**Limitações do Zero-Shot:**

1.  > **Formato Ambíguo:** Sem um exemplo, o modelo adivinha a estrutura de saída.
    
      - > *Prompt:* "Extraia os nomes de pessoas deste texto: 'João encontrou Maria no parque.'"
    
      - > *Outputs Possíveis:* "João, Maria" | "João e Maria" | "Nomes: João, Maria".

2.  > **Tarefas Não-Óbvias/Requisitos Ocultos:** Requisitos como justificativa, *score* de confiança ou formato JSON não são inferidos.
    
      - > *Prompt:* "Classifique este email como spam ou não-spam: 'Ganhe R$ 10.000 clicando aqui\!\!'"
    
      - > *Output:* "Spam".
    
      - > *O modelo não sabe que você queria, por exemplo, um formato JSON.*

\-----II. Few-Shot Prompting: O Poder da Demonstração

**Definição:** Few-Shot significa fornecer alguns exemplos (tipicamente 2 a 5) de pares **Input → Output desejado** *antes* de apresentar o novo problema.

**Estrutura:**

Exemplo 1: Input: \[...\] Output: \[...\]

Exemplo 2: Input: \[...\] Output: \[...\]

\[...\]

Agora, sua vez: Input: \[novo problema\] Output:

**Por Que Funciona (Aprendizado em Contexto - In-Context Learning):**

LLMs são capazes de detectar o padrão, estilo, e formato nos exemplos fornecidos e aplicar essa "calibração" ao novo input. É um "micro-treinamento" instantâneo.Few-Shot em Ação: Consistência e Formato

<table>
<thead>
<tr class="header">
<th><strong>Cenário</strong></th>
<th><strong>Zero-Shot (Impreciso)</strong></th>
<th><strong>Few-Shot (Preciso)</strong></th>
</tr>
</thead>
<tbody>
<tr class="odd">
<td><strong>Classificação de Sentimento</strong></td>
<td><blockquote>
<p><em>Prompt:</em> "Classifique: 'O produto funciona mas o preço é meio salgado.'" <em>Problema:</em> O modelo não sabe o seu <em>threshold</em> para "Neutro" (pode classificar como "Negativo").</p>
</blockquote></td>
<td><blockquote>
<p><em>Exemplos calibram:</em> Definindo que "Funcional mas com ressalvas" = Neutro. Garante que o <em>review</em> misto caia em <strong>Neutro</strong>.</p>
</blockquote></td>
</tr>
<tr class="even">
<td><blockquote>
<p><strong>Extração de Dados Estruturados</strong></p>
</blockquote></td>
<td><blockquote>
<p><em>Prompt:</em> "Extraia o valor do contrato deste texto..." <em>Problema:</em> Não garante que você obterá o valor, o número de parcelas <strong>e</strong> o formato <strong>JSON</strong>.</p>
</blockquote></td>
<td><blockquote>
<p><em>Exemplos demonstram o formato JSON:</em> { "valor_total": 1200000, "moeda": "USD", "num_parcelas": 4, ... }. <strong>Resultado:</strong> Saída padronizada, fácil de ser processada por software.</p>
</blockquote></td>
</tr>
<tr class="odd">
<td><blockquote>
<p><strong>Análise Complexa</strong></p>
</blockquote></td>
<td><blockquote>
<p><em>Zero-Shot</em> falha ao classificar risco/justificativa.</p>
</blockquote></td>
<td><blockquote>
<p><em>Exemplos Estruturam a Análise:</em> Cláusula → Categoria (Pagamento/Rescisão/Confidencialidade) → Risco (Baixo/Médio/Alto) → Justificativa.</p>
</blockquote></td>
</tr>
</tbody>
</table>

> **Exemplo de Extração Estruturada (Few-Shot):**

  - > *Instrução:* Extraia informações de contratos e retorne JSON estruturado.

  - > *Exemplos:* Dois exemplos mostrando Textos de contrato (diferentes moedas e parcelamentos) e seus respectivos JSONs.

  - > *Novo Input:* "Valor contratual: € 350.000, parcelado em 10 vezes mensais."

  - > *Output:  
    > *{

  - > "valor\_total": 350000,

  - > "moeda": "EUR",

  - > "num\_parcelas": 10,

  - > "frequencia": "mensal"

  - > }

\-----III. Otimizando o Número de Exemplos

Pesquisas (ex: Brown et al., 2020) mostram que há **retornos decrescentes** após 3 a 5 exemplos.

<table>
<thead>
<tr class="header">
<th><strong>Exemplos</strong></th>
<th><strong>Acurácia Média</strong></th>
</tr>
</thead>
<tbody>
<tr class="odd">
<td><strong>Zero-shot (0)</strong></td>
<td><blockquote>
<p>55%</p>
</blockquote></td>
</tr>
<tr class="even">
<td><blockquote>
<p><strong>Few-shot (3)</strong></p>
</blockquote></td>
<td><blockquote>
<p>79%</p>
</blockquote></td>
</tr>
<tr class="odd">
<td><blockquote>
<p><strong>Few-shot (5)</strong></p>
</blockquote></td>
<td><blockquote>
<p>82%</p>
</blockquote></td>
</tr>
<tr class="even">
<td><blockquote>
<p><strong>Few-shot (10)</strong></p>
</blockquote></td>
<td><blockquote>
<p>83%</p>
</blockquote></td>
</tr>
</tbody>
</table>

> **Regra Prática:**

  - > **2 exemplos:** Mínimo para estabelecer um padrão.

  - > **3 a 5 exemplos:** O ideal (máximo Retorno sobre o Investimento - ROI).

  - > **Mais de 5:** Apenas se for necessário cobrir muitos casos extremos (*edge cases*).

IV. Quando EVITAR o Few-Shot

1.  > **Tarefas Extremamente Simples:** Adicionar exemplos para traduzir uma única palavra é *overhead* desnecessário. Use Zero-Shot ("Traduza 'casa' para inglês.").

2.  > **Quando Você Quer Criatividade Máxima:** O Few-Shot **ancora** o modelo ao estilo dos exemplos. Se a meta é diversidade, a restrição é prejudicial.
    
      - > *Melhor para criatividade:* Zero-Shot ("Crie 10 slogans completamente diferentes e criativos para uma cafeteria moderna.").

V. Estrutura Híbrida (Máxima Flexibilidade)

> A melhor estratégia combina a clareza do Zero-Shot com a calibração do Few-Shot:
> 
> **Estrutura:**

1.  > **Instruções Gerais (Zero-Shot):** Definição das regras e categorias.

2.  > **Exemplos de Casos Especiais (Few-Shot):** Demonstração de como lidar com ambiguidades.

3.  > **Novo Problema:** A tarefa final.

**Exemplo Híbrido (Classificação de Email):**

  - > *Instruções Gerais:* Definição das categorias (Urgente, Normal, Spam, Informativo) e suas regras.

  - > *Casos Especiais (Few-Shot):*
    
      - > **Exemplo 1:** Mostra que "URGENTE: Lembre-se do happy hour" deve ser classificado como **Informativo** (contexto social anula a palavra-chave).
    
      - > **Exemplo 2:** Mostra que "O servidor de produção está fora do ar" deve ser **Urgente** (impacto crítico anula a falta da palavra-chave).

  - > *Resultado:* Classificação precisa e justificada para entradas ambíguas.

> **❌ Ruim (Carga desnecessária):** "Traduza para inglês. Exemplo: 'cachorro' → 'dog' Exemplo: 'gato' → 'cat' Traduza: 'casa'"
> 
> **✅ Melhor (Zero-shot):** "Traduza 'casa' para inglês."-----2. Quando o Objetivo é Criatividade e Diversidade
> 
> O few-shot tem o efeito de **ancorar** o modelo aos exemplos fornecidos. Se a intenção é maximizar a variedade de respostas:
> 
> **❌ Ruim (Se o foco é a diversidade):** "Escreva slogan para cafeteria. Exemplo 1: 'Café que desperta seu dia' Exemplo 2: 'Energia em cada xícara' Crie um novo slogan:"
> 
> **Resultado Provável:** Uma leve variação dos exemplos ("Café que energiza manhãs").
> 
> **✅ Melhor (Zero-shot para Criatividade):** "Crie 10 slogans completamente diferentes e criativos para uma cafeteria moderna."-----IX. Abordagem Híbrida: Combinando Zero-Shot e Few-Shot
> 
> Para otimizar a flexibilidade e o controle, é possível mesclar as duas técnicas:
> 
> **Estrutura Recomendada:**

1.  > **Instruções Gerais (Zero-Shot):** Definem o escopo e as regras básicas.

2.  > **Exemplos de Exceção/Casos Limite (Few-Shot):** Ensinam o modelo a lidar com ambiguidades ou situações que fogem à regra geral.

3.  > **Novo Problema:** A solicitação final.

**Exemplo de Aplicação (Classificação de E-mails):**

> **Instruções Gerais:** Classifique e-mails corporativos nas seguintes categorias: **Urgente** | **Normal** | **Spam** | **Informativo**.

  - > Urgente: Exige resposta/ação em \<24h.

  - > Normal: Comunicação padrão de rotina.

  - > Spam: Não solicitado, de natureza comercial.

  - > Informativo: Para conhecimento (FYI), sem necessidade de ação.

**Casos Especiais (Few-Shot):**

| **Exemplo**           | **E-mail**                                                     | **Classificação** | **Razão (Justificativa)**                                          |
| --------------------- | -------------------------------------------------------------- | ----------------- | ------------------------------------------------------------------ |
| 1 (Falso Urgente)     | "URGENTE: Lembre-se do happy hour sexta\!"                     | Informativo       | Usa a palavra "urgente", mas o contexto é social, não operacional. |
| 2 (Urgente Implícito) | "O servidor de produção está fora do ar. Clientes impactados." | Urgente           | Impacto operacional crítico, mesmo sem a palavra "urgente".        |

**Teste Final:** Classifique: Email: "IMPORTANTE: Atualização das políticas de RH para 2025"

**Resposta Esperada:** **Informativo** (É importante, mas geralmente não requer uma ação imediata ou urgente).

**X. Matriz de Decisão: Zero-Shot vs Few-Shot**

| **Critério**                   | **Zero-Shot (ZS)**         | **Few-Shot (FS)**                        |
| ------------------------------ | -------------------------- | ---------------------------------------- |
| **Setup**                      | Rápido (Apenas instruções) | Lento (Necessita criação de exemplos)    |
| **Consumo de Tokens**          | Baixo                      | Alto (Devido aos exemplos)               |
| **Precisão em Tarefas Novas**  | Variável                   | Alta (Se os exemplos forem de qualidade) |
| **Consistência do Formato**    | Baixa                      | Alta                                     |
| **Exigência de Expertise**     | Não exige                  | Sim (Para desenvolver bons exemplos)     |
| **Criatividade/Flexibilidade** | Alta                       | Baixa (Ancorada nos exemplos fornecidos) |

# **∞**
