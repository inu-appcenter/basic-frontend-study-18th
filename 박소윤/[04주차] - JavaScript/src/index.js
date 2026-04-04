//산술 연산자

let num1 = 10;
let num2 = 5;
console.log(num1 + num2);
console.log(num1 - num2);
console.log(num1 * num2);
console.log(num1 / num2);

console.log(num1 % num2); //나머지 연산자//

//증감 연산자

console.log(num1++); //전위
console.log(++num1); //후위

//대입연산자 -> 변수에 특정 값을 대입

let num = 10;
num += 5;

console.log(num);

//비교 연산자
let num1 = 10;
let num2 = '10';

//일치
console.log(num1 === num2);
console.log(num1 == num2);

//불일치
console.log(num1 !== num2);
console.log(num1 != num2);

//대소비교 연산자
let a = 10;
let b = 20;
let c = 10;
console.log(a < b);
console.log(a > b);
console.log(b >= c);
console.log(a > c);

//연결연산자
let price = 10000;
console.log('가격 : ' + price + '원');

//논리연산자 (boolean)
let isClicked = true;
let isOpened = false;
console.log(isClicked);
console.log(isOpened);

console.log(true || true);
console.log(true || false);
console.log(false || true);
console.log(true || false);

console.log(true && true);
console.log(true && false);
console.log(false && true);
console.log(true && false);

// if문
let num = 5;
if (num < 1) {
  console.log('num은 10보다 작습니다.');
}

let num = 50;

if (num < 10){
  'num은 10보다 작습니다.);
  else{
    console.log('nuber 10보다 작음);
  }
}

let num = 50;
if (num<0) {
  console.log('num은 10보다 작습니다.');
} else if (num > 10) {
  console.log('num은 10보다 큽니다.');
} else {
  console.log('num은 10입니다.');
}

// switch case

let fruit = 'apple';

switch(fruit) {
  case 'banana':
    console.log('바나나');
      break;
  case 'orange':
    console.log('오렌지');
      break;    
  default:
    console.log('다른 과일');    
}

//함수
let num1 = 10;
let num2 = 15;
let sum = num1 + num2;

console.log(sum);

let num3 = 1;
let num4 = 5;
let sum2 = num3+ num4;

console.log(sum2);

function add(){
  console.log(num1 + num2);
}
// 함수 선언 방법
// function 함수이름(매게변수){함수 실행 시}

add(10, 15) //함수 호출,, add 함수의 인수로 10과 15

function add(){
  return(num1 + num2);
}

let result = add(10, 15);

console.log('두 숫자를 더한 결과는 ${result}입니다.')

add(10, 15)