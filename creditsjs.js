$(document).ready(function() {
 

  // Load background music.
  var backgroundMusicURL =
    "sound/santalucia.mp3";
  var backgroundMusic = new Audio(backgroundMusicURL);
  var musicState = "Not Playing";

  $("#babymoon").click(function() {
    if (musicState === "Not Playing") {
      backgroundMusic.play();
      musicState = "Playing";
      
    } else if (musicState === "Playing") {
      backgroundMusic.pause();
      musicState = "Not Playing";
    
    }
  });

  
  });