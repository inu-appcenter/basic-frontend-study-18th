// 산술 연산자

let num1 = 10;
let num2 = 5;

console.log(num1 + num2);
console.log(num1 - num2);
console.log(num1 * num2);
console.log(num1 / num2);
console.log(num1 % num2);
console.log(num1++);
console.log(++num1);
console.log(num2--);
console.log(--num2);

//대입 연산자

let num = 10;
num = num + 5;

console.log(num);

//비교 연산자
//일치

let num3 = 10;
let num4 = '10';

console.log(num3 === num4);
console.log(num3 == num4);

//불일치

console.log(num3 !== num4);
console.log(num3 != num4);

//대소비교

let a = 10;
let b = 20;
let c = 10;

console.log(a < b);
console.log(a > b);
console.log(a >= c);
console.log(a <= c);

//연결 연산자

let price = 10000;
console.log('가격: ' + price + '원');

//논리 연산자
//true false
//NOT OR AND

let isClicked = true;
let isOpened = false;

console.log(!isClicked);
console.log(!isOpened);

console.log(true || true);
console.log(true || false);
console.log(false || true);
console.log(false || false);

console.log(true && true);
console.log(true && false);
console.log(false && true);
console.log(false && false);

//null 병합 연산자

let num5;
let num6 = 10;

console.log(num5 ?? 20);
console.log(num6 ?? 20);

//상황 연산자
//A ? B : C

let num7 = 100;
let result = num7 % 2 === 0 ? '짝수' : '홀수';

console.log(result);
