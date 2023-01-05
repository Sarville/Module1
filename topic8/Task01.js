'use strict';

{
  const lengthOfArray = 30;

  let randomize = (length) => {
    let randomArray =[];
    for (let i = 0; i < length; i++) {
      randomArray.push(Math.round(Math.random() * 99 + 1));
  }
  return randomArray;
  }

console.log(randomize(lengthOfArray));
}