const express = require("express");
const router = new express.Router(); //instantiates express router
const userController = require("../../Controllers/userController")

const jwt = require("express-jwt"); // NEW
const jwksRsa = require("jwks-rsa"); // NEW

const checkJwt = jwt({
    // Provide a signing key based on the key identifier in the header and the signing keys provided by your Auth0 JWKS endpoint.
    secret: jwksRsa.expressJwtSecret({
      cache: true,
      rateLimit: true,
      jwksRequestsPerMinute: 5,
      jwksUri: "https://dev-0o06df15.us.auth0.com/.well-known/jwks.json",
    }),
  
    // Validate the audience (Identifier) and the issuer (Domain).
    audience: "https://dev-0o06df15.us.auth0.com/userinfo",
    issuer: "https://dev-0o06df15.us.auth0.com/",
    algorithms: ["RS256"]
  });

router.get("/:id", checkJwt, userController.getUserData); //on login
router.patch("/update/:id", checkJwt, userController.updateUserData); //on logout

module.exports = router;