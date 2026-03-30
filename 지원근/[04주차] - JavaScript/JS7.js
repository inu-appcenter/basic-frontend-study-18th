// //concat - 두개의 배열을 하나로 합쳐주는 내장 함수
// const compare = (a, b) => {
//   if (a > b) return -1;
//   else if (a < b) return 1;
//   else return 0;
// };

// let colors1 = ['blue', 'red'];
// let colors2 = ['black', 'green'];
// let colors3 = colors1.concat(colors2);

// console.log(colors3.sort());
// console.log(colors3.sort(compare));

// console.log(colors3);
// //join 배열을 합쳐 문자열로 만들어줌, 배열 사이에 구분문자를 넣을 수있음.
// console.log(colors3.join('.'));

//정수형 배열의 정렬
// const compare = (a, b) => {
//   return b - a;
// };

// let numbers = [1, 3, 123, 244, 663];

// let sum = numbers.reduce((acc, cur, idx) => {
//   console.log(acc, cur, idx);
//   return acc + cur;
// }, 100);
// console.log(numbers.sort());
// console.log(numbers.sort(compare));
let a = Array.isArray([1, 2, 3, 4]);
let b = Array.isArray({ id: 2, name: 'name' });
let c = Array.isArray('bbcx');
let d = Array.isArray(30);

console.log(a, b, c, d);
