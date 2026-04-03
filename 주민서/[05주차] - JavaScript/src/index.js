let $button = document.createElement("button"); //요소 생성
$button.id = "new-button"; //id 할당
$button.classList.add("new-button"); //class 할당
$button.textContent = "버튼"; //텍스트 할당
$button.addEventListener("click", () => {
  window.alert("클릭");
});
let $animalInfo = document.querySelector("div.animal-info");
$animalInfo.appendChild($button); //animalInfo의 자식요소에 추가
