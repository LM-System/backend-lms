"use strict"

const express=require('express');
const bearerAuth = require('../../auth/middleware/bearer.auth');
const acl = require('../../auth/middleware/acl.auth');
const { adminsModel } = require('../../model/relations');
const Collection = require("../../model/collection");
const adminsCollection=new Collection(adminsModel)
const adminRouter=express.Router();
adminRouter.get("/getadmins/:deptid",bearerAuth,acl(["superAdmin"]),handelAllAdmin)
adminRouter.get("/getadmin/:id",bearerAuth,acl(['instructorDepartmentHead','instructor','student',"admin"]),handelOneAdmin)
adminRouter.put("/updatestudent/:id",bearerAuth,acl(['superAdmin',"admin"]),handelDeleteAdmin)
adminRouter.delete("/deletestudent/:id",bearerAuth,acl(['superAdmin',"admin"]),handelUpdateAdmin)
// adminRouter.post("/addinstructor",bearerAuth,acl(['instructorDepartmentHead',"admin"]),handelAddAdmin)

async function handelAllAdmin(req,res){
    let id=req.params.deptid;
    const records=await adminsModel.findAll({where:{departmentId:id}});
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
    const records=await adminsCollection.delete(id);
    res.status(200).json(records)
}
module.exports=adminRouter