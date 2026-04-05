// let response = fetch('https://jsonplaceholder.typicode.com/users');
// .then((res)=>console.log(res))
// .catch((err) => console.log(err));
// console.log(response);

const getData = async () => {
  try {
    let response = await fetch('https://jsonplaceholder.typicode.com/users');
    let data = await response.json();
  } catch (err) {
    console.log(err);
  }
};
getData();
