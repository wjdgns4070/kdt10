const express = require('express');
const cookieParser = require('cookie-parser');
const app = express();
const PORT = 8000;

app.set('views', './views')
app.set('view engine', 'ejs');

app.use('/static', express.static(__dirname + '/static'));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// TODO: cookie parser 미들웨어 등록
app.use(cookieParser());

const cookieConfig = {
  httpOnly: true,
  maxAge: 60 * 1000, // 1분
  signed: true,
}

app.get('/', (req, res) => {
  // 모달 체크박스 체크시 -> GET / ; undefined
  // 모달 체크박스 미체크시 -> GET / ; hide
  const popupValue = req.cookies.popup || '';

  // TODO: index _release.ejs render할 때 두 번째 인자로 popup key 로 요청의 쿠키값 보내기
  res.render('index _release', { popup: popupValue });
});

app.post('/setcookie', (req, res) => {
  // TODO: 쿠키 생성
  res.cookie('popup', 'hide', cookieConfig);
  // 쿠키 이름: 'popup', 쿠키 값: 'hide'
  res.send('쿠키 설정 성공!!');
});

app.listen(PORT, () => {
  console.log(`http://localhost:${PORT}`);
});
