"use strict";

/* Напишите функцию camelize(str), которая преобразует строки вида «my-short-string» в «myShortString».

То есть дефисы удаляются, а все слова после них получают заглавную букву.

Примеры:

camelize("background-color") == 'backgroundColor';
camelize("list-style-image") == 'listStyleImage';
camelize("-webkit-transition") == 'WebkitTransition';
P.S. Подсказка: используйте split, чтобы разбить строку на массив символов, потом переделайте всё как нужно и методом 
join соедините обратно. */

function camelize(str) {
  let arr = str.split('-');
  
  let arrUpWord = arr.map((element, index) => {
    return (index == 0) ? element :
      element[0].toUpperCase() + element.slice(1);
  });
  
  let concatElemArr = arrUpWord.join('');
  return concatElemArr;
}

