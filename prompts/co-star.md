# CO-STAR

Framework de seis dimensões para construir prompts de alta precisão. Cada letra preenche uma lacuna que, se deixada em branco, será preenchida pela IA com suposições genéricas (e geralmente piores).

> Capítulo de referência: [Capítulo 12 — Frameworks Avançados](../docs/parte-4/12-frameworks-avancados.md)

## Quando usar

Use CO-STAR quando o output precisar de **precisão de tom, audiência e formato simultaneamente**. Exemplos típicos: comunicação executiva, conteúdo de marketing, análise para múltiplos stakeholders, qualquer escrita profissional onde "informação correta" não é suficiente — a forma também importa.

Não use para tarefas triviais ou quando você quer respostas exploratórias. CO-STAR é cirúrgico, não criativo livre.

## Template

```
[C - CONTEXT]
{Descreva a situação. Background relevante. Restrições do mundo real.}

[O - OBJECTIVE]
{Meta explícita e mensurável. Critério de sucesso.}

[S - STYLE]
{Padrão de escrita. Referência estilística (ex.: McKinsey, científico, jornalístico).}

[T - TONE]
{Atitude emocional. Ex.: colaborativo, firme, neutro, urgente, conciliatório.}

[A - AUDIENCE]
{Quem lerá. Conhecimento, hierarquia, prioridades, vieses esperados.}

[R - RESPONSE]
{Formato exato do output. Extensão, estrutura, seções.}
```

## Variáveis a preencher

| Variável | Pergunta-guia |
|---|---|
| Context | Qual a situação prática? Quais restrições reais? |
| Objective | Qual decisão será tomada com base nisso? |
| Style | Que tipo de texto você precisa que isso seja? |
| Tone | Como a pessoa deve se sentir ao ler? |
| Audience | Quem é essa pessoa? O que ela sabe? |
| Response | Em que formato exato isso precisa chegar? |

## Exemplo concreto

```
[C - CONTEXT]
Somos uma indústria de grande porte negociando renovação de contrato
com um fornecedor de 8 anos; preços subiram 22% (acima da inflação do
setor, que foi de 14%). O fornecedor tem entregas consistentemente
pontuais, mas há alternativas no mercado que oferecem preços 8% menores.

[O - OBJECTIVE]
Redigir carta de negociação que reduza o preço em 10-15%, mantenha SLAs
e sinalize contrato de 3 anos como moeda de troca. Sucesso: contraproposta
do fornecedor com redução de pelo menos 10%.

[S - STYLE]
Carta comercial formal. Estrutura piramidal invertida (conclusão no topo).
Tom profissional próximo do estilo de uma proposta legal — clareza,
numeração de cláusulas, parágrafos curtos.

[T - TONE]
Colaborativo e respeitoso, mas com firmeza implícita. Reconhecer a
parceria histórica. Evitar tom ameaçador, vitimista ou submisso.

[A - AUDIENCE]
Diretor Comercial do fornecedor (decisor de pricing), com ~20 anos de
mercado. Preocupação central: margem de lucro. Não tem tempo para texto
longo. Decisão será baseada em comparação rápida com outros clientes
estratégicos dele.

[R - RESPONSE]
E-mail formatado em Markdown, com 5 seções numeradas:
1. Reconhecimento da parceria
2. Contexto de mercado (dados)
3. Proposta concreta de novo patamar de preço
4. Contrapartida (volume, prazo)
5. Convite para reunião

Extensão total: 300-400 palavras. Linha de assunto incluída.
```

## Por que CO-STAR funciona

O framework não inventa nada novo do ponto de vista linguístico — ele apenas força você a externalizar seis camadas de contexto que, em conversas humanas, ficam implícitas. A IA não tem Teoria da Mente: não vai inferir que o destinatário é o Diretor Comercial, não vai supor o tom certo, não vai adivinhar o formato. Tudo precisa ser dito. CO-STAR é uma checklist contra a omissão.

## Erros comuns

- **Misturar C e O**: descrever a situação no Objective. Mantenha separados — contexto é o "onde estamos", objetivo é o "para onde vamos".
- **Style e Tone vazios**: deixar essas duas dimensões em branco devolve o estilo padrão da IA, que é "neutro corporativo morno" — raramente o que você quer.
- **Audience genérica**: "stakeholders" não é uma audiência. Quem exatamente? Com que background?
- **Response sem extensão**: se você não disser quantas palavras ou seções, a IA escolhe — e a escolha dela geralmente não casa com o que você precisa.
