const express = require('express');
const userController = require('../controllers/user_controller');

const router = express.Router();
router.get('/*', userController.findUser);
router.put('/*', userController.addTrips);
router.get('/trips/*', userController.findAllUserTrips);

module.exports = router;