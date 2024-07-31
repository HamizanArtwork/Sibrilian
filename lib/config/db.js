import mongoose from "mongoose";

export const ConnectDB = async () =>{
    await mongoose.connect('mongodb+srv://timliterasi:salamliterasi2024@timliterasi.pxjgjwz.mongodb.net/sibrilian-nextjs');
    console.log("DB Connected");
    
}