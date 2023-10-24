const express =require("express")
const router = express.Router();

router.post('/foodData',(req,res)=>{
    try{
        res.send([global.food_items])

    }
    catch(error){
        res.send("server error")
    }
})
module.exports=router;