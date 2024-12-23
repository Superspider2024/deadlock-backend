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

    let man= await generateImageUrl(bro.insta)
    man = man.replace(/['"]/g, '');
    res.status(200).json(man)


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