(function() {
  'use strict';

  function DOM( elements ) {
    this.element = this.allElementsSelected( elements );
  }

  DOM.prototype.forEach = function forEach() {
    return Array.prototype.forEach.apply( this.element, arguments );
  };

  DOM.prototype.map = function map() {
    return Array.prototype.map.apply( this.element, arguments );
  };

  DOM.prototype.filter = function filter() {
    return Array.prototype.filter.apply( this.element, arguments );
  };

  DOM.prototype.reduce = function reduce() {
    return Array.prototype.reduce.apply( this.element, arguments );
  };

  DOM.prototype.reduceRight = function reduceRight() {
    return Array.prototype.reduceRight.apply( this.element, arguments );
  };

  DOM.prototype.every = function every() {
    return Array.prototype.every.apply( this.element, arguments );
  };

  DOM.prototype.some = function some() {
    return Array.prototype.some.apply( this.element, arguments );
  };

  DOM.prototype.isArray = function isArray( obj ) {
    return Object.prototype.toString.call( obj ) === '[object Array]';
  };

  DOM.prototype.isObject = function isObject( obj ) {
    return Object.prototype.toString.call( obj ) === '[object Object]';
  };

  DOM.prototype.isFunction = function isFunction( obj ) {
    return Object.prototype.toString.call( obj ) === '[object Function]';
  };

  DOM.prototype.isNumber = function isNumber( obj ) {
    return Object.prototype.toString.call( obj ) === '[object Number]';
  };

  DOM.prototype.isString = function isString( obj ) {
    return Object.prototype.toString.call( obj ) === '[object String]';
  };

  DOM.prototype.isBoolean = function isBoolean( obj ) {
    return Object.prototype.toString.call( obj ) === '[object Boolean]';
  };

  DOM.prototype.isNull = function isNull( obj ) {
    return Object.prototype.toString.call( obj ) === '[object Null]' || Object.prototype.toString.call( obj ) === '[object Undefined]';
  };

  DOM.prototype.allElementsSelected = function allElementsSelected( elements ) {
    return document.querySelectorAll( elements );
  };

  DOM.prototype.on = function on( eventType, callback ) {
    Array.prototype.forEach.call( this.element, function( element ) {
      element.addEventListener( eventType, callback, false );
    } );
  };

  DOM.prototype.off = function off( eventType, callback ) {
    Array.prototype.forEach.call( this.element, function( element ) {
      element.removeEventListener( eventType, callback, false );
    });
  };

  DOM.prototype.get = function get() {
    return this.element;
  };

  /*
  No HTML:
  - Crie um formulário com um input de texto que receberá um CEP e um botão
  de submit;
  - Crie uma estrutura HTML para receber informações de endereço:
  "Logradouro, Bairro, Estado, Cidade e CEP." Essas informações serão
  preenchidas com os dados da requisição feita no JS.
  - Crie uma área que receberá mensagens com o status da requisição:
  "Carregando, sucesso ou erro."

  No JS:
  - O CEP pode ser entrado pelo usuário com qualquer tipo de caractere, mas
  deve ser limpo e enviado somente os números para a requisição abaixo;
  - Ao submeter esse formulário, deve ser feito um request Ajax para a URL:
  "https://cdn.apicep.com/file/apicep/[cep].json"
  "https://viacep.com.br/ws/[CEP]/json/", onde [CEP] será o CEP passado
  no input criado no HTML;
  - Essa requisição trará dados de um CEP em JSON. Preencha campos na tela
  com os dados recebidos.
  - Enquanto os dados são buscados, na área de mensagens de status, deve mostrar
  a mensagem: "Buscando informações para o CEP [CEP]..."
  - Se não houver dados para o CEP entrado, mostrar a mensagem:
  "Não encontramos o endereço para o CEP [CEP]."
  - Se houver endereço para o CEP digitado, mostre a mensagem:
  "Endereço referente ao CEP [CEP]:"
  - Utilize a lib DOM criada anteriormente para facilitar a manipulação e
  adicionar as informações em tela.
  */

  let $formCEP = new DOM( '[data-js="form-cep"]' );
  let $inputCEP = new DOM( '[data-js="cep"]' );
  let $logradouro = new DOM( '[data-js="address"]' );
  let $bairro = new DOM( '[data-js="district"]' );
  let $estado = new DOM( '[data-js="state"]' );
  let $cidade = new DOM( '[data-js="city"]' );
  let $cep = new DOM( '[data-js="code"]' );
  let $carregando = new DOM( '[data-js="carregando"]' );
  let ajax = new XMLHttpRequest();
  $formCEP.on( 'submit', handleSubmitFormCEP );

  function handleSubmitFormCEP( event ) {
    event.preventDefault();
    let url = getUrl();
    ajax.open( 'GET', url, true );
    ajax.send();
    getMessage( 'loading' );
    ajax.addEventListener( 'readystatechange', handleReadyStateChange );
  }

  function getUrl() {
    return replaceCEP( 'https://cdn.apicep.com/file/apicep/[CEP].json' );
  }

  function clearCEP() {
    let cep = $inputCEP.get()[0].value.replace( /\D/g, '' );
    return cep.replace( /(\d{5})(\d{3})/gm, '$1-$2' );
  }

  function handleReadyStateChange() {
    if( isRequestOk() ) {
      getMessage( 'ok' );
      fillCEPFields();
    }
    if( isCEPInvalid() ) {
      getMessage( 'error' );
      fillCEPFields();
    }
  }

  function isRequestOk() {
    return ajax.readyState === 4 && ajax.status === 200;
  }

  function isCEPInvalid() {
    return ajax.readyState === 4 && ajax.status === 0;
  }

  function fillCEPFields() {
    let data = parseData();
    if( !data ) {
      getMessage( 'error' );
      data = clearData();
    }
    $logradouro.get()[0].textContent = data.address;
    $bairro.get()[0].textContent = data.district;
    $estado.get()[0].textContent = data.state;
    $cidade.get()[0].textContent = data.city;
    $cep.get()[0].textContent = data.code;
  }

  function clearData() {
    return {
      'code':'none',
      'state':'none',
      'city':'none',
      'district':'none',
      'address':'none'
    }
  }

  function parseData() {
    let result;
    try {
      result = JSON.parse( ajax.responseText );
    }
    catch( e ) {
      result = null;
    }
    return result;
  }

  function getMessage( type ) {
    let msg = {
      loading: replaceCEP( 'Buscando informações para o CEP [CEP]...' ),
      ok: replaceCEP( 'Endereço referente ao CEP [CEP]:' ),
      error: replaceCEP( 'Não encontramos o endereço para o CEP [CEP].' )
    };
    $carregando.get()[0].textContent = replaceCEP( msg[ type ] );
  }

  function replaceCEP( msg ) {
    return msg.replace( '[CEP]', clearCEP() );
  }

})();
