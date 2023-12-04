const express = require('express');
const bodyParser = require('body-parser');
const app = express();

// 정적 파일 서비스
app.use(express.static('public'));

// EJS 템플릿 엔진 설정
app.set('view engine', 'ejs');

// body-parser 설정
app.use(bodyParser.urlencoded({ extended: true }));

// 라우팅 설정
const userController = require('./controllers/userController');
app.use('/', userController);

// 서버 시작
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`서버가 http://localhost:${PORT} 에서 실행 중입니다.`);
});
