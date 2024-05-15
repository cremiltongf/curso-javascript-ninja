// Declarar uma variável chamada `myvar`, sem valor.
let myvar;
console.log("Declarando myvar.");

// Após declarada, atribua o valor 10 à variável `myvar`.
myvar = 10;
console.log("Valor para myvar: ", myvar);

// Declare uma nova variável chamada `soma`, e adicione uma instrução somando os valores 15 e 8.
let soma = 15 + 8;
console.log("Declarando soma: ", soma);

// Atribua à variável `soma` todo o valor dela, somando 1, usando o operador de soma abreviado.
soma += 1;
console.log("Incrementando +1 para soma: ", soma);

// Atribua à variável `soma` todo o valor dela, multiplicando por 3, usando o operador de multiplicação abreviado.
soma *= 3;
console.log("Multiplicando por 3 o valor de soma: ", soma);

// Qual é o valor da variável `soma` até aqui?
console.log("Valor de soma: ", soma); //72

// Declare uma variável chamada `souninja`, atribuindo à ela o valor booleano que representa `verdadeiro`.
let souninja = true;
console.log("Declarando souninja como verdadeiro: ", souninja);

// Declare uma variável chamada `comida` que recebe um array com os valores 'arroz', 'feijão' e 'ovo'.
let comida = ["arroz", "feijão", "ovo"];
console.log("Declarando comida como um array: ", comida);

// Digite a instrução que imprime o valor de 'feijao', que está na variável `comida`.]
console.log("Imprimindo o segundo item de comida: ", comida[1]);

// Digite o código que verifica se a variável `soma' é igual a variável `myvar` (testando também o tipo).
console.log("Comparando valor e tipo de soma e myvar: ", soma === myvar);

// Digite o código que verifica se a variável `myvar` é menor ou igual à variável `soma`.
console.log("myvar e menor ou igual a soma: ", myvar <= soma);

// Crie uma função chamada `divisao` que receba como parâmetro dois números, e retorne o resultado da divisão entre eles.
function divisao(a, b){
    return a / b;
}
console.log("Criando a função divisão.");

// Invoque a função criada acima, passando os parâmetros 10 e 2.
console.log("Divisão de 10 por 2: ", divisao(10, 2));