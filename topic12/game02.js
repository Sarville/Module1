'use strict';

{
  let m; let n;
  m = prompt('Введите первое число', 20);
  if (m !== null) {
    while ((Number.isNaN(+m)) || !(m.trim().length)) {
      m = prompt('Введите число!');
      if (m === null) break;
    }
  }
  if (m !== null) {
    n = prompt('Введите второе число', 100);
    if (n !== null) {
      while ((Number.isNaN(+n)) || !(n.trim().length) || (n === m)) {
        if (n === m) {
          n = prompt('Введите число, отличное от первого!');
        } else {
          n = prompt('Введите число!');
        }
        if (n === null) break;
      }
    }
  }

  if ((m !== null) && (n !== null)) {
    // eslint-disable-next-line max-len
    const botNumber = Math.round(Math.random() * (Math.max(m, n) - Math.min(m, n)) + Math.min(m, n));
    const attempts = Math.ceil((Math.max(m, n) - Math.min(m, n)) * 0.3);
    const listNumbers = [];

    const repeat = (tries, message) => {
      let userNumber = prompt(message);
      if (userNumber === null) {
        alert('Вы отменили игру');
        return;
      }
      while ((Number.isNaN(+userNumber)) || !(userNumber.trim().length)) {
        userNumber = prompt('Введите число!');
        if (userNumber === null) {
          alert('Вы отменили игру');
          return;
        }
      }
      if ((+userNumber === botNumber)) {
        alert('Угадали');
        return;
      }
      if ((+userNumber !== botNumber) && (tries === 1)) {
        alert('Закончились попытки');
        return;
      }
      if (listNumbers.some((item) => item === userNumber)) {
        repeat(tries, `Это число вы уже вводили. Осталось ${tries} попыток`);
      } else {
        listNumbers.push(userNumber);

        if ((+userNumber > botNumber) && tries > 1) {
          repeat(tries -= 1, `Меньше. Осталось ${tries} попыток`);
        } else if ((+userNumber < botNumber) && tries > 1) {
          repeat(tries -= 1, `Больше. Осталось ${tries} попыток`);
        }
      }
    };

    repeat(attempts, `Угадайте число. У вас ${attempts} попыток`);
  } else alert('Вы отменили игру');
}
