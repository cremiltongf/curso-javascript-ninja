// Nesse exercício, você está livre para escolher os nomes para suas variáveis e funções!

// Crie uma função que receba dois argumentos e retorne a soma dos mesmos.
function sum(a, b) {
    return a + b;
}
console.log("Criando a função sum.");

// Declare uma variável que receba a invocação da função criada acima, passando dois números quaisquer por argumento, e somando `5` ao resultado retornado da função.
let sumResult = sum(10, 5);
console.log("Somando 10 e 5 com a função sum: ", sumResult);

// Qual o valor atualizado dessa variável?
console.log("Valor da variável sumResult: ", sumResult);

// Declare uma nova variável, sem valor.
let money;
console.log("Declaração de money sem valor: ", money);

/*
Crie uma função que adicione um valor à variável criada acima, e retorne a string:
    O valor da variável agora é VALOR.
Onde VALOR é o novo valor da variável.
*/
function concatenate() {
    money = 1412;
    return `O valor da variável agora é ${money}.`
}
console.log("Função para concatenar.");

// Invoque a função criada acima.
console.log("Invocando a função concatenate: ", concatenate());

// Qual o retorno da função? (Use comentários de bloco).
/**
 * O valor da variável agora é 1412.
 */

/*
Crie uma função com as seguintes características:
1. A função deve receber 3 argumentos;
2. Se qualquer um dos três argumentos não estiverem preenchidos, a função deve retornar a string:
    Preencha todos os valores corretamente!
3. O retorno da função deve ser a multiplicação dos 3 argumentos, somando `2` ao resultado da multiplicação.
*/
function threeArgs(x, y, z) {
    if(x === undefined || y === undefined || z === undefined) {
        return "Preencha todos os valores corretamente!";
    } else {
        return x * y * z + 2;
    }
}
console.log("Criando a função threeArgs.");

// Invoque a função criada acima, passando só dois números como argumento.
console.log("Invocando a função threeArgs com dois números: ", threeArgs(2, 3));

// Qual o resultado da invocação acima? (Use comentários para mostrar o valor retornado).
/**
 * Preencha todos os valores corretamente!
 */

// Agora invoque novamente a função criada acima, mas passando todos os três argumentos necessários.
console.log("Invocando a função threeArgs com 3 números: ", threeArgs(2, 3, 4));

// Qual o resultado da invocação acima? (Use comentários para mostrar o valor retornado).
/**
 * 26
 */

/*
Crie uma função com as seguintes características:
1. A função deve receber 3 argumentos.
2. Se somente um argumento for passado, retorne o valor do argumento.
3. Se dois argumentos forem passados, retorne a soma dos dois argumentos.
4. Se todos os argumentos forem passados, retorne a soma do primeiro com o segundo, e o resultado, dividido pelo terceiro.
5. Se nenhum argumento for passado, retorne o valor booleano `false`.
6. E ainda, se nenhuma das condições acima forem atendidas, retorne `null`.
*/
function threeFeatures(one, two, three) {
    if(one !== undefined && two === undefined && three === undefined) {
        return one;
    } else if(one !== undefined && two !== undefined && three === undefined) {
        return one + two;
    } else if(one !== undefined && two !== undefined && three !== undefined) {
        return (one + two) / three;
    } else if(one === undefined && two === undefined && three === undefined) {
        return false;
    } else {
        return null;
    }
}
console.log("Criando a função threeFeatures.")

// Invoque a função acima utilizando todas as possibilidades (com nenhum argumento, com um, com dois e com três.).
// Coloque um comentário de linha ao lado da função com o resultado de cada invocação.
console.log("Invocanaod a função threeFeatures com todas as possibilidades.");
console.log("0 argumento: ", threeFeatures()); //false
console.log("1 argumento: ", threeFeatures(2)); // 2
console.log("2 argumentos: ", threeFeatures(2, 4)); // 6
console.log("3 argumentos: ", threeFeatures(2, 4, 2)); // 3

// null nunca será retornado.
