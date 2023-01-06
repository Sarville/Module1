'use strict';

{
  const lengthOfArray = 30;
  const m = 50;
  const n = -100;
  const p = 'odd';

  let randomize = (length, m1, n1, param) => {
    let randomArray =[];
    let randomNumber = () => Math.round(Math.random() * (Math.max(m1, n1) - Math.min(m1, n1)) + Math.min(m1, n1));
    for (let i = 0; i < length; i++) {
      let item = randomNumber();
      if (param === 'even') {
        while (item % 2 !== 0) {
          item = randomNumber();
        }
      } else if (param === 'odd') {
        while (item % 2 === 0) {
          item = randomNumber();
        }
      }
      randomArray.push(item);
  }
  return randomArray;
  }

console.log(randomize(lengthOfArray, m, n, p));

}