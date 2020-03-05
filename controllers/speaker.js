const express = require("express");
const router = express.Router();
let data = require("../art/data/data.json");

router.get("/speakers", (req, res) => {
  let pagePhotos = [];
  data.speakers.forEach(speakerObj => {
    pagePhotos = pagePhotos.concat(speakerObj.artwork);
  });

  res.render("speakers.ejs", {
    pageTitle: "speaker List",
    artistName: "",
    artwork: pagePhotos,
    allSpeakers: data.speakers,
    pageID: "speakerList"
  });
});

router.get("/speakers/:speakerid", (req, res) => {
    let pagePhotos = [];
    let pageSpeakers = [];

    data.speakers.forEach((speakerObj) => {
        
        if(speakerObj.shortname == req.params.speakerid){

            pageSpeakers.push(speakerObj);
            pagePhotos = speakerObj.artwork
        }
    })

  res.render("speakers",
  {
      pageTitle: "Speaker List",
      artistName:  "",
      artwork: pagePhotos,
      allSpeakers: data.speakers,
      pageID: "speakerlist"
  })
  
  
//   );
});
module.exports = router;
