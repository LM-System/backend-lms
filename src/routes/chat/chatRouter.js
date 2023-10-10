const express = require('express');
const chatRouter = express.Router();
const bearerAuth = require('../../auth/middleware/bearer.auth');
const { Op } = require("sequelize");


const {chatsModel} = require('../../model/relations');

chatRouter.get('/chat/:id',bearerAuth, handleGetOne);
chatRouter.get('/userchats/:id/', handleGetUserChats);
chatRouter.put('/chat/:id',bearerAuth, handleUpdate);
chatRouter.delete('/chat/:id',bearerAuth, handleDelete);


async function handleGetUserChats(req, res,next) {
  try{
  const id = req.params.id;
  let theRecord = await chatsModel.findAll({where:{ [Op.or]: [
    { sender_id: id },
    { reciever_id: id }
  ]}})
  res.status(200).json(theRecord);
} catch (e){next(e)}
}


async function handleGetOne(req, res,next) {
  try{
  const id = req.params.id;
  let theRecord = await chatsModel.findAll({where:{room_id:id}})
  res.status(200).json(theRecord);
} catch (e){next(e)}
}


async function handleUpdate(req, res,next) {
  try{
  const id = req.params.id;
  const obj = req.body;
  let updatedRecord = await chatsModel.findOne({where:{id}})
  res.status(200).json(await updatedRecord.update(obj));
} catch (e){next(e)}
}

async function handleDelete(req, res,next) {
  try{
  let id = req.params.id;
  let deletedRecord = await chatsModel.destroy({where:{id}});
  res.status(204).json(deletedRecord);
} catch (e){next(e)}
}

module.exports = chatRouter;