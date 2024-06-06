(function( doc ) {
  'use strict';
  /*
  Vamos desenvolver mais um projeto. A ideia é fazer uma mini-calculadora.
  As regras são:

  - Deve ter somente 1 input, mas não deve ser possível entrar dados nesse input
  diretamente;
  - O input deve iniciar com valor zero;
  - Deve haver 10 botões para os números de 0 a 9. Cada botão deve ser um número;
  - Deve haver 4 botões para as operações principais: soma (+), subtração(-),
  multiplicação(x) e divisão(÷);
  - Deve haver um botão de "igual" (=) que irá calcular os valores e um botão "CE"
  que irá limpar o input, deixando-o com valor 0;

  - A cada número pressionado, o input deve atualizar concatenando cada valor
  digitado, como em uma calculadora real;
  - Ao pressionar um botão com uma das 4 operações, deve aparecer o símbolo da
  operação no input. Se o último caractere no input já for um símbolo de alguma
  operação, esse caractere deve ser substituído pelo último pressionado.
  Exemplo:
  - Se o input tem os valores: "1+2+", e for pressionado o botão de
  multiplicação (x), então no input deve aparecer "1+2x".
  - Ao pressionar o botão de igual, o resultado do cálculo deve ser mostrado no
  input;
  - Ao pressionar o botão "CE", o input deve ficar zerado.
  */
  let $visor = doc.querySelector( '[data-js="visor"]' );

  let $ce = doc.querySelector( '[data-js="ce"]' );
  $ce.addEventListener( 'click', handleClickCE, false );

  let $equal = doc.querySelector( '[data-js="equal"]' );
  $equal.addEventListener( 'click', handleClickEqual, false );

  let $operators = doc.querySelectorAll( '[data-js="operator"]' );

  let $numbers = doc.querySelectorAll( '[data-js="numbers"]' );

  Array.prototype.forEach.call( $operators, function( event ) {
    event.addEventListener( 'click', handleClickOperators, false );
  } );

  Array.prototype.forEach.call( $numbers, function( event ) {
    event.addEventListener( 'click', handleClickNumbers, false );
  });

  function handleClickCE() {
    $visor.value = 0;
  }

  function handleClickNumbers() {
    $visor.value += this.value;
  }

  function handleClickOperators() {
    $visor.value = removeLastItemIfIsOperator( $visor.value );
    $visor.value += this.value;
  }

  function removeLastItemIfIsOperator( number ) {
    if( isLastItemAnOperation( number ) ) {
      return number.slice( 0, -1 );
    } else {
      return number;
    }
  }

  function isLastItemAnOperation( number ) {
    let operators = [ '-', '+', 'x', '÷' ];
    let lastItem = number.split( '' ).pop();
    return operators.some( function( operator ) {
      return lastItem === operator;
    } );
  }

  function handleClickEqual() {
    $visor.value = removeLastItemIfIsOperator( $visor.value );
    let allValues = $visor.value.match( /\d+[+x÷-]?/g );
    $visor.value = allValues.reduce( function( total, current ) {
      let firstNumber = total.slice( 0, -1 );
      let operator = total.split( '' ).pop();
      let LastNumber = removeLastItemIfIsOperator( current );
      let lastOperator = isLastItemAnOperation( current ) ? current.split( '' ).pop() : '';
      switch( operator ) {
        case '+':
          return (Number(firstNumber) + Number(LastNumber)) + lastOperator;
        case '-':
          return (Number(firstNumber) - Number(LastNumber))  + lastOperator;
        case 'x':
          return (Number(firstNumber) * Number(LastNumber))  + lastOperator;
        case '÷':
          return (Number(firstNumber) / Number(LastNumber))  + lastOperator;
      }
    } );
  }

})( document );
