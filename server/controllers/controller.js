const { compare } = require("../helpers/bcyrpt");
const { loadToToken } = require("../helpers/jwt");
const { User } = require("../models/index");
const user = require("../models/user");

class Controller {
  static async allUser(req,res,next){
    try {
      let data = await User.findAll({})
      data = data.map(e => e.dataValues)
      console.log(data);
      res.status(200).json(data.d)
      
    } catch (error) {
      console.log(error);
      next(error)
    }
  }

  static async oneUser(req,res,next){
    try {
      let oneUser = await User.findOne({
        where:{
          id:req.params.id
        }
      })
      res.status(200).json(oneUser)
    } catch (error) {
      console.log(error);
      next(error)
    }
  }

  static async register(req, res, next) {
    try {
      const { name, Email, password,role} = req.body;
      let data = await User.create({
        name,
        Email,
        password,
        role,
      });
      res.status(201).json({ id: data.id, email: data.Email });
    } catch (error) {
      console.log(error);
      next(error);
     
    }
  }

  static async userDelete(req,res,next){
    try {
      let id = req.params.id
      await User.destroy({
        where:{
          id
        }
      })

      res.status(200).json({msg:`user dengan id ${id} terhapus`})
      
    } catch (error) {
      console.log(error);
      next(error)
    }
  }

  static async login(req, res, next) {
    try {
      const { name, password } = req.body;

      const oneUser = await User.findOne({
        where: {
          name,
        },
      });

      if (!oneUser) {
        throw {
          name: "Invalid email or pass",
        };
      }

      const comparePaass = compare(oneUser.password, password);
      if (!comparePaass) {
        throw {
          name: "Invalid email or pass",
        };
      }

      const payload = {
        id: oneUser.id,
        name: oneUser.name,
        Email: oneUser.Email,
        role: oneUser.role,
      };

      const aksesToken = loadToToken(payload);
      res.status(200).json({
        access_token: aksesToken,
        name: oneUser.name,
        role: oneUser.role,
        id: oneUser.id,
      });
    } catch (error) {
      next(error);
     
    }
  }

 
}

module.exports = Controller;
