function Cafe(menu) {
  console.log(this);
  this.menu = menu;
}
let myCafe = new Cafe("latte");
console.log(myCafe);
