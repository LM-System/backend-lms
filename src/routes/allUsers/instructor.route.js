"use strict"

const express=require('express');
const bearerAuth = require('../../auth/middleware/bearer.auth');
const acl = require('../../auth/middleware/acl.auth');
const bcrypt=require('bcrypt');
const { instructorsModel,usersModel } = require('../../model/relations');
const Collection = require("../../model/collection");
const instructorsCollection=new Collection(instructorsModel)
const instructorRouter=express.Router();
instructorRouter.get("/getinstructors/:id",bearerAuth,acl(['instructorDepartmentHead',"admin"]),handelAllInstrcutor)
instructorRouter.post("/addhead",bearerAuth,acl(["superAdmin"]),handelAddHead)
instructorRouter.get("/getinstructor/:id",bearerAuth,acl(['instructorDepartmentHead','instructor','student',"admin"]),handelOneInstrcutor)
instructorRouter.put("/updateinstructor/:id",bearerAuth,handelUpdateInstrcutor )
instructorRouter.delete("/deleteinstructor/:id",bearerAuth,acl(['instructorDepartmentHead',"admin"]),handelDeleteInstrcutor)
// instructorRouter.post("/addinstructor",bearerAuth,acl(['instructorDepartmentHead',"admin"]),handelAddInstrcutor)

async function handelAddHead(req,res,next) {
    const hashedPassword = bcrypt.hashSync(req.body.password, 12);
    try {
       const user={ 
        email:req.body.email,
        role:"instructorDepartmentHead",
        password:hashedPassword,
    }
       const head={ 
        userEmail:req.body.email,
        fullname:req.body.fullname,
        gender:req.body.gender,
        birth_date:req.body.birth_date,
        phone_number:req.body.phone_number
    }
    const userRecord=await usersModel.create(user)
    const headRecord=await instructorsModel.create(head)
    res.status(200).json(headRecord)
    
} catch (error) {
    next(error);
}

}

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
    const user=await instructorsCollection.read(id);
    const records=await instructorsCollection.delete(id);
    const record=await usersModel.destroy({where:{email:user.userEmail}});
    res.status(200).json(records)
}
// async function handelAddInstrcutor(req,res){

// }
module.exports=instructorRouter