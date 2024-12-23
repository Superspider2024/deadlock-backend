const express= require('express')
const {users}= require('../db/db.js')
const {cloudinary, generateImageUrl}= require('../cloud.js')
const {addVote, minusVote}= require('../db/votes.js')

const image =async(req,res)=>{
    try{
    const lol121='';
    const num = req.params.id
    const bruv = await users()
    const bro = bruv.find(n => n.id==num)

    const man= await generateImageUrl(bro.insta)
    res.status(200).json(man)


    }catch(e){
        res.status(500).send(e.message)
    }

}


const vote1= async(req,res)=>{
    try{
        const id = req.params.id
        await addVote(id)
        res.status(201).send("Vote made")

    }catch(e){
        res.status(500).send(e.message)
    }
}

const vote0= async(req,res)=>{
    try{
        const id = req.params.id
        await minusVote(id)
        res.status(201).send("Vote made")

    }catch(e){
        res.status(500).send(e.message)
    }

}

module.exports={vote0,vote1,image}