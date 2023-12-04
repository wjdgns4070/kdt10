const express = require('express')
const router = express.Router();
const controller = require('../controller/Cuser')

router.get('/', controller.main)

module.exports = router

router.get('/', controller.main)

router.get('/signup',controller.main)

router.get('/signin',controller.main)




module.exports = router