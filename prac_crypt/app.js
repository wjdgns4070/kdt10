// app.js 또는 index.js

const express = require('express');
const app = express();
const PORT = 8000;
const db = require('./models'); // models 폴더 내의 index.js에서 생성한 db 객체 가져오기

app.set('view engine', 'ejs');
app.set('views', './views');
app.use('/static', express.static(__dirname + '/static'));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// [라우터 분리]
const userRouter = require('./routes/user');
app.use('/user', userRouter); // localhost:PORT/user 기본 경로



// 데이터베이스 연결 후 서버 시작
db.sequelize.sync().then(() => {
    app.listen(PORT, () => {
        console.log(`http://localhost:${PORT}/user`);
    });
});
