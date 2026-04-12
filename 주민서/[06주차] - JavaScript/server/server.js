const express = require("express"); //express 모듈 가져오기
const path = require("path"); //경로 쉽게작성하기 위해 path 모듈 가져오기
const app = express(); //express 모듈 실행
const PORT = 3000;

app.use(express.static(path.join(__dirname, ".."))); //server.js 기준으로 한 단계 위 폴더(/project)에 있는 파일들을 제공,이 코드 덕분에 서버가 접근 가능

app.get("/*", (req, res) => {
  res.sendFile(path.join(__dirname, "..", "index.html"));
}); // 어떠한 경로에 요청이 오던지 항상 동일한 html파일 반환

app.listen(PORT, () => {
  //서버 상시 대기
  console.log(`START SERVER`); // 서버 시작시 출력
});
