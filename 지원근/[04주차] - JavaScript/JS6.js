let arr = [1, 2, 3, 4, 5, 6, 7];

//arr.forEach((elm, idx) => console.log(`${idx}번째 요소는 ${elm}입니다.`));

let newArray = arr.map((elm) => {
  return elm * 10;
});
//console.log(newArray);

let colors = ['red', 'blue', 'green', 'orange'];
//at method
console.log(colors.at(1));
//include 포함하고있는지 확인하는 매소드 출력값이 True와 False
//includes('찾고자 하는 요소', 몇번째부터 찾을 건지)
console.log(colors.includes('green', 3));
console.log(colors.includes('green', 2));
//indexOf 배열 안에 찾고자 하는 값이 있는지 있다면 위치를 반환하고 없다면 -1 반환
console.log(colors.indexOf('purple'));
console.log(colors.indexOf('orange'));
//찾으려는 요소의 값이 객체요소라면 findindex함수를 사용해야됨
let starbucks = [
  { id: 1, starbucks: '아이스아메리카노' },
  { id: 2, starbucks: '카페라떼' },
  { id: 3, starbucks: '아이스티' },
  { id: 4, starbucks: '말차라떼' },
  { id: 5, starbucks: '레몬에이드' },
];

//findindex 는 찾아낸 인덱스의 값을 반환하지만 find는 그 객체 정보를 반환함
let idx = starbucks.findIndex((elm) => elm.starbucks === '카페라떼');
let idx1 = starbucks.find((elm) => elm.starbucks === '카페라떼');
console.log(idx);
console.log(idx1);

//filter 내장함수는 조건을 만족하는 모든 함수를 반환함
let filterArray = starbucks.filter((elm, idx, array) => elm.id > 0);
//console.log(filterArray);
//slice(begin, end) 배열의 begin번째부터 end-1번째까지에 해당하는 요소들 출력

let sliceArray = starbucks.slice(1, 3);
console.log(sliceArray);
