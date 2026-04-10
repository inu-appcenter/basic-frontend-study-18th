// const executor = (resolve, reject) => {
//   setTimeout(() => {
//     resolve('성공');
//     reject('실패');
//   }, 3000);
// };

// const promise = new Promise(executor);
// promise
//   .then((result) => {
//     console.log(result);
//   })
//   .catch((error) => {
//     console.log(error);
//   });

// const workA = (value, callback) => {
//   setTimeout(() => {
//     callback(value + 5);
//   }, 5000);
// };
// const workB = (value, callback) => {
//   setTimeout(() => {
//     callback(value - 3);
//   }, 3000);
// };
// const workC = (value, callback) => {
//   setTimeout(() => {
//     callback(value + 10);
//   }, 10000);
// };

// workA(10, (resA) => {
//   console.log(`workA : ${resA}`);
//   workB(resA, (resB) => {
//     console.log(`workB : ${resB}`);
//     workC(resB, (resC) => {
//       console.log(`workC : ${resC}`);
//     });
//   });
// });

const workA = (value) => {
  const promise = new Promise((resolve) => {
    setTimeout(() => {
      resolve(value + 5);
    }, 5000);
  });
  return promise;
};
const workB = (value) => {
  const promise = new Promise((resolve) => {
    setTimeout(() => {
      resolve(value - 3);
    }, 3000);
  });
  return promise;
};
const workC = (value) => {
  const promise = new Promise((resolve) => {
    setTimeout(() => {
      resolve(value + 10);
    }, 10000);
  });
  return promise;
};

workA(10)
  .then((resA) => {
    console.log(`workA : ${resA}`);
    return workB(resA);
  })
  .then((resB) => {
    console.log(`workB : ${resB}`);
    return workC(resB);
  })
  .then((resC) => {
    console.log(`workC : ${resC}`);
  });

// workA(10).then((resA) => {
//   console.log(`workA : ${resA}`);
//   workB(resA).then((resB) => {
//     console.log(`workB : ${resB}`);
//     workC(resB).then((resC) => {
//       console.log(`workC : ${resC}`);
//     });
//   });
// });
