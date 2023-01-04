'use strict';
{
const allCashbox = [4500, 3210, 650, 1250, 7830, 990, 13900, 370];

let getAverageValue = (arr) => {
  let sum = 0;
  for (let check of arr) {
    sum += check;
  }
  return sum / arr.length;
}

console.log(getAverageValue(allCashbox));
}