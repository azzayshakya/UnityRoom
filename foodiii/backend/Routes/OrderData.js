const express = require("express")
const router = express.Router();
const Order =require("../models/Orders");
const Order4r=require('../models/Order4rest');
const User=require('../models/User')
const UserOrder = require('../models/UserOrder'); 
const { ContentCopy, Email } = require("@mui/icons-material");

router.post('/orderData',async(req,res)=>{

// in a collection-1

    let data =req.body.order_data   
    await data.unshift({ Order_date: req.body.order_date });
    let user=await User.findOne({email:req.body.email})

    let array=[]
    for(let i=0;i<data.length;i++){
        let obj={};
        obj.email=req.body.email
        obj.MobileNo=user.MobileNo
        helpObj={}
        helpObj.id=data[i].id
        helpObj.name=data[i].name
        helpObj.qty=data[i].qty
        helpObj.size=data[i].size
        helpObj.price=data[i].price
        helpObj.img=data[i].img
        obj.order=helpObj
        array.push(obj);
    }
    await Order4r.insertMany(array);



    


// in a collection-2
    let array2=[]
    for(let i=0;i<data.length;i++){
        let obj={};
        obj.email=req.body.email
        obj.MobileNo=user.MobileNo
        helpObj={}
        helpObj.id=data[i].id
        helpObj.name=data[i].name
        helpObj.qty=data[i].qty
        helpObj.size=data[i].size
        helpObj.price=data[i].price
        helpObj.img=data[i].img
        obj.order=helpObj
        array2.push(obj);
    }
    await UserOrder.insertMany(array2);



// in a collection-3

let eId = await Order.findOne({'email':req.body.email})
    
    if(eId===null){
        try{
            await Order.create({
                email:req.body.email,
                order_data:[data]
            }).then(()=>{
                res.json({success:true})
            })
        }catch(error){
                console.log(error.message)
                res.status(500).send("Server Error: " + error.message);
            
        }
    }
    else{
        try{
            await  Order.findOneAndUpdate({email:req.body.email},
                {$push:{order_data:data}}).then(()=>{
                    res.json({success:true})
                })
        }
        catch(error){
            res.status(500).send("Server Error: " + error.message);
        }
    }
})

module.exports=router;