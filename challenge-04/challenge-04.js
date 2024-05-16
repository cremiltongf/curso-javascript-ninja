// # Desafio da semana #4

/*
Declare uma variável chamada `isTruthy`, e atribua a ela uma função que recebe
um único parâmetro como argumento. Essa função deve retornar `true` se o
equivalente booleano para o valor passado no argumento for `true`, ou `false`
para o contrário.
*/
let isTruthy = function(a) {
    return a ? true : false;
};
console.log("Função isTruthy.");

// Invoque a função criada acima, passando todos os tipos de valores `falsy`.
console.log("Função isTruthy com valores falsy: ");
console.log(isTruthy(false));
console.log(isTruthy(undefined));
console.log(isTruthy(null));
console.log(isTruthy(NaN));
console.log(isTruthy(0));
console.log(isTruthy(-0));
console.log(isTruthy(""));
console.log(isTruthy(''));

/*
Invoque a função criada acima passando como parâmetro 10 valores `truthy`.
*/
console.log("Função isTruthy com valores truthy: ");
console.log(isTruthy(true));
console.log(isTruthy("0"));
console.log(isTruthy(1));
console.log(isTruthy("cremilton"));
console.log(isTruthy({}));
console.log(isTruthy([]));
console.log(isTruthy(1 * 3));
console.log(isTruthy(function() {}));
console.log(isTruthy(100));
console.log(isTruthy(!false));

/*
Declare uma variável chamada `carro`, atribuindo à ela um objeto com as
seguintes propriedades (os valores devem ser do tipo mostrado abaixo):
- `marca` - String
- `modelo` - String
- `placa` - String
- `ano` - Number
- `cor` - String
- `quantasPortas` - Number
- `assentos` - Number - cinco por padrão
- `quantidadePessoas` - Number - zero por padrão
*/
let carro = {
    marca: "Volkswagen",
    modelo: "Gol",
    placa: "AWDS900",
    ano: 2011,
    cor: "preta",
    quantasPortas: 4,
    assentos: 5,
    quantidadePessoas: 0
};
console.log("Criação do objeto carro: ", carro);

/*
Crie um método chamado `mudarCor` que mude a cor do carro conforme a cor
passado por parâmetro.
*/
carro.mudarCor = function(cor) {
    carro.cor = cor;
};
console.log("Método mudarCor para objeto carro.");

/*
Crie um método chamado `obterCor`, que retorne a cor do carro.
*/
carro.obterCor = function() {
    return carro.cor;
};
console.log("Método obterCor para retornar a cor do carro.");

/*
Crie um método chamado `obterModelo` que retorne o modelo do carro.
*/
carro.obterModelo = function() {
    return carro.modelo;
};
console.log("Método obterModelo para retornar o modelo do carro.");

/*
Crie um método chamado `obterMarca` que retorne a marca do carro.
*/
carro.obterMarca = function() {
    return carro.marca;
};
console.log("Método para retornar a marca do carro.");

/*
Crie um método chamado `obterMarcaModelo`, que retorne:
"Esse carro é um [MARCA] [MODELO]"
Para retornar os valores de marca e modelo, utilize os métodos criados.
*/
carro.obterMarcaModelo = function() {
    return `Esse carro é um ${carro.obterMarca()} ${carro.obterModelo()}`;
};
console.log("Método para retornar marca de modelo de carro.");

/*
Crie um método que irá adicionar pessoas no carro. Esse método terá as
seguintes características:
- Ele deverá receber por parâmetro o número de pessoas entrarão no carro. Esse
número não precisa encher o carro, você poderá acrescentar as pessoas aos
poucos.
- O método deve retornar a frase: "Já temos [X] pessoas no carro!"
- Se o carro já estiver cheio, com todos os assentos já preenchidos, o método
deve retornar a frase: "O carro já está lotado!"
- Se ainda houverem lugares no carro, mas a quantidade de pessoas passadas por
parâmetro for ultrapassar o limite de assentos do carro, então você deve
mostrar quantos assentos ainda podem ser ocupados, com a frase:
"Só cabem mais [QUANTIDADE_DE_PESSOAS_QUE_CABEM] pessoas!"
- Se couber somente mais uma pessoa, mostrar a palavra "pessoa" no retorno
citado acima, no lugar de "pessoas".
*/
carro.addPessoas = function(pessoas) {
    let totalPessoas = carro.quantidadePessoas + pessoas;
    if( pessoas <= carro.assentos && totalPessoas <= carro.assentos) {
        carro.quantidadePessoas += pessoas;
        let plural = carro.quantidadePessoas === 1 ? "pessoa" : "pessoas";
        return `Já temos ${carro.quantidadePessoas} ${plural} no carro!`;
    } else if( carro.quantidadePessoas === carro.assentos && totalPessoas >= carro.assentos) {
        return "O carro já está lotado!";
    } else {
        let cabemPessoas = carro.assentos - carro.quantidadePessoas;
        let plural = cabemPessoas === 1 ? "pessoa" : "pessoas";
        return `Só cabem mais ${cabemPessoas} ${plural}!`;
    }
};
console.log("Método para adicionar pessoas conforme lugar disponível no carro.");

/*
Agora vamos verificar algumas informações do carro. Para as respostas abaixo,
utilize sempre o formato de invocação do método (ou chamada da propriedade),
adicionando comentários _inline_ ao lado com o valor retornado, se o método
retornar algum valor.

Qual a cor atual do carro?
*/
console.log("Cor do carro: ", carro.obterCor()); // preta

// Mude a cor do carro para vermelho.
carro.mudarCor("vermelho");

// E agora, qual a cor do carro?
console.log("Retornando cor atual: ", carro.obterCor()); // vermelho

// Mude a cor do carro para verde musgo.
carro.mudarCor("verde musgo");

// E agora, qual a cor do carro?
console.log("Retornando cor atual: ", carro.obterCor()); // verde musgo

// Qual a marca e modelo do carro?
console.log("Retornando modelo e marca do carro: ", carro.obterMarcaModelo()); // Volkaswagen Gol

// Adicione 2 pessoas no carro.
console.log(carro.addPessoas(2)); // "Já temos 2 pessoas no carro!"

// Adicione mais 4 pessoas no carro.
console.log(carro.addPessoas(4)); // "Só cabem mais 3 pessoas!"

// Faça o carro encher.
console.log(carro.addPessoas(1)); // "Já temos 3 pessoas no carro!"
console.log(carro.addPessoas(2)); // "Já temos 5 pessoas no carro!"

// Tire 4 pessoas do carro.
console.log(carro.addPessoas(-4)); // "Já temos 1 pessoa no carro!"

// Adicione 10 pessoas no carro.
console.log(carro.addPessoas(10)); // "Só cabem mais 4 pessoas!"

// Quantas pessoas temos no carro?
console.log("Quantidade de pessoas no carro: ", carro.quantidadePessoas); // 1