// const toy = {
//   type: 'bear',
//   price: 15000,
// };

// const redtoy = {
//   type: 'bear',
//   price: 15000,
//   color: 'red',
// };
// const bluetoy = {
//   type: 'bear',
//   price: 15000,
//   color: 'blue',
// };
//위의 코드들 처럼 겹치는 객체가 있다면 spread로 묶어줄 수 있다
const toy = {
  type: 'bear',
  price: 15000,
};

const redtoy = {
  ...toy,
  color: 'red',
};
const bluetoy = {
  ...toy,
  color: 'blue',
};

console.log(toy);
console.log(redtoy);
console.log(bluetoy);

const { type, ...rest } = redtoy;

console.log(type);
console.log(rest);
