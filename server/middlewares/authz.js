const { User } = require("../models/index");

async function authzUser(req, res, next) {
  try {
    let user = req.user;
    
    if (user.role === "Admin") {
      next();
    } else {
       throw { name: "Forbidden" };
    }
  } catch (error) {
    next(error);
  }
}

module.exports = authzUser;
