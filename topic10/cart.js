'use strict';
{
 let cart = {
  items: [],
  get totalPrice() {
    return this.calculateItemPrice();
  },
  count: 0,
  
  add(name, price, qty = 1) {
    this.items.push({name, price, qty});
    this.increaseCount(qty);
  },

  increaseCount(q) {this.count += q},

  calculateItemPrice() {
    let totalPrice = 0;
    this.items.forEach((item) => {totalPrice += item.price * item.qty});
    return totalPrice;
  },

  clear() {
    this.items = [];
    this.totalPrice = 0;
    this.count = 0;
  },

  print() {
    console.log(JSON.stringify(this.items));
    console.log(this.totalPrice);
  },
 }
 cart.add('apple', 100);
 cart.add('coca-cola', 200, 5);
 cart.add('tea', 50, 1);

 cart.print();

//  проверка других методов

//  cart.increaseCount(10);
//  console.log(cart.count);
//  cart.clear();
//  console.log(cart);

}