"use strict";

/* Возможно ли создать функции A и B, чтобы new A() == new B()?

function A() { ... }
function B() { ... }

let a = new A();
let b = new B();

alert( a == b ); // true
Если да – приведите пример вашего кода. */

let user = {};

function A() { return user; }
function B() { return user; }

alert( new A() == new B() ); 