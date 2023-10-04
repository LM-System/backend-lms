'use strict'
const XLSX=require('xlsx')
const bcrypt=require('bcrypt')
const{usersModel, instructorsModel}=require('../../model/relations')
const sendEmail = require('../middleware/email')

async function handleAddManyInstructor(req,res){
let workbook=XLSX.readFile(req.file.path)
let workSheets=workbook.Sheets[workbook.SheetNames[0]]
let data= XLSX.utils.sheet_to_json(workSheets);

let users=data.map((item)=>{
   sendEmail(item.email,item.password)
   let hashedPassword= bcrypt.hashSync(`${item.password}`,12);
   return {
      email:item.email,
      role:item.role,
      password:hashedPassword
   }
})
try {
   let records =await usersModel.bulkCreate(users)
   let instructorData=data.map((item)=>{return {
   userEmail:item.email,
   fullname:item.fullname,
   gender:item.gender,
   birth_date:item.birth_date,
   phone_number:item.phone_number,
}
})
   let usersRecords =await instructorsModel.bulkCreate(instructorData)
   res.json(usersRecords)
} catch (error) {
   console.log(error);
}



}
module.exports = handleAddManyInstructor;
