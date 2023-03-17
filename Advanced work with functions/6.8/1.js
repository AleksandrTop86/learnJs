"use strict";

/* Напишите функцию printNumbers(from, to), которая выводит число каждую секунду, начиная от from и заканчивая to.

Сделайте два варианта решения.

Используя setInterval.
Используя рекурсивный setTimeout. */

function printNumbers(from, to) {
  let count = from;

  let interval = setInterval(function () {
    if (count == to) clearInterval(interval);
    console.log(count);
    count++;
  }, 1000)

  return interval;
}


function printNumbersRecursion(from, to) {
  let value = from;

  setTimeout(function a() {
    alert(value);
    if (value < to) {
      setTimeout(a, 1000);
    }
    value++;
  }, 1000);
}



