const express = require("express"); //this file requires express
const port = process.env.PORT || 3000; //use external server port or localhost 3000
const app = express(); //instatiate express 
require("./DB/mongoose"); //ensures mongoose connects and runs
const routes = require("./Routes/index"); //imports routes file (index.js)
//takes the raw request and turns them into usable properties on req.body
app.use(express.json());
app.use(express.urlencoded());

const cors = require("cors");
app.use(cors());

app.use("/", routes); //when in home page, run this route
app.listen(port, () => {
    console.log(`Server is up on port ${port}`)
});

const jwt = require("express-jwt"); // NEW
const jwksRsa = require("jwks-rsa"); // NEW

 const checkJwt = jwt({
    // Provide a signing key based on the key identifier in the header and the signing keys provided by your Auth0 JWKS endpoint.
    secret: jwksRsa.expressJwtSecret({
      cache: true,
      rateLimit: true,
      jwksRequestsPerMinute: 5,
      jwksUri: "https://dev-0o06df15.us.auth0.com/.well-known/jwks.json"
    }),
  
    // Validate the audience (Identifier) and the issuer (Domain).
    audience: "http://localhost:3000/api",
    issuer: "https://dev-0o06df15.us.auth0.com/",
    algorithms: ["RS256"]
  });

  app.get("/authorized", checkJwt, async function (req, res){
    try {
      console.log(req.user);
      res.json(req.user);
    } catch (error) {
      console.log(error);
    }
  });
