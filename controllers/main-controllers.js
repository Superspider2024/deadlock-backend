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
    const users3= await users();
    const users12=users3.sort((a,b)=> b.votes - a.votes)
    const users2= users12.slice(0,10);
    res.status(200).json(users2)
}
const leader1 = async(req,res)=>{
    const name1 = req.params.name
    const all2= await users()
    const found = all2.find(n => n.insta==name1)
    res.status(200).json(found)
    
    
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