//배열, 리터럴
let arr1 = new Array(1, 2, 3);
let arr2 = new Array(3);
console.log(arr1);
console.log(arr2);

let arr3 = [1, 2, 3];
let arr4 = [3];
console.log(arr3);
console.log(arr4);

let arr5 = [
  { name: '홍길동' },
  1,
  'array',
  function () {
    console.log('hello world!');
  },
  null,
  undefined,
];
console.log(arr5);

let array = [1, 'hello', null];
console.log(array[0]);
console.log(array[1]);
console.log(array[2]);

let fruits = ['apple', 'orange', 'peach'];
fruits.push('grape');
fruits.unshift('lemon');
console.log(fruits);

let animal = ['cat', 'dog', 'hamster'];
animal = ['cat', 'rabbit', 'hamster'];
animal[2] = 'parrot';
console.log(animal);

let colors = ['purple', 'skyblue', 'green', 'yellow', 'orange'];
// colors.pop();
// colors.shift();
colors.splice(1, 3);
console.log(colors);
console.log(colors.length);
