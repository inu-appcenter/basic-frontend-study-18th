//전역, 지역

let globalNum = 100;

function testFunc() {
  let innerNum = 50;
  console.log(globalNum);
  console.log(innerNum);
}
testFunc();
console.log(globalNum);

let global = '전역 변수';

function outerFunction() {
  let outer = '외부 함수의 변수';

  function innerFunction() {
    let inner = '내부 함수의 변수';
    console.log(global);
    console.log(outer);
    console.log(inner);
  }

  innerFunction();
  console.log(global);
  console.log(outer);
  console.log(inner);
}

outerFunction();
