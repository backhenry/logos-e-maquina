# Como subir este repositório no GitHub

Guia passo a passo, do zero, assumindo que você tem conta GitHub mas pode não ter Git instalado.

## Passo 1 — Criar o repositório no GitHub

1. Vá em **github.com** e faça login.
2. Clique no botão **+** no canto superior direito → **New repository**.
3. Preencha:
   - **Repository name**: `logos-e-maquina`
   - **Description**: "Livro gratuito sobre engenharia de prompt e filosofia da linguagem"
   - **Public** (essencial para GitHub Pages gratuito)
   - **Não** marque "Add a README" (já temos um)
   - **Não** marque "Add .gitignore" (já temos um)
   - **License**: pule (já temos CC BY-SA 4.0)
4. Clique **Create repository**.

## Passo 2 — Subir os arquivos (caminho mais simples)

A forma mais rápida, sem mexer com terminal:

1. Na página do repositório recém-criado, clique em **uploading an existing file**.
2. Arraste TODO o conteúdo desta pasta (`logos-e-maquina/`) para a área de upload.
   - **Importante**: arraste o conteúdo de dentro da pasta, não a pasta inteira. Ou seja, selecione `README.md`, `LICENSE`, `docs/`, `prompts/`, `release/`, `package.json`, `.gitignore`, `.github/` e arraste todos juntos.
3. Aguarde o upload completar (pode levar 1-2 minutos por causa do PDF).
4. Em **Commit message**, escreva: `Initial commit — livro publicado`
5. Clique **Commit changes**.

Se o GitHub reclamar que algum arquivo é maior que 25 MB, suba pelo Git LFS (instruções no Passo 4 alternativo).

## Passo 3 — Trocar `SEU-USUARIO` pelo seu nome de usuário GitHub

Antes de tudo funcionar, há **três arquivos** com a string `SEU-USUARIO` que você precisa substituir pelo seu username real do GitHub.

Use a busca do GitHub (`.` para abrir o editor web no repositório) e procure por `SEU-USUARIO`. Os arquivos são:

- `docs/.vitepress/config.ts` (3 ocorrências em links de navegação)
- `docs/index.md` (2 ocorrências)
- `LICENSE` (1 ocorrência no exemplo de atribuição)
- `README.md` (algumas)

Troque todos por `rick-b-martins` (ou o que for o seu).

## Passo 4 — Ativar GitHub Pages

Para que o livro vire um site público:

1. Na página do repositório, clique em **Settings** (engrenagem no menu superior).
2. No menu lateral esquerdo, clique em **Pages**.
3. Em **Source**, selecione: **GitHub Actions**.
4. O workflow já está configurado em `.github/workflows/deploy.yml` — ele vai rodar automaticamente no próximo push.
5. Volte para a aba **Actions** do repositório e aguarde o build terminar (5-10 min na primeira vez).
6. Quando finalizar, seu site estará em: `https://rick-b-martins.github.io/logos-e-maquina/`

### Ajuste de `base` no config.ts

Se seu site final for em `https://rick-b-martins.github.io/logos-e-maquina/`, edite `docs/.vitepress/config.ts` e mude:

```ts
base: '/',
```

para:

```ts
base: '/logos-e-maquina/',
```

Commit a mudança. O Actions vai rodar de novo e o site atualizado fica no ar.

## Passo 5 — Domínio próprio (opcional, recomendado)

Para profissionalizar, registre um domínio (Registro.br: R$ 40/ano para `.com.br`, ou `.dev` no Namecheap: ~US$ 12/ano). Exemplos de bons nomes:

- `ologos.dev`
- `logoseamaquina.com.br`
- `henriquemartins.dev`

Depois:

1. No painel do registro de domínios, crie um registro **CNAME** apontando para `rick-b-martins.github.io`.
2. Em **Settings → Pages → Custom domain**, digite seu domínio.
3. Aguarde a propagação DNS (15 min a 2 horas).
4. Volte e marque **Enforce HTTPS**.

## Passo 6 — Testar localmente (opcional)

Se quiser ver como o site fica antes de subir, no seu computador:

```bash
# Pré-requisito: Node.js 18+
cd logos-e-maquina
npm install
npm run docs:dev
```

Abra `http://localhost:5173` no navegador. Hot reload funciona — edite qualquer `.md` e a página atualiza sozinha.

## Próximos passos depois de subir

1. **Compartilhar no LinkedIn** — veja [`POST_LINKEDIN.md`](POST_LINKEDIN.md) com sugestão de post.
2. **Adicionar tópicos no repo** — no GitHub, clique na engrenagem ao lado de "About" e adicione tags: `prompt-engineering`, `llm`, `ai`, `book`, `portuguese`, `philosophy-of-language`. Isso ajuda na descoberta.
3. **Criar a primeira release** — vá em **Releases → Create a new release**. Tag: `v1.0.0`. Title: "Primeira edição". Anexe o PDF.
4. **Habilitar Discussions** — Settings → General → Features → marque "Discussions". Cria um fórum para leitores tirarem dúvidas.

Pronto. Repositório no ar, site no ar, link compartilhável.
