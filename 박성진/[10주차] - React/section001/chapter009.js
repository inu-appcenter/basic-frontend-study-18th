//5가지 배열 변형 메서드
//1. filter
//기존 배열에서 조건을 만족하는 요소들만 필터링하여 새로운 배열로 반환

let arr1 = [
  { name: 'lee', hobby: 'tennis' },
  { name: 'kim', hobby: 'tennis' },
  { name: 'wg', hobby: 'weewrwer' },
];

const tennisPeople = arr1.filter((item) => item.hobby === 'tennis');

console.log(tennisPeople);

//2. map
//배열의 모든 요소를 순회하면서 각각 콜백함수를 실행하고 그 결과값들을
//모아서 새로운 배열로 반환
let arr2 = [1, 2, 3];
const mapResult1 = arr2.map((item, idx, arr) => {
  return item * 2;
});

console.log(mapResult1);

let names = arr1.map((item) => item.name);
console.log(names);

//3. sort
//배열을 사전순으로 정렬하는 메서드
//숫자로 된 배열은 정렬 안됨 -> 함수를 통해 설정해야 함
let arr3 = ['b', 'a', 'c'];
arr3.sort();

console.log(arr3);

//4. tosorted
//정렬된 새로운 배열을 반환하는 메서드
let arr5 = ['c', 'a', 'b'];
const sorted = arr5.toSorted();

console.log(arr5);
console.log(sorted);

//5. join
//배열의 모든 요소를 하나의 문자열로 합쳐서 반환하는 그런 메서드
let arr6 = ['hi', 'im', 'sdfsdfsdf'];
const joined = arr6.join('');
console.log(joined);
