const express = require("express"); // this file requires express server
const port = process.env.PORT || 3000; // use external server port OR local 3001

const app = express();

const cors = require("cors");
require("./DB/mongoose"); //ensures mongoos connects and runs

//takes the raw requests and turns them into usable properties on req.body
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

const routes = require("./Routes/api/index");
app.use("/api/index", routes);

app.use(function (req, res, next) {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "GET, POST, PATCH, DELETE");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type");
  res.setHeader("Access-Control-Allow-Credentials", true);
  next();
});
app.listen(port, () => {
  console.log(`Server is up on ${port}`);
});
