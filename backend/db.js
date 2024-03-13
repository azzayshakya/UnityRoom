const mongoose= require('mongoose')

const connectDb=async()=>{
    try{
        const connect= await mongoose.connect("mongodb+srv://ajayshakya7376:ajayajay@unityroom.rsgx3ig.mongodb.net/unityroom?retryWrites=true&w=majority&appName=UnityRoom")
        console.log("you are connected to the mongoDB")
    }
    catch(error){
        console.log(" connectDb Error  ", error)
    }

}
connectDb();
module.exports=connectDb