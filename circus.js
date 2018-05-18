

var hat = document.getElementById("hat");
var chatbox = document.getElementById("chatbox");
var bunny = document.getElementById("bunny");
var rubik = document.getElementById("wrapper");
var jukebox = document.getElementById("jukebox");
var red = document.getElementById("red");
var green = document.getElementById("green");
var blue = document.getElementById("blue");
var yellow = document.getElementById("yellow");
var orange = document.getElementById("orange");
var white = document.getElementById("white");
var cube = document.getElementById("cube");
var num1 = document.getElementById("num1");
var num2 = document.getElementById("num2");
var num3 = document.getElementById("num3");
var num4 = document.getElementById("num4");
var num5 = document.getElementById("num5");
var num6 = document.getElementById("num6");
var num7 = document.getElementById("num7");
var num8 = document.getElementById("num8");
var num9 = document.getElementById("num9");
var push = document.getElementById("push");
var reset = document.getElementById("reset");
var quit = document.getElementById("quit");
var button = document.getElementById("button");
var controls = document.getElementById("controls");
var navi = document.getElementById("navi");
var sound = document.getElementById("sound");
var y2 = document.getElementById("y2");
var y4 = document.getElementById("y4");
var y6 = document.getElementById("y6");
var y7 = document.getElementById("y7");
var y8 = document.getElementById("y8");
var y9 = document.getElementById("y9");
var g2 = document.getElementById("g2");
var g3 = document.getElementById("g3");
var g4 = document.getElementById("g4");
var g6 = document.getElementById("g6");
var g8 = document.getElementById("g8");
var g9 = document.getElementById("g9");
var r1 = document.getElementById("r1");
var r3 = document.getElementById("r3");
var r5 = document.getElementById("r5");
var r8 = document.getElementById("r8");
var r9 = document.getElementById("r9");
var b1 = document.getElementById("b1");
var b3 = document.getElementById("b3");
var b5 = document.getElementById("b5");
var b6 = document.getElementById("b6");
var b8 = document.getElementById("b8");
var w1 = document.getElementById("w1");
var w3 = document.getElementById("w3");
var w5 = document.getElementById("w5");
var w6 = document.getElementById("w6");
var w7 = document.getElementById("w7");
var w8 = document.getElementById("w8");
var w9 = document.getElementById("w9");
var o1 = document.getElementById("o1");
var o2 = document.getElementById("o2");
var o5 = document.getElementById("o5");
var o6 = document.getElementById("o6");
var o4 = document.getElementById("o4");
var o8 = document.getElementById("o8");
var o9 = document.getElementById("o9");

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



quit.addEventListener('click', function(){
  window.location = "map.html"
})
//Yellow choice

yellow.addEventListener("click", function(){
    cube.style.transform=" rotateX(-90deg) rotateY(360deg)";
    num1.innerHTML="<span class='key'>6</span>";
    
    num2.innerHTML="";
    
    num3.innerHTML="<span class='key'>2</span>";
    
    num4.innerHTML="";
    num5.innerHTML="<span class='key'>3</span>";
    
    num6.innerHTML="";
    num7.innerHTML="";
    num8.innerHTML="";   
    num9.innerHTML="";
var editable_yellow = document.querySelectorAll("[contenteditable]");
editable_yellow[0].setAttribute("contenteditable", false);
editable_yellow[2].setAttribute("contenteditable", false);
editable_yellow[4].setAttribute("contenteditable", false);
editable_yellow[1].setAttribute("contenteditable", true);
editable_yellow[3].setAttribute("contenteditable", true);
editable_yellow[5].setAttribute("contenteditable", true);
editable_yellow[6].setAttribute("contenteditable", true);
editable_yellow[7].setAttribute("contenteditable", true);
editable_yellow[8].setAttribute("contenteditable", true);


});




//Red choice


red.addEventListener("click", function(){
    cube.style.transform=" rotateX(0deg) rotateY(0deg)";
    num1.innerHTML="";
    num2.innerHTML="<span class='key'>1</span>";
    
    
    num3.innerHTML="";
    num5.innerHTML="";
   
    num4.innerHTML="<span class='key'>3</span>";
  
    num6.innerHTML="<span class='key'>7</span>";
    
    num7.innerHTML="<span class='key'>4</span>";
    
    num8.innerHTML="";   
    num9.innerHTML="";
var editable_red = document.querySelectorAll("[contenteditable]");
editable_red[1].setAttribute("contenteditable", false);
editable_red[3].setAttribute("contenteditable", false);
editable_red[5].setAttribute("contenteditable", false);
editable_red[6].setAttribute("contenteditable", false);
editable_red[2].setAttribute("contenteditable", true);
editable_red[0].setAttribute("contenteditable", true);
editable_red[7].setAttribute("contenteditable", true);
editable_red[4].setAttribute("contenteditable", true);
editable_red[8].setAttribute("contenteditable", true);
});


