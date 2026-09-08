"use strict";

const clipping = {
    instituicao: "Instituto de Informática — UFG",
    titulo: "Clipping de Notícias",
    data: "08 de setembro de 2026",

    noticias: [
        {
            veiculo: "G1",
            titulo: "UFG amplia iniciativas de inteligência artificial",
            subtitulo: "Universidade desenvolve novas ações relacionadas à inteligência artificial e inovação, com foco em pesquisas aplicadas.",
            imagem: "https://picsum.photos/seed/ia/640/400",
            url: "https://g1.globo.com",
            data: "08/09/2026",
            categoria: "Tecnologia",
            destaque: true
        },
        {
            veiculo: "O Popular",
            titulo: "Universidade promove novas ações de pesquisa",
            subtitulo: "Projetos desenvolvidos pela comunidade acadêmica ganham destaque em edital de fomento interno.",
            imagem: "https://picsum.photos/seed/pesquisa/640/400",
            url: "https://opopular.com.br",
            data: "08/09/2026",
            categoria: "Universidade",
            destaque: true
        },
        {
            veiculo: "UOL",
            titulo: "Pesquisa de doutorado usa computação para preservar patrimônio",
            subtitulo: "Estudo aplica técnicas de visão computacional em documentos históricos do cerrado goiano.",
            imagem: "https://picsum.photos/seed/patrimonio/640/400",
            url: "https://uol.com.br",
            data: "07/09/2026",
            categoria: "Pesquisa",
            destaque: false
        },
        {
            veiculo: "CNN Brasil",
            titulo: "Estudantes representam Goiás em competição internacional de programação",
            subtitulo: "Equipe do instituto avança para a fase mundial da maratona de programação.",
            imagem: "https://picsum.photos/seed/maratona/640/400",
            url: "https://cnnbrasil.com.br",
            data: "07/09/2026",
            categoria: "Eventos",
            destaque: false
        },
        {
            veiculo: "Gazeta Digital",
            titulo: "Curso de extensão abre vagas para ensino de lógica a jovens",
            subtitulo: "Iniciativa do INF/UFG recebe inscrições para turmas do segundo semestre.",
            imagem: "https://picsum.photos/seed/extensao/640/400",
            url: "https://gazetadigital.com.br",
            data: "06/09/2026",
            categoria: "Extensão",
            destaque: false
        },
        {
            veiculo: "Sagres",
            titulo: "Docente é premiada por artigo sobre software educacional",
            subtitulo: "Trabalho apresentado em congresso nacional é reconhecido pela comunidade científica.",
            imagem: "https://picsum.photos/seed/software/640/400",
            url: "https://sagresonline.com.br",
            data: "05/09/2026",
            categoria: "Premiação",
            destaque: false
        },
        {
            veiculo: "Mais Goiás",
            titulo: "Novo laboratório de realidade virtual é inaugurado no instituto",
            subtitulo: "Espaço receberá grupos de pesquisa em realidade virtual e aumentada.",
            imagem: "https://picsum.photos/seed/labrv/640/400",
            url: "https://maisgoias.com.br",
            data: "04/09/2026",
            categoria: "Universidade",
            destaque: false
        },
        {
            veiculo: "Diário da Manhã",
            titulo: "Egressos criam startup de dados premiada em Goiânia",
            subtitulo: "Empresa fundada por ex-alunos do INF/UFG conquista primeiro lugar em demo day regional.",
            imagem: "https://picsum.photos/seed/startup/640/400",
            url: "https://diariodamanha.com",
            data: "03/09/2026",
            categoria: "Empreendedorismo",
            destaque: false
        }
    ]
};

const gridDestaques = document.getElementById("destaquesGrid");
const listaNoticias = document.getElementById("newsList");
const emptyState = document.getElementById("emptyState");
const selectCategoria = document.getElementById("categoria");
const inputBusca = document.getElementById("search");

function criarCard(noticia) {
    const card = document.createElement("article");
    card.className = "news-card";

    card.innerHTML = `
        <img src="${noticia.imagem}" alt="${noticia.titulo}" class="news-image">
        <div class="news-content">
            <span class="news-source">${noticia.veiculo}</span>
            <span class="news-category">${noticia.categoria}</span>
            <h2 class="news-title">${noticia.titulo}</h2>
            <p class="news-description">${noticia.subtitulo}</p>
            <div class="news-meta">
                <span>${noticia.data}</span>
            </div>
            <a href="${noticia.url}" target="_blank" rel="noopener" class="news-link">
                Ler notícia →
            </a>
        </div>
    `;

    return card;
}

function criarItemLista(noticia) {
    const item = document.createElement("div");
    item.className = "list-item";

    item.innerHTML = `
        <span class="list-item-source">${noticia.veiculo}</span>
        <a class="list-item-title" href="${noticia.url}" target="_blank" rel="noopener">
            ${noticia.titulo}
        </a>
        <span class="list-item-category">${noticia.categoria}</span>
        <span class="list-item-date">${noticia.data}</span>
    `;

    return item;
}

function renderizarDestaques(noticias) {
    gridDestaques.innerHTML = "";

    noticias.forEach(noticia => {
        gridDestaques.appendChild(criarCard(noticia));
    });
}

function renderizarLista(noticias) {
    listaNoticias.innerHTML = "";
    emptyState.hidden = noticias.length > 0;

    noticias.forEach(noticia => {
        listaNoticias.appendChild(criarItemLista(noticia));
    });
}

function atualizarResumo(noticias) {
    const veiculos = new Set(noticias.map(n => n.veiculo)).size;
    const categorias = new Set(noticias.map(n => n.categoria)).size;
    const destaques = noticias.filter(n => n.destaque).length;

    document.getElementById("totalNoticias").textContent = noticias.length;
    document.getElementById("totalVeiculos").textContent = veiculos;
    document.getElementById("totalCategorias").textContent = categorias;
    document.getElementById("totalDestaques").textContent = destaques;
}

function preencherFiltroCategorias(noticias) {
    const categorias = [...new Set(noticias.map(n => n.categoria))].sort();

    categorias.forEach(categoria => {
        const option = document.createElement("option");
        option.value = categoria;
        option.textContent = categoria;
        selectCategoria.appendChild(option);
    });
}

function renderClipping(lista) {
    const destaques = lista.filter(n => n.destaque);
    const outras = lista.filter(n => !n.destaque);

    renderizarDestaques(destaques);
    renderizarLista(outras);
    atualizarResumo(lista);
}

document.getElementById("clippingData").textContent = clipping.data.toUpperCase();

preencherFiltroCategorias(clipping.noticias);
renderClipping(clipping.noticias);

function buscarNoticias() {
    const termo = inputBusca.value.trim().toLowerCase();

    if (!termo) {
        return clipping.noticias;
    }

    return clipping.noticias.filter(noticia =>
        noticia.titulo.toLowerCase().includes(termo) ||
        noticia.subtitulo.toLowerCase().includes(termo) ||
        noticia.veiculo.toLowerCase().includes(termo) ||
        noticia.categoria.toLowerCase().includes(termo)
    );
}

function aplicarFiltros() {
    const categoria = selectCategoria.value;
    const filtradas = buscarNoticias().filter(noticia =>
        !categoria || noticia.categoria === categoria
    );

    renderClipping(filtradas);
}

inputBusca.addEventListener("input", aplicarFiltros);
selectCategoria.addEventListener("change", aplicarFiltros);