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
  const productName = prompt('Наименование товара');
  const productCategory = prompt('Категория товара');
  const productCost = Number(prompt('Цена товара'));
  const productQuantity = prompt('Количество товара');

  console.log(typeof productName);
  console.log(typeof productCategory);
  console.log(typeof productCost);
  console.log(typeof productQuantity);
  console.log(`На складе ${productQuantity} единицы товара "${productName}" на сумму 
  ${productCost * productQuantity} тугриков`);
}