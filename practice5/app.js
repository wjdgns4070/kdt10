const express = require('express');
const http = require('http');
const app = express();
const path = require('path');
const server = http.createServer(app);

const socketIO = require('socket.io');
const io = socketIO(server);

// 정적 파일 제공
app.use(express.static(path.join(__dirname, 'src')));

// socket.io 리소스에 대한 미들웨어 추가
app.use('/socket.io', express.static(path.join(__dirname, 'node_modules/socket.io-client/dist')));

const PORT = process.env.PORT || 5000;

io.on('connection', (socket) => {
    socket.on("chatting",(data)=> {
        console.log(data)
        io.emit("chatting", data)
    })
});

server.listen(PORT, () => console.log(`server is running ${PORT}`));
