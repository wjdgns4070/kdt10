const express = require('express');
const app = express();
const PORT = 8000;

// Sequelize 모델 가져오기
const db = require('./models');

app.set('view engine', 'ejs');
app.set('views', './views');
app.use('/static', express.static(__dirname + '/static'));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// 라우터 분리
const userRouter = require('./routes/user');
app.use('/user', userRouter);

// 404 에러 처리 라우트
app.get('*', (req, res) => {
    res.render('404');
});

// Sequelize와 연동하여 서버 실행
db.sequelize.sync({ force: false }).then(() => {
    app.listen(PORT, () => {
        console.log(`Server is running at http://localhost:${PORT}`);
    });
});
