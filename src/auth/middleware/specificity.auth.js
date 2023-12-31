"use strict";
const {institutionModel,departmentsModel} = require('../../model/relations')
function specificity(params) {
  try{
  return async (req, res, next) => {
    if(req.user.role === 'superAdmin'){
        next()
    }
    else if(params === 'admin'){
        const id = req.params.id
        let institution = await institutionModel.findOne({where:{id:id}})
        let institutionHeaderId =await institution.user_id
        if (institutionHeaderId==req.user.id) {
          next();
        } else {
          next("Not allowd to enter");
        }
    }else if(params === 'departmentHeader'){
      if(req.user.role === 'institutionHead'){
        let institution = await institutionModel.findOne({where:{user_id:req.user.id}})
        let department = await departmentsModel.findOne({where:{id:req.params.id}})
        let departmentInstitutionId = await department.institution_id
        if(departmentInstitutionId===institution.id){
          next()
        }else{next('Sorry this department is not belongs to your institution')}
      }else{
        let department = await departmentsModel.findOne({where:{id:req.params.id}})
        let departmentHeaderId =await department.user_id
        if (departmentHeaderId==req.user.id) {
        next();
        } else {
          next("Not allowd to enter");
        }
    }
  }
  };
} catch (e){next(e)}
}

module.exports = specificity;
