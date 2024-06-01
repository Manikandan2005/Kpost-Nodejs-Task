import { userModel } from "../dataBase/schema.database.js"
import bcrypt from 'bcrypt'
import jwt from "jsonwebtoken"

export const login = async(req,res)=>{

    try{
        const user = await userModel.findOne({name:req.body.name})

        if(!user){
           return res.status(401).json({message:"User doesnt exist"})
        }

        
       const age = 1000*60*60
        //create token using JWT if username is valid
       const token = jwt.sign(
           {
               role:user.role
           },
           process.env.JWT_SECRETKEY,  //secretkey
           {expiresIn:age}   //expiry time
       );

       return res.cookie("token",token,{httpOnly:true,maxAge:age,}).status(200).json(user)

    }
    catch(error){
        console.log(error)
        res.status(500).json({message:"Internal Server Error"})
    }

}

export const logout = (req,res)=>{
    res.clearCookie("token").status(200).json({message:"Logout Successfull"})
}


export const signup = async(req,res)=>{
    try{
        const {name,role,password} = req.body

        const user = await userModel.find({name:name})



      
    const hashedPassword = await bcrypt.hash(password,10)

    const newUser = await userModel.create({
        name,
        role,
        password:hashedPassword
    });

    res.status(200).json({
        message:"User created successfully"
    })
    }
    catch(error){
        console.log(error)
        res.status(500).send({
            message:"Internal Server Error"
        })
    }
}

