'use strict';
{
  const calculate = (sum, quantity, promocode) => {
    let finalSum = sum;
    if (quantity > 10) finalSum *= 0.97;
    if (finalSum > 30000) finalSum = 30000 + (finalSum - 30000) * 0.85;
    if (promocode === 'METHED') finalSum *= 0.90;
    if (promocode === 'G3H2Z1' && finalSum > 2000) finalSum -= 500;
    return finalSum;
  };

  console.log(calculate(2005, 20,'G3H2Z1'));
}