// const delay = (ms) => {
//   return new Promise((resolve) => {
//     setTimeout(() => {
//       resolve('3초가 지났습니다.');
//     }, ms);
//   });
// };

const workA = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve('workA');
    }, 5000);
  });
};
const workB = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve('workB');
    }, 3000);
  });
};
const workC = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve('workC');
    }, 10000);
  });
};
const start = async () => {
  try {
    let resultA = await workA();
    let resultB = await workB();
    let resultC = await workC();
    console.log(resultA);
    console.log(resultB);
    console.log(resultC);
  } catch (error) {
    console.log(error);
  }
};

start();
