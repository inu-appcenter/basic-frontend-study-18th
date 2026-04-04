// const executor = (reslove, reject) => {
//   setTimeout(() => {
//     reslove('성공');
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
    console.log(`work A : ${resA}`);
    return workB(resA);
  })
  .then((resB) => {
    console.log(`work B : ${resB}`);
    return workC(resB);
  })
  .then((resC) => {
    console.log(`work C : ${resC}`);
  });
