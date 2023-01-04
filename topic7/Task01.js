'use strict';

const allStudents = ['Иванов', 'Петров', 'Сидоров', 'Кузнецов', 'Смирнов', 'Попов', 'Соколов'];
const failedStudents = ['Сидоров', 'Смирнов', 'Попов'];


let filter = (arr1, arr2) => {
  let newArr = [];
  let succeed = (key1) => {
    for (let key2 of arr2) {
        if (key1 === key2) {
          
          return false;
        }
    }
    return true;  
  }
  for (let key1 of arr1) {
    if (succeed(key1)) {
      newArr.push(key1);
  }

}
return newArr;
}

console.log(filter(allStudents, failedStudents));