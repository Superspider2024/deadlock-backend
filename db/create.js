const mon= require('mongoose')
const {users}= require('./db.js')

const userSchema= mon.Schema({
    insta:String,
    id:Number,
    votes:Number,
    gender:String
})


const User = mon.model('User', userSchema)

const newCreate= async (insta,id,votes,gender)=>{
    try{
        const newUser= await User.create({
            insta,
            id,
            votes,
            gender
        });
        console.log("well done")
        return newUser

        
    }catch(e){
        console.log("Error in creation", e)
    }
}

const double=(users)=>{
    for(let i=0;i<users.length;i++){
        newCreate(users[i].insta,users[i].id,users[i].votes,users[i].gender)
        console.log(`done with ${i}`)
    }
}

module.exports={User, newCreate, double}