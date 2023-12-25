const express = require("express")
const router = express.Router();
const Order =require("../models/Orders");
const Order4r=require('../models/Order4rest');
const User=require('../models/User')
const UserOrder = require('../models/UserOrder'); 
const { ContentCopy, Email } = require("@mui/icons-material");

router.post('/orderData',async(req,res)=>{
    let data =req.body.order_data   
    await data.unshift({ Order_date: req.body.order_date });

    let eId = await Order.findOne({'email':req.body.email})
    let user=await User.findOne({email:req.body.email})
    // console.log("user:",user)


    let array=[]
    for(let i=0;i<data.length;i++){
        let obj={};
        obj.email=req.body.email
        obj.MobileNo=user.MobileNo
        // console.log(data[i])
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



    

    let array2=[]
    for(let i=0;i<data.length;i++){
        let obj={};
        obj.email=req.body.email
        obj.MobileNo=user.MobileNo
        // console.log(data[i])
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




    
    // console.log(eId)
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
        // console.log("hey its me ajay")
        // console.log(myData)
        
        if (!myData) {
            // Handle case where order data is not found for the provided email
            return res.status(404).json({ error: "Order Data Not Found" });
        }
        res.json({ orderdata: myData });
    //console.log("ajay is here")
    // console.log(myData)
        
    } catch (error) {
        console.error("Server Error:", error);
        res.status(500).json({ error: "Server Error", message: error.message });
    }
});

router.get('/yourorders',async (req,res,next)=>{
    try{
      const data=await UserOrder.find({order:{ $exists: true }}).sort({ date: -1 });
      res.status(200).json({data:data});
    }
    catch(err){
      console.log(err)
      res.status(500).json({data:null,error:"internal server errror /yourorders"});
    }
  })
module.exports=router;