import jwt from 'jsonwebtoken'

const auth=(req,res,next)=>{
    const token=req.headers.token.split(' ')[1]
    // console.log(token)
    jwt.verify(token,'access_token',function(erro,user){
        if(erro)
        {
            return res.status(404).json({
                message:"user ko có quyền"
            })
        }
        if(user.isAdmin)
        {
            next()
        }
        else
        {
            return res.status(404).json({
                message:"user ko có quyền"
            })
        }
    })
}


export default auth