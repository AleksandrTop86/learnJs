"use strict";

/* Допустим, у нас есть односвязный список (как описано в главе Рекурсия и стек):

let list = {
  value: 1,
  next: {
    value: 2,
    next: {
      value: 3,
      next: {
        value: 4,
        next: null
      }
    }
  }
};
Напишите функцию printList(list), которая выводит элементы списка по одному.
Сделайте два варианта решения: используя цикл и через рекурсию.
Как лучше: с рекурсией или без? */

function printList(list) {
  while (list) {                        //по скорости эффективнее вариант с while.
    console.log(list.value);
    list = list.next;
  }
}


function printListRecursion(list) {

  console.log(list.value);

  (list.next) ? printListRecursion(list.next) : '';

}

