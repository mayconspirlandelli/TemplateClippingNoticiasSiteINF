"use strict";

const clipping = {
    instituicao: "Instituto de Informática — UFG",
    titulo: "Clipping de Notícias",
    data: "08 de setembro de 2026",

    noticias: [
        {
            veiculo: "G1",
            titulo: "Google adota inteligência artificial em português desenvolvida por pesquisadores goianos",
            subtitulo: "Modelo de IA criado pela UFG é adotado pela gigante de tecnologia para a língua portuguesa.",
            imagem: "https://files.cercomp.ufg.br/weby/up/1218/o/Captura_de_Tela_2025-10-01_a%CC%80s_15.42.26.png",
            url: "https://g1.globo.com/go/goias/noticia/2025/06/12/google-adota-inteligencia-artificial-em-portugues-desenvolvida-por-pesquisadores-goianos.ghtml",
            data: "12/06/2025",
            categoria: "Tecnologia",
            destaque: true
        },
        {
            veiculo: "Jornal UFG",
            titulo: "Saúde na era da inteligência artificial",
            subtitulo: "Pesquisa da UFG cria app para acompanhar pacientes em cuidados à distância.",
            imagem: "https://files.cercomp.ufg.br/weby/up/243/m/saude_14-08-2026.png?1786988827",
            url: "https://jornal.ufg.br/n/203566-saude-na-era-da-inteligencia-artificial",
            data: "14/08/2026",
            categoria: "Pesquisa",
            destaque: true
        },
        {
            veiculo: "Correio Braziliense",
            titulo: "Alunos de IA faturam R$ 1 milhão na faculdade, e curso que superou medicina em nota de corte abre vestibular",
            subtitulo: "Empreendedorismo dentro da graduação de IA da UFG chama atenção nacional.",
            imagem: "https://files.cercomp.ufg.br/weby/up/1218/o/Alulnos_de_IA_faturam_um_milhao_Correio_Braziliense.JPG",
            url: "https://www.correiobraziliense.com.br/euestudante/ensino-superior/2026/08/amp/7473731-alunos-de-ia-faturam-rs-1-milhao-na-faculdade-e-curso-que-superou-medicina-em-nota-de-corte-abre-vestibular.html",
            data: "05/08/2026",
            categoria: "Empreendedorismo",
            destaque: true
        },
        {
            veiculo: "UOL",
            titulo: "Cientistas de Goiás criam IA capaz de ler e interpretar DNA brasileiro",
            subtitulo: "Pesquisadores do INF/UFG desenvolvem inteligência artificial voltada à genômica.",
            imagem: "https://files.cercomp.ufg.br/weby/up/1218/o/Captura_de_Tela_2026-01-29_a%CC%80s_10.54.51.png",
            url: "https://www.uol.com.br/tilt/colunas/helton-simoes-gomes/2026/01/23/cientistas-de-goias-estao-criando-a-ia-do-dna-brasileiro-o-que-esperar.htm",
            data: "23/01/2026",
            categoria: "Pesquisa",
            destaque: true
        },
        {
            veiculo: "O Popular",
            titulo: "Por que Inteligência Artificial ultrapassou Medicina como curso mais concorrido da UFG?",
            subtitulo: "Curso do INF/UFG se consolida como o mais procurado da universidade.",
            imagem: "https://files.cercomp.ufg.br/weby/up/1218/o/Captura_de_Tela_2026-01-29_a%CC%80s_10.32.49.png",
            url: "https://opopular.com.br/cidades/por-que-inteligencia-artificial-ultrapassou-medicina-como-curso-mais-concorrido-da-ufg-1.3366588",
            data: "27/01/2026",
            categoria: "Universidade",
            destaque: true
        },
        {
            veiculo: "Folha de S. Paulo",
            titulo: "Bacharelados em inteligência artificial no Sisu sextuplicam em um ano",
            subtitulo: "Expansão dos cursos de IA nas federais, com a UFG à frente como pioneira.",
            imagem: "https://files.cercomp.ufg.br/weby/up/1218/o/Captura_de_Tela_2026-01-29_a%CC%80s_10.58.09.png",
            url: "https://www1.folha.uol.com.br/educacao/2026/01/cursos-de-graduacao-em-inteligencia-artificial-no-sisu-sextuplicam-em-um-ano.shtml",
            data: "19/01/2026",
            categoria: "Universidade",
            destaque: true
        },
        {
            veiculo: "Mais Goiás",
            titulo: "UFG vai formar pesquisadores da área de IA para apresentar projetos no exterior",
            subtitulo: "Iniciativa do instituto capacita pesquisadores para inserção internacional.",
            imagem: "https://uploads.maisgoias.com.br/2026/04/08135313/dimensao-2026-04-08t105003-597-960x640.webp",
            url: "https://www.maisgoias.com.br/cidades/goiania/ufg-vai-formar-pesquisadores-da-area-de-ia-para-apresentar-projetos-no-exterior/",
            data: "12/08/2026",
            categoria: "Universidade",
            destaque: true
        },
        {
            veiculo: "Mais Goiás",
            titulo: "Pesquisa da UFG cria app para acompanhar pacientes em cuidados à distância",
            subtitulo: "Aplicativo ajuda no monitoramento remoto de pacientes e amplia a teleassistência.",
            imagem: "https://files.cercomp.ufg.br/weby/up/1218/o/app_ufg_inf_idosos_a_distancia.webp",
            url: "https://www.maisgoias.com.br/cidades/pesquisa-da-ufg-cria-app-para-acompanhar-pacientes-em-cuidados-a-distancia/",
            data: "27/07/2026",
            categoria: "Pesquisa",
            destaque: true
        },
        {
            veiculo: "Estadão",
            titulo: "Ela foi a primeira formanda em IA do Brasil. Agora, quer arrastar mais mulheres para a área",
            subtitulo: "Formanda da UFG inspira novas gerações na busca por equidade na tecnologia.",
            imagem: "https://files.cercomp.ufg.br/weby/up/1218/o/Captura_de_Tela_2025-10-01_a%CC%80s_16.05.06.png",
            url: "https://www.estadao.com.br/150-anos/tecnologia-em-transformacao/ela-foi-a-primeira-formanda-em-ia-do-brasil-agora-quer-arrastar-mais-mulheres-para-a-area/",
            data: "06/06/2025",
            categoria: "Universidade",
            destaque: true
        },
        {
            veiculo: "Jornal Opção",
            titulo: "Google e UFG lançam Gaia, inteligência artificial em português que promete revolucionar área no Brasil",
            subtitulo: "Parceria histórica entre a UFG e o Google para uma IA em língua portuguesa.",
            imagem: "https://files.cercomp.ufg.br/weby/up/1218/o/Captura_de_Tela_2025-10-01_a%CC%80s_15.44.44.png",
            url: "https://www.jornalopcao.com.br/ultimas-noticias/google-e-ufg-lancam-gaia-inteligencia-artificial-em-portugues-que-promete-revolucionar-area-no-brasil-715517/",
            data: "11/06/2025",
            categoria: "Tecnologia",
            destaque: true
        },
        {
            veiculo: "Folha de S. Paulo",
            titulo: "Grupo de Goiás chamou a atenção da Nvidia e caminha para ser polo de IA no Brasil",
            subtitulo: "Iniciativas do INF/UFG colocam Goiás entre os principais polos de IA do país.",
            imagem: "https://files.cercomp.ufg.br/weby/up/1230/o/172444903566c9010baf31c_1724449035_3x2_xs.jpg",
            url: "https://www1.folha.uol.com.br/tec/2025/06/grupo-de-goias-chamou-atencao-da-nvidia-e-caminha-para-ser-polo-de-ia-no-brasil.shtml",
            data: "05/06/2025",
            categoria: "Tecnologia",
            destaque: true
        },
        {
            veiculo: "Exame",
            titulo: "Centro de IA da UFG destaca desafios para o Plano Nacional de Inteligência Artificial",
            subtitulo: "Pesquisadores do CEIA apontam caminhos e desafios do plano nacional de IA.",
            imagem: "https://files.cercomp.ufg.br/weby/up/1218/o/315ad205-6532-4239-936e-ddb852472124.webp",
            url: "https://exame.com/inteligencia-artificial/centro-de-ia-da-ufg-destaca-desafios-para-o-plano-nacional-de-inteligencia-artificial/",
            data: "23/08/2024",
            categoria: "Pesquisa",
            destaque: true
        },
        {
            veiculo: "A Crítica",
            titulo: "TRE-AM inaugura sala contra desinformação; uso de IA será fiscalizado",
            subtitulo: "Sala contra desinformação usa tecnologias desenvolvidas em parceria com a UFG.",
            imagem: "https://www.acritica.com/image/policy:1.412392.1786811700:1786811700/image.jpg?f=default&w=1200",
            url: "https://www.acritica.com/geral/tre-am-inaugura-sala-contra-desinformac-o-uso-de-ia-sera-fiscalizado-1.412391",
            data: "15/08/2026",
            categoria: "Tecnologia",
            destaque: false
        },
        {
            veiculo: "NeoFeed",
            titulo: "Amor artificial: quando o parceiro perfeito é um algoritmo",
            subtitulo: "Reportagem aborda a IA emocional e cita pesquisas do instituto.",
            imagem: "https://files.cercomp.ufg.br/weby/up/1218/o/ia-namoro.webp",
            url: "https://neofeed.com.br/finde/amor-artificial-quando-o-parceiro-perfeito-e-um-algoritmo/",
            data: "12/07/2026",
            categoria: "Tecnologia",
            destaque: false
        },
        {
            veiculo: "O Popular",
            titulo: "Mercado de IA tem como novo alvo emoções para interações 'afetivas'",
            subtitulo: "Tendência da IA emocional ganha espaço e é analisada na imprensa.",
            imagem: "https://files.cercomp.ufg.br/weby/up/1218/o/image_%281%29.jpg",
            url: "https://opopular.com.br/economia/mercado-de-ia-tem-como-novo-alvo-emoc-es-para-interac-es-afetivas-1.3413646",
            data: "22/05/2026",
            categoria: "Tecnologia",
            destaque: false
        },
        {
            veiculo: "CBN Goiânia",
            titulo: "IA tem se consolidado como ferramenta crucial para segurança pública, diz especialista",
            subtitulo: "Pesquisador do instituto comenta o papel da IA na segurança pública.",
            imagem: "https://files.cercomp.ufg.br/weby/up/1218/o/Captura_de_Tela_2026-01-29_a%CC%80s_10.59.54.png",
            url: "https://cbngoiania.com.br/tarde-cbn/ia-tem-se-consolidado-como-ferramenta-crucial-para-seguranca-publica-diz-especialista-1.3366445",
            data: "26/01/2026",
            categoria: "Tecnologia",
            destaque: false
        },
        {
            veiculo: "O Popular",
            titulo: "Curso de Inteligência Artificial da UFG ultrapassa Medicina e exige a maior nota para conquistar uma vaga",
            subtitulo: "IA é o curso com maior nota de corte da UFG no vestibular.",
            imagem: "https://files.cercomp.ufg.br/weby/up/1218/o/Captura_de_Tela_2026-01-29_a%CC%80s_10.32.49.png",
            url: "https://opopular.com.br/cidades/curso-de-inteligencia-artificial-da-ufg-ultrapassa-medicina-e-exige-a-maior-nota-para-conquistar-uma-vaga-1.3365572",
            data: "23/01/2026",
            categoria: "Universidade",
            destaque: false
        },
        {
            veiculo: "Portal6",
            titulo: "Coordenador da primeira graduação de IA no Brasil avalia que expansão da área é boa, mas precisa ser feita com calma",
            subtitulo: "Coordenador do curso de IA da UFG comenta o crescimento da área no país.",
            imagem: "https://files.cercomp.ufg.br/weby/up/1218/o/Captura_de_Tela_2026-01-29_a%CC%80s_10.29.47.png",
            url: "https://portal6.com.br/2026/01/20/coordenador-da-primeira-graduacao-de-ia-no-brasil-avalia-que-expansao-da-area-e-boa-mas-precisa-ser-feita-com-calma/",
            data: "20/01/2026",
            categoria: "Universidade",
            destaque: false
        },
        {
            veiculo: "Revista Zelo",
            titulo: "Curso de Medicina da UFG recebe nota máxima em avaliação do MEC",
            subtitulo: "UFG é destaque nacional na avaliação do MEC para cursos de graduação.",
            imagem: "https://files.cercomp.ufg.br/weby/up/1218/o/Captura_de_Tela_2026-01-29_a%CC%80s_10.28.02.png",
            url: "https://revistazelo.com.br/curso-de-medicina-da-ufg-recebe-nota-maxima-em-avaliacao-do-mec/",
            data: "20/01/2026",
            categoria: "Universidade",
            destaque: false
        },
        {
            veiculo: "Olhar Direto",
            titulo: "Cursos de graduação em inteligência artificial no Sisu sextuplicam em um ano; Federal de Rondonópolis oferece formação na área",
            subtitulo: "Crescimento dos bacharelados em IA nas federais é analisado pela imprensa.",
            imagem: "https://files.cercomp.ufg.br/weby/up/1218/o/Captura_de_Tela_2026-01-29_a%CC%80s_10.25.30.png",
            url: "https://olhardireto.com.br/noticias/exibir.asp?id=569361&edt=29&noticia=cursos-de-graduacao-em-inteligencia-artificial-no-sisu-sextuplicam-em-um-ano-federal-de-rondonopolis-oferece-formacao-na-area",
            data: "19/01/2026",
            categoria: "Universidade",
            destaque: false
        },
        {
            veiculo: "Correio Braziliense",
            titulo: "UFG inaugura primeiro curso de especialização em Engenharia de Software do Brasil",
            subtitulo: "Pioneirismo da UFG no ensino de Engenharia de Software ganha repercussão.",
            imagem: "https://files.cercomp.ufg.br/weby/up/1218/o/foto-predio-inf-jornal-correio.png",
            url: "https://www.correiobraziliense.com.br/euestudante/ensino-superior/2025/12/7304260-ufg-inaugura-primeiro-curso-de-especializacao-em-engenharia-de-software-do-brasil.html",
            data: "01/12/2025",
            categoria: "Universidade",
            destaque: false
        },
        {
            veiculo: "Portal AL Goiás",
            titulo: "Parlamento sedia audiência da Câmara dos Deputados para debate sobre a regulação da IA",
            subtitulo: "Pesquisadores do INF/UFG participam de audiência sobre regulação da IA.",
            imagem: "https://files.cercomp.ufg.br/weby/up/1218/o/thumb_grande_Will_Rosa_-_206.jpg",
            url: "https://portal.al.go.leg.br/noticias/160168/parlamento-sedia-audiencia-publica-da-camara-dos-deputados-no-centro-oeste-para-debate-sobre-a-regulacao-da-ia",
            data: "07/11/2025",
            categoria: "Regulação",
            destaque: false
        },
        {
            veiculo: "Oeste Goiano",
            titulo: "Caiado recebe empresários e destaca Goiás como polo de IA",
            subtitulo: "Goiás reforça posição de polo de IA com apoio do ecossistema da UFG.",
            imagem: "https://files.cercomp.ufg.br/weby/up/1218/o/f8376176-6107-43b4-b708-5d18be7eccfb-1200x600-c-default.jpg",
            url: "https://oestegoiano.com.br/outras-publicacoes/caiado-recebe-empresarios-e-destaca-goias-como-polo-de-ia/",
            data: "04/11/2025",
            categoria: "Inovação",
            destaque: false
        },
        {
            veiculo: "Casa Civil Goiás",
            titulo: "Caiado recebe empresários de SP e RJ e destaca Goiás como polo nacional de Inteligência Artificial",
            subtitulo: "Goiás se consolida como polo nacional de IA com a participação do instituto.",
            imagem: "https://files.cercomp.ufg.br/weby/up/1218/o/f8376176-6107-43b4-b708-5d18be7eccfb-1200x600-c-default.jpg",
            url: "https://goias.gov.br/casacivil/caiado-recebe-empresarios-de-sp-e-rj-e-destaca-goias-como-polo-nacional-de-inteligencia-artificial/",
            data: "04/11/2025",
            categoria: "Inovação",
            destaque: false
        },
        {
            veiculo: "Daqui O Popular",
            titulo: "Três projetos de IA da UFG são aprovados por conferência da área na China",
            subtitulo: "Pesquisas do INF/UFG são aceitas em conferência internacional na China.",
            imagem: "https://files.cercomp.ufg.br/weby/up/1218/o/Captura_de_Tela_2025-10-28_a%CC%80s_15.52.55.png",
            url: "https://daqui.opopular.com.br/geral/tres-projetos-de-ia-da-ufg-s-o-aprovados-por-conferencia-da-area-na-china-1.3328871",
            data: "27/10/2025",
            categoria: "Pesquisa",
            destaque: false
        },
        {
            veiculo: "Leitura Estratégica",
            titulo: "Goiás na rota global da economia Gamer",
            subtitulo: "Setor de games em Goiás ganha força com apoio de projetos do instituto.",
            imagem: "https://files.cercomp.ufg.br/weby/up/1218/o/Captura_de_Tela_2025-11-13_a%CC%80s_10.55.14.png",
            url: "https://leituraestrategica.com.br/edicao-49/",
            data: "25/10/2025",
            categoria: "Inovação",
            destaque: false
        },
        {
            veiculo: "TRE-GO",
            titulo: "TRE-GO participou da Expojud 2025 com apresentação da GuaIA",
            subtitulo: "Ferramenta de IA do TRE-GO, desenvolvida com a UFG, é apresentada na Expojud.",
            imagem: "https://files.cercomp.ufg.br/weby/up/1218/o/Captura_de_Tela_2025-10-17_a%CC%80s_10.16.37.png",
            url: "https://www.tre-go.jus.br/comunicacao/noticias/2025/Outubro/tre-go-participou-da-expojud-2025-com-apresentacao-da-guaia",
            data: "16/10/2025",
            categoria: "Tecnologia",
            destaque: false
        },
        {
            veiculo: "UniSatc",
            titulo: "UniSatc conhece modelo de referência em Inteligência Artificial em Goiás",
            subtitulo: "Instituição catarinense visita o CEIA para conhecer o modelo goiano de IA.",
            imagem: "https://files.cercomp.ufg.br/weby/up/1218/o/Captura_de_Tela_2025-10-15_a%CC%80s_13.27.41.png",
            url: "https://unisatc.com.br/unisatc-conhece-modelo-de-referencia-em-inteligencia-artificial-em-goias/",
            data: "14/10/2025",
            categoria: "Pesquisa",
            destaque: false
        },
        {
            veiculo: "TRE-GO",
            titulo: "Assinatura da Carta de Pirenópolis marca o encerramento do 89º COPTREL",
            subtitulo: "Evento reúne representantes do instituto no encontro de tecnologia eleitoral.",
            imagem: "https://files.cercomp.ufg.br/weby/up/1218/o/Captura_de_Tela_2025-10-15_a%CC%80s_13.23.44.png",
            url: "https://www.tre-go.jus.br/comunicacao/noticias/2025/Outubro/assinatura-da-carta-de-pirenopolis-marca-o-encerramento-do-89o-coptrel",
            data: "13/10/2025",
            categoria: "Eventos",
            destaque: false
        },
        {
            veiculo: "IT Forum",
            titulo: "De estagiária a VP global: a ascensão de Ana Paula Assis na IBM",
            subtitulo: "Executiva formada na UFG é destaque no mercado global de tecnologia.",
            imagem: "https://files.cercomp.ufg.br/weby/up/1218/o/Captura_de_Tela_2025-10-06_a%CC%80s_20.40.46.png",
            url: "https://itforum.com.br/noticias/ana-paula-assis-ibm/",
            data: "05/09/2025",
            categoria: "Empreendedorismo",
            destaque: false
        },
        {
            veiculo: "Carta Campinas",
            titulo: "Café Filosófico recebe Anderson Soares para um papo sobre tecnologia, inclusão e inteligência artificial",
            subtitulo: "Professor do INF/UFG participa de programa sobre tecnologia e inclusão.",
            imagem: "https://files.cercomp.ufg.br/weby/up/1218/o/Captura_de_Tela_2025-10-01_a%CC%80s_10.07.14.png",
            url: "https://cartacampinas.com.br/2025/08/cafe-filosofico-recebe-anderson-soares-para-um-papo-sobre-tecnologia-inclusao-e-inteligencia-artificial/",
            data: "25/08/2025",
            categoria: "Mídia",
            destaque: false
        },
        {
            veiculo: "Goiás Inovação",
            titulo: "Goiás lança Epicentro da Inteligência Artificial e mira liderança nacional no setor",
            subtitulo: "Iniciativa estadual fortalece o ecossistema de IA com participação da UFG.",
            imagem: "https://files.cercomp.ufg.br/weby/up/1218/o/Captura_de_Tela_2025-10-01_a%CC%80s_10.27.41.png",
            url: "https://goias.gov.br/inovacao/goias-lanca-epicentro-da-inteligencia-artificial-e-mira-lideranca-nacional-no-setor/",
            data: "05/09/2025",
            categoria: "Inovação",
            destaque: false
        },
        {
            veiculo: "O Popular",
            titulo: "Programa destina R$ 2 milhões para acelerar startups de IA",
            subtitulo: "Edital apoia startups de IA e integra o ecossistema goiano de inovação.",
            imagem: "https://files.cercomp.ufg.br/weby/up/1218/o/Captura_de_Tela_2025-10-01_a%CC%80s_10.24.33.png",
            url: "https://opopular.com.br/economia/programa-destina-r-2-milh-es-para-acelerar-startups-de-ia-1.3301560",
            data: "18/08/2022",
            categoria: "Inovação",
            destaque: false
        },
        {
            veiculo: "Brasil Escola",
            titulo: "Conheça como é o 1º curso superior de Inteligência Artificial (IA) do Brasil; inscrição para vestibular da UFG está aberta",
            subtitulo: "Primeira graduação de IA do país, na UFG, é apresentada ao público.",
            imagem: "https://files.cercomp.ufg.br/weby/up/1218/o/Captura_de_Tela_2025-10-01_a%CC%80s_10.29.59.png",
            url: "https://vestibular.brasilescola.uol.com.br/noticias/curso-superior-inteligencia-artificial-ia-brasil-inscricao-vestibular-aberta/357945.html",
            data: "04/08/2025",
            categoria: "Universidade",
            destaque: false
        },
        {
            veiculo: "Folha de S. Paulo",
            titulo: "IA ganha graduações e rivaliza até com medicina na disputa por vagas",
            subtitulo: "Graduação em IA da UFG é destaque na disputa por vagas no vestibular.",
            imagem: "https://files.cercomp.ufg.br/weby/up/1218/o/175435740568915e9d6ab43_1754357405_3x2_md.jpg",
            url: "https://www1.folha.uol.com.br/educacao/2025/08/ia-ganha-graduacoes-e-rivaliza-ate-com-medicina-na-disputa-por-vagas.shtml",
            data: "05/08/2025",
            categoria: "Universidade",
            destaque: false
        },
        {
            veiculo: "Folha de S. Paulo",
            titulo: "Conheça opções de cursos de graduação em inteligência artificial",
            subtitulo: "Guia da imprensa lista opções de graduação em IA, incluindo a UFG.",
            imagem: "https://files.cercomp.ufg.br/weby/up/1218/o/175435740668915e9e6e266_1754357406_3x2_md.jpg",
            url: "https://www1.folha.uol.com.br/educacao/2025/08/conheca-opcoes-de-cursos-de-graduacao-em-inteligencia-artificial.shtml",
            data: "05/08/2025",
            categoria: "Universidade",
            destaque: false
        },
        {
            veiculo: "Tribuna de Minas",
            titulo: "Brasil abre inscrições para 1º curso superior em Inteligência Artificial",
            subtitulo: "Curso pioneiro da UFG abre inscrições e repercute na imprensa nacional.",
            imagem: "https://files.cercomp.ufg.br/weby/up/1218/o/Captura_de_Tela_2025-10-01_a%CC%80s_15.01.27.png",
            url: "https://tribunademinas.com.br/colunas/maistendencias/brasil-abre-inscricoes-para-1o-curso-superior-em-inteligencia-artificial/",
            data: "05/08/2025",
            categoria: "Universidade",
            destaque: false
        },
        {
            veiculo: "Brasil em Folhas",
            titulo: "Candidato a vice-reitor da UFG defende gestão participativa e eficiente",
            subtitulo: "Docente do instituto apresenta propostas para a gestão da UFG.",
            imagem: "https://files.cercomp.ufg.br/weby/up/1218/o/brasil-em-folhas-s-a-logo-png_seeklogo-223899.png",
            url: "https://www1.brasilemfolhas.com.br/2025/06/candidato-a-vice-reitor-da-ufg-defende-gestao-participativa-e-eficiente/",
            data: "16/06/2025",
            categoria: "Universidade",
            destaque: false
        },
        {
            veiculo: "Sagres Online",
            titulo: "Candidato a vice-reitor da UFG, Eliomar Araújo quer gestão participativa e eficaz",
            subtitulo: "Professor do INF/UFG apresenta sua proposta para a reitoria.",
            imagem: "https://files.cercomp.ufg.br/weby/up/1218/o/Captura_de_Tela_2025-10-01_a%CC%80s_15.13.22.png",
            url: "https://sagresonline.com.br/candidato-a-vice-reitor-da-ufg-eliomar-araujo-quer-gestao-participativa-e-eficaz/",
            data: "16/06/2025",
            categoria: "Universidade",
            destaque: false
        },
        {
            veiculo: "TRE-GO",
            titulo: "TRE-GO apresenta GuaIA em reunião do CNJ",
            subtitulo: "IA do TRE-GO, desenvolvida com a UFG, é apresentada ao Conselho Nacional de Justiça.",
            imagem: "https://files.cercomp.ufg.br/weby/up/1218/o/Captura_de_Tela_2025-10-01_a%CC%80s_15.14.51.png",
            url: "https://www.tre-go.jus.br/comunicacao/noticias/2025/Junho/tre-go-apresenta-guaia-em-reuniao-do-cnj",
            data: "12/06/2025",
            categoria: "Tecnologia",
            destaque: false
        },
        {
            veiculo: "TeleTime",
            titulo: "Anatel e UFG ampliam parceria e terão app contra fake news",
            subtitulo: "Parceria entre a Anatel e a UFG desenvolve ferramenta contra desinformação.",
            imagem: "https://files.cercomp.ufg.br/weby/up/1218/o/Captura_de_Tela_2025-10-01_a%CC%80s_15.16.07.png",
            url: "https://teletime.com.br/13/06/2025/anatel-e-ufg-pesquisa-web-3-0/",
            data: "13/06/2025",
            categoria: "Pesquisa",
            destaque: false
        },
        {
            veiculo: "Estadão",
            titulo: "Inteligência artificial: 5 pontos para entender os impactos e potenciais da tecnologia no Brasil",
            subtitulo: "Especialista do instituto analisa o cenário da IA no país.",
            imagem: "https://files.cercomp.ufg.br/weby/up/1218/o/Captura_de_Tela_2025-10-01_a%CC%80s_15.18.02.png",
            url: "https://www.estadao.com.br/link/inovacao/inteligencia-artificial-5-pontos-para-entender-os-impactos-e-potenciais-da-tecnologia-no-brasil/",
            data: "14/06/2025",
            categoria: "Tecnologia",
            destaque: false
        },
        {
            veiculo: "Jornal Opção",
            titulo: "Goiás conquista o mundo da inteligência artificial com supercomputadores e sotaque brasileiro",
            subtitulo: "Infraestrutura de IA em Goiás, liderada pela UFG, ganha projeção mundial.",
            imagem: "https://files.cercomp.ufg.br/weby/up/1218/o/Captura_de_Tela_2025-10-01_a%CC%80s_15.56.04.png",
            url: "https://www.jornalopcao.com.br/goiania/goias-conquista-o-mundo-da-inteligencia-artificial-com-supercomputadores-e-sotaque-brasileiro-716286/",
            data: "18/06/2025",
            categoria: "Tecnologia",
            destaque: false
        },
        {
            veiculo: "G1",
            titulo: "UFG desenvolve um modelo de inteligência artificial voltado para brasileiros",
            subtitulo: "Modelo de IA desenvolvido pela UFG é apresentado em vídeo do Bom Dia Go.",
            imagem: "https://files.cercomp.ufg.br/weby/up/1218/o/Captura_de_Tela_2025-10-01_a%CC%80s_15.29.03.png",
            url: "https://g1.globo.com/go/goias/videos-bom-dia-go/video/ufg-desenvolve-um-modelo-de-inteligencia-artificial-voltado-para-brasileiros-13674540.ghtml",
            data: "12/06/2025",
            categoria: "Tecnologia",
            destaque: false
        },
        {
            veiculo: "YouTube",
            titulo: "Google anuncia modelo de inteligência artificial em português",
            subtitulo: "Anúncio do modelo em português envolve a parceria com pesquisadores da UFG.",
            imagem: "https://files.cercomp.ufg.br/weby/up/1218/o/Captura_de_Tela_2025-10-01_a%CC%80s_15.40.36.png",
            url: "https://www.youtube.com/watch?v=FvMu_AKMxUY",
            data: "12/06/2025",
            categoria: "Mídia",
            destaque: false
        },
        {
            veiculo: "G1",
            titulo: "Novos vídeos hiper-realistas feitos com inteligência artificial criam desafio de distinguir o que é real",
            subtitulo: "Especialista do instituto comenta os desafios dos vídeos gerados por IA.",
            imagem: "https://files.cercomp.ufg.br/weby/up/1218/o/Captura_de_Tela_2025-10-01_a%CC%80s_15.48.35.png",
            url: "https://g1.globo.com/fantastico/noticia/2025/06/08/novos-videos-hiper-realistas-feitos-com-inteligencia-artificial-criam-desafio-de-distinguir-o-que-e-real.ghtml",
            data: "08/06/2025",
            categoria: "Mídia",
            destaque: false
        },
        {
            veiculo: "TH Mais",
            titulo: "Governo descarta instalar supercomputador em Petrópolis após alerta sobre conta de luz milionária",
            subtitulo: "Debate sobre supercomputador nacional envolve pesquisadores do instituto.",
            imagem: "https://files.cercomp.ufg.br/weby/up/1218/o/thmais1.png",
            url: "https://thmais.com.br/giro-de-noticias/governo-descarta-instalar-supercomputador-em-petropolis-apos-alerta-sobre-conta-de-luz-milionaria/",
            data: "11/06/2025",
            categoria: "Inovação",
            destaque: false
        },
        {
            veiculo: "Fapeg",
            titulo: "Fapeg é homenageada pelos 5 anos do CEIA durante o Conecta 2025",
            subtitulo: "CEIA completa 5 anos com homenagem do ecossistema de ciência e tecnologia.",
            imagem: "https://files.cercomp.ufg.br/weby/up/1218/o/Captura_de_Tela_2025-10-01_a%CC%80s_16.08.34.png",
            url: "https://goias.gov.br/fapeg/fapeg-e-homenageada-pelos-5-anos-do-ceia-durante-o-conecta-2025/",
            data: "06/06/2025",
            categoria: "Eventos",
            destaque: false
        },
        {
            veiculo: "DataCenter Dynamics",
            titulo: "UFG inaugura laboratório voltado a tecnologias imersivas, IA e computação avançada",
            subtitulo: "Novo laboratório do instituto amplia pesquisas em tecnologias imersivas.",
            imagem: "https://files.cercomp.ufg.br/weby/up/1218/o/unnamed_69.2e16d0ba.fill-1200x630.jpg",
            url: "https://www.datacenterdynamics.com/br/not%C3%ADcias/ufg-inaugura-laborat%C3%B3rio-focado-em-tecnologias-imersivas-ia-e-computa%C3%A7%C3%A3o-avan%C3%A7ada/",
            data: "12/05/2025",
            categoria: "Pesquisa",
            destaque: false
        },
        {
            veiculo: "Andifes",
            titulo: "UFG inaugura Laboratório Avançado de Tecnologias Imersivas",
            subtitulo: "Novo laboratório fortalece a área de tecnologias imersivas na UFG.",
            imagem: "https://files.cercomp.ufg.br/weby/up/1218/o/image-16.png",
            url: "https://www.andifes.org.br/2025/05/09/ufg-inaugura-laboratorio-avancado-de-tecnologias-imersivas/",
            data: "09/05/2025",
            categoria: "Pesquisa",
            destaque: false
        },
        {
            veiculo: "Gov.br MCTI",
            titulo: "MCTI marca presença em novo centro de tecnologias imersivas da UFG",
            subtitulo: "Ministério prestigia inauguração de centro de tecnologias imersivas da UFG.",
            imagem: "https://files.cercomp.ufg.br/weby/up/1218/o/9d8ec481-c9e1-4e87-a315-f5e34a4fffa7.jpeg",
            url: "https://www.gov.br/mcti/pt-br/acompanhe-o-mcti/noticias/2025/05/mcti-marca-presenca-em-novo-centro-de-tecnologias-imersivas-da-ufg",
            data: "08/05/2025",
            categoria: "Pesquisa",
            destaque: false
        },
        {
            veiculo: "CBN Goiânia",
            titulo: "Universidade Federal de Goiás cria plataforma para detectar fake news",
            subtitulo: "Ferramenta desenvolvida pelo instituto ajuda a combater a desinformação.",
            imagem: "https://files.cercomp.ufg.br/weby/up/1218/o/unnamed.png",
            url: "https://www.cbngoiania.com.br/cbn-goiania/universidade-federal-de-goias-cria-plataforma-para-detectar-fake-news-1.2813043",
            data: "12/04/2025",
            categoria: "Pesquisa",
            destaque: false
        },
        {
            veiculo: "Seu Crédito Digital",
            titulo: "Itaú lança centro de pesquisa em colaboração com universidades brasileiras e estrangeiras",
            subtitulo: "Instituto de pesquisa do Itaú conta com a participação de pesquisadores da UFG.",
            imagem: "https://files.cercomp.ufg.br/weby/up/1218/o/seucreditodigital.com.br-itau-deixa-nubank-para-tras-e-retoma-lideranca-como-banco-mais-valioso-da-america-latina-itau-nubank.jpg",
            url: "https://seucreditodigital.com.br/itau-lanca-instituto-ciencia-tecnologia/",
            data: "10/04/2025",
            categoria: "Empreendedorismo",
            destaque: false
        },
        {
            veiculo: "Finsiders Brasil",
            titulo: "Itaú lança Instituto de Ciência e Tecnologia para acelerar inovações no setor financeiro",
            subtitulo: "Novo instituto de tecnologia tem participação de pesquisadores da UFG.",
            imagem: "https://files.cercomp.ufg.br/weby/up/1218/o/Captura_de_Tela_2025-10-02_a%CC%80s_14.01.09.png",
            url: "https://finsidersbrasil.com.br/giro-noticias/itau-lanca-instituto-de-ciencia-e-tecnologia-para-acelerar-inovacoes-no-setor-financeiro/",
            data: "10/04/2025",
            categoria: "Empreendedorismo",
            destaque: false
        },
        {
            veiculo: "Consumidor Moderno",
            titulo: "Itaú Unibanco lança instituto para pesquisas em tecnologia, com foco em IA",
            subtitulo: "Centro de pesquisa do Itaú integra especialistas do instituto em IA.",
            imagem: "https://files.cercomp.ufg.br/weby/up/1218/o/Captura_de_Tela_2025-10-02_a%CC%80s_14.03.35.png",
            url: "https://consumidormoderno.com.br/itau-instituto-pesquisa-tecnologia/",
            data: "10/04/2025",
            categoria: "Empreendedorismo",
            destaque: false
        },
        {
            veiculo: "Pequenas Empresas & Grandes Negócios",
            titulo: "Itaú lança centro de pesquisa com foco em IA, computação quântica e tecnologias emergentes",
            subtitulo: "Parceria com a UFG integra o novo centro de pesquisa do Itaú.",
            imagem: "https://files.cercomp.ufg.br/weby/up/1218/o/Captura_de_Tela_2025-10-02_a%CC%80s_14.05.27.png",
            url: "https://revistapegn.globo.com/tecnologia/noticia/2025/04/itau-lanca-centro-de-pesquisa-com-foco-em-ia-computacao-quantica-e-tecnologias-emergentes.ghtml",
            data: "10/04/2025",
            categoria: "Empreendedorismo",
            destaque: false
        },
        {
            veiculo: "Brasil em Folhas",
            titulo: "Itaú lança instituto de tecnologia com 50 pesquisas em IA e computação quântica",
            subtitulo: "Instituto reúne pesquisas em IA e computação quântica com a UFG.",
            imagem: "https://files.cercomp.ufg.br/weby/up/1218/o/Captura_de_Tela_2025-10-02_a%CC%80s_14.07.26.png",
            url: "https://www1.brasilemfolhas.com.br/2025/04/itau-lanca-instituto-de-tecnologia-com-50-pesquisas-em-ia-e-computacao-quantica/",
            data: "10/04/2025",
            categoria: "Empreendedorismo",
            destaque: false
        },
        {
            veiculo: "Cultura UOL",
            titulo: "Marcelo Tas entrevista especialista em Inteligência Artificial no Provoca desta terça-feira (20)",
            subtitulo: "Professor do INF/UFG participa do programa de entrevistas Provoca.",
            imagem: "https://files.cercomp.ufg.br/weby/up/1218/o/20250520121811_provoca.png",
            url: "https://cultura.uol.com.br/noticias/71922_marcelo-tas-entrevista-especialista-em-inteligencia-artificial-no-provoca-desta-terca-feira-20.html",
            data: "16/05/2025",
            categoria: "Mídia",
            destaque: false
        },
        {
            veiculo: "O Universo da TV",
            titulo: "No Provoca, Anderson Soares, especialista em inteligência artificial, diz: 'Eu acho que hoje nós já somos particularmente reféns da tecnologia'",
            subtitulo: "Professor do INF/UFG fala sobre a relação entre sociedade e tecnologia.",
            imagem: "https://files.cercomp.ufg.br/weby/up/1218/o/20250520121811_provoca.png",
            url: "https://www.ouniversodatv.com/2025/05/no-provoca-anderson-soares-especialista.html",
            data: "17/05/2025",
            categoria: "Mídia",
            destaque: false
        },
        {
            veiculo: "Tudo OK Notícias",
            titulo: "Goiás propõe primeira lei estadual do Brasil para regulamentar e fomentar a inteligência artificial",
            subtitulo: "Proposta legislativa conta com a contribuição de pesquisadores do instituto.",
            imagem: "https://files.cercomp.ufg.br/weby/up/1218/o/54513545387_a6d102272d_c.jpg",
            url: "https://tudooknoticias.com.br/goias-propoe-primeira-lei-estadual-do-brasil-para-regulamentar-e-fomentar-a-inteligencia-artificial/",
            data: "13/05/2025",
            categoria: "Regulação",
            destaque: false
        },
        {
            veiculo: "STG News",
            titulo: "UFG e Gamer Latam assinam protocolo de intenções para iniciativas na área de e-Sport",
            subtitulo: "Parceria entre a UFG e a Gamer Latam impulsiona o e-sport em Goiás.",
            imagem: "https://files.cercomp.ufg.br/weby/up/1218/o/Sem-titulo-1.png",
            url: "https://stgnews.com.br/ufg-e-gamer-latam-assinam-protocolo-de-intencoes-para-iniciativas-na-area-de-e-sports/",
            data: "13/11/2024",
            categoria: "Inovação",
            destaque: false
        },
        {
            veiculo: "Casa Civil Goiás",
            titulo: "Equipe goiana se classifica para o mundial de robótica",
            subtitulo: "Projetos de robótica apoiados pelo instituto levam estudantes ao mundial.",
            imagem: "https://files.cercomp.ufg.br/weby/up/1218/o/equipe-goiana-se-classifica-para-o-mundial-de-robotica.jpg",
            url: "https://goias.gov.br/casacivil/equipes-goianas-se-classificam-para-o-campeonato-mundial-de-robotica/",
            data: "19/11/2024",
            categoria: "Eventos",
            destaque: false
        },
        {
            veiculo: "UFMG",
            titulo: "Escola de Enfermagem promove blitz educativa para prevenção do câncer de próstata",
            subtitulo: "Iniciativa de saúde mobiliza o ambiente universitário em campanha de prevenção.",
            imagem: "https://files.cercomp.ufg.br/weby/up/1218/o/08c8f666188bfeae22ec764ea9c53915_17320468556933_1266102203.jpg",
            url: "https://www3.ufmg.br/comunicacao/noticias/escola-de-enfermagem-promove-blitz-educativa-para-prevencao-do-cancer-de-prostata",
            data: "20/11/2024",
            categoria: "Universidade",
            destaque: false
        },
        {
            veiculo: "YouTube",
            titulo: "Inteligência Artificial na minha vida. Onde está? Ela está me influenciando? Preciso ter cuidado?",
            subtitulo: "Palestra do professor Arlindo Galvão sobre o impacto da IA no dia a dia.",
            imagem: "https://files.cercomp.ufg.br/weby/up/1218/o/Captura_de_Tela_2025-10-02_a%CC%80s_14.23.33.png",
            url: "https://www.youtube.com/watch?v=9SvBEvNz-eg",
            data: "16/08/2024",
            categoria: "Mídia",
            destaque: false
        },
        {
            veiculo: "Mundo UFG",
            titulo: "Tráfego Aéreo - UFG usa inteligência artificial em estudo de mobilidade",
            subtitulo: "Professores do instituto falam sobre IA aplicada à mobilidade urbana.",
            imagem: "https://files.cercomp.ufg.br/weby/up/1218/o/Captura_de_Tela_2025-10-02_a%CC%80s_14.27.55.png",
            url: "https://www.youtube.com/watch?v=sKgKL-RbugQ",
            data: "12/07/2023",
            categoria: "Mídia",
            destaque: false
        },
        {
            veiculo: "YouTube",
            titulo: "Arlindo Galvão e Carlos André - Show da Manhã",
            subtitulo: "Professores do instituto participam de entrevista no Show da Manhã.",
            imagem: "https://files.cercomp.ufg.br/weby/up/1218/o/Captura_de_Tela_2025-10-02_a%CC%80s_14.34.34.png",
            url: "https://www.youtube.com/watch?v=mD5E9cj-jDA",
            data: "28/05/2024",
            categoria: "Mídia",
            destaque: false
        },
        {
            veiculo: "YouTube",
            titulo: "Ricardo Franco e Arlindo Galvão - Show da Manhã",
            subtitulo: "Professor do instituto participa de entrevista no Show da Manhã.",
            imagem: "https://files.cercomp.ufg.br/weby/up/1218/o/Captura_de_Tela_2025-10-02_a%CC%80s_14.41.56.png",
            url: "https://www.youtube.com/watch?v=Bw74xt0jvmI",
            data: "25/10/2022",
            categoria: "Mídia",
            destaque: false
        },
        {
            veiculo: "YouTube",
            titulo: "Palestra: ChatGPT, uma nova era na inteligência artificial capaz de 'conversar' com as pessoas",
            subtitulo: "Anderson Soares e Arlindo Galvão discutem o ChatGPT em palestra.",
            imagem: "https://files.cercomp.ufg.br/weby/up/1218/o/Captura_de_Tela_2025-10-02_a%CC%80s_14.46.45.png",
            url: "https://www.youtube.com/watch?v=9C6D-TIpToA",
            data: "28/02/2023",
            categoria: "Mídia",
            destaque: false
        },
        {
            veiculo: "YouTube",
            titulo: "Brasil lidera uso do ChatGPT na América Latina - Celso Camilo",
            subtitulo: "Porcentagem de uso do ChatGPT no Brasil é analisada por Celso Camilo.",
            imagem: "https://files.cercomp.ufg.br/weby/up/1218/o/Captura_de_Tela_2025-10-02_a%CC%80s_21.51.42.png",
            url: "https://www.youtube.com/watch?v=0C7AOhKS4IU",
            data: "17/10/2024",
            categoria: "Mídia",
            destaque: false
        },
        {
            veiculo: "YouTube",
            titulo: "Celso Camilo e Felipe Melazzo - Show da Manhã",
            subtitulo: "Celso Camilo participa do Show da Manhã em entrevista.",
            imagem: "https://files.cercomp.ufg.br/weby/up/1218/o/Captura_de_Tela_2025-10-02_a%CC%80s_21.55.17.png",
            url: "https://www.youtube.com/watch?v=_sNpHtnuFEw",
            data: "11/03/2024",
            categoria: "Mídia",
            destaque: false
        },
        {
            veiculo: "YouTube",
            titulo: "Show da Manhã - Celso Camilo",
            subtitulo: "Celso Camilo participa do programa Show da Manhã.",
            imagem: "https://files.cercomp.ufg.br/weby/up/1218/o/Captura_de_Tela_2025-10-02_a%CC%80s_21.57.23.png",
            url: "https://www.youtube.com/watch?v=X3E4u8T2k4I",
            data: "22/01/2024",
            categoria: "Mídia",
            destaque: false
        },
        {
            veiculo: "YouTube",
            titulo: "Show da Manhã - Celso Camilo",
            subtitulo: "Celso Camilo participa do programa Show da Manhã.",
            imagem: "https://files.cercomp.ufg.br/weby/up/1218/o/Captura_de_Tela_2025-10-02_a%CC%80s_21.59.17.png",
            url: "https://www.youtube.com/watch?v=EcgKQgVRiCw",
            data: "23/10/2023",
            categoria: "Mídia",
            destaque: false
        },
        {
            veiculo: "YouTube",
            titulo: "Celso Camilo - Show da Manhã",
            subtitulo: "Celso Camilo participa do programa Show da Manhã.",
            imagem: "https://files.cercomp.ufg.br/weby/up/1218/o/Captura_de_Tela_2025-10-02_a%CC%80s_22.01.22.png",
            url: "https://www.youtube.com/watch?v=osuejXCmneM",
            data: "06/09/2022",
            categoria: "Mídia",
            destaque: false
        },
        {
            veiculo: "YouTube",
            titulo: "Entrevista com Celso Camilo - Secretário Municipal de Tecnologia | II Mostra UFG de Inovação",
            subtitulo: "Secretário de Tecnologia fala sobre inovação na Mostra UFG.",
            imagem: "https://files.cercomp.ufg.br/weby/up/1218/o/Captura_de_Tela_2025-10-02_a%CC%80s_22.03.33.png",
            url: "https://www.youtube.com/watch?v=dFAeCNGuO4U",
            data: "28/10/2019",
            categoria: "Mídia",
            destaque: false
        },
        {
            veiculo: "YouTube",
            titulo: "Se Liga na UFG! - Ciência e Cultura - Celso Camilo (chefe de gabinete Sedete)",
            subtitulo: "Programa da UFG apresenta ciência e cultura com a participação de Celso Camilo.",
            imagem: "https://files.cercomp.ufg.br/weby/up/1218/o/Captura_de_Tela_2025-10-02_a%CC%80s_22.08.05.png",
            url: "https://www.youtube.com/watch?v=psGxrh_SIJQ",
            data: "11/02/2019",
            categoria: "Mídia",
            destaque: false
        }
    ]
};