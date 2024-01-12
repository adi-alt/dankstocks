import jwt from "jsonwebtoken"
export const sendcookie = (userinfo,res,message,statuscode)=>{
    const token = jwt.sign({_id:userinfo._id},"munnnihuibadnam")
    res.status(statuscode).cookie("token",token,{
        httpOnly:true,
        expires:new Date(Date.now()+1000*60*60*24),
        sameSite:process.env.NODE_ENV === "DEVELOPMENT"?"lax":"none",
        secure:process.env.NODE_ENV === "DEVELOPMENT"?false:true
    }).json({
        success:true,
        message
    })
}