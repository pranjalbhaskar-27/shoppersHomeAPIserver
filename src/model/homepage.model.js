const mongoose = require("mongoose");

const homeSchema=new mongoose.Schema(
    {
        bannerimg:{type:String,required:true},
        img1:{type:String,required:false},
        img2:{type:String,required:false},
        img3:{type:String,required:false},
        img4:{type:String,required:false},
        img5:{type:String,required:false}

    },
    {version:false,timestamps:true}
)

const Homepage=mongoose.model('homepage',homeSchema);
module.exports = Homepage;