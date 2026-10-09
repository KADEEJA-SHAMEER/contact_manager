const express=require("express")
const router=express.Router()
const {userRegistration,userLogin,CurrentUser}=require("../controllers/user_controller")
const validateToken=require("../middleware/validatetoken")
router.post("/register",userRegistration)

router.post("/login",userLogin)

router.get("/current", validateToken ,CurrentUser)

module.exports=router;