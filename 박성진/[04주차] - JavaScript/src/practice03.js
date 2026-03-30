// if문

let num = 50;

if (num < 10) {
  console.log('num은 10보다 작다');
} else if (num > 10) {
  console.log('num은 10보다 크다');
} else {
  console.log('num은 10이다');
}

//switch case

let fruit = 'pineapple';

switch (fruit) {
  case 'banana':
    console.log('바나나');
  case 'orange':
    console.log('오렌지');
  case 'apple':
    console.log('사과');
    break;
  default:
    console.log('다른 과일');
}
