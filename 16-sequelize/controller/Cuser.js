// [Before]
// const User = require('../model/User');

// [After]
const models = require('../models/index');
const User = models.User;

exports.main = (req, res) => {
    res.render('index');
}

exports.get_signup = (req, res) => {
    res.render('signup');
}

exports.get_signin = (req, res) => {
    res.render('signin');
}

// 회원가입 요청
exports.post_signup = (req, res) => {
    console.log('post_signup >', req.body);

    // [Before]
    // User.post_signup(req.body, (result) => {
    //     // result: rows
    //     res.send(result);
    // })

    // [After]
    // INSERT INTO user (userid, name, pw) VALUES ( ?, ?, ?)
    User.create({
        userid: req.body.userid,
        name: req.body.name,
        pw: req.body.pw
    }).then((result) => {
        console.log('create >', result);
        res.send(result); // { id: 1, userid: 'test', name: 'test', pw: 'test' }
    })

}

// 로그인 요청
exports.post_signin = (req, res) => {
    console.log(req.body);

    // [Before]
    // User.post_signin(req.body, (result) => {
    //     // result: rows [{}]
    //     if (result.length > 0) res.send({ isLogin: true, userInfo: result[0] });
    //     else res.send({ isLogin: false });
    // })

    // [After]
    // SELECT * FROM user WHERE userid = ? and pw = ?
    User.findOne({
        raw: true,
        where: {
            userid: req.body.userid,
            pw: req.body.pw
        }
    }).then((result) => {
        console.log('findOne >', result);

        // result
        // id,pw 일치: {}
        // 불일치: null

        if (result) {
            res.send({ isLogin: true, userInfo: result });
        } else {
            res.send({ isLogin: false });
        }
    })
}

// 회원정보 수정 페이지 요청
exports.post_profile = (req, res) => {
    console.log(req.body); // {userid: ~}

    // [Before]
    // User.post_profile(req.body.userid, (result) => {
    //     // result: rows [{}]

    //     if (result.length > 0) res.render('profile', { data: result[0] })
    // })

    // [After]
    // SELECT * FROM user WHERE userid = ? LIMIT 1
    User.findOne({
        where: { userid: req.body.userid }
    }).then((result) => {
        console.log('findOne >', result); // { id: 1, userid: 'test', name: 'test', pw: 'test' }
        if (result) {
            res.render('profile', { data: result })
        }
    })
}

// 회원정보 수정 요청
exports.edit_profile = (req, res) => {
    console.log(req.body);

    // [Before]
    // User.edit_profile(req.body, (result) => {
    //     res.send('회원정보 수정 성공!')
    // })

    // [After]
    // UPDATE user SET name = ?, pw = ? where id = ?
    User.update(
        {
            name: req.body.name,
            pw: req.body.pw
        },
        {
            where: { id: req.body.id }
        }).then((result) => {
            res.send('회원정보 수정 성공!')
        })
}

// 회원 탈퇴 요청
exports.delete_profile = (req, res) => {
    console.log(req.body); // {id: ~}

    // [Before]
    // User.delete_profile(req.body.id, (result) => {
    //     res.send({ deletedId: req.body.id });
    // })

    // [After]
    // DELETE FROM user WHERE id = ?
    User.destroy({
        where: { id: req.body.id }
    }).then((result) => {
        res.send({ deletedId: req.body.id });
    })
}