// 라우터 연결
const express = require('express');
const router = express.Router();
const controller = require('../controller/Cuser')

router.get('/user', controller.userInfo)
module.exports = router;

