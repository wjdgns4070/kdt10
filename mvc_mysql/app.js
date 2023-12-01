const express = require('express');
const path = require('path'); // path 모듈 추가
const app = express();
const PORT = 8000;

app.set('view engine', 'ejs');
// 상대 경로를 사용하여 뷰 폴더의 경로 설정
app.set('views', path.join(__dirname, 'views'));

app.use('/static', express.static(__dirname + '/static'));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

const indexRouter = require('./routes');
app.use('/', indexRouter);

// 404 라우트 위치 수정
app.get('*', (req, res) => {
  res.render('404');
});

app.listen(PORT, () => {
  console.log(`http://localhost:${PORT}`);
});
