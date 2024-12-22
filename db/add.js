const mon= require('mongoose')
const {User}= require('./create.js')

const user1Schema= mon.Schema({
    insta:String,
    sentAt:{type: Date, default: Date.now}
})


const User1 = mon.model('newUser', user1Schema)

const newCreate1= async (insta)=>{
    try{
        const hmm= await User.findOne({insta})
        if(hmm){
            return `This user is already in the web app: ${insta}`}


        const hmm1= await User1.findOne({insta})
        if(hmm1){
            return `This user has already been requested: ${insta}`}

        const newUser1 = await User1.create({
            insta
        });          
        if(newUser1){
            return "Your request has been sent successfully"
        }else{
            return null
        }
        
    }catch(e){
        throw new Error(e.message)
    }
}

module.exports={User1, newCreate1}