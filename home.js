var menu = document.getElementById("menu");
var levelselect = document.getElementById("levelselect");
var dropdown = document.getElementById("dropdown");
var level = document.getElementById("level");
var back = document.getElementById("back");
var map = document.getElementById("map");
var home = document.getElementById("home");
var lv2 = document.getElementById("lv2");
var lv5 = document.getElementById("lv5");
var lv6 = document.getElementById("lv6");
var lv7 = document.getElementById("lv7");
var close = document.getElementById("close");
var music = document.getElementById("music");
var home = document.getElementById("home");


menu.addEventListener("click", function(){
	if(dropdown.style.display== "block"){
		sound.innerHTML ="<audio autoplay><source src='./sound/click.mp3'></audio>";
		dropdown.style.display= "none"
	} else {
	dropdown.style.display= "block";
sound.innerHTML ="<audio autoplay><source src='./sound/click.mp3'></audio>";}
});
level.addEventListener("click", function(){
	sound.innerHTML ="<audio autoplay><source src='./sound/click.mp3'></audio>";
	levelselect.style.display = "block"
})
close.addEventListener("click", function(){
	sound.innerHTML ="<audio autoplay><source src='./sound/click.mp3'></audio>";
	levelselect.style.display = "none"
})
home.addEventListener("click", function(){
	window.location = "landing.html"
})
map.addEventListener("click", function(){
	window.location = "map.html"
})
back.addEventListener("click", function(){
	window.location = "credits.html"
})
$(document).ready(function() {
 

  // Load background music.
  var backgroundMusicURL =
    "sound/cavatina.mp3";
  var backgroundMusic = new Audio(backgroundMusicURL);
  var musicState = "Not Playing";

  $("#music").click(function() {
    if (musicState === "Not Playing") {
      backgroundMusic.play();
      musicState = "Playing";
    } else if (musicState === "Playing") {
      backgroundMusic.pause();
      musicState = "Not Playing";
    }
  });

  
  });

//CLICKABLE LEVEL THUMB

lv2.addEventListener("click", function(){
	window.location = "sky.html"
})
lv5.addEventListener("click", function(){
	window.location = "farm.html"
})
lv6.addEventListener("click", function(){
	window.location = "circus.html"
})
lv7.addEventListener("click", function(){
	window.location = "town.html"
})

//REMOVE LOADER
document.addEventListener("DOMContentLoaded",function(){
setTimeout(function(){document.getElementById("loader-wrapper").style.display = "none"},4000);

});
