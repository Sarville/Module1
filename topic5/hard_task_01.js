'use strict';
{
  const a = 5555;
  const b = 1100;
  const nod = (a, b) => {
    if (b > a) return nod(b, a);
    if (!b) return a;
    return nod(b, a % b);
  }
  console.log(`НОД ${a} и ${b} равен `, nod(a, b));
}