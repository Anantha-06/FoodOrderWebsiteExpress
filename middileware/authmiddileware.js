import jwt, { verify } from "jsonwebtoken";
const auth =async(req,res,next)=>{
try {
    const token = req.cookies.token
    if(!token){
        return res.status(401).json({message:"unauthorized : No Token Provided"})
    }
    const tokenDecoded = jwt.verify(token,process.env.JWT_SECRET)
    if(!token){
        return res.status(401).json({message:"User Not Authorized"})  
    }
 req.user = tokenDecoded
 next()
} catch (error) {
    console.log("error verify token",error)
    res.status(500).json({message:"internal Server error"})
}
}




