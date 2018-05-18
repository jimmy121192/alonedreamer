var pigsign = document.getElementById("pigsign");
var cocksign = document.getElementById("cocksign");
var farmer = document.getElementById("farmer");
var scarecrow = document.getElementById("scarecrow_1_");
var quit = document.getElementById("quit");
var reset = document.getElementById("reset");
var check = document.getElementById("check");
var yes = document.getElementById("yes");
var no = document.getElementById("no");
var boar = document.getElementById("boar");
var grass = document.getElementById("grass");
var crowchat = document.getElementById("crowchat");
var chatbox = document.getElementById("chatbox");
var chat1 = document.getElementById("chat1");
var chat2 = document.getElementById("chat2");
var chat3= document.getElementById("chat3");
var chat4= document.getElementById("chat4");
var pignum = 0;
pigsign.addEventListener("click", function(){
	pignum++;
	document.getElementById("pig"+pignum).style.display = 'block';
})
var cocknum = 0;
cocksign.addEventListener("click", function(){
	cocknum++;
	document.getElementById("cock"+cocknum).style.display = 'block';
})

reset.addEventListener('click', function(){
	rs();
	
});

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


function rs(){
	for(var i = 1; i <= cocknum;i++){
		// cocknum =0;
		document.getElementById("cock"+i).style.display = 'none';
	};
	for(var j = 1; j <= pignum;j++){
		// pignum =0;
		document.getElementById("pig"+j).style.display = 'none';
	}
	cocknum =0;
	pignum =0;
}

quit.addEventListener('click', function(){
	window.location = "home.html"
})

check.addEventListener("click", function(){
	submit();
})

function submit() {
if (pignum == 7 && cocknum == 11)
	{
	alert ("Congrats ^^!! Your 6th keyword is DESTINY");
  document.getElementById("sound").innerHTML ="<audio autoplay style='display: none;'><source src='./sound/timberthanks.mp3'></audio>";
	rs()
}
else {
	
    document.getElementById("sound").innerHTML ="<audio autoplay style='display: none;'><source src='./sound/timberno.mp3'></audio>";
    alert ("Oh! Ho ho ho ho. No :))");
    rs()
}
}
farmer.addEventListener("click", function(){
chatbox.style.display="block";
chat1.style.display="block";
chat2.style.display="none";
chat3.style.display="none";
chat4.style.display="none";
// document.getElementById("chat"+x).style.display="none"
x = 1;

})

var x = 1;


//Chatbox
yes.addEventListener("click", function(){
  
  x++;
  sound.innerHTML ="<audio autoplay><source src='./sound/click.mp3'></audio>";
  if(x==5){
    chatbox.style.display ="none";     

  }
  else {

    document.getElementById("chat"+x).style.display="block";
    document.getElementById("chat"+(x-1)).style.display="none";
  }
})

no.addEventListener("click", function(){
  chatbox.style.display ="none";
  document.getElementById("chat"+x).style.display="none";
  x = 1;


})

scarecrow.addEventListener("mouseenter", function (){
	
	crowchat.style.display="block";

})
scarecrow.addEventListener("mouseleave", function (){
	

	crowchat.style.display="none";	

})
$(document).ready(function() {
  var backgroundMusicURL =
    "./sound/farm.mp3";
  var backgroundMusic = new Audio(backgroundMusicURL);
  var musicState = "Not Playing";

  $("#scarecrow_1_").click(function() {
    if (musicState === "Not Playing") {
      backgroundMusic.play();
      musicState = "Playing";
      
    } else if (musicState === "Playing") {
      backgroundMusic.pause();
      musicState = "Not Playing";
    
    }
  });

  
  });

boar.addEventListener("click", function (){
	boar.style.transform = "translateX(-1700px)";
	setTimeout(function(){grass.style.display = "none"},5000);
})





