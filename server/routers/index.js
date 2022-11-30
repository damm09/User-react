const express = require('express');

const errorHandler = require('../middlewares/errorHandler');

const router = express.Router();

const routerU = require('./user')


router.use('/api',routerU)



router.use(errorHandler)

module.exports = router;