const testfunc = (callback) => {
  callback();
};
testfunc(() => {
  console.log("콜백 함수 테스트");
});
