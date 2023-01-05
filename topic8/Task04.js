'use strict';

{
  const year1 = 2033;
  const year2 = 1035;

  let bissextile = (y1, y2) => {
    let result = [];
    for (let i=Math.min(y1, y2); i < Math.max(y1, y2); i++) {
      //високосный делится на 4 и на 400, но не на 100
      if (!(i % 4) && (i % 100) || !(i % 400)) result.push(i); 
    }
  return result;
  }

  console.log(bissextile(year1, year2));
}