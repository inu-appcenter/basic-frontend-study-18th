let $TraceInfo = document.querySelector('div.Trace-Info');
let locationElement = document.querySelector('div#location');

console.log($TraceInfo);
console.log(locationElement);

let $type = document.createElement('div');
$type.className = 'Trace-Info';
$type.id = 'who-with';
let $typeText = document.createTextNode('누구와 함께');

$TraceInfo.appendChild($type);
$type.appendChild($typeText);
console.log($type);
console.log($typeText);

let $button = document.createElement('button');
$button.id = 'new-button';
$button.classList.add('new-button');
$button.textContent = '버튼';
$button.addEventListener('click', () => {
  window.alert('클릭!');
});

$TraceInfo.appendChild($button);
