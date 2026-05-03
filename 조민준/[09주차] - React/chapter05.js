//Spread 연산자
let arr1 = [1, 2, 3];
let arr2 = [4, ...arr1, 5, 6];
console.log(arr2);

let obj1 = {
  a: 1,
  b: 2,
};
let obj2 = {
  ...obj1,
  c: 3,
  d: 4,
};
console.log(obj2);

//Rest 매개변수
function funcB(one, ...rest) {
  console.log(one);
  console.log(rest);
}

funcB(...arr1);
