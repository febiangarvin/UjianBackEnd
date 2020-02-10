const express = require('express')
const router = express.Router()
const { movcatcontroller } = require('../controllers')


router.post('/create', movcatcontroller.createmovcat)

router.get('/get', movcatcontroller.getmovcat)

router.delete('/delete/:id', movcatcontroller.deletemovcat)

module.exports = router