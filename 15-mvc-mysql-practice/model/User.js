const mysql =  require('mysql2')

const conn = mysql.createConnection({
    host: 'localhost',
    user: 'user',
    password: '1234',
    database:'kdt'
})

exports.post_signup = (data,cb) => {
    const sql = 'INSERT INTO user (userid, name, pw) VALUES (?, ?, ?)';
    const values = [data.userid, data.naem, data.pw]

    conn.query(sql, values, (err,rows) => {
        if(err) throw err;

        console.log('post_signup>', rows)
    })
}

exports.post_signin = (req,res) => {
    console.log(req.body)
    res.send()
}

exports.post_signup = (req,res) => {
    console.log(req.body)
    res.send()
}