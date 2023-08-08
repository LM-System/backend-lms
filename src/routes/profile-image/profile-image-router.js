'use strict'
const fs = require('fs');
const {usersModel} = require('../../model/relations')
const profileImageRouter = require('express').Router()
const multer = require('multer')
const upload = multer({ dest: 'uploads/' });


profileImageRouter.post('/profile/:user_id/image', upload.single('file'), async (req, res) => {
  const fileBuffer = fs.readFileSync(req.file.path);
  const fileBase64String = fileBuffer.toString('base64');
  const userId = req.params.user_id
  const user = await usersModel.update(
    {
      image: fileBase64String
    },
  { where: {
    id: userId
  }})
  if(user) {
    res.sendStatus(200)
  }
  fs.unlinkSync(req.file.path); 
})

module.exports = profileImageRouter