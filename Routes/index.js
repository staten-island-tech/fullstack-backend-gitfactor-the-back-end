const express = require("express");
const router = new express.Router(); //instantiates express router
const userController = require("../Controllers/userController")

router.get("/", userController.getUserData); //on login
router.post("/add", userController.createUserData); //on register
router.patch("/user/:id", userController.updateUserData); //on logout
router.delete("/user/:id", userController.deleteUserData); //on delete account/restart 

module.exports = router;