'use strict';
const costRub = 73;
const costEur = 1.2;
const price = prompt('Введите стоимость в евро:', 1000);

const convert = (amount) => {
  return costEur * amount * costRub;
}

console.log('Стоимость покупки в рублях:', convert(price));