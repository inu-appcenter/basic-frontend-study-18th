let num1 = 10;
let num2 = 15;
let sum = num1 + num2;

console.log(sum);

let num3 = 1;
let num4 = 5;
let sum2 = num3 + num4;

console.log(sum2);

function add(num5, num6) {
  return num5 + num6;
  console.log('함수 호출');
}

let result = add(10, 15);

console.log(`두 숫자를 더한 결과는 ${result} 입니다.`);

//Early return pattern

function compare(num) {
  if (num === 0) {
  } else if (num < 0) {
  } else {
    if (num >= 10) {
      console.log('값이 10보다 크거나 같다');
    } else {
      console.log('값이 0보다 크고 10보다 작다');
    }
  }
}
compare(15);

function print() {
  console.log(1);
  console.log(2);
}

console.log(3);
print();
console.log(4);
