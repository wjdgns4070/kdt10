const express = require('express')
const router = express.Router()
const controller = require('../controller/practice2')

router.get('/',controller.login)
router.post('/',controller.userData)

module.exports = router;
