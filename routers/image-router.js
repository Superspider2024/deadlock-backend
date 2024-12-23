const express= require('express')
const {image,vote} = require('../controllers/image-controllers.js')
const router= express.Router()

//image and votes

router.get('/images/:id', image)
router.post('/vote', vote)
module.exports=router

