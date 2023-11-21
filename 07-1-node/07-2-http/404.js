// http 모듈로 웹 서버 생성

const http = require('http')
const fs = require('fs'); //파일 관련 내장 모듈
const server = http.createServer(function(req, res){
    // req : requset 객체 (클라이언트에서 서버로 들어온 요청)
    // res : response 객체 (서버에서 클라이언트로 보내는 응답)

    // 응답 head, 본문, end 2
    // res.writeHead(200, {'content-type': 'text/html;charset=utf8'})
    // //응답 헤더
    // res.write('<h1>Hello, Node.js!</h1>')
    // res.end('<p>My first server</p>')
    //  위의 코드는 localhost:8000 접속 시 일어남

    //예외처리 -> try - catch문
    try {
    const data = fs.readFileSync('./404.html');
    res.writeHead(200, {'content-type': 'text/html;charset=utf8'})
    res.write(data);
    res.end();
} catch(error){
    // 실습: 404.html 만들어서 해당 html 파일을 응답으로 보내도록 코드를 작성 해보세요
    console.log(error)

}
});
const PORT = 3500;

// request 이벤트: 클리이언트 요청
server.on('request', function(req, res){
    
})

//connection 이벤트: 클라이언트가 접속 (클라이언트 - 서버 연결됐을 때) 했을 때 발생
server.on('connection', function(req, res){
    
})


server.listen(PORT, function() {
    
})

//1 10초 후 서버 종료
// setTimeout(function(){
//     console.log('10초뒤 서버 종료')
//     server.close();
// }, 10000)