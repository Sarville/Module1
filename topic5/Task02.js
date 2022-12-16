'use strict';

{
  const input = prompt('Введите строку', 'привеТ Мир!');

  const format = (str) => {
    let strLower = str.toLowerCase();
    return strLower[0].toUpperCase() + strLower.slice(1);
  }

  console.log(format(input));
}
