const loginInfoModule = require('../model/practice2');

exports.login = (req, res) => {
    res.render('login');
}

exports.userData = (req, res) => {
    const Id = loginInfoModule.loginInfo().userId;
    const Pw = loginInfoModule.loginInfo().userPw;
    console.log(Id)
    console.log(req.body.userId)
    

    if (Id === req.body.userId && req.body.userPw === Pw) {
        // 로그인 성공
        res.send({userInfo: req.body,isSuccess:true})
    } else {
        // 로그인 실패
        res.send({ isSuccess: false });
        
    }
};
