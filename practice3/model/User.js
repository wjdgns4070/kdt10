const mysql = require('mysql2')

const conn = mysql.createConnection({
    host:'localhost',
    user:'user',
    password: '1234',
    database: 'kdt'
});

exports.post_signup = (data, cb) => {
    //data: req.body
    //cb : () => {}

    const sql = 'INSERT INTO user (userid, name, pw) VALUES (?, ?, ?)'
    const values = [data.userid, data.name, data.pw]

    conn.query(sql, values, (err, rows) => {
        if(err) throw err;
        console.log('User.js post_signup >', rows)
        cb(rows)
    })
}