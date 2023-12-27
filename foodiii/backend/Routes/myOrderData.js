const express = require("express")
const router = express.Router();
const Order =require("../models/Orders");
const { ContentCopy, Email } = require("@mui/icons-material");

router.post('/myOrderData', async (req, res) => {
    try {
        const myData = await Order.findOne({ 'email': req.body.email });       
        if (!myData) {
            return res.status(404).json({ error: "Order Data Not Found" });
        }
        res.json({ orderdata: myData });

    } catch (error) {
        console.error("Server Error:", error);
        res.status(500).json({ error: "Server Error", message: error.message });
    }
});


module.exports=router;
