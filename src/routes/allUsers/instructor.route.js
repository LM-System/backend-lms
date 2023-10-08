"use strict"

const express=require('express');
const bearerAuth = require('../../auth/middleware/bearer.auth');
const acl = require('../../auth/middleware/acl.auth');
const { instructorsModel } = require('../../model/relations');
const Collection = require("../../model/collection");
const instructorsCollection=new Collection(instructorsModel)
const instructorRouter=express.Router();
instructorRouter.get("/getinstructors/:id",bearerAuth,acl(['instructorDepartmentHead',"admin"]),handelAllInstrcutor)
instructorRouter.get("/getinstructor/:id",bearerAuth,acl(['instructorDepartmentHead','instructor','student',"admin"]),handelOneInstrcutor)
instructorRouter.put("/updateinstructor/:id",bearerAuth,acl(['instructorDepartmentHead',"admin",'instructor']),handelUpdateInstrcutor )
instructorRouter.delete("/deleteinstructor/:id",bearerAuth,acl(['instructorDepartmentHead',"admin"]),handelDeleteInstrcutor)
// instructorRouter.post("/addinstructor",bearerAuth,acl(['instructorDepartmentHead',"admin"]),handelAddInstrcutor)

async function handelAllInstrcutor(req,res){
    let id=req.params.id;
    const records=await instructorsModel.findAll({where:{id:id}});
    res.status(200).json(records)
}
async function handelOneInstrcutor(req,res){
    let id=req.params.id;
    const records=await instructorsCollection.get(id);
    res.status(200).json(records)
}
async function handelUpdateInstrcutor(req,res){
    let id=req.params.id;
    let obj=req.body;
    const records=await instructorsCollection.update(obj,id);
    res.status(200).json(records)
}
async function handelDeleteInstrcutor(req,res){
    let id=req.params.id;
    const records=await instructorsCollection.delete(id);
    const record=await usersModel.delete(id);
    res.status(200).json(records)
}
// async function handelAddInstrcutor(req,res){

// }
module.exports=instructorRouter