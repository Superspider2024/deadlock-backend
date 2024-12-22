const express= require('express')
const {deadlock,about, leader, leader1, add} = require('../controllers/main-controllers.js')
const router= express.Router()

//main routes

router.get('/about', about)
router.get('/deadlock', deadlock)
router.get('/leaderboards', leader)
router.get('/leaderboards/:name', leader1)
router.post('/add/:insta', add)

module.exports=router

