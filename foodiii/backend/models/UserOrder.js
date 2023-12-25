const mongoose = require('mongoose')

const { Schema } = mongoose;

const UserOrderSchema = new Schema({
    email: {
        type: String,
        required: true,
    },
    order: {
        type: Object,
        required: true,
    },
    MobileNo:{
        type: Number,
        required:true
    },
    date:{
        type:Date,
        default:Date.now
    }

});

module.exports = mongoose.model('UserOrder', UserOrderSchema)