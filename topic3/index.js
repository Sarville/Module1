'use strict';
{
  const productName = 'Чай';
  const productCategory = 'Бакалея';
  const productCost = 100;
  const productQuantity = 50;
  
  console.log(productName);
  console.log(`Общая стоимость: ${productCost * productQuantity}р.`);
}

{
  const productName = 'Печенье';
  const productCategory = 'Бакалея';
  const productCost = 55;
  const productQuantity = 150;
  
  console.log(productName);
  console.log(`Общая стоимость: ${productCost * productQuantity}р.`);
}

{
  const productName = prompt('Наименование товара', 'Сахар');
  const productCategory = prompt('Категория товара', 'Бакалея');
  const productCost = +prompt('Цена товара', 90);
  const productQuantity = +prompt('Количество товара', 10);

  if (!Number.isNaN(productCost) && !Number.isNaN(productQuantity)) {
   console.log(`На складе ${productQuantity} шт товара "${productName}" на сумму ${productCost * productQuantity} тугриков`);
}  else
console.log('Вы ввели некорректные данные');
  }
