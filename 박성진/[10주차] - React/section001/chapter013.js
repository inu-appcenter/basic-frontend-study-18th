const promise = new Promise((resolve, reject) => {
  //비동기 작업 실행 함수
  //executor

  setTimeout(() => {
    const num = 10;
    console.log('hi');
    console.log('hi');
    reject('why');
  }, 2000);
});

setTimeout(() => {
  console.log(promise);
}, 3000);

//then 메서드
//-> 그 후에
promise.then((value) => {
  console.log(value);
});

promise.catch((error) => {
  console.log(error);
});
