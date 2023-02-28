"use strict";

/* Создайте функцию getSecondsToTomorrow(), возвращающую количество секунд до завтрашней даты.
Например, если сейчас 23:00, то:
getSecondsToTomorrow() == 3600
P.S. Функция должна работать в любой день, т.е. в ней не должно быть конкретного значения сегодняшней даты. */

function getSecondsToTomorrow() {
  let now = new Date();
  let h = now.getHours();
  let m = now.getMinutes();
  let s = now.getSeconds();
  let totalSecondsToday = (h * 60 + m) * 60 + s;
  let totalSecondsInADay = 86400;

  return totalSecondsInADay - totalSecondsToday;
}