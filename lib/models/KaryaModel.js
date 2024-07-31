import mongoose from "mongoose";

const Schema = new mongoose.Schema({
    title:{
        type:String,
        required:true
    },
    image:{
        type:String,
        required:true
    },
    date:{
        type:Date,
        default:Date.now()
    },
    category:{
        type:String,
        required:true
    },
    author:{
        type:String,
        required:true
    },
    text:{
        type:String,
        required:true
    }
})

const KaryaModel = mongoose.models.karya || mongoose.model('karya',Schema);

export default KaryaModel;