const asyncHandler=require("express-async-handler")
const User= require("../models/useModel")
const bcrypt = require("bcrypt")
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

const userLogin =(req,res)=>{
    const {username,password}=req.body;
    res.status(200).json("login successfull")
}

//@desc current User information
//@route  api/users/current
//@access private

const CurrentUser =(req,res)=>{
    res.status(200).json("current user information")
}

module.exports={userRegistration,userLogin,CurrentUser}