'use strict'
const XLSX=require('xlsx')
const bcrypt=require('bcrypt')
const{usersModel}=require('../../model/relations')
const sendEmail = require('../middleware/email')

async function handleAddMany(req,res){
   console.log("hi");
let workbook=XLSX.readFile(req.file.path)
let workSheets=workbook.Sheets[workbook.SheetNames[0]]
let data= XLSX.utils.sheet_to_json(workSheets);

data.forEach((item)=>{
   sendEmail(item.email,item.password)
   let hashedPassword= bcrypt.hashSync(`${item.password}`,12);
   item.password=hashedPassword;
})
let records =await usersModel.bulkCreate(data)
res.json(records)
}
module.exports = handleAddMany;
