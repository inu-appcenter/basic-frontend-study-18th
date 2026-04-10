function add(num1, num2) {
  console.log(num1 + num2);
}

add(10, 15);

function add2(num1, num2) {
  return num1 + num2;
  console.log('함수 호출');
}

let result = add2(10, 15);
console.log(`두 숫자를 더한 결과는 ${result} 입니다.`);

//Early return pattern
function compare(num3) {
  if (num3 === 0) {
    return 'num3의 값이 0입니다.';
  }
  if (num3 < 0) {
    return 'num3의 값이 0보다 작습니다.';
  }
  if (num3 >= 10) {
    return 'num3의 값이 10보다 크거나 같습니다.';
  }
  return 'num3의 값이 0보다 크고 10보다 작습니다.';
}

console.log(compare(15));

function print() {
  console.log(1);
  console.log(2);
}

console.log(3);
print();
console.log(4);
