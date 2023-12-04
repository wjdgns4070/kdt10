const exp = require("constants")

exports.main = (req,res) => {
    res.render('index')
}

exports.get_signup = (req,res) => {
    res.render('signup')
}


exports.get_signin = (req,res) => {
    res.render('signin')
}

//회원 가입 요총

exports.post_signup = (res,req) => {
    // 뷰(요청)-> 라우터-> 컨트롤러 -> 모델 -> DB -> 모델 -> 컽트롤러 -> 뷰(응답)
    console.log(req.body)

    User.post_signup(req.body, (result) => {
        res.send(result)
    })

}

exports.post_signin = (req,res) => {
    console.log(req.body)
    User.post_signin()
    res.send()
    
}