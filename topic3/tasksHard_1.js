{
  const salary = +prompt('Введите доход', 25000);

  // первый способ  
  // if (salary < 15000) {
  //   console.log('Налог на доход: ', salary * 0.13);
  // } else if (salary >= 15000 && salary < 50000) {
  //   console.log('Налог на доход: ', salary * 0.20);
  // } else if (salary >= 50000) {
  //   console.log('Налог на доход: ', salary * 0.30);
  // }

  //второй способ
  const tax = (salary < 15000) ? 0.13 : (salary >= 15000 && salary < 50000) ? 0.20 : 0.30;
  console.log('Налог на доход: ', salary * tax);
}