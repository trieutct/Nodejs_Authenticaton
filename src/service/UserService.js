import {User} from '../model/UserModel.js'
import bcrypt, { hash } from 'bcrypt'
import jwt from 'jsonwebtoken'



export const createUserService=({userName,passWord,name})=>{
   // console.log("11111111111111111"+userName+"    "+passWord+"    "+name)
    return new Promise(async(resolve,reject)=>{
        try{
            // const checkUsername=await User.find({userName:userName})
            // const checkName=await User.find()
            // console.log(checkUsername)
            const hashpassWord = bcrypt.hashSync(passWord, 10);
            const newUsser=await User.create({
                userName,
                passWord:hashpassWord,
                name
            })
            return resolve({
                status:true,
                data:newUsser
            })
        }catch(erro){
            reject({
                message:erro.message
            })
        }
    })
}
export const loginUserService=({userName,passWord})=>{
     return new Promise(async(resolve,reject)=>{
         try{
            const getUser=await User.findOne({userName:userName})
            const checkPassword=await bcrypt.compareSync(passWord,getUser.passWord)
            if(checkPassword)
            {
                const access_token=jwt.sign({
                    isAdmin:getUser.isAdmin,
                    _id:getUser._id},
                    'access_token',
                    {
                        expiresIn:'30m'
                    }
                )
                // console.log("1111111111111111  "+access_token)
                return resolve({
                    status:true,
                    data:access_token
                })
            }
            return resolve({
                status:false,
                message:"Tài khoản mật khẩu không chính xác"
            })
         }catch(erro){
             reject({
                 message:erro.message
             })
         }
     })
 }