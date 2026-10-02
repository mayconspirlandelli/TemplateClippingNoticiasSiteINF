"use strict";

(function () {

    const root = document.querySelector(".clip-clipping");
    const clipping = window.infUfgClippingDados;

    if (!root || !clipping) {
        return;
    }

    function parseDataBR(str) {
        const [dia, mes, ano] = str.split("/").map(Number);
        return new Date(ano, mes - 1, dia);
    }

    clipping.noticias.sort((a, b) => parseDataBR(b.data) - parseDataBR(a.data));

    const carrosselTrack = root.querySelector("#clipping-destaques-grid");
    const listaNoticias = root.querySelector("#clipping-news-list");
    const emptyState = root.querySelector("#clipping-empty");
    const destaqueArea = root.querySelector("#clipping-destaques-area");
    const selectCategoria = root.querySelector("#clipping-categoria");
    const inputBusca = root.querySelector("#clipping-search");
    const prevBtn = root.querySelector("#clipping-prev");
    const nextBtn = root.querySelector("#clipping-next");
    const carouselDots = root.querySelector("#clipping-dots");

    let paginaAtual = 0;

    function criarCard(noticia) {
        const card = document.createElement("article");
        card.className = "clip-news-card";
        card.tabIndex = 0;
        card.setAttribute("role", "link");
        card.setAttribute("aria-label", noticia.titulo);

        card.innerHTML = `
            <img src="${noticia.imagem}" alt="${noticia.titulo}" class="clip-news-image">
            <div class="clip-news-content">
                <span class="clip-news-source">${noticia.veiculo}</span>
                <span class="clip-news-category">${noticia.categoria}</span>
                <h2 class="clip-news-title">${noticia.titulo}</h2>
                <p class="clip-news-description">${noticia.subtitulo}</p>
                <div class="clip-news-meta">
                    <span>${noticia.data}</span>
                </div>
            </div>
        `;

        const abrirNoticia = () => window.open(noticia.url, "_blank", "noopener");

        card.addEventListener("click", abrirNoticia);
        card.addEventListener("keydown", (evento) => {
            if (evento.key === "Enter" || evento.key === " ") {
                evento.preventDefault();
                abrirNoticia();
            }
        });

        return card;
    }

    function criarItemLista(noticia) {
        const item = document.createElement("div");
        item.className = "clip-list-item";

        item.innerHTML = `
            <span class="clip-list-item-source">${noticia.veiculo}</span>
            <a class="clip-list-item-title" href="${noticia.url}" target="_blank" rel="noopener">
                ${noticia.titulo}
            </a>
            <span class="clip-list-item-category">${noticia.categoria}</span>
            <span class="clip-list-item-date">${noticia.data}</span>
        `;

        return item;
    }

    function calcularPorPagina() {
        const largura = carrosselTrack.parentElement.clientWidth;

        if (largura >= 1080) return 4;
        if (largura >= 760) return 3;
        if (largura >= 500) return 2;
        return 1;
    }

    function renderizarCarrossel() {
        const cards = [...carrosselTrack.children];
        const total = cards.length;

        if (total === 0) {
            destaqueArea.hidden = true;
            return;
        }

        destaqueArea.hidden = false;

        const porPagina = calcularPorPagina();
        const paginas = Math.ceil(total / porPagina);

        if (paginaAtual > paginas - 1) {
            paginaAtual = paginas - 1;
        }

        cards.forEach(card => {
            card.style.flex = `0 0 ${100 / porPagina}%`;
        });

        carrosselTrack.style.transform = `translateX(-${paginaAtual * 100}%)`;
        prevBtn.disabled = paginaAtual === 0;
        nextBtn.disabled = paginaAtual >= paginas - 1;

        carouselDots.innerHTML = "";

        for (let i = 0; i < paginas; i++) {
            const dot = document.createElement("button");
            dot.type = "button";
            dot.className = "clip-carousel-dot" + (i === paginaAtual ? " active" : "");
            dot.setAttribute("aria-label", `Ir para página ${i + 1}`);

            dot.addEventListener("click", () => {
                paginaAtual = i;
                renderizarCarrossel();
            });

            carouselDots.appendChild(dot);
        }
    }

    function renderizarDestaques(noticias) {
        carrosselTrack.innerHTML = "";
        paginaAtual = 0;

        noticias.forEach(noticia => {
            carrosselTrack.appendChild(criarCard(noticia));
        });

        renderizarCarrossel();
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

        root.querySelector("#clipping-total-noticias").textContent = noticias.length;
        root.querySelector("#clipping-total-veiculos").textContent = veiculos;
        root.querySelector("#clipping-total-categorias").textContent = categorias;
        root.querySelector("#clipping-total-destaques").textContent = destaques;
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

    prevBtn.addEventListener("click", () => {
        paginaAtual -= 1;
        renderizarCarrossel();
    });

    nextBtn.addEventListener("click", () => {
        paginaAtual += 1;
        renderizarCarrossel();
    });

    let redimensionarTimer;
    window.addEventListener("resize", () => {
        clearTimeout(redimensionarTimer);
        redimensionarTimer = setTimeout(renderizarCarrossel, 150);
    });

    inputBusca.addEventListener("input", aplicarFiltros);
    selectCategoria.addEventListener("change", aplicarFiltros);

})();
