// for (let i = 5; i > 0; i--) {
//   console.log(i);
// }
// let i = 1;
// while (i < 6) {
//   console.log(i);
//   i++;
// }

// let arr = [1, 2, 3, 4, 5];
// for (let i = 0; i < arr.length; i++) {
//   console.log(arr[i]);
// }
let person = {
  name: '홍길동',
  age: 25,
  height: 180,
};

let newArray = Object.keys(person);

for (let i = 0; i < newArray.length; i++) {
  let nowKey = newArray[i];
  console.log(`key: ${nowKey}, value: ${person[nowKey]}`);
}

console.log(Object.keys(person));
