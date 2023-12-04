// controllers/userController.js
const express = require('express');
const router = express.Router();
const userModel = require('../models/userModel');

// 회원가입 페이지 렌더링
router.get('/register', (req, res) => {
  res.render('register');
});

// 회원가입 처리
router.post('/register', (req, res) => {
  const { username, email, password } = req.body;

  // 모델에서 회원가입 처리
  userModel.registerUser(username, email, password, (result) => {
    if (result) {
      res.render('success', { username });
    } else {
      res.send('회원가입 실패');
    }
  });
});

module.exports = router;