const mongoose =require("mongoose")

const contactSchema=mongoose.Schema({
    name:{
        type:String,
        required:[true,"please enter a name"]
    },
    email:{
        type:String,
        required:[true,"please enter a email"]
    },
    phone:{
        type:Number,
        required:[true,"please enter a number"]
    },
});
module.exports=mongoose.model("Contact",contactSchema);