const mongoose =require("mongoose")

const userSchema =mongoose.Schema({
    username:{
        type:String,
        required:[true,"please enter username"],
    },
    email:{
        type:String,
        required:[true,"please enter password"],
        unique:true
    },
    password:{
        type:String,
        required:[true,"please enter password"],
    },

})

module.exports=mongoose.model("User",userSchema)