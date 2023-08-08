"use strict";
const XLSX = require("xlsx");
const { usersModel } = require("../../model/relations");
async function handleAddMany(req, res) {
  let workbook = XLSX.readFile(req.file.path);
  let workSheets = workbook.Sheets[workbook.SheetNames[0]];
  let data = XLSX.utils.sheet_to_json(workSheets);
  let records = await usersModel.bulkCreate(data);
  res.json(records);
}
module.exports = handleAddMany;
