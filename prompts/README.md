# Prompts Reutilizáveis

Coleção dos principais prompts discutidos no livro, em formato `.md` pronto para copiar, adaptar e usar.

Cada arquivo segue a estrutura:

1. **Contexto** — quando usar
2. **Prompt** — o template propriamente dito
3. **Variáveis** — o que você precisa preencher antes de usar
4. **Exemplo** — uma instância concreta funcionando
5. **Capítulo de referência** — onde no livro o framework é explicado

## Catálogo

### Frameworks fundamentais

- [`persona-base.md`](persona-base.md) — Estrutura mínima de Persona + Contexto + Tarefa + Restrições
- [`co-star.md`](co-star.md) — Context, Objective, Style, Tone, Audience, Response
- [`chain-of-thought.md`](chain-of-thought.md) — Forçar raciocínio passo a passo
- [`few-shot.md`](few-shot.md) — Demonstrar com exemplos em vez de instruir

### Aplicações corporativas

- [`negociacao-fornecedor.md`](negociacao-fornecedor.md) — E-mail de renegociação contratual
- [`analise-contrato.md`](analise-contrato.md) — Identificação de desvios em cláusulas
- [`avaliacao-risco-fornecedor.md`](avaliacao-risco-fornecedor.md) — Matriz multidimensional de risco
- [`relatorio-executivo.md`](relatorio-executivo.md) — Conversão de análise técnica para audiência sênior

### Meta-prompts

- [`prompt-improver.md`](prompt-improver.md) — Use o LLM para melhorar seus próprios prompts
- [`prompt-tester.md`](prompt-tester.md) — Estrutura para testes A/B de prompts

## Como contribuir

Tem um prompt que funciona bem para você e quer compartilhar? Abra um pull request seguindo o template padrão. Critérios:

1. **Genérico** — funciona em qualquer setor, sem dados confidenciais
2. **Testado** — você usou de verdade, com Claude/GPT/Gemini, e funcionou
3. **Documentado** — exemplo concreto e variáveis identificadas

## Licença

Mesma do livro: CC BY-SA 4.0. Use, adapte, compartilhe.
