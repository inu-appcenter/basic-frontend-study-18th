// getElementById
let $color = document.getElementById('color');
console.log($color);

let $animalInfo = document.querySelector('div.animal-info');
let ageElement = document.querySelector('div#age');
console.log($animalInfo);
console.log(ageElement);

// querySelectorAll, getElementsByClassName, getElementsByTagName
// let $infoItem = document.querySelectorAll('div.info-item');
// console.log($infoItem);
// let $infoItem = document.getElementsByClassName('info-item');
// console.log($infoItem);
let $infoItem = document.getElementsByTagName('div');
console.log($infoItem);
