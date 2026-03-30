// let GlobalScope = 100; //전역 스코프

// function testfuc() {
//   let LocalScope = 200; //지역 스코프
//   console.log(GlobalScope);
// }
// testfuc();
// console.log(GlobalScope);

//함수 호이스팅

// connectString('함수', '호이스팅');
// function connectString(str1, str2) {
//   console.log(str1 + str2);
// }

//변수 호이스팅
// let/const 실행결과 -error
// console.log(num);
// let num = 10;

//var 호이스팅이 되나, var num2라는 변수만 호이스팅이 되고 지정된 값은 그대로 있기에
//실행 결과는 undefined가 된다.
// console.log(num2);
// var num2 = 190;

//콜백함수

// const calculate = (a, b, callback) => {
//   let result = a + b;
//   callback(result);
// };

// const printResult = (result) => {
//   console.log('결과 : ' + result);
// };
// const doubleResult = (result) => {
//   console.log('결과에 2를 곱한 값: ' + result * 2);
// };
// calculate(5, 10, printResult);
// calculate(5, 10, doubleResult);

//생성자 함수, 리터럴

//생성자 함수
// let obj = new Object();
// //리터럴
// let obj1 = {};
// console.log(obj);

//key value

let car = {
  name: 'GV80',
  species: 'SUV',
  color: 'grey',
};

// //점표기법
// console.log(car.name);
// console.log(car.species);
// console.log(car.color);
// //괄호표기법
// console.log(car['name']);
// console.log(car['species']);
// console.log(car['color']);
//GetValue

const getValue = (key) => {
  console.log(car[key]);
};

getValue('name');

//추가 및 수정 프로퍼티 동일한 작동방식
car.year = '2026';
car['price'] = '97,970,000₩';

console.log(car);

//삭제 프로퍼티
delete car.year;
delete car['color'];

console.log(car);
