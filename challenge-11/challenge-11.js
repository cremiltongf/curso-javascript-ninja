(function() {
    // Envolva todo o código desse arquivo em uma IIFE (incluindo esse comentário).

    /*
    Crie uma variável chamada `once`, que recebe `false` como seu valor.
    Crie um loop que execute enquanto essa variável for verdadeira. Dentro do
    loop, mostre no console a mensagem:
    'Entrou ao menos uma vez!'
    Qual loop você deve usar para que essa mensagem seja mostrada no console?
    */
    let once = false;
    do {
        console.log( 'Entrou ao menos uma vez (lá ele).' );
    } while( once === true );

    /*
    Crie um objeto chamado `person`, que receba as seguintes propriedades:
    - 'name', 'age', 'weight' e 'birthday'. Preencha com os valores corretos
    para o nome, idade, peso e data de nascimento dessa pessoa.
    */
    let person = {
        'name' : 'Beltrano da Silva',
        'age' : 52,
        'weight' : 78,
        'birthday' : '30/02/1972'
    };

    /*
    Use um loop para percorrer o objeto criado acima, mostrando no console
    a frase:
    'The [PROPERTY] of person is [VALUE]'
    Aproveite e crie uma variável `counter` que vai contar quantas propriedades
    esse objeto tem.
    Após o loop, mostre a frase:
    'The person has [COUNTER] properties'
    */
    let counter = 0;
    for( let prop in person ) {
        counter++;
        console.log( `The ${prop} of person is ${person[prop]}` );
    }
    console.log( `The person has ${counter} properties` );

    /*
    Crie uma função chamada `moreThan`, que vai verificar se a pessoa (objeto
    criado acima) é mais velha que a idade passada por parâmetro.
    Se verdadeiro, retornar `true`. Senão, retornar false.
    Após a função, mostrar a mensagem no console:
    'The person has more than 25 years old? [TRUE/FALSE]'
    
    Acredito que a mensagem esteja errado, onde deveria ser 'The person has more than [IDADE DO PARÂMETRO] years old? [TRUE/FALSE]'
    A msg de sugestão é baseada na resolução (validação) do professor.
    */
    function moreThan( otherAge ) {
        if( person['age'] > otherAge ) {
            return true;
        }
        return false;
        
        // alternativa
        // return person['age'] > otherAge;
    }
    let otherAge = 32;
    console.log( `The person has more than ${otherAge} years old?`, moreThan( otherAge ) );

    /*
    Faça um loop de 0 a 20, que adicione cada número como um item de um
    array chamado `numbers`. Se o contador for maior que 10, saia do loop.
    Mostre no console os números no array.
    */
    console.log( 'De 0 a 10:' );
    let numbers = [];
    for( let i = 0; i <= 20; i++ ) {
        if( i > 10 ) {
            break;
        }
        numbers.push( i );
    }
    console.log( numbers );

    /*
    Faça outro loop de 0 a 20, que adicione a um array chamado `numbers` (já
    criado acima, só precisa ser reiniciado) números de 0 a 20, inclusive
    esses. Se o número for ímpar, pular para o próximo número.
    Mostrar no console os números do array.
    */
    console.log( 'Pares de 0 a 20:' );
    numbers = [];
    for( let i = 0; i <= 20; i++ ) {
        if( i % 2 !== 0 ) {
            continue;
        }
        numbers.push( i );
    }
    console.log( numbers );

})();