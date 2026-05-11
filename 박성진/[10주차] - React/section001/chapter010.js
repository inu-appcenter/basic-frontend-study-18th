//1. Date 객체를 생성하는 방법
let date1 = new Date(); //생성자
console.log(date1);

let date2 = new Date('1002.02.12');

//2. 타임 스태프
//특정 시간이 기준 시각(UTC)으로부터 몇 ms가 지났는지를 의미하는 숫자값
let ts1 = date1.getTime();
let date4 = new Date(ts1);

//3. 시간 요소들을 추출하는 방법
let year = date1.getFullYear();
let month = date1.getMonth(); //월은 0부터 나옴
let date = date1.getDate();

let hour = date1.getHours();
let minute = date1.getMinutes();
let seconds = date1.getSeconds();

// console.log(year, month, date, hour, minute, seconds);

//4. 시간 수정하기
date1.setFullYear(2026);
date1.setMonth(5);
date1.setDate(10);
date1.setHours(23);
date1.setMinutes(34);
date1.setSeconds(32);

//5. 시간을 여러 포맷으로 출력하기
console.log(date1.toDateString()); //시, 분, 초 제외 현재 날짜
console.log(date1.toLocaleString()); //우리나라 현지화된 포맷
