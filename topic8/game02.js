'use strict';

{
  let m, n = new Number;
  m = prompt('Введите первое число', 20);
  while ((Number.isNaN(+m)) || (m === '')) {
    m = prompt('Введите число!');
  }
  if (m !== null) {
    n = prompt('Введите второе число', 100);
    while ((Number.isNaN(+n)) || (n === '')) {
      n = prompt('Введите число!');
    }
  }
  
  if ((m !== null) && (n !== null)) {
  let botNumber = Math.round(Math.random() * (Math.max(m, n) - Math.min(m, n)) + Math.min(m, n));
  let attempts = Math.round((Math.max(m, n) - Math.min(m, n)) * 0.3);
  let listNumbers = [];
  let userNumber = prompt(`Угадайте число. У вас ${attempts} попыток`);
  attempts -= 1;
    while ((+userNumber !== botNumber) && (attempts !== 0)) {
      while ((Number.isNaN(+userNumber)) || (userNumber === '')) {
        userNumber = prompt('Введите число!');
      }
      if (userNumber === null) break;

      if (listNumbers.some((item) => item === userNumber)) {
        userNumber = prompt(`Это число вы уже вводили. Осталось ${attempts + 1} попыток`);
      } else {
          listNumbers.push (userNumber);
        

      if (+userNumber > botNumber) {
      userNumber = prompt(`Меньше. Осталось ${attempts} попыток`);
      attempts -= 1;
      } else if (+userNumber < botNumber) {
        userNumber = prompt(`Больше. Осталось ${attempts} попыток`);
        attempts -= 1;
      }
    }
    } 

    if (userNumber === null) {
      alert('Вы отменили игру');
    } else {
      (attempts !== 0) ? alert('Угадали!') : alert('Закончились попытки')
    }
} else alert('Вы отменили игру');
}