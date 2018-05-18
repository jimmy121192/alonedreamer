var sound = document.getElementById("sound");
var church = document.getElementById("church");
var ghost = document.getElementById("ghost");
var tent = document.getElementById("tent");
var airbaloon = document.getElementById("airbaloon");
var mountain = document.getElementById("mountain");
var level3 = document.getElementById("level3");
var windmill = document.getElementById("windmill");
var circus = document.getElementById("circus");
var level7 = document.getElementById("level7");
var level8 = document.getElementById("level8");
var level11 = document.getElementById("level11");
var level12 = document.getElementById("level12");
var back = document.getElementById("back");



church.addEventListener("click", function(){


    sound.innerHTML ="<audio autoplay><source src='./sound/westminsterchimes.mp3'></audio>";
	});

level3.addEventListener("click", function(){

	ghost.style.display="block";
	ghost.style.animation ="float1 3s ease-in-out infinite"
    sound.innerHTML ="<audio autoplay><source src='./sound/ghost.mp3'></audio>";
	});


airbaloon.addEventListener("click", function(){
	console.log();
window.location = ('sky.html');
});
circus.addEventListener("click", function(){
window.location = ('circus.html');
});
windmill.addEventListener("click", function(){
window.location = ('farm.html');
});
level7.addEventListener("click", function(){
window.location = ('town.html');

});


back.addEventListener("click", function(){
	window.location = "home.html"
})

document.addEventListener("DOMContentLoaded",function(){
setTimeout(function(){document.getElementById("loader-wrapper").style.display = "none"},6000);

});

