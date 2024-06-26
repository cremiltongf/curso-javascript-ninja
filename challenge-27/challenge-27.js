(function() {
  'use strict';
  /*
  Aproveitando a lib DOM que fizemos na semana anterior, crie agora para ela
  métodos semelhantes aos que existem no array, mas que sirvam para os
  elementos do DOM selecionados.
  Crie os seguintes métodos:
  - forEach, map, filter, reduce, reduceRight, every e some.

  Crie também métodos que verificam o tipo do objeto passado por parâmetro.
  Esses métodos não precisam depender de criar um novo elemento do DOM, podem
  ser métodos estáticos.

  Métodos estáticos não obrigam o uso do `new`, podendo ser usados diretamente
  no objeto, como nos exemplos abaixo:
  DOM.isArray([1, 2, 3]); // true
  DOM.isFunction(function() {}); // true
  DOM.isNumber('numero'); // false

  Crie os seguintes métodos para verificação de tipo:
  - isArray, isObject, isFunction, isNumber, isString, isBoolean, isNull.
  O método isNull deve retornar `true` se o valor for null ou undefined.
  */

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

  // isArray, isObject, isFunction, isNumber, isString, isBoolean, isNull.

  // let obj = [ 1, 2, 3, 4, 5, 6 ];
  // let obj = { nome: 'Cremilton', lastName: 'Fernandes' };
  // let obj = function() { console.log( 'Teste de teste.' ); };
  // let obj = 12;
  // let obj = 'Fernandes';
  // let obj = true;
  // let obj;
  let obj = null;

  let dom = new DOM();
  console.log( dom.isNull( obj ) );

})();
