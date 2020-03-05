const express = require("express");

const app = express();
app.use(express.static("public"));

///setview folder
app.set("view engine", "ejs");

///set routes

//index.js
app.use(require("./controllers/index"));
app.use(require("./controllers/speaker"));
app.use(require("./controllers/feedback"));
app.use(require("./controllers/api"));
//speakers

app.listen(40000, () => {
  console.log("im on");
});
