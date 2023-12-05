const express = require('express');
const router = express.Router();
const userController = require('../controller/Cuser');

// 기본주소: localhost:PORT

// GET /user
router.get('/user', userController.main);

// GET /user/signup - 회원가입 페이지
router.get('/user/signup', userController.get_signup);

// GET /user/signin - 로그인 페이지
router.get('/user/signin', userController.get_signin);

// POST /user/signup - 회원가입 요청
router.post('/user/signup', userController.post_signup(User));

// POST /user/signin - 로그인 요청
router.post('/user/signin', userController.post_signin(User));

// POST /user/profile - 회원정보 수정 페이지 요청
router.post('/user/profile', userController.post_profile(User));

// PATCH /user/profile/edit - 회원정보 수정 요청
router.patch('/user/profile', userController.edit_profile(User));

// DELETE /user/profile/delete - 회원 탈퇴 요청
router.delete('/user/profile', userController.delete_profile(User));

module.exports = router;
