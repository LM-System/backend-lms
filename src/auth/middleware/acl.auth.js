"use strict";

function acl(params) {
  return (req, res, next) => {
    if (params.includes(req.user.role)) {
      next();
    } else {
      next("Not allowd to enter");
    }
  };
}

module.exports = acl;
