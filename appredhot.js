const express = require("express");

const app = express();
app.use(express.static("public"));

///setview folder
app.set("view engine", "ejs");

///set routes

//index.js
app.use(require("./controllers/redhotcontrol"));
// app.use(require("./controllers/speakers"));

//speakers

app.listen(50000, () => {
  console.log("im on");
});
