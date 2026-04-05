//typeof
let num = 10;
console.log(typeof num);

//숫자형
let num1 = 25;
let num2 = 10.00012;

console.log(typeof num1);
console.log(typeof num2);

let num3 = Infinity;
console.log(typeof num3);

let num4 = 100 / 0;
console.log(num4);

let num5 = NaN;
console.log(typeof num5);

let num6 = 'javascript' / 10;
console.log(num6);

//BigInt
let bigNum1 = 999999999999999999999999999999n;
let bigNum2 = BigInt('999999999999999999999999999999');
console.log(typeof bigNum1);
console.log(typeof bigNum2);

//string
let name = 'hyobin';
console.log(typeof name);

//템플릿 리터럴
let intro = `제 이름은 ${name} 입니다.`;
console.log(intro);

//boolean
// true / false

let isClicked = false;
if (isClicked) {
  console.log('클릭O');
} else {
  console.log('클릭X');
}

//Null
//존재X, 알 수 없는 값
let num7 = null;
console.log(num7 === null);

//Undefined
// 값이 할당되지 않은 상태
let num8;
console.log(typeof num8);

//묵시적 형 변환
let num9 = '15';
let num10 = 5;
console.log(num9 / num10);

//명시적 형 변환
let num11 = '15';
let num12 = 5;
console.log(parseInt(num11) + num12);
