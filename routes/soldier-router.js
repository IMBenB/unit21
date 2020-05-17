const express = require('express')

const {soldierCreate} = require('../controller/soldierCreate')
const {getSoldiers} = require('../controller/getSoldiers.js')
const router = express.Router()

router.post('/soldierCreate', soldierCreate)
router.post('/getSoldiers', getSoldiers)

module.exports = router
