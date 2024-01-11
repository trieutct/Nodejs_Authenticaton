import mongoose from "mongoose";
const {Schema} =mongoose;
const StudentSchema= new Schema({
    name:{
        type:String,
        require:true,
        unique:true
    },
    birthday:{
        type:Date,
        require:true,
    },
    mssv:{
        type:String,
        require:true,
        unique:true
    },
    class:{
        type:String,
        unique:true
    },
})


export const Student=mongoose.model('Student',StudentSchema)