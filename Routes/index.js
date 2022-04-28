const express = require("express");
const router = new express.Router(); //instantiates express router
const userController = require("../Controllers/userController")

/* const jwt = require("express-jwt"); // NEW
const jwksRsa = require("jwks-rsa"); // NEW
const checkJwt =require("../app/checkJwt") */


router.get("/", userController.getUserData); //on login
router.post("/add", userController.createUserData); //on register
router.patch("/user/:id", userController.updateUserData); //on logout
router.delete("/user/:id", userController.deleteUserData); //on delete account/restart 

module.exports = router;