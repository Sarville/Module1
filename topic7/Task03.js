'use strict';

const names= ['Noah', 'Liam', 'Mason', 'Jacob', 'Robot', 'William', 'Ethan', 'Michael', 'Alexander'];

let addPrefix = (arr, prefix) => {
  let result = [];
  for (let key of arr) {
    result.push(`${prefix} ${key}`);
  }
  return result;
}

console.log(addPrefix(names, 'Mr'));