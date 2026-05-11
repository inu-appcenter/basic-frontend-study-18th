//1. if 조건문 (if문)
// let num = 10;

// if(num>=10){
//   console.log("num은 10이상이다.");
//   console.log("조건은 참이다");
// }
// else if(num>=5){
//   console.log("num은 5이상이다.");
// }
// else{
//   console.log("조건은 거짓이다");
// }

//2. Switch문
let animal = 'cat';

switch (animal) {
  case 'cat': {
    console.log('고양이');
    break;
  }
  case 'dog': {
    console.log('강아지');
    break;
  }
  default: {
    console.log('idk');
  }
}
