// exports.getVisitors = () => {
//     return[
//         {id:1, name: '홍길동', Comment: '내가왔다'},
//         {id:2, name: '이찬혁', Comment: '으라차차'},

//     ]
// }

// -------------mysql 연결 -------
const mysql = require('mysql2')
// Db연결
const conn = mysql.createConnection({
    host: 'localHost',
    user:'user',
    password:'1234',
    database:'kdt'
})

exports.getVisitors = (cb) => {
    conn.query(`SELECT * FROM visitor`, (err,rows) =>{
        if(err){ throw err}
        console.log('visitor js>',rows)
        cb(rows)
    })
}


exports.postVisitor = (data, cb) => {
    console.log('postVisitor > ',data);
    const sql = 'INSERT INTO visior (name,comment) VALUES (data.name,data.comment)'
    const values = [data.name, data.comment]
    conn.query(sql, values, (err,rows)=> {
        if(err) throw err
        console.log('visitor.js>', rows);
    })
    }

//  * prepared statements
//  * SQL 쿼리이ㅔ서 사용자 입력을 안전하게 처리하고 SQL 인젝션 공격을 방직하기 위한 방법
//  * 입력 데이터를 직접 문자열로 쿼리에 삽입하는 대신,
//  * 플레이스홀더 사용하여 쿼리작성
//  * my sql 에서는 ? 사용



