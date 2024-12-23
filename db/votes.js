const mon= require('mongoose')
const {User}= require('./create.js')
const {users}= require('../db/db.js')

const lolVote= async (win,loss)=>{
    try{   
        const all = await users();
        const K = 40;

        const win1 =all.find(e=> e.insta==win);
        const loss1 =all.find(e=> e.insta==loss);

        const sWin=1;
        const sLoss=0;

        const eWin1= (1/(1+ Math.pow(10, (loss1.votes-win1.votes)/400)))
        const eLoss1= (1/(1+ Math.pow(10,(win1.votes-loss1.votes)/400)))

        const newVotesWin = Math.round(win1.votes + K*(sWin-eWin1))
        const newVotesLoss = Math.round(loss1.votes + K*(sLoss-eLoss1))

        const lol=await Promise.all([
            User.updateOne({ insta: win1.insta }, { $set: { votes: newVotesWin } }),
            User.updateOne({ insta: loss1.insta }, { $set: { votes: newVotesLoss } })
        ]);

        return lol
    
    }catch(e){
        throw new Error("Issue calculating the votes")
    }
}


module.exports={lolVote}