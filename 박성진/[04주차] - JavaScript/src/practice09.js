//생성자 함수, 리터럴

let obj = new Object();
console.log(obj);

//key value

let book = {
  title: '자바스크립트 첫걸음',
  Auther: 'James Justin',
  category: '자바스크립트',
  year: undefined,
  color: function () {
    console.log(orange);
  },
};

let car = {
  name: 'wer',
  model: 'spark',
  color: 'black',
};

console.log(car.name);
console.log(car.model);
console.log(car['color']);

const getValue = (key) => {
  console.log(car[key]);
};

getValue('color');

let cat = {
  age: 2,
};
cat.name = 'sdf';
cat['color'] = 'white';

console.log(cat);
