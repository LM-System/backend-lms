const express = require('express');
const chatRouter = express.Router();


const {chatsModel} = require('../../model/relations');

// coursesRouter.get('/courses', handleGetAll);
chatRouter.get('/chat/:id', handleGetOne);
// chatRouter.update('/chat/:id', handleUpdate);
// chatRouter.delete('/chat/:id', handleDelete);


async function handleGetOne(req, res) {
  const id = req.params.id;
  let theRecord = await chatsModel.findAll({where:{room_id:id}})
  res.status(200).json(theRecord);
}


// async function handleUpdate(req, res) {
//   const id = req.params.id;
//   const obj = req.body;
//   let updatedRecord = await chatsModel.findOne({where:{id}})
//   res.status(200).json(await updatedRecord.update(obj));
// }

// async function handleDelete(req, res) {
//   let id = req.params.id;
//   let deletedRecord = await chatsModel.destroy({where:{id}});
//   res.status(204).json(deletedRecord);
// }


module.exports = chatRouter;