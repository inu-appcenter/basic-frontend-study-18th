//숫자형

let num1 = 125;
let num2 = 10.213;

console.log(typeof num1);
console.log(typeof num2);

let num = Infinity;
console.log(typeof num);

let number = NaN;
console.log(typeof number);

let num3 = 'javascript' / 10;
console.log(typeof num3);

//BigInt
let num4 = 999999999999999999999999999999999999999999999999n;
let bigNum1 = BigInt('999999999999999999999999999999999999999');

console.log(typeof num4);
console.log(typeof bigNum1);

//string

let name = 'james';
console.log(typeof name);

let name1 = 'Tom';
let intro = `제 이름은 ${name1} 입니다.`;

console.log(intro);

//boolean
// true / false

let isClicked = false;

//Null
//존재 X, 알 수 없는 값

let num5 = null;
console.log(num === num5);

//Undefined
//값이 할당되지 않은 상태

let ber = undefined;
console.log(typeof ber);
