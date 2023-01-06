'use strict';
{
 let cart = {
  items: [],
  get totalPrice() {
    return this.calculateItemPrice();
  },
  count: 0,
  
  add(name, price, qty) {
    this.items.push({name: name, price: price, qty: qty ?? 1});
    this.increaseCount(qty ?? 1);
    this.calculateItemPrice();
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