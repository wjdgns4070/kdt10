const express = require('express')
const router = express.Router()
const controller = require('../controller/Cmain')

router.get('/players', controller.getPlayers)

module.exports = router;