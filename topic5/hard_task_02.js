'use strict';
{
  const min = (a, b) => a < b ? a : b;
  const a = +prompt('Введите a', 5);
  const b = +prompt('Введите b', 10);

  console.log(`Наименьшее число между ${a} и ${b}: `, min(a,b));
}