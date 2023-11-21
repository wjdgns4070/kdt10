const express = require('express');
const app = express();
const PORT = 8000;

// express에 사용할 템플릿 엔진 종류를 ejs로 등록
app.set('view engine', 'ejs');
//템플릿 엔진 파일(.ejs)을 저장할 위치 등록
app.set('views', './views');

// static 미들웨어 등록 (정적 파일 로드 ex. scc, js)
// static 라는 실제 폴더를 staic 이름으로 접근하겠다
app.use('/static',express(__dirname + '/static'))
// console.log(__dirname); //~~/07-3-express

// app.get(경로, 해당 경로로 들어왔을 때 실행할 함수)
// // // localhost:8000/ 경로로 접속했을 때
// app.get('/kdt',function(req, res){
//     //res.send(응답 내용)
//     res.send('<h1>Hello kdt!</h1>')
// })

// app.get('/',function(req, res){
//     //res.send(응답내용)
//     res.send('<h1>Hello kdt!</h1>')
// })

app.get('/',function(req, res){
    //res.render res.파일을 렌더해줌
    res.render("indes")
})

app.listen(PORT, function(){
    console.log(`server listening on ${PORT}`)
})