//전역 공간
console.log(this);

//함수
function func() {
  console.log(this);
}

func();

// 매서드 -> 객체 프로퍼티 함수
// const cafe = {
//   brand: '이디야',
//   menu: '아메리카노',

//   newCafe: {
//     brand: '이디야',
//     menu: '라떼',
//     print: function () {
//       console.log(this);
//     },
//   },
// };

// cafe.newCafe.print();
// const myCafe = cafe.newCafe.print;
// myCafe();

//생성자 -> 새로운 객체 생성 / new 키워드
// function Cafe(menu) {
//   console.log(this);
//   this.menu = menu;
// }
// let myCafe = new Cafe('latte');
// console.log(myCafe);

//콜백함수
const cafe = {
  brand: '이디야',
  menu: '',
  setMenu: function (menu) {
    this.menu = menu;
  },
};

function getMenu(menu, callback) {
  callback(menu);
}

getMenu('핫초코', cafe.setMenu);

console.log(cafe);
