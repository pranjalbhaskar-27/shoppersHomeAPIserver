// const { json } = require('express');
// const express=require('express')
// const mongoose=require('mongoose')
// const app=express();
// app.use(express.json())

// const connect=()=>{
//     return mongoose.connect('mongodb+srv://pranjal2795:Saridon1@cluster0.e0wvc.mongodb.net/myFirstDatabase?retryWrites=true&w=majority');
// }



// const homeSchema=new mongoose.Schema(
//     {
//         bannerimg:{type:String,required:true},
//         img1:{type:String,required:false},
//         img2:{type:String,required:false},
//         img3:{type:String,required:false},
//         img4:{type:String,required:false},
//         img5:{type:String,required:false}

//     },
//     {timestamps:true}
// )

// const Homepage=mongoose.model('homepage',homeSchema);

// app.get("/homepages", async (req, res) => {
//     try {
//       const homepages = await Homepage.find().lean().exec();
  
//       return res.status(200).send({homepages:homepages}); // []
//     } 
//     catch (err){
//       return res
//         .status(500)
//         .send({ message: "kuchh toh ho gaya garbar" });
//     }
//   });

//   app.post("/homepages", async (req, res) => {
//     try {
//       const user = await Homepage.create(req.body);
  
//       return res.status(201).send(user);
//     } catch (err) {
//       return res.status(500).send({ message: err.message });
//     }
//   });

//   app.listen(5000,async()=>{
//     try {
//         await connect();
//     } catch (error) {
//         console.log(error)
//     }
//     console.log('listen at 5000')
// })

const express = require('express');
const app = express();

app.use(express.json());

const homepageController=require('./controller/homepage.controller')
app.use('/homepages',homepageController);

module.exports=app;