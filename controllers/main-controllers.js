const express= require('express')
const {users} = require('../db/db.js')
const fs = require('fs').promises;
const {User1,newCreate1}= require('../db/add.js')
const {User} = require('../db/create.js')

const about =async(req,res)=>{
    res.send('ABOUT!!!')
}

const deadlock =async(req,res)=>{
    const users1= await users()
    res.status(200).send(users1)
}

const leader = async(req,res)=>{
    try{
    const users3= await users();
    const users12=users3.sort((a,b)=> b.votes - a.votes)
    const users2= users12.slice(0,10);
    res.status(200).json(users2)
    }catch(e){
        res.status(500).json(e.message)
    }}
const leader1 = async(req,res)=>{
    try{
    const name1 = req.params.name
    const all2= await users()
    const users121=all2.sort((a,b)=> b.votes - a.votes)
    const found = users121.find(n => n.insta==name1)
    const found1 = users121.findIndex(n => n.insta==name1)
    if(!found){
        throw new Error("This user cannot be found")  //Previously at this line was where I had bug "Lauen" which caused a complete DDOS to all users in the world severity is 10.0 CRITICAL has been fixed and patched in this commit, thank goodness
    }
    res.status(200).json({
        insta:found,
        rank:found1
    })
    }catch(e){
        res.status(500).json(e.message)
    }
    
}

const add = async(req,res)=>{
    const blah = req.params.insta
    try{
        const bro22 =await newCreate1(blah)
        if(bro22){
            res.status(201).json(bro22);
        }else{
            throw new Error("Even I don't know the issue")
        }
    }catch(e){
        res.status(400).send(`${e.message}`)
    }}



module.exports={deadlock,about,leader, leader1, add}