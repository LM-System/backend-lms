"use strict";

function idOf(params) {
  return (req, res, next) => {
    if(req.user.role === 'admin'){
        next()
    }else{
        
        if (req.user[params]==req.params.id) {
          next();
        } else {
          next("Not allowd to enter");
        }
    }
  };
}

module.exports = idOf;
