'use strict';


const arrayGenerate = (arr) => {
  arr.push(Math.round(Math.random() * 10));
  if ([...arr].reduce((a, b) => a + b, 0) < 50) {
    return arrayGenerate(arr);
  } else return arr;
};

console.log(arrayGenerate([]));

