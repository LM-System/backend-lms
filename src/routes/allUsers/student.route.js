"use strict"

const express=require('express');
const bearerAuth = require('../../auth/middleware/bearer.auth');
const acl = require('../../auth/middleware/acl.auth');
const { studentsModel, usersModel } = require('../../model/relations');
const Collection = require("../../model/collection");
const studentsCollection=new Collection(studentsModel)
const studentRouter=express.Router();
studentRouter.get("/getstudents/:deptid",bearerAuth,acl(['instructorDepartmentHead',"admin"]),handelAllStudent)
studentRouter.get("/getstudent/:id",bearerAuth,acl(['instructorDepartmentHead','instructor','student',"admin"]),handelOneStudent)
studentRouter.put("/updatestudent/:id",bearerAuth,acl(['instructorDepartmentHead',"admin"]),handelUpdateStudent )
studentRouter.delete("/deletestudent/:id",bearerAuth,acl(['instructorDepartmentHead',"admin"]),handelDeleteStudent)
// studentRouter.post("/addinstructor",bearerAuth,acl(['instructorDepartmentHead',"admin"]),handelAddStudent)

async function handelAllStudent(req,res){
    let id=req.params.deptid;
    const records=await studentsModel.findAll({where:{departmentId:id}});
    res.status(200).json(records)
}
async function handelOneStudent(req,res){
    let id=req.params.id;
    const records=await studentsCollection.get(id);
    res.status(200).json(records)
}
async function handelUpdateStudent(req,res){
    let id=req.params.id;
    let obj=req.body;
    const records=await studentsCollection.update(obj,id);
    res.status(200).json(records)
}
async function handelDeleteStudent(req,res){
    let id=req.params.id;
    const records=await studentsCollection.delete(id);
    const record=await usersModel.delete(id);
    res.status(200).json(records)
}
module.exports=studentRouter