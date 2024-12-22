const cloudinary = require('cloudinary').v2;
require('dotenv').config()

cloudinary.config({
    cloud_name:process.env.cloud1,
    api_key:process.env.cloud2,
    api_secret:process.env.cloud3,
    secure:true
})


const generateImageUrl = (publicId) => {
    const imageUrl = cloudinary.url(publicId, {
      width: 320,
      height: 320,
    });
    console.log('Generated URL:', imageUrl);
    return imageUrl;
  };






module.exports={cloudinary,generateImageUrl }


