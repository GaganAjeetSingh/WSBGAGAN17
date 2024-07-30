const { model } = require("mongoose");


const mongoose = express ('express');

const productScheme = new mongoose.schema({
    name:{
        type:String,
        required:true
    },
    description:{
        type,String,
        required:true
    },
    price:{
        type:Number,
        required:true
    },
    mrp:{
        type:Number,
        required:true
    },
    thumnail:{
        type:String,
        required:true
    },
    images:{
        type:Array,
        required:true
    },
    status:{
        type:Boolean,
        required:true
    },
    create_at:{
        type:Date,
        default:Date.now
    },
    updated_at:{
        type:Object
    }
    
})


const Product =  mongoose.model('products', productScheme);

module.exports = Product;