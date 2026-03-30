//if 조건문

let num = 30;
if (num < 20) {
  console.log('num은 20보다 작습니다.');
} else if (num > 20) {
  console.log('20이상입니다. ');
} else {
  console.log('20입니다.');
}

//switch

let fruit = 'apple';

switch (fruit) {
  case 'banana':
    console.log('바나나입니다.');
    break;
  case 'grape':
    console.log('포도입니다.');
    break;
  case 'apple':
    console.log('사과입니다.');
    break;
  default:
    console.log('다른 과일입니다.');
}
