// const $furitSelection = document.getElementById('furitSelection');

// $furitSelection.addEventListener('change', (event) => {
//   console.log(event.target.value);
// });

const $name = document.getElementById('name');
const $password = document.getElementById('password');

const $logInbutton = document.querySelector('button');

$logInbutton.addEventListener('click', () => {
  console.log($name.value);
});
