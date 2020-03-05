// let data = require("./music.json");

// console.log(data);
// let photoDeck = [];

// data.speakers.forEach((speakerObj) => {
//     photoDeck = photoDeck.concat(speakerObj.artwork);
//     // console.log(speakerObj.artwork);
// });
// console.log(photoDeck)

// if(photoDeck.length > 0){
//     for(let i =0; i < photoDeck.length; i++){
// photoDeck[i]

//     }
// }

var myIndex = 0;
carousel();

function carousel() {
  var i;
  var x = document.getElementsByClassName("mySlides");
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }
  myIndex++;
  if (myIndex > x.length) {
    myIndex = 1;
  }
  x[myIndex - 1].style.display = "block";
  setTimeout(carousel, 4000);
}

$(".counter").each(function() {
  $(this)
    .prop("Counter", 0)
    .animate(
      {
        Counter: $(this).text()
      },
      {
        duration: 4000,
        easing: "swing",
        step: function(now) {
          $(this).text(Math.ceil(now));
        }
      }
    );
});
