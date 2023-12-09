const User = require('../model/User')

exports.main = (req,res) => {
    res.render('index')
} 

exports.get_signup = (req,res) => {
    res.render('signup')
} 

exports.get_signin = (req,res) => {
    res.render('signin')
} 

//회원가입 요청
exports.post_signup = (req,res) => {
    //컨트롤러 (요청) -> 라우터 -> 컨트롤러 -> 모델 -> DB -> 모델 -> 컨트롤러 -> 뷰(응답)
    console.log('post_signup >', req.body);

    //로그인 요청
    User.post_signup(req.body, (result) => {
        res.send(result)
    })
}

exports.post_signin = (req,res)=> {
    console.log(req.body)
    res.send()
}