//GREEN choice

green.addEventListener("click", function(){
    cube.style.transform=" rotateX(0deg) rotateY(90deg)";
    num1.innerHTML="<span class='key'>7</span>";
    num2.innerHTML="";
    num7.innerHTML="<span class='key'>5</span>";
    num4.innerHTML="";
    num5.innerHTML="<span class='key'>4</span>";
    num6.innerHTML="";
    num3.innerHTML="";
    num8.innerHTML="";   
    num9.innerHTML="";
var editable_green = document.querySelectorAll("[contenteditable]");
editable_green[0].setAttribute("contenteditable", false);
editable_green[4].setAttribute("contenteditable", false);
editable_green[6].setAttribute("contenteditable", false);
editable_green[1].setAttribute("contenteditable", true);
editable_green[2].setAttribute("contenteditable", true);
editable_green[3].setAttribute("contenteditable", true);
editable_green[5].setAttribute("contenteditable", true);
editable_green[7].setAttribute("contenteditable", true);
editable_green[8].setAttribute("contenteditable", true);
});


//BLUE choice

blue.addEventListener("click", function(){
    cube.style.transform=" rotateX(-360deg) rotateY(270deg)";
    num1.innerHTML="";
    num2.innerHTML="<span class='key'>9</span>";
    
    
    num3.innerHTML="";
    num5.innerHTML="";
    num6.innerHTML="";
    num4.innerHTML="<span class='key'>6</span>";
  
    
    
    num7.innerHTML="<span class='key'>7</span>";
    
    num8.innerHTML=""; 
    num9.innerHTML="<span class='key'>3</span>";  
    
var editable_blue = document.querySelectorAll("[contenteditable]");
editable_blue[1].setAttribute("contenteditable", false);
editable_blue[3].setAttribute("contenteditable", false);
editable_blue[6].setAttribute("contenteditable", false);
editable_blue[8].setAttribute("contenteditable", false);
editable_blue[2].setAttribute("contenteditable", true);
editable_blue[0].setAttribute("contenteditable", true);
editable_blue[7].setAttribute("contenteditable", true);
editable_blue[4].setAttribute("contenteditable", true);
editable_blue[5].setAttribute("contenteditable", true);
});



//Orange choice



orange.addEventListener("click", function(){
    cube.style.transform=" rotateX(-540deg) rotateY(360deg)";
    num1.innerHTML="";
    num2.innerHTML=""
    num3.innerHTML="<span class='key'>5</span>";
    num5.innerHTML="";
   
    num4.innerHTML="";
  
    num6.innerHTML="";
    
    num7.innerHTML="<span class='key'>4</span>";
    
    num8.innerHTML="";   
    num9.innerHTML="";
var editable_orange = document.querySelectorAll("[contenteditable]");
editable_orange[2].setAttribute("contenteditable", false);
editable_orange[6].setAttribute("contenteditable", false);
editable_orange[5].setAttribute("contenteditable", true);
editable_orange[3].setAttribute("contenteditable", true);
editable_orange[1].setAttribute("contenteditable", true);
editable_orange[0].setAttribute("contenteditable", true);
editable_orange[7].setAttribute("contenteditable", true);
editable_orange[4].setAttribute("contenteditable", true);
editable_orange[8].setAttribute("contenteditable", true);
});


//White Choice

white.addEventListener("click", function(){
    cube.style.transform=" rotateX(-630deg) rotateY(360deg)";
    num1.innerHTML="";
    num2.innerHTML="<span class='key'>6</span>";
    
    
    num3.innerHTML="";
    num5.innerHTML="";
   
    num4.innerHTML="<span class='key'>3</span>";
  
    num6.innerHTML="";
    
    num7.innerHTML="";
    
    num8.innerHTML="";   
    num9.innerHTML="";
var editable_white = document.querySelectorAll("[contenteditable]");
editable_white[1].setAttribute("contenteditable", false);
editable_white[3].setAttribute("contenteditable", false);
editable_white[5].setAttribute("contenteditable", true);
editable_white[6].setAttribute("contenteditable", true);
editable_white[2].setAttribute("contenteditable", true);
editable_white[0].setAttribute("contenteditable", true);
editable_white[7].setAttribute("contenteditable", true);
editable_white[4].setAttribute("contenteditable", true);
editable_white[8].setAttribute("contenteditable", true);
});


//Hat event click


hat.addEventListener("click", function(){
    rubik.style.top="17%";
    rubik.style.opacity="1";
    rubik.style.transform =  "rotate(0deg) scale(1,1)";
    sound.innerHTML ="<audio autoplay><source src='./sound/pop.mp3'></audio>";

})

