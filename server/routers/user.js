const express = require('express');
const Controller = require('../controllers/controller');
const authen = require('../middlewares/auth');
const authzUser = require('../middlewares/authz');

const router = express.Router();


router.post('/users',Controller.register)

router.post('/login',Controller.login)

router.use(authen)
router.get('/users',Controller.allUser)
router.get('/users/:id',Controller.oneUser)

router.use(authzUser)

router.delete('/users/:id',Controller.userDelete)



module.exports = router;