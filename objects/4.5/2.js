"use strict";

/* Создайте функцию-конструктор Calculator, которая создаёт объекты с тремя методами:

read() запрашивает два значения при помощи prompt и сохраняет их значение в свойствах объекта.
sum() возвращает сумму этих свойств.
mul() возвращает произведение этих свойств.
Например:

let calculator = new Calculator();
calculator.read();

alert( "Sum=" + calculator.sum() );
alert( "Mul=" + calculator.mul() ); */


function Calculator() {
  this.read = function () {
    this.x = +prompt('Введите х');
    this.y = +prompt('Введите у');
  };

  this.sum = function () {
    return this.x + this.y;
  };

  this.mul = function () {
    return this.x * this.y;
  };
}

let calculator = new Calculator();
calculator.read();

alert("Sum=" + calculator.sum());
alert("Mul=" + calculator.mul());