//Bunny event hover
bunny.addEventListener("mouseenter", function(){

    chatbox.style.transition="0.5s";
    chatbox.style.display="block";

})
bunny.addEventListener("mouseleave", function(){

    chatbox.style.transition="0.5s";
    chatbox.style.display="none";

})



bunny.addEventListener("click", function(){
controls.style.right = "0px";
    button.style.backgroundImage ="url(img/a2.png)"
})



//Saria's Song : My favorite melody from Zelda

$(document).ready(function() {
 

  // Load background music.
  var backgroundMusicURL =
    "./sound/sarias.mp3";
  var backgroundMusic = new Audio(backgroundMusicURL);
  var musicState = "Not Playing";

  $("#jukebox").click(function() {
    if (musicState === "Not Playing") {
      backgroundMusic.play();
      musicState = "Playing";
      navi.style.opacity="1"; //navi appears
      navi.style.left="10%";

    } else if (musicState === "Playing") {
      backgroundMusic.pause();
      musicState = "Not Playing";
    }
  });

  
  }); 


//Enter the numbers to the Rubik

push.addEventListener("click", function(){
  sound.innerHTML ="<audio autoplay><source src='./sound/click.mp3'></audio>";
    if(yellow.checked){
   y2.innerHTML = num2.innerHTML;
   y4.innerHTML = num4.innerHTML;
   y6.innerHTML = num6.innerHTML;
   y7.innerHTML = num7.innerHTML;
   y8.innerHTML = num8.innerHTML;
   y9.innerHTML = num9.innerHTML;
    }
    else if (green.checked){
   g2.innerHTML = num2.innerHTML;
   g3.innerHTML = num3.innerHTML;
   g4.innerHTML = num4.innerHTML;
   g6.innerHTML = num6.innerHTML;
   g8.innerHTML = num8.innerHTML;
   g9.innerHTML = num9.innerHTML;  
    }
    else if (red.checked){
   r1.innerHTML = num1.innerHTML;
   r3.innerHTML = num3.innerHTML;
   r5.innerHTML = num5.innerHTML;
   r8.innerHTML = num8.innerHTML;
   r9.innerHTML = num9.innerHTML;  
    }
     else if (blue.checked){
   b1.innerHTML = num1.innerHTML;
   b3.innerHTML = num3.innerHTML;
   b5.innerHTML = num5.innerHTML;
   b6.innerHTML = num6.innerHTML;
   b8.innerHTML = num8.innerHTML;  
    }
    else if (white.checked){
   w1.innerHTML = num1.innerHTML;
   w3.innerHTML = num3.innerHTML;
   w5.innerHTML = num5.innerHTML;
   w6.innerHTML = num6.innerHTML;
   w7.innerHTML = num7.innerHTML;
   w8.innerHTML = num8.innerHTML;
   w9.innerHTML = num9.innerHTML;   
    }
    else if (orange.checked){
   o1.innerHTML = num1.innerHTML;
   o2.innerHTML = num2.innerHTML;
   o4.innerHTML = num4.innerHTML;
   o5.innerHTML = num5.innerHTML;
   o6.innerHTML = num6.innerHTML;
   o8.innerHTML = num8.innerHTML;
   o9.innerHTML = num9.innerHTML;   
    }
  checkresult();
  victory();

})


//Reset function

reset.addEventListener("click", function(){
  sound.innerHTML ="<audio autoplay><source src='./sound/click.mp3'></audio>";
    if(yellow.checked){
   y2.innerHTML = num2.innerHTML = "";
   y4.innerHTML = num4.innerHTML ="";
   y6.innerHTML = num6.innerHTML = "";
   y7.innerHTML = num7.innerHTML = "";
   y8.innerHTML = num8.innerHTML = "";
   y9.innerHTML = num9.innerHTML = "";
    }
    else if (green.checked){
   g2.innerHTML = num2.innerHTML = "";
   g3.innerHTML = num3.innerHTML = "";
   g4.innerHTML = num4.innerHTML = "";
   g6.innerHTML = num6.innerHTML = "";
   g8.innerHTML = num8.innerHTML = "";
   g9.innerHTML = num9.innerHTML = "";  
    }
    else if (red.checked){
   r1.innerHTML = num1.innerHTML = "";
   r3.innerHTML = num3.innerHTML = "";
   r5.innerHTML = num5.innerHTML = "";
   r8.innerHTML = num8.innerHTML = "";
   r9.innerHTML = num9.innerHTML = "";
    }
    else if (blue.checked){
   b1.innerHTML = num1.innerHTML = "";
   b3.innerHTML = num3.innerHTML = "";
   b5.innerHTML = num5.innerHTML = "";
   b6.innerHTML = num6.innerHTML = "";
   b8.innerHTML = num8.innerHTML = "";  
    }
    else if (white.checked){
   w1.innerHTML = num1.innerHTML = "";
   w3.innerHTML = num3.innerHTML = "";
   w5.innerHTML = num5.innerHTML = "";
   w6.innerHTML = num6.innerHTML = "";
   w7.innerHTML = num7.innerHTML = "";
   w8.innerHTML = num8.innerHTML = "";
   w9.innerHTML = num9.innerHTML = "";   
    }
    else if (orange.checked){
   o1.innerHTML = num1.innerHTML = "";
   o2.innerHTML = num2.innerHTML = "";
   o4.innerHTML = num4.innerHTML = "";
   o5.innerHTML = num5.innerHTML = "";
   o6.innerHTML = num6.innerHTML = "";
   o8.innerHTML = num8.innerHTML = "";
   o9.innerHTML = num9.innerHTML = "";   
    }
})

