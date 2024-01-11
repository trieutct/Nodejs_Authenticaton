import { createUserService ,loginUserService} from "../service/UserService.js"



export const detailUserController=(req,res)=>{
    res.send('detailUserController')
}
export const UserController=(req,res)=>{
    res.send('lUserController')
}
export const createUserController=async(req,res)=>{
    var {userName,passWord,name}=req.body
        if(userName && passWord && name)
        {
            const data=await createUserService({userName,passWord,name})
            return res.json(data)
        }else{
            return res.json({
                status:false,
                message:"Thông tin nhập còn thiếu"
            })
        }
}

export const loginUserController=async(req,res)=>{
    var {userName,passWord}=req.body
        if(userName && passWord)
        {
            const data=await loginUserService({userName,passWord})
            return res.json(data)
        }else{
            return res.json({
                status:false,
                message:"Thông tin nhập còn thiếu"
            })
        }
}