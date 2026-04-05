// const delay = (ms) => {
//   return new Promise((resolve) => {
//     setTimeout(() => {
//       resolve('3초가 지났습니다.');
//     }, ms);
//   });
// };

// const start = async () => {
//   try {
//     let result = await delay(3000);
//     console.log(result);
//   } catch (error) {
//     console.log(error);
//   }
// };

// start();

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
// const start = async () => {
//   try {
//     let resultA = await workA();
//     let resultB = await workB();
//     let resultC = await workC();
//     console.log(resultA);
//     console.log(resultB);
//     console.log(resultC);
//   } catch (err) {
//     console.log(err);
//   }
// };
// start();

const start = async () => {
  try {
    let results = await Promise.all([workA(), workB(), workC()]);
    results.forEach((res) => console.log(res));
  } catch (err) {
    console.log(err);
  }
};
start();
