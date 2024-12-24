const express= require('express')
const {users}= require('../db/db.js')
const {cloudinary, generateImageUrl}= require('./cloud.js')
const {lolVote}= require('../db/votes.js')

const image =async(req,res)=>{
    try{
    const lol121='';
    const num = req.params.id
    const bruv = await users()
    const bro = bruv.find(n => n.id==num)

    const man= await generateImageUrl(bro.insta)
    res.status(200).send(man)


    }catch(e){
        res.status(500).send(e.message)
    }

}


const vote= async(req,res)=>{
    try{
        const win = req.body.win;
        const loss= req.body.loss;

        await lolVote(win,loss)

        res.status(201).json("Added successfully")

    }catch(e){
        res.status(500).send(e.message)
    }
}


module.exports={vote,image}