# Release — Versões para Download

Este diretório guarda o livro em formatos prontos para consumo offline.

## Arquivos

- **`O_Logos_e_a_Maquina.docx`** — Versão Word editável (fonte canônica). Útil para imprimir, anotar, ou converter para outros formatos.
- **`O_Logos_e_a_Maquina.pdf`** — *(a gerar)* Versão PDF profissional para leitura em dispositivos.
- **`O_Logos_e_a_Maquina.epub`** — *(a gerar)* Versão EPUB para Kindle e e-readers.

## Como gerar PDF e EPUB

A partir do `.docx`:

```bash
# PDF (via pandoc + LaTeX)
pandoc O_Logos_e_a_Maquina.docx -o O_Logos_e_a_Maquina.pdf \
  --pdf-engine=xelatex \
  --variable=geometry:margin=2cm \
  --variable=mainfont="Crimson Pro" \
  --variable=sansfont="Inter" \
  --toc --toc-depth=2

# EPUB
pandoc O_Logos_e_a_Maquina.docx -o O_Logos_e_a_Maquina.epub \
  --metadata title="O Logos e a Máquina" \
  --metadata author="Henrique Martins" \
  --toc --toc-depth=2
```

A partir do código-fonte VitePress:

```bash
npm install
npm run docs:build
# O site estático fica em docs/.vitepress/dist/
```

## Versionamento

Cada release significativa do livro fica também marcada como tag Git, no formato `v1.0.0`, `v1.1.0` etc. Consulte a aba **Releases** do GitHub para baixar versões específicas.
