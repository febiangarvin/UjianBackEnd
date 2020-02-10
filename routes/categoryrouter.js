const express = require('express')
const router = express.Router()
const { categorycontroller } = require('../controllers')


router.post('/create', categorycontroller.createcategory)

router.get('/get', categorycontroller.getcategory)

router.put('/edit/:id', categorycontroller.editcategory)

router.delete('/delete/:id', categorycontroller.deletecategory)

module.exports = router