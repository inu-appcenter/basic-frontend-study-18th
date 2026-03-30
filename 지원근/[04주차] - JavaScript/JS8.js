//let colors = ['blue', 'pink', 'green'];

let colors = {
  c1: 'blue',
  c2: 'red',
  c3: 'green',
};
//let [c1, c2, c3] = colors;
let { c1, c2, c3, c4, c5 } = colors;
//선언 분리 할당 초기값을 지정해줄 수 있음
//[c1, c2, c3, c4, c5 = 'white'] = ['blue', 'pink', 'green', 'black'];

console.log(c1);
console.log(c2);
console.log(c3);
console.log(c4);
console.log(c5);
