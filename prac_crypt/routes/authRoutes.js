const express = require('express');
const router = express.Router();
const userController = require('../controller/Cuser');

// 기본주소: localhost:PORT

// GET /user
router.get('/user', userController.main);

// GET /user/signup - 회원가입 페이지
router.get('/user/signup', userController.signup);

// GET /user/signin - 로그인 페이지
router.get('/user/signin', userController.signin);

// POST /user/signup - 회원가입 요청
router.post('/user/signup', userController.post_signup(User));

// POST /user/signin - 로그인 요청
router.post('/user/signin', userController.post_signin(User));

module.exports = router;
