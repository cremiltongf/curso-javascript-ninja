(function( win, doc ) {
  'use strict';
  /*
  Essa semana você terá dois desafios:
  1) Revisar todo o contéudo passado até aqui, e ver se você realmente entendeu
  tudo o que foi passado! Se tiver dúvidas, anote, e então abra issues,
  ou comente no seu pull request mesmo, que eu irei ajudá-lo a entender
  o que não ficou tão claro das aulas anteriores.
  É essencial que você entenda todo o conteúdo que foi passado até aqui,
  para que possamos prosseguir para a parte mais avançada do curso :D

  2) Estudar eventos!
  Acesse a página do MDN:
  https://developer.mozilla.org/en-US/docs/Web/Events#Categories

  Tente aplicar na prática alguns dos eventos que estão ali e coloque nesse
  desafio os experimentos legais que você conseguir desenvolver :D
  */

  let $name = doc.querySelector( '[data-js="name"]' );
  $name.addEventListener( 'change', returnName, false );
  let $phone = doc.querySelector( '[data-js="phone"]' );
  $phone.addEventListener( 'change', returnPhone, false );
  let $cpf = doc.querySelector( '[data-js="cpf"]' );
  $cpf.addEventListener( 'change', returnCPF, false );

  let $returnName = doc.querySelector( '[data-js="show-name"]' );
  let $returnPhone = doc.querySelector( '[data-js="show-phone"]' );
  let $returnCPF = doc.querySelector( '[data-js="show-cpf"]' );

  let $btnForm = doc.querySelector( '[data-js="btn-form"]' );
  $btnForm.addEventListener( 'click', clearData, false );

  function clearData() {
    $name.value = '';
    $phone.value = '';
    $cpf.value = '';
  }

  function returnName() {
    if( $name.value )
      $returnName.textContent = 'Nome é: ' + $name.value;
  }

  function returnPhone() {
    if( $phone.value )
      $returnPhone.textContent = 'Fone é: ' + $phone.value;
  }

  function returnCPF() {
    if( $cpf.value )
      $returnCPF.textContent = 'CPF é: ' + $cpf.value;
  }

})( window, document );
