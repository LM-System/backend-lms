"use strict";
const {usersModel} = require('../../model/relations')
function head(params) {
  return async (req, res, next) => {
   
      let user_id_model =await usersModel.findOne({where:{id:req.body.user_id}})
      if (user_id_model.role == params) {
        next();
      } else {
        next(`Sorry the user_id must be ${params}`);
      }
    
  };
}

module.exports = head;