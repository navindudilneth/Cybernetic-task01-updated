const express = require('express');
const UserController = require('../controller/UserController');
const router = express.Router();


router.post('/save-user', UserController.saveUser);
router.put('/update-user/:id', UserController.updateUser);
router.delete('/delete-user/:id', UserController.deleteUser);
router.get('/find-user/:id', UserController.findUser);
router.get('/find-all-users', UserController.findAllUsers);

module.exports = router;