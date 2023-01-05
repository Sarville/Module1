'use strict';

{
  let botNumber = Math.round(Math.random() * 9 + 1);

  let userNumber = prompt('Угадай число');
  if (userNumber === null) {
    alert('Вы отменили игру');
  } else {
    do {
      while ((Number.isNaN(+userNumber)) || !(userNumber.trim().length)) {
        userNumber = prompt('Введите число!');
      }
      if (userNumber === null) break;
      if (+userNumber > botNumber) {
        userNumber = prompt('Меньше');
      } else if (+userNumber < botNumber) {
        userNumber = prompt('Больше');
      }
    } while (+userNumber !== botNumber);

    (userNumber !== null) ? alert('Угадали!') : alert('Вы отменили игру');
  }
}