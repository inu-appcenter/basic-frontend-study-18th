//for

let person = {
  name: '홍길동',
  age: 25,
  height: 184,
};

//let newArray = Object.keys(person);
//let newArray = Object.values(person);
let newArray = Object.entries(person);

for (i = 0; i < newArray.length; i++) {
  //let nowKey = newArray[i];
  //console.log(`key: ${nowKey}, value ${person[nowKey]}`);
  // console.log(`value ${nowKey}`);
  console.log(`key : ${newArray[i][0]}, Value : ${newArray[i][1]}`);
}

console.log(Object.keys(person));

//while
