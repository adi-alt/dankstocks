import mongoose from "mongoose";
export const dbconnect = mongoose.connect(process.env.MONGO_URL,{
    dbName:"umesh"
}).then(()=>{
    console.log("db connected")
}).catch((e)=>{
    console.log(e);
})