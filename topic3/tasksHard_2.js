{
  const tax1 = 15000 * 0.13;
  const tax2 = tax1 + 35000 * 0.20;
  const salary = +prompt('Введите доход', 25000);


  if (salary <= 15000) {
    console.log('Налог на доход до 15000: ', salary * 0.13);
  } else if (salary > 15000 && salary <= 50000) {
    console.log('Налог на доход от 15000 до 50000 ', tax1 + (salary - 15000) * 0.20);
  } else if (salary > 50000) {
    console.log('Налог на доход более 50000: ', tax2 + (salary - 50000) * 0.30);
  }

}