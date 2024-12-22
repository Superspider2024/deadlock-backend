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


//main page-'/'DONE TESTED
//about-'/app/about' DONE TESTED
//leaderboards-'/app/leaderboards' DONE TESTED
//leaderboards-'/app/leaderboards/:name' DONE TESTED
//deadlock-'/app/deadlock' DONE TESTED
//images-'/api/images' DONE TESTED
//add-'/app/add/:insta DONE TESTED
//connect an move everything to mongoDB DONE TESTED
//adding a vote '/api/vote1/:id'
//adding a vote '/api/vote0/:id'

app.get('/', (req,res)=>{
    res.send('hi!')
})


app.listen(PORT,()=>{
    console.log('Listening lol!')
})
//http://localhost:3000
