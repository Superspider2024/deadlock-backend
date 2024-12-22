const express= require('express')
const {image,vote0,vote1} = require('../controllers/image-controllers.js')
const router= express.Router()

//image

router.get('/images/:id', image)
router.get('/vote1/:id', vote1)
router.get('/vote0/:id', vote0)
module.exports=router

