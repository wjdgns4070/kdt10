const userInfo1 = require('../model/User');

exports.userInfo = (req, res) => {
    res.render('user', { userInfo: userInfo1.userInfo() });
};