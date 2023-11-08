const express = require("express")
const router = express.Router();
const Order =require("../models/Orders")


router.post('/orderData',async(req,res)=>{
    let data =req.body.order_data
    await data.unshift({ Order_date: req.body.order_date });

    let eId = await Order.findOne({'email':req.body.email})
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