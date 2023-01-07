'use strict';
{
 let cart = {
  items: [],
  totalPrice: 0,
  count: 0,
  
  getTotalPrice() {return this.totalPrice},

  add(name, price, qty = 1) {
    this.items.push({name, price, qty});
    this.increaseCount(qty);
    this.calculateItemPrice();
  },

  increaseCount(q) {this.count += q},

  calculateItemPrice() {
    this.totalPrice = 0;
    this.items.forEach((item) => {this.totalPrice += item.price * item.qty});
  },

  clear() {
    this.items = [];
    this.totalPrice = 0;
    this.count = 0;
  },

  print() {
    console.log(JSON.stringify(this.items));
    console.log(this.getTotalPrice());
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