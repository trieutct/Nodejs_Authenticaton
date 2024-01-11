import mongoose from "mongoose";
const {Schema} =mongoose;
const UserSchema= new Schema({
    userName:{
        type:String,
        require:true,
        unique:true
    },
    passWord:{
        type:String,
        require:true,
    },
    name:{
        type:String,
        require:true,
    },
    access_token:{
        type:String,
        unique:true
    },
    refresh_token:{
        type:String,
        unique:true
    },
    isAdmin:{
        type:Boolean,
        unique:true,
        default:false
    }
},{
    timestamps:true
})


export const User=mongoose.model('User',UserSchema)