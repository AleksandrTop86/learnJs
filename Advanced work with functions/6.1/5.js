"use strict";

/* Выведите односвязный список из предыдущего задания Вывод односвязного списка в обратном порядке.
Сделайте два решения: с использованием цикла и через рекурсию.
 */
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
}

function printRevRecursion(list) {

  if (list.next) {
    printRevRecursion(list.next);
  }

  alert(list.value);
}



function printRevers(list) {
  let myList = list;
  let arrList = [];
 
  while (myList) {
    arrList.push(myList.value);
    myList = myList.next;
  }

  for (let i = arrList.length - 1; i >= 0; i--) {
    alert(arrList[i]);
  }
}


