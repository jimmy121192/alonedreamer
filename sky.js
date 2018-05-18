var baloon = document.getElementById("airbaloon");
var intro = document.getElementById("intro");
var start = document.getElementById("start");
var exit = document.getElementById("exit");
var countdown = document.getElementById("countdown");
var birds = document.getElementById("birds");
var ybirds = document.getElementById("ybirds");
var gbirds = document.getElementById("gbirds");
var spaceship = document.getElementById("spaceship");
var lives = document.getElementById("lives");
var progress = document.getElementById("progress-bar");
var sound = document.getElementById("sound");
var content = document.getElementById("content");
var board = document.getElementById("board");

//Spawn birds
function flytime(){
setTimeout(redtime,100);
setTimeout(redtime,500);
setTimeout(redtime,1000);

setTimeout(yellowtime,5000);
setTimeout(yellowtime,5500);
setTimeout(yellowtime,6500);
setTimeout(yellowtime,6900);

setTimeout(greentime,7400);
setTimeout(greentime,8000);
setTimeout(greentime,8500);
setTimeout(greentime,9000);
}

//victory popup
function action(){
    if(board.style.backgroundImage == "url(img/win.png)"){
       
        window.location = ('home.html');
    }
    else {
     
        location.reload();
    }
}




var hp = 3; //LIFE POINT
var point = document.getElementById("point");
var kill = 0
function redtime() {



var spawnred = document.createElement("img");
spawnred.src = "./img/redbird.png";
document.getElementById("birds").appendChild(spawnred);
spawnred.className="redbirds";

setTimeout(function() {birds.removeChild(spawnred); hp -=1}, 6000);
if(hp == 2){
  
    lives.innerText ="❤️❤️"
}
else if(hp == 1){
   
    lives.innerText ="❤️"
}
else if(hp == 0){
    baloon.style.top = "2000px";
    lives.innerText ="💀";
   
    stoprandom();
     birds.style.display ="none";
    ybirds.style.display ="none";
    gbirds.style.display ="none";
}


spawnred.addEventListener("mouseenter", function(){

	spawnred.src ="./img/explosion.gif";
	
	kill +=1;
	setTimeout(function() {birds.removeChild(spawnred)},300);
    point.innerText=" :"+kill;
    sound.innerHTML ="<audio autoplay><source src='./sound/pew1.mp3'></audio>";
	});


}

function yellowtime() {
var spawnyellow = document.createElement("img");
spawnyellow.src = "./img/yellowbird.png";
document.getElementById("ybirds").appendChild(spawnyellow);
spawnyellow.className="yellowbirds";



setTimeout(function() {ybirds.removeChild(spawnyellow); hp -=1}, 6000);
if(hp == 2){
  
    lives.innerText ="❤️❤️"
}
else if(hp == 1){
   
    lives.innerText ="❤️"
}
else if(hp == 0){
    baloon.style.top = "2000px";
    lives.innerText ="💀";
   
    stoprandom();
    birds.style.display ="none";
    ybirds.style.display ="none";
    gbirds.style.display ="none";
}


spawnyellow.addEventListener("mouseenter", function(){

    spawnyellow.src ="./img/explosion.gif";
    
    kill +=1;
    setTimeout(function() {ybirds.removeChild(spawnyellow)},300);
    point.innerText=" :"+kill;
    sound.innerHTML ="<audio autoplay><source src='./sound/pew1.mp3'></audio>";
    });
}

function greentime() {
var spawngreen = document.createElement("img");
spawngreen.src = "./img/greenbird.png";
document.getElementById("gbirds").appendChild(spawngreen);
spawngreen.className="greenbirds";



setTimeout(function() {gbirds.removeChild(spawngreen); hp -=1}, 6000);
if(hp == 2){
  
    lives.innerText ="❤️❤️"
}
else if(hp == 1){
   
    lives.innerText ="❤️"
}
else if(hp == 0){
    baloon.style.top = "2000px";
    lives.innerText ="💀";
    sound.innerHTML ="<audio autoplay><source src='./sound/ow.mp3'></audio>";
    board.style.display ="block";
    board.style.backgroundImage = "url(img/gameover.png)";
    stoprandom();
    content.removeChild(birds);
    content.removeChild(ybirds);
    content.removeChild(gbirds);
    spaceship.style.display ="none";
    score.style.display ="none";
    content.removeChild(progress);
    clearTimeout(win);
}


spawngreen.addEventListener("mouseenter", function(){

    spawngreen.src ="./img/explosion.gif";
    
    kill +=1;
    setTimeout(function() {gbirds.removeChild(spawngreen)},300);
    point.innerText=" :"+kill;
    sound.innerHTML ="<audio autoplay ><source src='./sound/pew1.mp3'></audio>";
    });
}



//START GAME
start.addEventListener("click", function(){
    sound.innerHTML ="<audio autoplay><source src='./sound/ready.mp3'></audio>";
    start.style.display ="none";
    exit.style.display ="none";
    intro.style.display ="none";
    baloon.style.display ="block";
    spaceship.style.display ="block";
    lives.style.display ="block";
    score.style.display ="block";
    progress.style.display ="block";
    timer = setInterval(flytime,3000);
    win = setTimeout(victory,60000);  
    countdown.innerHTML = "<img src='img/1.png' class='images'>";
    setTimeout(function(){countdown.innerHTML = "<img src='img/2.png' class='images'>"},1000);
    setTimeout(function(){countdown.innerHTML = "<img src='img/3.png' class='images'>"},2000);
    setTimeout(function(){countdown.innerHTML = "<img src='img/go.png' class='images'>"},3000);
    setTimeout(function(){content.removeChild(countdown)},3500);
});



function stoprandom(){	
	clearInterval(timer);
	
}
function victory(){ 
    board.style.display ="block"; 
    board.style.backgroundImage = "url(img/win.png)";
    sound.innerHTML ="<audio autoplay><source src='./sound/victory.mp3'></audio>";
    content.removeChild(baloon);
    content.removeChild(progress);
    birds.style.display ="none";
    ybirds.style.display ="none";
    gbirds.style.display ="none";
    baloon.style.display ="none";
    spaceship.style.display ="none";
    lives.style.display ="none";
    score.style.display ="none";
    progress.style.display ="none";
}




//////////////Tutorial

var open = document.getElementById("open"),
    control = document.getElementById("control");

open.addEventListener("click", function(){
  if (control.style.left == "0px") {
    control.style.left = "-420px";
  } else {
    control.style.left = "0px";
  }
});

//////////////Tutorial
