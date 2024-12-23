const express = require('express');
const app = express();
const main= require('./routers/main-router.js')
const image= require('./routers/image-router.js')
const {connect, users}= require('./db/db.js')
const {User, newCreate, double}= require('./db/create.js')
require("dotenv").config()
const cors = require('cors');
const PORT= process.env.PORT;


connect()

app.use(cors())
app.use(express.json())
app.use('/app', main)
app.use('/api', image)


//main page-'/'DONE TESTED MADE
//about-'/app/about' DONE TESTED MADE
//leaderboards-'/app/leaderboards' DONE TESTED
//leaderboards-'/app/leaderboards/:name' DONE TESTED
//deadlock-'/app/deadlock' DONE TESTED
//images-'/api/images' DONE TESTED
//add-'/app/add/:insta DONE TESTED MADE
//connect an move everything to mongoDB DONE TESTED MADE
//adding a vote '/api/vote' DONE TESTED 

app.get('/', async(req,res)=>{
    res.status(200).json(await users())
})


app.listen(PORT,()=>{
    console.log('Listening lol!')
})
//http://localhost:3000
