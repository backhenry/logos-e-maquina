# Chain-of-Thought (CoT)

Técnica que força o modelo a raciocinar passo a passo antes de dar a resposta final. Reduz drasticamente erros em tarefas que exigem lógica, matemática ou decisão multi-fator.

> Capítulo de referência: [Capítulo 12 — Frameworks Avançados](../docs/parte-4/12-frameworks-avancados.md)

## Quando usar

- Cálculos numéricos não-triviais
- Análises com múltiplos critérios ponderados
- Diagnóstico de problemas (root cause analysis)
- Decisões que exigem comparação entre alternativas
- Qualquer pergunta onde a resposta "óbvia" muitas vezes está errada

**Não use** para perguntas factuais simples ou geração criativa — adicionar CoT só atrasa sem agregar precisão.

## Templates

### Versão básica (zero-shot CoT)

Adicione no final do prompt:

```
Pense passo a passo antes de dar a resposta final.
```

### Versão estruturada

```
Para responder, siga esta estrutura:

1. **Análise dos dados**
   - Liste as variáveis relevantes
   - Identifique restrições

2. **Raciocínio**
   - Considere as alternativas
   - Pondere prós e contras de cada uma
   - Identifique trade-offs

3. **Decisão**
   - Recomendação final
   - 3 razões principais
   - Riscos da decisão
```

### Versão com self-consistency

```
Resolva este problema de duas formas independentes:

Abordagem 1: {método A}
Abordagem 2: {método B}

Se as duas abordagens chegarem ao mesmo resultado, dê confiança alta.
Se divergirem, explique a divergência e indique qual é mais confiável.
```

## Exemplo

```
Pergunta: Qual é maior, 9.11 ou 9.9?

Pense passo a passo:
1. Identifique os números: 9.11 e 9.9
2. Padronize a representação decimal:
   - 9.11 tem 2 casas decimais → 9.11
   - 9.9 tem 1 casa decimal → escreva como 9.90
3. Compare casa por casa:
   - Parte inteira: 9 = 9 (empate)
   - Primeira decimal: 1 vs 9 → 9 é maior
4. Conclusão: 9.90 > 9.11, portanto 9.9 é maior.
```

Sem o CoT, modelos frequentemente erram esse tipo de comparação porque tokenizam `9.11` como `[9][.][11]` e comparam `[11] > [9]`.

## Por que funciona

A geração token-a-token de um LLM significa que cada token é influenciado pelos anteriores. Quando você força o modelo a gerar passos intermediários, esses passos viram **contexto adicional** para o próximo token. É como pensar em voz alta: ao tornar o raciocínio explícito, o modelo se condiciona a si mesmo a respostas mais coerentes.

## Erros comuns

- Adicionar CoT em tarefa simples e perder tempo de resposta sem ganho
- Pedir CoT mas não pedir conclusão final — output fica como rascunho sem fechamento
- Misturar CoT com formato curto rígido ("responda em 1 frase, mas pense passo a passo") — instruções contraditórias
