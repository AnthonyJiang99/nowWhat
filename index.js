var randomSlide;
var numSlides = 5;

$("#chooseGame").click(function() {
  $(".carousel").carousel("pause");
  $(".carousel").carousel(chooseRandom(numSlides));
  console.log(randomSlide);
});

$("#dontLikeGame").click(function() {
  if(numSlides<=1) {
    alert("You're out of games! Refresh to load all games back in.");
  }
  $(".carousel").find(".carousel-item.active").remove();
  $(".carousel").find(".carousel-item").first().addClass("active");
  numSlides--;
  $(".carousel").carousel(chooseRandom(numSlides));
});

function chooseRandom(n) {
  randomSlide = Math.floor(Math.random()*n);
  return randomSlide;
}
