const mongoose=require('mongoose')

const userSchema=mongoose.Schema({
    user:String,

})

module.exports=mongoose.model('User',userSchema)