//Open&close menu

button.addEventListener("click", function(){
    

    if(controls.style.right == "0px"){
    controls.style.right="-510px";
    button.style.backgroundImage ="url(img/a1.png)";
    }
    else {

    controls.style.right = "0px";
    button.style.backgroundImage ="url(img/a2.png)";
    }
})


//navi's response
navi.addEventListener("click", function(){
  if(navi.style.opacity ==1){
sound.innerHTML ="<audio autoplay><source src='./sound/navi.mp3'></audio>";}
});



var redkey = document.getElementById("redkey");
var greenkey = document.getElementById("greenkey");
var bluekey = document.getElementById("bluekey");
var yellowkey = document.getElementById("yellowkey");
var whitekey = document.getElementById("whitekey");
var orangekey = document.getElementById("orangekey");



//Key words
function keywords() {
  if(red.checked){
      redkey.innerText = "D"}
  else if(green.checked){
      greenkey.innerText = "I"}
  else if(yellow.checked){
      yellowkey.innerText = "V"}
  else if(blue.checked){
      bluekey.innerText = "I"}
  else if(orange.checked){
      orangekey.innerText = "N"}
  else if(white.checked){
      whitekey.innerText = "E"}
}


// Checking

function checkresult(){
  if(parseInt(num1.innerText) + parseInt(num2.innerText) + parseInt(num3.innerText) == 15 & parseInt(num4.innerText) + parseInt(num5.innerText) + parseInt(num6.innerText) == 15 & parseInt(num7.innerText) + parseInt(num8.innerText) + parseInt(num9.innerText) == 15 & parseInt(num1.innerText) + parseInt(num4.innerText) + parseInt(num7.innerText) == 15){
    sound.innerHTML ="<audio autoplay><source src='./sound/secret.mp3'></audio>";
    keywords();
    }
    else {sound.innerHTML ="<audio autoplay><source src='./sound/notcorrect.mp3'></audio>";
  }

  }


 //Victory condition 
function victory(){
if (redkey.innerText == "D" & greenkey.innerText == "I" & yellowkey.innerText == "V" & bluekey.innerText == "I" & orangekey.innerText == "N" & whitekey.innerText == "E"){
    sound.innerHTML ="<audio autoplay><source src='./sound/victory.mp3'></audio>";
    setTimeout(function() { alert("Hooray. You did it 😍😍😍!!! Your keyword for next level is DIVINE "); }, 1000);

}
}





var jimmy = document.getElementById("jimmy");
var chat = document.getElementById("chat");
var yes = document.getElementById("yes");
var no = document.getElementById("no");
var leftdoor = document.getElementById("leftdoor");
var rightdoor = document.getElementById("rightdoor");
var frontside = document.getElementById("frontside");
var object = document.getElementById("BACKGROUND_2");
var container = document.getElementById("container");
var content = document.getElementById("content");
jimmy.addEventListener("click", function(){
  chat.style.display ="block";
  intro1.style.display ="block";
  sound.innerHTML ="<audio autoplay><source src='./sound/hello.mp3'></audio>";

})
var x = 1;


//Chatbox
yes.addEventListener("click", function(){
  
  x++;
  sound.innerHTML ="<audio autoplay><source src='./sound/click.mp3'></audio>";
  if(x==8){
    chat.style.display ="none";      
    leftdoor.style.opacity="0";
    rightdoor.style.opacity="0";
    jimmy.style.opacity="0";
     button.style.display="block";
     open.style.display="block";
     content.removeChild(container);

  setTimeout(function() {while (frontside) {
    frontside.removeChild(leftdoor);    //Remove stuff
    frontside.removeChild(rightdoor);
    object.removeChild(jimmy);
    };},1000);

  }
  else {

    document.getElementById("intro"+x).style.display="block";
    document.getElementById("intro"+(x-1)).style.display="none";
  }
})




no.addEventListener("click", function(){
  chat.style.display ="none";
  document.getElementById("intro"+x).style.display="none";
  x = 1;


})











