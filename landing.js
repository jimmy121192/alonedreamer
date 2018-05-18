var play = document.getElementById("play");
var login = document.getElementById("login");
var inpname = document.getElementById("inpname");
var title = document.getElementById("title");
var next = document.getElementById("next");
var previous = document.getElementById("previous");

play.addEventListener("click", function(){

	title.style.left ="-3000px";
    title.style.opacity = "0";
	login.style.top ="50px";
	login.style.opacity ="1";

})

// document.addEventListener("scroll", function(){

// 	title.style.opacity="0";
// })

// window.onscroll = function() {myFunction()};

// function myFunction() {
//     if (title.scrollTop > 50) {
//         title.style.opacity="0";
//     } else {
//         title.style.opacity="1";
//     }
// }

//MOUSEWHEEL EVENT = > SHOW/HIDE TITLE
 $('body').on('mousewheel', function(e){
        if(e.originalEvent.wheelDelta > 0) {
        	title.style.transition = "2s"
            title.style.opacity="1";
         
            login.style.opacity="1";
            ;
        }
        else {
        	title.style.transition = "0.7s";
            title.style.opacity="0";
       
            login.style.opacity="0";
            
        }
    });




 next.addEventListener("click", function(){
    if(inpname.value==""){
        alert("Please give me your beautiful name 😋😋");

    }
    else {
        sessionStorage.setItem("yourname", inpname.value);
        window.location = "home.html"
    }
 });
 previous.addEventListener("click", function(){
    
    title.style.left ="100px";
    title.style.opacity = "1";
    login.style.top ="1800px";
    login.style.opacity ="0";
 })

  