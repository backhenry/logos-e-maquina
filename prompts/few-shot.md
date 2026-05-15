# Few-Shot Prompting

Em vez de descrever o que você quer com palavras, **mostre exemplos**. O modelo extrai o padrão dos exemplos e o aplica ao caso novo.

> Capítulo de referência: [Capítulo 13 — Few-Shot vs. Zero-Shot](../docs/parte-4/13-few-shot-zero-shot.md)

## Quando usar

- Quando o padrão é difícil de explicar em palavras (ex.: tom específico, formato visual)
- Quando você tem 3-5 exemplos bons disponíveis
- Para classificação consistente entre categorias similares
- Quando o domínio é técnico/nichado e o LLM precisa de calibração rápida

## Template

```
Você vai {tarefa}. Siga o padrão dos exemplos abaixo.

Exemplo 1:
Input: {entrada exemplo 1}
Output: {saída esperada exemplo 1}

Exemplo 2:
Input: {entrada exemplo 2}
Output: {saída esperada exemplo 2}

Exemplo 3:
Input: {entrada exemplo 3}
Output: {saída esperada exemplo 3}

Agora aplique o mesmo padrão:
Input: {sua entrada real}
Output:
```

## Exemplo

```
Classifique o sentimento e a urgência de mensagens de clientes.

Exemplo 1:
Input: "Adorei o produto, chegou rápido!"
Output: Sentimento=Positivo, Urgência=Baixa

Exemplo 2:
Input: "Meu pedido sumiu há 3 dias, precisa resolver hoje."
Output: Sentimento=Negativo, Urgência=Alta

Exemplo 3:
Input: "Quando vai ter promoção da linha verão?"
Output: Sentimento=Neutro, Urgência=Baixa

Agora classifique:
Input: "Cartão foi cobrado duas vezes pela mesma compra, urgente."
Output:
```

## Boas práticas

- **3-5 exemplos** é a faixa ótima. Menos que isso não estabelece padrão; mais que isso satura o contexto e adiciona ruído.
- **Diversidade de exemplos**: cubra os casos extremos, não só os fáceis.
- **Ordem importa**: o último exemplo influencia mais que o primeiro (recency bias).
- **Exemplo difícil por último**: ajuda o modelo a calibrar nos casos sutis.

## Quando não funciona

- Tarefa simples (zero-shot já resolve)
- Você só tem exemplos de um tipo (modelo vai generalizar mal)
- Exemplos contraditórios entre si (modelo fica confuso)
- Contexto muito limitado (modelos antigos com janela pequena)
