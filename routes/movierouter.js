const express = require('express')
const router = express.Router()
const { moviecontroller } = require('../controllers')


router.post('/create', moviecontroller.createmovie)

router.get('/get', moviecontroller.getmovie)

router.put('/edit/:id', moviecontroller.editmovie)

router.delete('/delete/:id', moviecontroller.deletemovie)

module.exports = router