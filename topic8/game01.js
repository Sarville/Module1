'use strict';

{
  let botNumber = Math.round(Math.random() * 9 + 1);

  let userNumber = prompt('Угадай число');
    do {
      while ((Number.isNaN(+userNumber)) || (userNumber === '')) {
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