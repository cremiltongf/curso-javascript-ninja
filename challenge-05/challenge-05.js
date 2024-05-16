/*
Crie uma variável qualquer, que receba um array com alguns valores aleatórios
- ao menos 5 - (fica por sua conta os valores do array).
*/
let myArray = [ "Olá mundo!", 10, { nome: "Cremilton", sobrenome: "Fernandes" }, "Estudando JavaScript", true ];

/*
Crie uma função que receba um array como parâmetro, e retorne esse array.
*/
function getArray(arr) {
    return arr;
};

/*
Imprima o segundo índice do array retornado pela função criada acima.
*/
console.log(getArray(myArray)[1]);

/*
Crie uma função que receba dois parâmetros: o primeiro, um array de valores; e o
segundo, um número. A função deve retornar o valor de um índice do array que foi passado
no primeiro parâmetro. O índice usado para retornar o valor, deve ser o número passado no
segundo parâmetro.
*/
function twoParam(arr, index) {
    return arr[index];
};

/*
Declare uma variável que recebe um array com 5 valores, de tipos diferentes.
*/
let carro = ["gol", 2011, "preta", "4 portas", true];

/*
Invoque a função criada acima, fazendo-a retornar todos os valores do último
array criado.
*/
console.log(twoParam(carro, 0));
console.log(twoParam(carro, 1));
console.log(twoParam(carro, 2));
console.log(twoParam(carro, 3));
console.log(twoParam(carro, 4));

/*
Crie uma função chamada `book`, que recebe um parâmetro, que será o nome do
livro. Dentro dessa função, declare uma variável que recebe um objeto com as
seguintes características:
- esse objeto irá receber 3 propriedades, que serão nomes de livros;
- cada uma dessas propriedades será um novo objeto, que terá outras 3
propriedades:
    - `quantidadePaginas` - Number (quantidade de páginas)
    - `autor` - String
    - `editora` - String
- A função deve retornar o objeto referente ao livro passado por parâmetro.
- Se o parâmetro não for passado, a função deve retornar o objeto com todos
os livros.
*/
function book(livro) {
    let biblioteca = {
        "css": {
            quantidadePaginas: 283,
            autor: "Eric A. Meyer",
            editora: "bookman"
        },
        "html": {
            quantidadePaginas: 448,
            autor: "Mauricio Samy Silva ",
            editora: "novatec"
        },
        "javascript": {
            quantidadePaginas: 408,
            autor: "Loiane Groner",
            editora: "novatec"
        }
    };
    return !livro ? biblioteca : biblioteca[livro];
};

/*
Usando a função criada acima, imprima o objeto com todos os livros.
*/
console.log("Retorna todos os livros: ", book());

/*
Ainda com a função acima, imprima a quantidade de páginas de um livro qualquer,
usando a frase:
"O livro [NOME_DO_LIVRO] tem [X] páginas!"
*/
console.log(`O livro html tem ${book("html").quantidadePaginas} páginas!`);

/*
Ainda com a função acima, imprima o nome do autor de um livro qualquer, usando
a frase:
"O autor do livro [NOME_DO_LIVRO] é [AUTOR]."
*/
console.log(`O autor do livro css é ${book("css").autor}.`);

/*
Ainda com a função acima, imprima o nome da editora de um livro qualquer, usando
a frase:
"O livro [NOME_DO_LIVRO] foi publicado pela editora [NOME_DA_EDITORA]."
*/
console.log(`O livro javascript foi publicado pela editora ${book("javascript").editora}.`);
