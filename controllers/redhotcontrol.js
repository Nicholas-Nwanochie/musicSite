const express = require("express");
const router = express.Router();

let data = require("../art/data/music.json");

router.get("/", (req, res) => {
  let AlbumCovers = [];
    data.RedHotChilliPeppers.forEach(RedhotObj => {
      AlbumCovers = AlbumCovers.concat(RedhotObj.Coverimg);
    });


 

  
  console.log(AlbumCovers);
  res.render("redhot.ejs", {
    Coverimg: AlbumCovers
  });
});



router.post("/", (req, res) => { ////get posts on your ejs page



});

module.exports = router;
