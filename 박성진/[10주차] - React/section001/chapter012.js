// function task(){
//   setTimeout(() => {
//     console.log("hi");
//   }, 3000);
// }

// task();

// function add(a, b) {
//   setTimeout(() => {
//     const sum = a + b;
//     console.log(sum);
//     useCallback(sum);
//   }, 3000);
// }

// add(1, 2, (value) => {
//   console.log(value);
// });

//음식을 주문
function orderFood(callback) {
  setTimeout(() => {
    const food = 'chicken';
    callback(food);
  }, 3000);
}

function cooldownFood(food, callback) {
  setTimeout(() => {
    const cooldownedFood = `식은 ${food}`;
    callback(cooldownedFood);
  }, 2000);
}

function freezeFood(food, callback) {
  setTimeout(() => {
    const freezedFood = `냉동된 ${food}`;
    callback(freezedFood);
  }, 1500);
}

orderFood((food) => {
  console.log(food);

  cooldownFood(food, (cooldownedFood) => {
    console.log(cooldownedFood);
  });
});
