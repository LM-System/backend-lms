"use strict"
const bcrypt=require('bcrypt');
const express=require('express');
const bearerAuth = require('../../auth/middleware/bearer.auth');
const acl = require('../../auth/middleware/acl.auth');
const { adminsModel, usersModel } = require('../../model/relations');
const Collection = require("../../model/collection");
const adminsCollection=new Collection(adminsModel)
const adminRouter=express.Router();
adminRouter.get("/getadmins",bearerAuth,acl(["superAdmin"]),handelAllAdmin)
adminRouter.post("/addadmin",bearerAuth,/*acl(["superAdmin"])*/handelAddAdmin)
adminRouter.post("/addsuperadmin",/*acl(["superAdmin"])*/handelAddSuperAdmin)
adminRouter.get("/getadmin/:id",bearerAuth,acl(['instructorDepartmentHead','instructor','student',"admin"]),handelOneAdmin)
adminRouter.put("/updateadmin/:id",bearerAuth,handelUpdateAdmin )
adminRouter.delete("/deleteadmin/:id",bearerAuth/*,acl(['superAdmin'])*/,handelDeleteAdmin)
// adminRouter.post("/addinstructor",bearerAuth,acl(['instructorDepartmentHead',"admin"]),handelAddAdmin)

async function handelAddAdmin(req,res,next) {
    try {
    const hashedPassword = bcrypt.hashSync(req.body.password, 12);

   const user={ 
    email:req.body.email,
    role:"admin",
    password:hashedPassword,
}
   const admin={ 
    userEmail:req.body.email,
    fullname:req.body.fullname,
    gender:req.body.gender,
    birth_date:req.body.birth_date,
    phone_number:req.body.phone_number
}
    const userRecord=await usersModel.create(user)
    const adminRecord=await adminsModel.create(admin)
    res.status(200).json(adminRecord)
    
} catch (error) {
    next(error);
}

}
async function handelAddSuperAdmin(req,res,next) {
    try {
    const hashedPassword = bcrypt.hashSync(req.body.password, 12);

   const user={ 
    email:req.body.email,
    role:"superAdmin",
    password:hashedPassword,
}
   const admin={ 
    userEmail:req.body.email,
    fullname:req.body.fullname,
    gender:req.body.gender,
    birth_date:req.body.birth_date,
    phone_number:req.body.phone_number
}
    const userRecord=await usersModel.create(user)
    const adminRecord=await adminsModel.create(admin)
    res.status(200).json(adminRecord)
    
} catch (error) {
    next(error);
}

}
async function handelAllAdmin(req,res){
    const records=await adminsModel.findAll();
    res.status(200).json(records)
}
async function handelOneAdmin(req,res){
    let id=req.params.id;
    const records=await adminsCollection.get(id);
    res.status(200).json(records)
}
async function handelUpdateAdmin(req,res){
    let id=req.params.id;
    let obj=req.body;
    const records=await adminsCollection.update(obj,id);
    res.status(200).json(records)
}
async function handelDeleteAdmin(req,res){
    let id=req.params.id;
    const user=await adminsCollection.read(id);
    const records=await adminsCollection.delete(id);
    console.log(user);
    const record=await usersModel.destroy({where:{email:user.userEmail}});

    res.status(200).json(records)
}
module.exports=adminRouter