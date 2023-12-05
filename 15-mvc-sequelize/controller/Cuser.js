// controller/Cuser.js

// ... (기존 컨트롤러 코드)

// 회원가입 요청
exports.post_signup = (User) => async (req, res) => {
    try {
        const newUser = await User.create(req.body);
        console.log('User.js post_signup >', newUser);
        res.send(newUser);
    } catch (err) {
        console.error(err);
        res.status(500).send('Internal Server Error');
    }
}

// 로그인 요청
exports.post_signin = (User) => async (req, res) => {
    try {
        const user = await User.findOne({
            where: {
                userid: req.body.userid,
                pw: req.body.pw,
            },
        });
        console.log('User.js post_signin >', user);
        if (user) res.send({ isLogin: true, userInfo: user });
        else res.send({ isLogin: false });
    } catch (err) {
        console.error(err);
        res.status(500).send('Internal Server Error');
    }
}

// 회원정보 수정 페이지 요청
exports.post_profile = (User) => async (req, res) => {
    try {
        const user = await User.findOne({
            where: {
                userid: req.body.userid,
            },
        });
        console.log('User.js post_profile >', user);
        if (user) res.render('profile', { data: user });
    } catch (err) {
        console.error(err);
        res.status(500).send('Internal Server Error');
    }
}

// 회원정보 수정 요청
exports.edit_profile = (User) => async (req, res) => {
    try {
        const [rowsAffected, [updatedUser]] = await User.update(
            { name: req.body.name, pw: req.body.pw },
            { where: { id: req.body.id }, returning: true }
        );
        console.log('User.js edit_profile >', updatedUser);
        res.send('회원정보 수정 성공!');
    } catch (err) {
        console.error(err);
        res.status(500).send('Internal Server Error');
    }
}

// 회원 탈퇴 요청
exports.delete_profile = (User) => async (req, res) => {
    try {
        const deletedRows = await User.destroy({
            where: {
                id: req.body.id,
            },
        });
        console.log('User.js delete_profile >', deletedRows);
        res.send({ deletedId: req.body.id });
    } catch (err) {
        console.error(err);
        res.status(500).send('Internal Server Error');
    }
}
