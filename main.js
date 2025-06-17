let porkAudio = document.getElementById("john");
let tickAudio = document.getElementById("tick");
let clickAudio = document.getElementById("click");
let dark =  true;

function john() {
  porkAudio.currentTime = 0;
  porkAudio.pause();
  porkAudio.play();
}

function clickSound(){
  clickAudio.currentTime = 0;
  clickAudio.pause();
  clickAudio.play();
}

function tickSound(){
  tickAudio.currentTime = 0;
  tickAudio.pause();
  tickAudio.play();
}

function shrekSpin() {
  document.getElementById("shrek").classList.remove("spinning");
  void document.getElementById("shrek").offsetWidth
  document.getElementById("shrek").classList.add("spinning");
}

function toggle() {
  if(!dark){
    document.getElementById("dark-mode").innerHTML = "dark mode";
  }else{
    document.getElementById("dark-mode").innerHTML = "light mode";
  }
  document.getElementById("dark-mode").classList.toggle("light-button");

  document.getElementsByTagName("body")[0].classList.toggle("dark");

  document.querySelectorAll("button").forEach(element => {
    element.classList.toggle("light-shadow");
  });
  dark = !dark;
}

class TopHeader extends HTMLElement {
  connectedCallback() {
    this.innerHTML = 
    `
    <div id="welcome-bar">
      <a href="/"><h2 id="welcome">WELCOME TO NON SILLY SITE</h2></a>
      <img onclick="john()" id="pork" src="images/john-pork.jpg">
    </div>
    `
  }
}
class DarkMode extends HTMLElement {
  connectedCallback() {
    this.innerHTML = 
    `
    <div>
      <button onclick="clickSound(); toggle();" onmouseover="tickSound()" id="dark-mode" class="color-button button">
          dark mode
      </button>
    </div>
    `
  }
}

customElements.define("top-header", TopHeader)
customElements.define("dark-mode", DarkMode)