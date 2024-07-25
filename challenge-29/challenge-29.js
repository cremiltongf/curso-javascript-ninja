(function( DOM ) {
  'use strict';

  /*
  Vamos estruturar um pequeno app utilizando módulos.
  Nosso APP vai ser um cadastro de carros. Vamos fazê-lo por partes.
  A primeira etapa vai ser o cadastro de veículos, de deverá funcionar da
  seguinte forma:
  - No início do arquivo, deverá ter as informações da sua empresa - nome e
  telefone (já vamos ver como isso vai ser feito)
  - Ao abrir a tela, ainda não teremos carros cadastrados. Então deverá ter
  um formulário para cadastro do carro, com os seguintes campos:
    - Imagem do carro (deverá aceitar uma URL)
    - Marca / Modelo
    - Ano
    - Placa
    - Cor
    - e um botão "Cadastrar"

  Logo abaixo do formulário, deverá ter uma tabela que irá mostrar todos os
  carros cadastrados. Ao clicar no botão de cadastrar, o novo carro deverá
  aparecer no final da tabela.

  Agora você precisa dar um nome para o seu app. Imagine que ele seja uma
  empresa que vende carros. Esse nosso app será só um catálogo, por enquanto.
  Dê um nome para a empresa e um telefone fictício, preechendo essas informações
  no arquivo company.json que já está criado.

  Essas informações devem ser adicionadas no HTML via Ajax.

  Parte técnica:
  Separe o nosso módulo de DOM criado nas últimas aulas em
  um arquivo DOM.js.

  E aqui nesse arquivo, faça a lógica para cadastrar os carros, em um módulo
  que será nomeado de "app".
  */

  function app() {
    return {
      init: function init() {
        console.log( 'app init' );
        this.companyInfo();
        this.initEvents();
      },

      initEvents: function initEvents() {
        let $submit = DOM( '[data-js="formulario-de-cadastro"]' );
        $submit.on( 'submit', this.handleSubmit );
      },

      handleSubmit: function handleSubmit( e ) {
        e.preventDefault();
        let $dadosInput = DOM( '[data-js="dados-input"]' ).get();
        $dadosInput.appendChild( app().createNewCar() );
      },

      createNewCar: function createNewCar() {
        let $fragment = document.createDocumentFragment();
        let $tr = document.createElement( 'tr' );
        let $imagem = document.createElement( 'img' );
        let $tdImagem = document.createElement( 'td' );
        let $tdModelo = document.createElement( 'td' );
        let $tdAno = document.createElement( 'td' );
        let $tdPlaca = document.createElement( 'td' );
        let $tdCor = document.createElement( 'td' );
        $imagem.src = DOM( '[data-js="imagem"]' ).get().value;
        $tdImagem.appendChild( $imagem );
        $tdModelo.textContent = DOM( '[data-js="modelo"]' ).get().value;
        $tdAno.textContent = DOM( '[data-js="ano"]' ).get().value;
        $tdPlaca.textContent = DOM( '[data-js="placa"]' ).get().value;
        $tdCor.textContent = DOM( '[data-js="cor"]' ).get().value;
        $tr.appendChild($tdImagem);
        $tr.appendChild($tdModelo);
        $tr.appendChild($tdAno);
        $tr.appendChild($tdPlaca);
        $tr.appendChild($tdCor);
        return $fragment.appendChild($tr);
      },

      companyInfo: function companyInfo() {
        let ajax = new XMLHttpRequest();
        ajax.open( 'GET', '/challenge-29/company.json', true );
        ajax.send();
        ajax.addEventListener( 'readystatechange', this.getCompanyInfo, false );
      },

      getCompanyInfo: function getCompanyInfo() {
        if( !app().isReady.call( this ) )
          return;

        let data = JSON.parse( this.responseText );
        let $nomeEmpresa = DOM( '[data-js="nome-empresa"]' ).get();
        let $foneEmpresa = DOM( '[data-js="telefone-empresa"]' ).get();
        $nomeEmpresa.textContent = data.name;
        $foneEmpresa.textContent = data.phone;
      },

      isReady: function isReady() {
        return this.readyState === 4 && this.status === 200;
      }
    };
  }

  app().init();

})( window.DOM );
