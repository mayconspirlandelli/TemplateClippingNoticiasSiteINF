# Template de Clipping de Notícias — INF/UFG

Template de clipping jornalístico para o Instituto de Informática da UFG, construído apenas com **HTML, CSS e JavaScript** — sem bibliotecas ou frameworks.

## Sobre o projeto

Um clipping é uma seleção de notícias veiculadas na imprensa sobre determinada instituição. Este template organiza essas notícias em uma página única, com identidade visual editorial, permitindo que os dados sejam preenchidos separadamente do design.

A ideia é que um GPT (ou qualquer script) receba a URL de uma notícia, extraia título, subtítulo, imagem, veículo e data, e preencha o array de dados — mantendo sempre o mesmo padrão visual sem editar o CSS.

## Arquivos

```
clipping/
├── index.html    → esqueleto da página
├── style.css     → identidade visual editorial
├── script.js     → dados + renderização + carrossel + busca + filtros
└── reference.md  → especificação original usada como base
```

## Funcionalidades

- **Cabeçalho** com instituição, título e data da edição
- **Resumo geral**: total de notícias, veículos, categorias e destaques
- **Carrossel de Destaques**: 12 notícias em destaque, exibidas 4 por vez (3 páginas rotativas), com setas e indicadores de página
  - Responsivo: 4 cards (desktop), 3 (tablet), 2 (móvel) e 1 (celular)
- **Outras notícias**: demais notícias em lista compacta
- **Busca** em tempo real por título, resumo, veículo ou categoria
- **Filtro** por categoria
- **Layout responsivo** para desktop, tablet e celular

## Como usar

1. Abra o arquivo `index.html` em qualquer navegador.
2. Para adicionar notícias, edite o array `noticias` em `script.js`.
3. Cada notícia aceita os campos:

```js
{
    veiculo: "G1",                          // nome do veículo
    titulo: "Título da notícia",
    subtitulo: "Resumo/descrição da notícia",
    imagem: "https://.../imagem.jpg",       // URL da imagem
    url: "https://.../noticia",             // link da matéria
    data: "08/09/2026",
    categoria: "Tecnologia",
    destaque: true                          // true = vai para o carrossel
}
```

> **Dica:** mantenha a quantidade de destaques múltipla de 4 (ex.: 12) para o carrossel ficar com páginas completas.

## Manutenção

- **Dados** ficam no topo de `script.js`, no objeto `clipping`, separados do design.
- **Identidade visual** (cores, tipografia, espaçamentos) fica toda em `style.css` — a cor institucional é `#2e5b8f`.
- **Estrutura** da página fica em `index.html`, sem conteúdo gerado estaticamente.

## Extensões futuras

- Leitura das notícias a partir de um arquivo JSON externo ou API
- Extração automática de dados a partir da URL da notícia
- Geração da página por um GPT preenchendo somente os campos do array