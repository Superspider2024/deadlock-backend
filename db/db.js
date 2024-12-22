const mon= require('mongoose')
require("dotenv").config()
const {User} = require('./create.js')

const connect=()=>{
    mon.connect(process.env.db).then(()=>{
        console.log("Connected")
    }).catch((e)=>{
        console.log("Not connected,", e)
    })
}

const users = async ()=>{
    try{
    const all1 = await User.find();
    return all1
}catch(e){
    console.log(e)
}}



module.exports={users,connect}

