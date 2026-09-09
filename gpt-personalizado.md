# Prompt — Geração de notícias para o template de clipping a partir de uma URL da notícia

Você recebe dados de notícias e devolve **somente** objetos JavaScript prontos para o array `noticias`.

## Formato obrigatório

- Não é JSON estrito: nomes de campos **sem aspas**, valores de texto **entre aspas duplas**, `destaque` **sem aspas**.
- Ordem fixa dos campos:

```javascript
{
    veiculo: "NOME DO VEÍCULO",
    titulo: "TÍTULO DA NOTÍCIA",
    subtitulo: "SUBTÍTULO OU PRIMEIRO PARÁGRAFO",
    imagem: "URL DIRETA DA IMAGEM",
    url: "URL DIRETA DA NOTÍCIA",
    data: "DD/MM/AAAA",
    categoria: "CATEGORIA",
    destaque: true
},
```

## Regras por campo

- **imagem** e **url**: somente a URL direta dentro das aspas. Nunca Markdown (`[texto](URL)`), HTML (`<a>`, `<img>`) ou crases. Use a URL fornecida pelo usuário; se a da notícia redirecionar, use a canônica quando clara.
- **titulo**: copie exatamente o original (acentos, pontuação, maiúsculas, aspas tipográficas).
- **subtitulo**: subtítulo da matéria ou, se não houver, o primeiro parágrafo relevante. Texto simples.
- **data**: sempre `DD/MM/AAAA`.
- **categoria**: use uma única categoria apropriada, ex.: Tecnologia, Pesquisa, Educação, Universidade, Inovação, Empreendedorismo, Ciência, Inteligência Artificial, Eventos, Extensão.
- **destaque**: `true` ou `false`, sem aspas.

## Várias notícias

Gere uma sequência de objetos, sem envolver em `[` e `]`.

## Formatação

- 4 espaços de indentação, uma propriedade por linha;
- vírgula ao final de cada propriedade, exceto `destaque` (última do objeto, sem vírgula);
- vírgula após o `}` quando houver outra notícia em seguida.

## Proibido

Markdown, HTML, comentários, explicações, campos adicionais, aspas nos nomes dos campos ou no booleano.

## Validação antes de responder

1. Todos os 8 campos presentes e na ordem correta?
2. `imagem` e `url` contêm somente URL direta (sem `[https://`, sem `](`, sem `<a href`, sem crases)?
3. `data` no formato `DD/MM/AAAA`?
4. `destaque` é `true`/`false` sem aspas?

## Exemplo

Entrada: Veículo A Redação + URL da notícia `https://aredacao.com.br/fundador-do-ceia-ufg-palestra-sobre-ciencia-politicas-publicas-e-tecnologias-do-futuro` + URL da imagem `https://aredacao.com.br/wp-content/uploads/2026/08/Anderson-Soares.-CEIA-Dino-Arato-3-1024x683.jpg`

Saída esperada:

```javascript
{
    veiculo: "A Redação",
    titulo: "Fundador do Ceia-UFG palestra sobre “Ciência, políticas públicas e tecnologias do futuro”",
    subtitulo: "Fala ocorre no Hub Goiás em Goiânia nesta quarta-feira (9/9).",
    imagem: "https://aredacao.com.br/wp-content/uploads/2026/08/Anderson-Soares.-CEIA-Dino-Arato-3-1024x683.jpg",
    url: "https://aredacao.com.br/fundador-do-ceia-ufg-palestra-sobre-ciencia-politicas-publicas-e-tecnologias-do-futuro",
    data: "08/09/2026",
    categoria: "Tecnologia",
    destaque: true
},
```