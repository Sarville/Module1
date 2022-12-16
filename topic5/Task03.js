'use strict';
{
  const input = prompt('Введите строку', 'Привет, Мир');

  const reverse = (str) => {
    return str.split('').reverse().join('');
  }

  console.log(reverse(input));
}