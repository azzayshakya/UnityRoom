const mongoose = require('mongoose');
const ConnectDb=async ()=>{
    try{
        const conn=await mongoose.connect("mongodb+srv://Foodiii:ajayajay@cluster0.ffqduuz.mongodb.net/Foodiii?retryWrites=true&w=majority",
        {useUnifiedTopology:true})
        // console.log(conn)
        console.log("connented")
        // const fetched_data=mongoose.connection.db.collection("food_items");
        // fetched_data.find({}).toArray((err,data)=>{
        //     if(err){
        //         console.log(err);
            
        //     }
        //     else{
        //         console.log(data);
        //     }
           
        // })
        // console.log("done")

    }
    catch(error){
        console.log(error)
        console.log("not connected")
    }
}

module.exports=ConnectDb