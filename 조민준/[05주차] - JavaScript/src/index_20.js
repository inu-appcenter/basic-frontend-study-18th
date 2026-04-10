// function Counter() {
//   this.count = 0;
//   setInterval(function () {
//     this.count++;
//     console.log(this.count);
//   }, 2000);
// }

function Counter() {
  this.count = 0;
  setInterval(() => {
    this.count++;
    console.log(this.count);
  }, 2000);
}

const counter = new Counter();
