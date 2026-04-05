//전역 공간

// console.log(this);

// 함수

// function func() {
//   console.log(this);
// }
// func();

//메서드 -> 객체 프로퍼티 함수

// const cafe = {
//   brand: 'starbucks',
//   menu: 'americano',
//   print: function () {
//     console.log(this);
//   },

// newCafe: {
//   brand: 'starbucks',
//   menu: 'latte',
//   print: function () {
//     console.log(this);
//   },
// },
// };

// const myCafe = cafe.print;
// myCafe();
// cafe.print();
// cafe.newCafe.print();

//생성자 -> 새로운 객체 생성/ new 키워드

// function Cafe(menu) {
//   console.log(this);
//   this.menu = menu;
// }

// let myCafe = new Cafe('latte');
// console.log(myCafe);

//콜백함수

// const cafe = {
//   brand: 'starbucks',
//   menu: '',
//   setMenu: function (menu) {
//     this.menu = menu;
//   },
// };
// function getMenu(menu, callback) {
//   callback(menu);
// }
// getMenu('hot chocolate', cafe.setMenu);

// console.log(cafe);

// function Counter() {
//   this.count = 0;
//   setInterval(() => {
//     this.count++;
//     console.log(this.count);
//   }, 2000);
// }

// const counter = new Counter();
