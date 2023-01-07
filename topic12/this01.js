'use strict';

{
  const rectangle = {
    width: 5,
    height: 5,
    set setWidth(x) {
      if (!(x === null)) {
        if (!Number.isNaN(+x) && !(x.trim().length)) {
          this.width = +x;
        } else alert('Ввели не число');
      } else console.log('Нажали Отмена');
    },
    set setHeight(y) {
      if (!(y === null)) {
        if (!Number.isNaN(+y) && !(y.trim().length)) {
          this.height = +y;
        } else alert('Ввели не число');
      } else console.log('Нажали Отмена');
    },
    get perimetr() {
      return `${(this.height + this.width) * 2}см`;
    },
    get square() {
      return `${(this.height * this.width)}см`;
    },
  };
  rectangle.setWidth = prompt('Введите ширину', 5);
  rectangle.setHeight = prompt('Введите высоту', 5);
  console.log(rectangle.perimetr, rectangle.square);
}
