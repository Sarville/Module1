'use strict';
{
const allCashbox = [
  [12, 4500], 
  [7, 3210], 
  [4, 650], 
  [3, 1250], 
  [9, 7830], 
  [1, 990], 
  [6, 13900], 
  [1, 370]
];

let getAveragePriceGoods = (arr) => {
  let sum = 0;
  for (let key of arr) {
    sum += key[1] / key [0];
  }
  return sum / arr.length;
}

console.log(getAveragePriceGoods(allCashbox));
}