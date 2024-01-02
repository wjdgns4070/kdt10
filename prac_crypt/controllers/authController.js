const bcrypt = require('bcrypt');
const User = require('../models/user');

const authController = {
  signup: async (req, res) => {
    try {
      const { username, password } = req.body;
      const hashedPassword = await bcrypt.hash(password, 10);
      const user = await User.create({ username, password: hashedPassword });
      res.status(201).json({ message: 'User registered successfully', user });
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Error registering user' });
    }
  },
  signin: async (req, res) => {
    const { username, password } = req.body;

    try {
      // 사용자가 데이터베이스에 있는지 확인
      const user = await User.findOne({ where: { username } });

      if (!user) {
        return res.status(404).json({ message: 'User not found' });
      }

      // 비밀번호 검증
      const isValidPassword = await bcrypt.compare(password, user.password);

      if (!isValidPassword) {
        return res.status(401).json({ message: 'Invalid password' });
      }

      // 로그인 성공
      res.status(200).json({ message: 'Login successful', user });
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Error during login' });
    }
  },
};

module.exports = authController;