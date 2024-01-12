// import  user  from "../models/user.js";
import { user } from "../models/user.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken"
import { sendcookie } from "../utils/features.js";
import errorhandler from "../middlewares/error.js";
// export const alluser = async(req,res)=>{
//     const usersall = await user.find({});
//     res.json({
//         success:true,
//         usersall
//     })
// }
export const login = async(req,res,next)=>{

    try {
        const {email,password} = req.body;
    const userinfo = await user.findOne({email}).select("+password");
    if(!userinfo)return next(new errorhandler("no user exists",404))
    const isreal = await bcrypt.compare(password,userinfo.password)
    if(!isreal)return next(new errorhandler("id or password wrong",400))
    sendcookie(userinfo,res,`welcome back ${userinfo.name}`,200)
    } catch (error) {
        next(error)
    }

}

export const register = async(req,res,next)=>{
    try {
        const {name,email,password} = req.body;
    let userinfo = await user.findOne({email});
    if(userinfo)return next(new errorhandler("user already exists",400))
    const hashedpas = await bcrypt.hash(password,10);
    userinfo = await user.create({name,email,password:hashedpas});
    
    sendcookie(userinfo,res,`${name} registered succesfully`,201)
    } catch (error) {
        next(error)
    }
    
}

export const userdata = (req,res)=>{


    // we can use cookie parser method but when are having so many cookies then it will be difficult so prefer using creating a function isauth whenever auth is minimum and isauth is a middleware
    // const {token} = req.cookies;

    // console.log(token)

    // if(!token){
    //     return res.status(404).json({
    //         success:false,
    //         message:"login first"
    //     })
    // }
    // const decodedid = jwt.verify(token,"munnnihuibadnam"); 

    // const userme = await user.findById(decodedid._id);

    res.status(200).json({
        success:true,
        userme:req.user
    })

}

export const logout =(req,res)=>{
    res.status(200).cookie("token","",{
        expires:new Date(Date.now()),
        sameSite:process.env.NODE_ENV === "DEVELOPMENT"?"lax":"none",
        secure:process.env.NODE_ENV === "DEVELOPMENT"?false:true
    }).json({
        success:true,
        message:"logout successfully"
    })
}


