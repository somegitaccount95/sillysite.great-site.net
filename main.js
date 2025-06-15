let porkAudio = document.getElementById("john");

function john() {
  porkAudio.currentTime = 0;
  porkAudio.pause();
  porkAudio.play();
}

function clickSound(){
  document.getElementById("click").play();
}