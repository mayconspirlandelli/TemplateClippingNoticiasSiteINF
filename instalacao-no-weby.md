# Instalação do Clipping de Notícias no Weby

Guia passo a passo para incorporar o **Template de Clipping de Notícias INF/UFG** em um sítio gerenciado pelo **Weby** (CMS da UFG).

## Pré-requisitos

- Acesso ao Weby com perfil de **administrador** do sítio (login em [portais.ufg.br](https://portais.ufg.br) ou no seu portal).
- Arquivo **`clipping.html`** deste projeto (conteúdo único com HTML, CSS e JS).
- Antes de instalar, ajuste no código os dados que variam por edição:
  - **Data da edição** (campo `data` do objeto `clipping`);
  - **Notícias** (títulos, links, datas, categorias, destaques).

> O template é auto-suficiente: **não depende de jQuery** nem de bibliotecas externas, e todo o estilo é escopado em `.clip-clipping` para **não conflitar** com o CSS do sítio.

## Arquitetura da instalação

| Parte do template | Onde fica no Weby | Conteúdo |
| --- | --- | --- |
| HTML (esqueleto) | Página criada no sítio | Bloco `<div class="clip-clipping">…</div>` |
| CSS (estilos) | Tema → **Estilos** (`style-clipping.css`) | Conteúdo de `style.css` |
| JavaScript (lógica) | Tema → **Layout** → Componente Html/Javascript | Parte do `script.js` (lógica) |
| Dados (notícias) | Tema → **Layout** → Componente Html/Javascript | Parte do `script.js` (objeto `clipping`) |

---

## Passo 1 — Criar a página e inserir apenas o HTML

1. Entre no Weby e clique em **Conteúdo → Páginas → Nova página**.
2. No editor, **alterne para o modo HTML / código-fonte** (botão Exibir códigos/source).
3. Abra o `clipping.html` em um editor de texto e copie **apenas o bloco**:

```html
<div class="clip-clipping"> … </div>
```

> Cole **somente** o conteúdo do `<div class="clip-clipping">…</div>`. **Não copie** as tags `<html>`, `<head>`, `<body>`, `<style>` nem `<script>` — o CSS e o JavaScript entram pelas etapas seguintes.

4. Cole o bloco no editor (em modo HTML), dê um título à página (ex.: "Clipping de Notícias") e **Publique**.

---

## Passo 2 — Criar o estilo `style-clipping.css` no menu Tema

1. No menu de administração, acesse **Tema → Gerenciar estilos** (ou **Administração → Estilos**).
2. Clique em **Novo estilo**, informe o nome **`style-clipping.css`** e salve.
3. Na tela seguinte, em **Estilo**, cole o conteúdo do arquivo `style.css` do projeto (ou o texto que estava entre `<style>` e `</style>` no `clipping.html`).
4. Clique em **Enviar** para salvar.
5. Na lista **Meus estilos**, clique em **Publicar** para ativar o estilo no sítio.
6. Opcional: se o sítio tiver outros estilos, use a ação **Mover** para colocar o `style-clipping.css` no topo da lista — os estilos **mais acima têm prioridade**.

---

## Passo 3 — Criar os componentes Html/Javascript no menu Tema → Layout

Acesse **Tema → Layout → Novo componente** e escolha o tipo **HTML/Javascript**. Serão necessários **dois componentes**:

### Componente 1 — Dados (criar primeiro)

| Campo | Valor |
| --- | --- |
| Nome | `clipping-dados` |
| Tipo | HTML/Javascript |
| Conteúdo | Objeto `clipping` (dados das notícias) |
| Situação | **Publicado** |
| Inserção | **Inserir conteúdo no final do documento** |
| Visibilidade | **Apenas nas páginas internas** |

**Conteúdo a colar:** a primeira parte do `script.js`, do início do arquivo até o fechamento do objeto, incluindo a linha:

```js
const clipping = {
    instituicao: "Instituto de Informática — UFG",
    titulo: "Clipping de Notícias",
    data: "…",
    noticias: [ … ]
};
```

Pode envolver o conteúdo entre `<script></script>` para clareza.

> ⚠️ **Ordem importante:** o componente de **dados deve ser criado/posicionado antes** do componente de JavaScript, pois a lógica usa o objeto `clipping`.

### Componente 2 — JavaScript (lógica)

| Campo | Valor |
| --- | --- |
| Nome | `clipping-script` |
| Tipo | HTML/Javascript |
| Conteúdo | Lógica do carrossel, busca, filtros e renderização |
| Situação | **Publicado** |
| Inserção | **Inserir conteúdo no final do documento** |
| Visibilidade | **Apenas nas páginas internas** |

**Conteúdo a colar:** tudo do `script.js` a partir da linha que busca os elementos da página:

```js
const carrosselTrack = document.getElementById("clipping-destaques-grid");
```

até o final do arquivo. Pode envolver o conteúdo entre `<script></script>`.

Depois de preencher os campos, clique em **Salvar**.

---

## Passo 4 — Verificação

1. Acesse a página criada no **Passo 1**.
2. Confira se aparecem:
   - O resumo com contadores (notícias, veículos, categorias, destaques);
   - O **carrossel de destaques** (12 cards, 4 por vez, com setas e indicadores);
   - A lista **Outras notícias**;
   - A **busca** e o **filtro por categoria** funcionando.

---

## Como atualizar as notícias

As notícias ficam no **Componente 1 — dados** (`clipping-dados`):

1. Acesse **Tema → Layout**, localize o componente `clipping-dados` e clique em **Editar**.
2. Adicione/remova itens no array `noticias`, mantendo os campos:
   - `veiculo`, `titulo`, `subtitulo`, `imagem`, `url`, `data`, `categoria`, `destaque`.
3. Salve. A página reflete a alteração automaticamente, **sem mexer no CSS nem no JavaScript**.

> **Dica:** mantenha a quantidade de destaques múltipla de 4 (ex.: 12) para as páginas do carrossel ficarem completas.

---

## Solução de problemas

| Problema | Possível causa | Solução |
| --- | --- | --- |
| Carrossel não renderiza / lista vazia | Componente de dados carregando depois do JavaScript | Reordene os componentes em **Tema → Layout** — `clipping-dados` antes de `clipping-script` |
| Busca/filtros não funcionam | JavaScript não publicado ou visibilidade incorreta | Confira **Publicado** e visibilidade **apenas nas páginas internas** |
| Layout "quebrado" no sítio | Editor WYSIWYG alterou o HTML | Recole o bloco `<div class="clip-clipping">…</div>` do `clipping.html` em modo HTML |
| CSS do sítio interferindo no template | Estilo não está no topo da lista | Use **Mover** em **Tema → Estilos** para dar prioridade ao `style-clipping.css` |
| CSS do template interferindo no sítio | Regras usadas fora do escopo | Todo o template usa classes `clip-` e IDs `clipping-`; não remover o wrapper `.clip-clipping` |

## Links úteis (documentação oficial Weby)

- [Gerenciando Estilos](https://weby.cercomp.ufg.br/n/36121-gerenciando-estilos)
- [Gerenciando Componentes](https://weby.cercomp.ufg.br/n/36116-gerenciando-componentes)
- [Adicionar Componente Html/Javascript](https://weby.cercomp.ufg.br/p/45159-componente-javascript)
- [Criar/editar uma página](https://weby.cercomp.ufg.br/p/22695-criar-editar-paginas)