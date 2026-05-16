import { defineConfig } from 'vitepress'

export default defineConfig({
  title: 'O Logos e a Máquina',
  description: 'Como a linguagem molda a realidade e por que dominar engenharia de prompt é dominar o futuro.',
  lang: 'pt-BR',
  lastUpdated: true,
  cleanUrls: true,

  // Se você usar GitHub Pages no formato usuario.github.io/logos-e-maquina,
  // troque '/' por '/logos-e-maquina/'
  base: '/logos-e-maquina/',

  head: [
  ['link', { rel: 'icon', type: 'image/svg+xml', href: '/favicon.svg' }],
  ['link', { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
  ['meta', { name: 'author', content: 'Henrique Martins' }],
  ['meta', { property: 'og:title', content: 'O Logos e a Máquina' }],
  ['meta', { property: 'og:description', content: 'Livro gratuito sobre engenharia de prompt e filosofia da linguagem.' }],
  ['meta', { property: 'og:type', content: 'book' }],
],

  themeConfig: {
    logo: '/logo.svg',
    siteTitle: 'O Logos e a Máquina',

    nav: [
      { text: 'Ler', link: '/parte-1/01-grito-primal' },
      { text: 'Prompts', link: 'https://github.com/backhenry/logos-e-maquina/tree/main/prompts' },
      { text: 'PDF', link: 'https://github.com/backhenry/logos-e-maquina/tree/main/release' },
      { text: 'GitHub', link: 'https://github.com/backhenry/logos-e-maquina' },
    ],

    sidebar: [
      {
        text: 'Apresentação',
        collapsed: false,
        items: [
          { text: 'Sobre o livro', link: '/' },
        ]
      },
      {
        text: 'Parte I — A Essência da Linguagem',
        collapsed: false,
        items: [
          { text: '1. O Grito Primal', link: '/parte-1/01-grito-primal' },
          { text: '2. O Momento da Luz', link: '/parte-1/02-momento-luz' },
          { text: '3. O Espelho da Mente', link: '/parte-1/03-espelho-mente' },
          { text: '4. A Língua Como Fóssil Vivo', link: '/parte-1/04-fossil-vivo' },
          { text: '5. A Retificação dos Nomes', link: '/parte-1/05-retificacao-nomes' },
        ]
      },
      {
        text: 'Parte II — Do Verbo ao Código',
        collapsed: true,
        items: [
          { text: '6. Sócrates Contra a Escrita', link: '/parte-2/06-socrates-escrita' },
          { text: '7. De Gutenberg a Turing', link: '/parte-2/07-gutenberg-turing' },
          { text: '8. Attention is All You Need', link: '/parte-2/08-attention-all-need' },
        ]
      },
      {
        text: 'Parte III — O Despertar da Máquina',
        collapsed: true,
        items: [
          { text: '9. Papagaio Estocástico', link: '/parte-3/09-papagaio-estocastico' },
          { text: '10. Biblioteca de Babel', link: '/parte-3/10-biblioteca-babel' },
        ]
      },
      {
        text: 'Parte IV — A Nova Retórica',
        collapsed: true,
        items: [
          { text: '11. Os 4 Pilares', link: '/parte-4/11-quatro-pilares' },
          { text: '12. Frameworks Avançados', link: '/parte-4/12-frameworks-avancados' },
          { text: '13. Few-Shot vs Zero-Shot', link: '/parte-4/13-few-shot-zero-shot' },
          { text: '14. Falhas que Custam Milhões', link: '/parte-4/14-falhas-milhoes' },
        ]
      },
      {
        text: 'Parte V — IA no Mundo Real',
        collapsed: true,
        items: [
          { text: '15. RAG vs Fine-Tuning', link: '/parte-5/15-rag-fine-tuning' },
          { text: '16. Três Estudos de Caso', link: '/parte-5/16-tres-casos' },
          { text: '17. PromptOps', link: '/parte-5/17-promptops' },
          { text: '18. Ética do Prompt', link: '/parte-5/18-etica-prompt' },
          { text: '18B. Quando o Prompt Não Basta', link: '/parte-5/18b-quando-prompt-nao-basta' },
        ]
      },
      {
        text: 'Parte VI — O Futuro e o Humano',
        collapsed: true,
        items: [
          { text: '19. Hermes nas Encruzilhadas', link: '/parte-6/19-hermes-encruzilhadas' },
          { text: '20. A Mente Estendida', link: '/parte-6/20-mente-estendida' },
        ]
      },
      {
        text: 'Encerramento',
        collapsed: true,
        items: [
          { text: 'Epílogo', link: '/epilogo' },
          { text: 'Apêndice A — Exercícios', link: '/apendices/a-exercicios' },
          { text: 'Apêndice B — Glossário', link: '/apendices/b-glossario' },
        ]
      },
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/backhenry/logos-e-maquina' },
      { icon: 'linkedin', link: 'https://www.linkedin.com/in/rick-b-martins/' },
    ],

    footer: {
      message: 'Licenciado sob CC BY-SA 4.0',
      copyright: 'Copyright © 2026 Henrique Martins'
    },

    search: {
      provider: 'local',
      options: {
        translations: {
          button: {
            buttonText: 'Buscar no livro',
            buttonAriaLabel: 'Buscar'
          },
          modal: {
            noResultsText: 'Sem resultados para',
            resetButtonTitle: 'Limpar busca',
            footer: {
              selectText: 'selecionar',
              navigateText: 'navegar',
              closeText: 'fechar'
            }
          }
        }
      }
    },

    editLink: {
      pattern: 'https://github.com/backhenry/logos-e-maquina/edit/main/docs/:path',
      text: 'Sugerir correção neste capítulo'
    },

    docFooter: {
      prev: 'Capítulo anterior',
      next: 'Próximo capítulo'
    }
  }
})
