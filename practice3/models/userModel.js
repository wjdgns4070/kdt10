// models/userModel.js
const mysql = require('mysql');

// MySQL 연결 설정
const connection = mysql.createConnection({
  host: 'localhost',
  user: '사용자명',
  password: '비밀번호',
  database: '데이터베이스명'
});

// 회원가입 처리
function registerUser(username, email, password, callback) {
  const query = 'INSERT INTO users (username, email, password) VALUES (?, ?, ?)';
  connection.query(query, [username, email, password], (error, results) => {
    if (error) {
      console.error('회원가입 실패:', error);
      callback(false);
    } else {
      console.log('회원가입 성공:', results);
      callback(true);
    }
  });
}

module.exports = {
  registerUser
};