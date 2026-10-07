const express=require("express")
const router=express.Router()
const {userRegistration,userLogin,CurrentUser}=require("../controllers/user_controller")
router.post("/register",userRegistration)

router.post("/login",userLogin)

router.get("/current",CurrentUser)

module.exports=router;