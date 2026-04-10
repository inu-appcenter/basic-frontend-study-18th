//산술 연산자
let num1 = 10;
let num2 = 5;
console.log(num1 + num2);
console.log(num1 - num2);
console.log(num1 * num2);
console.log(num1 / num2);
console.log(num1 % 2);
console.log(num2 % 2);

//증감 연산자
console.log(num1++);
console.log(num1);
console.log(++num1);

console.log(num2--);
console.log(num2);
console.log(--num2);

//대입 연산자
let num3 = 10;
num3 = num3 + 5;
console.log(num3);

//복합 대입 연산자
let num4 = 10;
num4 += 5;
console.log(num3);

//비교 연산자
//일치
let num5 = 10;
let num6 = '10';
console.log(num5 === num6);
console.log(num5 == num6);
//불일치
console.log(num5 !== num6);
console.log(num5 != num6);
//대소비교
let a = 10;
let b = 20;
let c = 10;
console.log(a < b);
console.log(a > b);
console.log(b >= c);
console.log(a > c);

//연결 연산자
let price = 10000;
console.log('가격: ' + price + '원');

//논리 연산자
// true flase
//NOT 연산자 : false -> true, true -> false
let isClicked = true;
let isOpened = false;
console.log(!isClicked);
console.log(!isOpened);
//OR 연산자
console.log(true || true);
console.log(true || false);
console.log(false || true);
console.log(false || false);
//AND 연산자
console.log(true && true);
console.log(true && false);
console.log(false && true);
console.log(false && false);

//null 병합 연산자
// A ?? B
let num7;
let num8 = 10;
console.log(num7 ?? 20);
console.log(num8 ?? 20);

//삼항 연산자
// A ? B : C
let num9 = 100;
let result = num9 % 2 === 0 ? '짝수' : '홀수';
console.log(result);
