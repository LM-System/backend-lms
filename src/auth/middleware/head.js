"use strict";
const {usersModel} = require('../../model/relations')
function head(params) {
  try{
  return async (req, res, next) => {
   
      let user_id_model =await usersModel.findOne({where:{id:req.body.user_id}})
      if (user_id_model.role == params) {
        next();
      } else {
        next(`Sorry the user_id must be ${params}`);
      }
    
  };
} catch (e){next(e)}
}


module.exports = head;
