const mongoose = require('mongoose');
const ConnectDb=async ()=>{
    try{
        const conn=await mongoose.connect("mongodb+srv://Foodiii:ajayajay@cluster0.ffqduuz.mongodb.net/Foodiii?retryWrites=true&w=majority",
        {useUnifiedTopology:true})
        // console.log(conn)
        console.log("connented")
    }
    catch(error){
        console.log(error)
        console.log("not connected")
    }
}

module.exports=ConnectDb