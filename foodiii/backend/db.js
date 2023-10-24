const mongoose = require('mongoose');
const ConnectDb=async ()=>{
    try{
        const conn=await mongoose.connect("mongodb+srv://Foodiii:ajayajay@cluster0.ffqduuz.mongodb.net/Foodiii?retryWrites=true&w=majority",
        {useUnifiedTopology:true})
        // console.log(conn)
console.log("connented")
const fetchFoodItems = async () => {
    try {
      const fetched_data = await mongoose.connection.db.collection("food_items");
      const data = await fetched_data.find({}).toArray();
    //   console.log("printing the collection data")
    //   console.log(data);
    } catch (err) {
      console.log(err);
    }
  };
  
  fetchFoodItems();
       

    }
    catch(error){
        console.log(error)
        console.log("not connected")
    }
}

module.exports=ConnectDb