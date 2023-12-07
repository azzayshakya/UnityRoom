const express = require("express")
const router = express.Router();
const Order =require("../models/Orders");
const Order4r=require('../models/Order4rest');
const User=require('../models/User')

router.post('/orderData',async(req,res)=>{
    let data =req.body.order_data
    // console.log(order_data)
    await data.unshift({ Order_date: req.body.order_date });

    let eId = await Order.findOne({'email':req.body.email})

    let user=await User.findOne({email:req.body.email})
    console.log("user:",user)
    let array=[]
    for(let i=0;i<data.length;i++){
        let obj={};
        obj.email=req.body.email
        obj.MobileNo=user.MobileNo

        console.log(data[i])
        helpObj={}
        helpObj.id=data[i].id
        helpObj.name=data[i].name
        helpObj.qty=data[i].qty
        helpObj.size=data[i].size
        helpObj.price=data[i].price

        obj.order=helpObj

        array.push(obj);
    }
    await Order4r.insertMany(array);
    console.log(eId)
    if(eId===null){
        try{
            await Order.create({
                email:req.body.email,
                order_data:[data]
            }).then(()=>{
                res.json({success:true})
            })
        }catch(error){
            // console.log(error)
                console.log(error.message)
                // res.send("Server Error",error.message)
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


router.post('/myOrderData', async (req, res) => {
    try {
        const myData = await Order.findOne({ 'email': req.body.email });
        if (!myData) {
            // Handle case where order data is not found for the provided email
            return res.status(404).json({ error: "Order Data Not Found" });
        }
        res.json({ orderdata: myData });
    } catch (error) {
        console.error("Server Error:", error);
        res.status(500).json({ error: "Server Error", message: error.message });
    }
});

module.exports=router;