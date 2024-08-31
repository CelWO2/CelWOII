const addEventListeners = function () {
    const controlIcon = document.querySelector(".js-control-icon");
    const song = document.querySelector("audio");
  
    controlIcon.addEventListener("click", function () {
      console.log("song.paused");
      if (song.paused) {
        song.play();
        controlIcon.innerHTML = "pause";
      } else {
        song.pause();
        controlIcon.innerHTML = "play_arrow";
      }
    });
    // Add event listener for rewind button
    const rewindIcon = document.querySelector(".js-rewind-icon");
    const forwardIcon = document.querySelector(".js-forward-icon");
    rewindIcon.addEventListener("click", function () {
      console.log("rewind");
      song.currentTime = Math.max(0, song.currentTime - 30);
    });
    forwardIcon.addEventListener("click", function () {
      song.currentTime = Math.min(song.duration, song.currentTime + 30);
    });
    readSong(song);
  };
  
  //play song using slider
  const readSong = function (song) {
    console.log(song);
    const progress = document.getElementById("progress");
    const controlIcon = document.querySelector(".js-control-icon");
  
    console.log(progress);
    if (song.play) {
      setInterval(() => {
        progress.value = song.currentTime;
      }, 500);
    }
  
    progress.onchange = function () {
      song.play();
      song.currentTime = progress.value;
      controlIcon.innerHTML = "pause";
    };
  };
  
  const init = function () {
    console.log("🔥");
    addEventListeners();
    //   readSong();
  };
  
  document.addEventListener("DOMContentLoaded", init);
  