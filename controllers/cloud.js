const cloudinary = require('cloudinary').v2;
require('dotenv').config()

cloudinary.config({
    cloud_name:process.env.cloud1,
    api_key:process.env.cloud2,
    api_secret:process.env.cloud3,
    secure:true
})


const generateImageUrl = async(publicId) => {
  try{
    const imageUrl = await cloudinary.url(publicId, {
      width: 320,
      height: 320,
    });
    return imageUrl
}catch(e){
  throw new Error("Issue getting image from the database")
}};






module.exports={cloudinary,generateImageUrl }


