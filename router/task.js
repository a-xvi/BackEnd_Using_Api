const express = require("express");
const router = express.Router();
const userController = require("../controller/task.js");




router
    .route('/')
    .post(userController.create_user)
    .get(userController.getUsers)

    
router
    .route('/:id')
    .get(userController.getUsers_id)
    .delete(userController.deleteUser)
    .put(userController.updateUser)






module.exports = router;
