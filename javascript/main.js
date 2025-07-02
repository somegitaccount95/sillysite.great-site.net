customElements.define("top-header", TopHeader)
customElements.define("dark-mode", DarkMode)

let porkAudio = document.getElementById("john");
let tickAudio = document.getElementById("tick");
let clickAudio = document.getElementById("click");
let dark;

let localStorage = window.localStorage;

if (localStorage.getItem("theme") === "dark") {
  dark = true;
} else if (localStorage.getItem("theme") === "light") {
  dark = false;
} else {
  dark = false;
}

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
  if (dark) {
    localStorage.setItem("theme", "light");
    document.getElementById("dark-mode").innerHTML = "dark mode";
  } else {
    localStorage.setItem("theme", "dark");
    document.getElementById("dark-mode").innerHTML = "light mode";
  }

  document.getElementById("dark-mode").classList.toggle("light-button");

  document.getElementsByTagName("body")[0].classList.toggle("dark");

  document.querySelectorAll("button").forEach(element => {
    element.classList.toggle("light-shadow");
  });

  dark = !dark; 
}

function setDark() {
    const allElements = document.querySelectorAll('*');

  allElements.forEach(element => {
    element.classList.add('disable-transitions');
  });

  document.getElementById("dark-mode").innerHTML = "light mode"
  
  document.getElementById("dark-mode").classList.toggle("light-button");

  document.getElementsByTagName("body")[0].classList.toggle("dark");

  document.querySelectorAll("button").forEach(element => {
    element.classList.toggle("light-shadow");
  });

  setTimeout(() => {
    allElements.forEach(element => {
    element.classList.remove('disable-transitions');
  });
  }, 100);
}

if (dark) {
  setDark();
}
