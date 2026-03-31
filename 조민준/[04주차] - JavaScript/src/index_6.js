// 전역, 지역
let globalNum = 100;
function testFunc() {
  let innerNum = 50;
  console.log(globalNum);
  console.log(innerNum);
}
testFunc();
console.log(globalNum);
// console.log(innerNum);

//함수, 블록
function print() {
  for (var i = 0; i < 10; i++) {
    console.log(i);
  }
  console.log(i);
}
print();

function print1() {
  for (let i = 0; i < 10; i++) {
    console.log(i);
  }
  // console.log(i);
}
print1();

// let num = 10;
// let num = 100;
// console.log(num);

var num = 10;
var num = 100;
console.log(num);

//함수 호이스팅
connectStrings('study', 'hoisting');
function connectStrings(str1, str2) {
  console.log(str1 + str2);
}

//변수 호이스팅
// console.log(num1);
// let num1 = 123;
console.log(num2);
var num2 = 123;

//화살표 함수
const add = function (c, d) {
  return c + d;
};
// const add = (a, b) => a + b;
// console.log(add(10, 20));

//콜백 함수
const calculate = (a, b, callback) => {
  let result = a + b;
  callback(result);
};
const printResult = (result) => {
  console.log('결과: ' + result);
};
const doubleResult = (result) => {
  console.log('결과에 2를 곱한 값: ' + result * 2);
};
calculate(5, 3, printResult);
calculate(5, 3, doubleResult);
