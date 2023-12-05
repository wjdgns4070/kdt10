const express = require('express')
const router = express.Router()
const controller = require('../controller/Cuser')


//GET /user - 메인ㅍㅋ처    
router.get('/', controller.main);
router.get('/signup', controller.main);
router.get('/signin', controller.main);



module.exports = router;








































































