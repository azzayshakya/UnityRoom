// const express = require("express")
// const router = express.Router();
// const Order =require("../models/Orders");
// const Order4r=require('../models/Order4rest');
// const User=require('../models/User')
// const UserOrder = require('../models/UserOrder'); 
// const { ContentCopy, Email } = require("@mui/icons-material");


// router.get('/yourorders',async (req,res,next)=>{
//     try{
//         console.log("hey its me")
//       const data=await UserOrder.find({order:{ $exists: true }}).sort({ date: -1 });
//       res.status(200).json({data:data});
//     }
//     catch(err){
//       console.log(err)
//       res.status(500).json({data:null,error:"internal server errror /yourorders"});
//     }
//   })


// module.exports=router;