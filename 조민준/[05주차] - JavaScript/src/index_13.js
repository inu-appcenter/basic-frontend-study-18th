const delay = (ms) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve('3초가 지났습니다.');
    }, ms);
  });
};

const start = async () => {
  try {
    let result = await delay(3000);
    console.log(result);
  } catch (error) {
    console.log(error);
  }
};

start();
