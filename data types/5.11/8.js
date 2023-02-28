"use strict";

/* Напишите функцию formatDate(date), форматирующую date по следующему принципу:

Если спустя date прошло менее 1 секунды, вывести "прямо сейчас".
В противном случае, если с date прошло меньше 1 минуты, вывести "n сек. назад".
В противном случае, если меньше часа, вывести "m мин. назад".
В противном случае, полная дата в формате "DD.MM.YY HH:mm". А именно: "день.месяц.год часы:минуты",
 всё в виде двух цифр, т.е. 31.12.16 10:00.
Например:
alert( formatDate(new Date(new Date - 1)) ); // "прямо сейчас"
alert( formatDate(new Date(new Date - 30 * 1000)) ); // "30 сек. назад"
alert( formatDate(new Date(new Date - 5 * 60 * 1000)) ); // "5 мин. назад"
// вчерашняя дата вроде 31.12.2016, 20:00
alert( formatDate(new Date(new Date - 86400 * 1000)) ); */

function formatDate(date) {
  let dOfM = date.getDate();
  let m = date.getMonth() + 1;
  let y = date.getFullYear();
  let h = date.getHours();
  let min = date.getMinutes();
  let corMs = new Date() - date;
  let corSec = Math.round(corMs / 1000);
  let corMin = corSec / 60;
  let corHour = corMin / 60;

  y = y.toString().slice(-2);
  m = m < 10 ? '0' + m : m;
  dOfM = dOfM < 10 ? '0' + dOfM : dOfM;
  h = h < 10 ? '0' + h : h;
  min = min < 10 ? '0' + min : min;

  if (corSec < 1) {
    return 'прямо сейчас';
  } else if (corMin < 1) {
    return `${corSec} сек. назад`
  } else if (corHour < 1) {
    return `${corMin} мин. назад`
  } else {
    return `${dOfM}.${m}.${y} ${h}:${minutes}`
  }
}