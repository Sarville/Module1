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

  console.log('productName:', typeof productName);
  console.log('productCategory:', typeof productCategory);
  console.log('productCost:', typeof productCost);
  console.log('productQuantity:', typeof productQuantity);
  console.log(`На складе ${productQuantity} единицы товара "${productName}" на сумму ${productCost * productQuantity} тугриков`);
}