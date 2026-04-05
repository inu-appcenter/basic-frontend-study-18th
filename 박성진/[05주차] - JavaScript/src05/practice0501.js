// const workA = () => {
//   console.log('workA');
// };
// const workB = () => {
//   console.log('workB');
// };
// const workC = () => {
//   console.log('workC');
// };

// workA();
// workB();
// workC();

// setTimeout(() => {
//   console.log('비동기');
//   console.log('종료');
// }, 3000);

// console.log('종료');

// const work = (callback) => {
//   setTimeout(() => {
//     console.log('비동기');
//     callback();
//   }, 3000);
// };

// work(() => {
//   console.log('종료');
// });

const workA = () => {
  setTimeout(() => {
    console.log('workA');
  }, 5000);
};
const workB = () => {
  setTimeout(() => {
    console.log('workB');
  }, 3000);
};
const workC = () => {
  setTimeout(() => {
    console.log('workC');
  }, 10000);
};
const workD = () => {
  console.log('workD');
};

workA();
workB();
workC();
workD();
