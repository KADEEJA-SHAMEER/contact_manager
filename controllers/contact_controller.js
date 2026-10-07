const asyncHandler=require("express-async-handler")
const Contact=require("../models/contact_models")


//@desc get one contacts
//@route GET /api/contacts/:id
//@access public

const getOneContact=asyncHandler(async (req, res) => {
    const contact = await Contact.findById(req.params.id)
    if(!contact)
    {
        res.status(400)
        throw new Error("no contacts found")
    }

    res.status(200).json(contact);
});

//@desc get all contacts
//@route GET /api/contacts
//@access public

const getContact=asyncHandler(async (req, res) => {
    const contacts= await Contact.find();
    res.status(200).json(contacts);
});

//@desc create contacts
//@route GET /api/contacts
//@access public

const createContact=asyncHandler(async (req, res) => {
    const {name,email,phone}=req.body
    if(!name || !email ||!phone){
        res.status(400)
        throw new Error("all fields are requires")
    }
    const contact=await Contact.create({name,email,phone})
    res.status(201).json(contact);
});

//@desc  update contacts
//@route GET /api/contacts/:id
//@access public

const updateOneContact=asyncHandler(async(req, res) => {
    const contact = await Contact.findById(req.params.id)
    if(!contact)
    {
        res.status(404)
        throw new Error("no contacts found")
    }
    const updateData= await Contact.findByIdAndUpdate(req.params.id,req.body,{new:true});
    res.status(200).json(updateData);
});

//@desc delete contacts
//@route GET /api/contacts/:id
//@access public

const deleteOneContact=asyncHandler(async (req, res) => {
    const contact = await Contact.findById(req.params.id)
    if(!contact)
    {
        res.status(404)
        throw new Error("no contacts found")
    }
    const deleteData= await Contact.findByIdAndDelete(req.params.id);
    res.status(200).json(deleteData);
})


module.exports={
    getOneContact,
    getContact,
    createContact,
    deleteOneContact,
    updateOneContact
};