// 생성자 함수, 리터럴
let obj = {};
console.log(obj);

let obj1 = new Object();
console.log(obj1);

//key : value
let book = {
  title: '자바스크립트 첫걸음',
  author: '김효빈',
  category: '자바스크립트',
  year: undefined,
  color: function () {
    console.log('orange');
  },
};

let car = {
  name: '붕붕',
  model: 'morning',
  color: 'black',
};
console.log(car.name);
console.log(car['color']);

const getValue = (key) => {
  console.log(car[key]);
};
getValue('model');

const cat = {
  age: 2,
  name: '야옹이',
  color: 'white',
};
cat.name = '옹이';
cat['color'] = 'yellow';
console.log(cat);

delete cat.color;
delete cat['age'];
console.log(cat);

const person = {
  name: '홍길동',
  age: 23,
  print: function () {
    console.log(`제 이름은 ${this.name}입니다`);
  },
};
person.print();
person['print']();
