# Capítulo 16: IA no Mundo Real — Três Estudos de Caso

Nos últimos cinco anos, deixou de ser hipótese: sistemas inteligentes saíram dos laboratórios e entraram na operação cotidiana de empresas que movem o mundo real. Caminhões que escolhem rotas sozinhos, radiologistas que recebem um "olhar digital" antes de bater o martelo num laudo, prateleiras que reabastecem antes mesmo de esvaziar. Não há mágica em nenhum deles — há engenharia. E, no centro dessa engenharia, há linguagem: a capacidade humana de formular o problema com tal clareza que uma máquina possa atacá-lo.

Os três mini-casos a seguir vêm de setores muito diferentes — logística, saúde e varejo — mas compartilham um mesmo padrão: o ganho de eficiência aparece como consequência direta da precisão com que a tarefa foi articulada. Os números são plausíveis e representativos do estado da arte público; as empresas, deliberadamente, não são nomeadas. Importa o padrão, não o logo.

#### **Caso 1: Logística — Quando o Roteirizador Pensa Por Você**

Uma grande transportadora rodoviária brasileira opera milhares de caminhões espalhados pelo país. Até 2021, a roteirização era feita por planilhas e pela experiência de coordenadores regionais. Cada coordenador tinha "seu jeito" de montar a malha do dia. O resultado: variabilidade alta, caminhões voltando vazios, multas por atraso, motoristas insatisfeitos.

A virada começou quando a empresa parou de tratar roteirização como problema de cálculo e passou a tratá-la como problema de formulação. Um time multidisciplinar — operações, engenharia de software e ciência de dados — passou seis meses não programando, mas escrevendo. Escrevendo a definição do problema: o que é uma "rota boa"? Quais restrições são duras (janela de entrega do cliente) e quais são moles (preferência do motorista por dormir em casa)? Como ponderar custo de combustível contra risco de multa?

Quando finalmente conectaram um modelo de otimização a um agente de IA capaz de reformular cenários em linguagem natural ("simule o impacto se fecharmos o CD do Nordeste por 48 horas"), o ganho não foi de 5% ou 10%. Foi de 23% em quilometragem ociosa eliminada e 14% em redução de multas contratuais — em doze meses. O algoritmo já existia há anos; o que faltava era a articulação clara do que se queria dele.

#### **Caso 2: Saúde — O Radiologista e Seu Copiloto Estatístico**

Uma rede hospitalar de grande porte enfrentava um problema estrutural: volume crescente de exames de imagem e escassez de radiologistas especializados. Tempos de laudo passaram de horas para dias em algumas unidades. A primeira tentativa — terceirizar laudos via telemedicina para outros estados — aliviou, mas não resolveu.

A solução veio em duas camadas. Primeira: um modelo de visão computacional treinado especificamente para triagem de tomografias de tórax, capaz de marcar com alta confiança imagens prováveis de normalidade e destacar regiões suspeitas em imagens com achados. Segunda — e aqui está o ponto — uma camada de linguagem que traduzia a saída do modelo para o radiologista no formato que ele estava acostumado a ler: "3 nódulos sub-centimétricos identificados, lobo superior direito; recomenda-se correlação clínica e comparação com exame prévio de 12/03/2023".

> *A IA não fez o diagnóstico. Apresentou achados num idioma que o médico reconhece como seu. O profissional manteve a decisão final, mas chegou a ela com o terreno preparado. Resultado: tempo médio de laudo caiu de 38 horas para 9 horas, sem perda de acurácia em auditoria externa.*

A lição é sutil mas decisiva: o ganho não veio do modelo de imagem (disponível em open source há tempo). Veio do prompt — da linguagem com a qual o sistema apresenta a informação a quem precisa decidir. Mude a forma como o output é articulado, e você muda quem consegue usá-lo.

#### **Caso 3: Varejo — A Prateleira Que Se Conhece**

Uma das maiores redes de varejo alimentar do país operava, em 2022, com uma taxa de ruptura de gôndola (produto faltando na hora em que o cliente queria comprar) de 8% — número alto para o setor. Cada ruptura é uma venda perdida e, pior, um cliente que pode trocar de marca. A causa-raiz era previsão de demanda enviesada por sazonalidades complexas: feriados regionais, eventos esportivos, lançamentos de séries de streaming, clima.

O time de Supply Chain combinou três coisas: um modelo de previsão de demanda alimentado por sinais externos (clima, calendário, redes sociais), um agente de IA capaz de receber perguntas em linguagem natural dos gerentes regionais, e um framework de prompt padronizado para que as consultas fossem comparáveis.

  - > O gerente de uma loja em Salvador, por exemplo, passou a poder perguntar:

  - > "Considerando o jogo do Bahia neste sábado e a previsão de chuva forte no domingo, ajuste a sugestão de pedido para cerveja, salgadinhos e carvão para a próxima janela de reposição, e me explique o raciocínio em até três bullets."

Em dezoito meses, a ruptura caiu de 8% para 2,3%. Mas o número mais revelador foi outro: 71% dos gerentes regionais relataram que passaram a "conversar mais com os dados" no dia a dia. A ferramenta não automatizou a decisão — democratizou o acesso ao raciocínio quantitativo.

#### **O Padrão Por Trás dos Três Casos**

Três setores radicalmente diferentes. Três tipos de problema. Três arquiteturas técnicas distintas. E ainda assim, um padrão se repete:

  - > O salto de qualidade não veio do modelo. Veio da forma como o problema foi articulado para o modelo. Em todos os três casos, equipes passaram mais tempo escrevendo definições, restrições e formatos esperados do que construindo o sistema em si.

  - > O usuário final recebeu a saída em linguagem nativa do seu trabalho. Roteirista vê rotas; radiologista lê laudos; gerente de loja conversa com sugestões de pedido. A IA se adaptou ao idioma do humano — não o contrário.

A decisão permaneceu humana. Em nenhum dos três casos a IA decidiu sozinha. Ela preparou o terreno; o humano colocou o último parafuso. E isso, em última análise, é o que distingue automação útil de automação cega.

#### **A Lição: A Clareza da Intenção**

O que estes três casos demonstram, juntos, é que a tecnologia é uma alavanca para a intenção humana — não um substituto dela.

No chão de fábrica, em centros cirúrgicos ou no estoque do supermercado, algoritmos executam tarefas com precisão crescente. Mas a pergunta "o que queremos exatamente que esses sistemas façam?" segue sendo, e provavelmente seguirá sendo por muito tempo, uma pergunta de natureza linguística — não computacional.

Quando um analista de compras usa uma LLM para examinar contratos, ele está fazendo a mesma operação fundamental que o gerente de loja em Salvador, o radiologista no hospital, o roteirizador da transportadora: está traduzindo a complexidade do real para uma linguagem precisa o suficiente para que uma máquina ajude a navegá-la.

  - > *"Analise as faturas dos fornecedores da categoria X e destaque discrepâncias de valores baseadas no histórico dos últimos 90 dias."*

A lição final é a convergência:

1.  > No operacional, algoritmos controlam fluxos físicos (rotas, imagens, estoque).

2.  > No tático, a linguagem natural controla a análise de dados e a tomada de decisão.

A empresa moderna é movida por dados, mas direcionada pela capacidade humana de formular problemas claros — seja em código Python, seja em um prompt bem estruturado. A ferramenta move o material; a inteligência move o negócio.

**∞**
