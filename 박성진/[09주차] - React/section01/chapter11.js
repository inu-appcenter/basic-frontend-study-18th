//함수
// function greeting() {
//   console.log("hi");
// }

// console.log("before");
// greeting();
// console.log("after");

function getArea(width, height) {
  let area = width * height;

  function another() {
    //중첩함수
    console.log('another');
  }

  console.log(area);
  return area;
}

//호이스팅
//->'끌어올리다' 라는 뜻
getArea(10, 20);
getArea(30, 20);

another();
let area1 = getArea(10, 20);
console.log(area1);
