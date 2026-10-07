const express= require("express")
const router =express.Router()
const {getOneContact,
    getContact,
    createContact,
    updateOneContact,
    deleteOneContact}=require("../controllers/contact_controller")


router.route("/").get(getContact).post(createContact);

router.route("/:id").get(getOneContact).put(updateOneContact).delete(deleteOneContact);


module.exports=router;