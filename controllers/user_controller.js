const asyncHandler=require("express-async-handler")
const User= require("../models/useModel")
const bcrypt = require("bcrypt")
const jwt = require("jsonwebtoken")

//@desc user registration
//@route  api/users/register
//@access public

const userRegistration =asyncHandler( async (req,res)=>{
    const {username,email,password}=req.body;
    if(!username || !email || !password)
    {
        res.status(400);
        throw new Error("all fields are required")
    }
    const existUser=await User.findOne({email})
    if(existUser)
    {
        res.status(400)
        throw new Error("email already exist")
    }
    const hashpass=await bcrypt.hash(password,10)
    const UserData=await User.create({
        username,email,password:hashpass
    })
     res.status(201).json({_id:UserData._id,email:UserData.email})
})

//@desc user login
//@route  api/users/login
//@access public

const userLogin = async (req,res)=>{
    const {email,password}=req.body;
    const user=await User.findOne({email})
    if(user && (await bcrypt.compare(password,user.password)))
    {
        const accessToken=jwt.sign(
            {
                user:{
                    username:user.username,
                    email:user.email,
                    id:user._id
                },
            },
            process.env.ACCESS_TOKEN_SECRET,
            {expiresIn:"1d"}
        );
            res.status(200).json({accessToken})

    }else{
        res.status(401)
        throw new Error("email or password is not valid")
    }
    
}

//@desc current User information
//@route  api/users/current
//@access private

const CurrentUser =(req,res)=>{
    res.json(req.user)
}

module.exports={userRegistration,userLogin,CurrentUser}