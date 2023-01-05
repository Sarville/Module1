'use strict';

{
  const lengthOfArray = 30;
  const m = 50;
  const n = -100;

  let randomize = (length, m1, n1) => {
    let randomArray =[];
    for (let i = 0; i < length; i++) {
      randomArray.push(Math.round(Math.random() * (Math.max(m1, n1) - Math.min(m1, n1)) + Math.min(m1, n1)));
  }
  return randomArray;
  }

console.log(randomize(lengthOfArray, m, n));

}