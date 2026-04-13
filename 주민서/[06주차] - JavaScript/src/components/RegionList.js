export default function RegionList({ $app, initialState, handleRegion }) {
  this.state = initialState;
  this.$target = document.createElement("div");
  this.$target.className = "region-list";

  this.handleRegion = handleRegion;
  $app.appendChild(this.$target);

  this.template = () => {
    const regionList = [
      "🚀 All",
      "🌏 Asia",
      "🕌 Middle-East",
      "🇪🇺 Europe",
      "💃 Latin-America",
      "🐘 Africa",
      "🏈 North-America",
      "🏄 Oceania",
    ];
    let temp = ``;
    regionList.forEach((elm) => {
      let regionId = elm.split(" ")[1]; // 공백을 기준으로 elm에 배분
      temp += `<div id=${regionId}>${elm}</div>`; //foreach를 사용해 리전리스트들을 하나씩 템프라는 변수에 더하기
    });
    return temp;
  };

  this.render = () => {
    this.$target.innerHTML = this.template();
    let $currentRegion;
    if (this.state) {
      $currentRegion = document.getElementById(this.state); //선택된 요소의 배경을 다른 지역들과 차별점을 두기 위해
      $currentRegion && ($currentRegion.className = "clicked"); //css 스타일 넣기
    } else {
      document.getElementById("All").className = "clicked";
    }

    const $regionList = this.$target.querySelectorAll("div");
    $regionList.forEach((elm) => {
      elm.addEventListener("click", () => {
        //click이 발생할때 핸들리전 실행
        this.handleRegion(elm.id);
      });
    });
  };

  this.setState = (newState) => {
    this.state = newState;
    this.render();
  };

  this.render();
}
