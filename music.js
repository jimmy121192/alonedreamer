$(document).ready(function() {
 

  // Load background music.
  var backgroundMusicURL =
    "sound/whistle.mp3";
  var backgroundMusic = new Audio(backgroundMusicURL);
  var musicState = "Not Playing";

  $("#sound").click(function() {
    if (musicState === "Not Playing") {
      backgroundMusic.play();
      musicState = "Playing";
      // $("#play-music").html("Music: On");
    } else if (musicState === "Playing") {
      backgroundMusic.pause();
      musicState = "Not Playing";
      // $("#play-music").html("Music: Off");
    }
  });

  
  }); // End of click function.



