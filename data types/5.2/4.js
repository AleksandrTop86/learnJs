"use strict";

//Этот цикл – бесконечный. Он никогда не завершится, почему?

let i = 0;
while (i != 10) {
  i += 0.2;
}

// этот цикл не останавливается из-за погрешности при вычислении десятичных дробей.