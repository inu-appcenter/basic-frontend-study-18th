//함수
// function add(num1, num2) {
//   return num1 + num2;
// }

// let result = add(17, 18);
// console.log(`두 수의 더한 값은 ${result} 입니다.`);

function compare(num) {
  if (num < 0) {
    return '0보다 작습니다.';
  }
  if (num == 0) {
    return '0입니다.';
  }
  if (num >= 10) {
    return '10보다 크거나 같습니다.';
  }
  return '0과 10사이에 있는 수입니다.';
}

console.log(compare(10));
