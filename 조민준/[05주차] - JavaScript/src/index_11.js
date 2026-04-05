const workA = () => {
  setTimeout(() => {
    console.log('wokrA');
  }, 5000);
};
const workB = () => {
  setTimeout(() => {
    console.log('wokrB');
  }, 3000);
};
const workC = () => {
  setTimeout(() => {
    console.log('wokrC');
  }, 10000);
};
const wokrD = () => {
  console.log('workD');
};

workA();
workB();
workC();
wokrD();
