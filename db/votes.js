const mon= require('mongoose')
const {User}= require('./create.js')

const addVote= async (id)=>{
    try{
    await User.updateOne({id},{$inc:{votes:1}})
    }catch(e){
        throw new Error("Issue adding a vote")
    }
}

const minusVote= async (id)=>{
    try{
    await User.updateOne({id},{$inc:{votes:-1}})
    }catch(e){
        throw new Error("Issue removing a vote")
    }
}

module.exports={minusVote, addVote}