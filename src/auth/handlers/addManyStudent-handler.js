"use strict";
const XLSX = require("xlsx");
const bcrypt = require("bcrypt");
const { usersModel, studentsModel } = require("../../model/relations");
const sendEmail = require("../middleware/email");

async function handleAddManyStudents(req, res) {
  let workbook = XLSX.readFile(req.file.path);
  let workSheets = workbook.Sheets[workbook.SheetNames[0]];
  let data = XLSX.utils.sheet_to_json(workSheets);
  console.log(data);
  let users = data.map((item) => {
    sendEmail(item.email, item.password);
    let hashedPassword = bcrypt.hashSync(`${item.password}`, 12);
    return {
      email: item.email,
      role: item.role,
      password: hashedPassword,
    };
  });
  try {
    let records = await usersModel.bulkCreate(users);
    let studentData = data.map((item) => {
      return {
        userEmail: item.email,
        fullname: item.fullname,
        gender: item.gender,
        birth_date: item.birth_date,
        phone_number: item.phone_number,
        departmentId: item.departmentId,
      };
    });
    let usersRecords = await studentsModel.bulkCreate(studentData);
    res.json(usersRecords);
  } catch (error) {
    console.log(error);
  }
}
module.exports = handleAddManyStudents;
