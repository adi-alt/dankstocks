import { user } from "../models/user.js";
import jwt from "jsonwebtoken";
export const isAuth =async (req,res,next)=>{
    const {token} = req.cookies;

    // console.log(token)

    if(!token){
        return res.status(404).json({
            success:false,
            message:"login first"
        })
    }
    const decodedid = jwt.verify(token,"munnnihuibadnam"); 
    req.user = await user.findById(decodedid._id);
    console.log(req.user)
    next();
}