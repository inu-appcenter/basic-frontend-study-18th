const add = function (a, b) {
  return a + b;
};

console.log(add(10, 20));

const add2 = (a, b) => a + b;
console.log(add2(3, 4));

//콜백 함수

const printResult = (a, b) => {
  let result = a + b;
  console.log('결과: ' + result);
};

const doubleResult = (result) => {
  console.log('결과에 2를 곱한 값: ' + result * 2);
};
printResult(5, 3);
doubleResult();
