# Persona Base — Os 4 Pilares

A estrutura mínima para qualquer prompt profissional: Persona + Contexto + Tarefa + Restrições. Se você não conseguir preencher os quatro, seu prompt está incompleto.

> Capítulo de referência: [Capítulo 11 — Os 4 Pilares de um Prompt Que Não Falha](../docs/parte-4/11-quatro-pilares.md)

## Quando usar

Como ponto de partida para qualquer prompt sério. Frameworks mais sofisticados (CO-STAR, Chain-of-Thought) são camadas adicionadas sobre essa base, não substitutos dela.

## Template

```
[PERSONA]
Você é {papel profissional} com {anos de experiência} em {domínio específico}.
{Atributos relevantes que diferenciam essa persona}.

[CONTEXTO]
{Situação atual. Background. Restrições reais do mundo.}

[TAREFA]
{Verbo de ação + objeto + critério de sucesso.}

[RESTRIÇÕES]
- {O que NÃO fazer}
- {O que é obrigatório}
- {Formato de saída esperado}
```

## Exemplo

```
[PERSONA]
Você é um Especialista Sênior em Negociação de Contratos com 15 anos
de experiência no setor industrial. Mantém relacionamentos de longo
prazo com fornecedores estratégicos, mas tem metas agressivas de
redução de custos.

[CONTEXTO]
Nosso fornecedor atual de serviços corporativos de TI entrega
consistentemente no prazo há 3 anos, mas os preços estão 12% acima
da média do mercado segundo benchmark recente.

[TAREFA]
Redija um e-mail para o gerente comercial solicitando renegociação de
preços, com objetivo de obter 10-15% de desconto sem romper a relação.

[RESTRIÇÕES]
- Tom respeitoso e colaborativo, nunca ameaçador
- Mencione o benchmark de mercado (data-driven)
- Ofereça concessões mútuas (prazo de pagamento, volume)
- Formato: e-mail de 200-250 palavras, com linha de assunto
- NÃO faça ameaças veladas de troca de fornecedor
```

## Por que funciona

A IA não tem Teoria da Mente: ela não infere quem você é, qual seu contexto, ou quais restrições implícitas existem. Cada pilar fecha uma porta de ambiguidade. **Persona** define o vocabulário e o ângulo. **Contexto** filtra o espaço de soluções relevantes. **Tarefa** dá direção. **Restrições** evitam que a IA tome liberdade onde você não quer que tome.

## Erros comuns

- Persona genérica ("você é um assistente útil") — não ativa nenhum vocabulário específico
- Contexto vago ("estamos pensando em algo") — espaço de solução fica largo demais
- Tarefa sem critério de sucesso ("ajude com isso") — não há como avaliar o output
- Restrições só negativas ("não faça X") — esquecer de dizer o que SIM fazer
