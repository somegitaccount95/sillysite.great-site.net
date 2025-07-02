function toggle() {
  if (dark) {
    localStorage.setItem("theme", "light");
    document.getElementById("dark-mode").innerHTML = "dark mode";
  } else {
    localStorage.setItem("theme", "dark");
    document.getElementById("dark-mode").innerHTML = "light mode";
  }
  document.getElementById("dark-mode").classList.toggle("light-button");
  document.getElementById("policy-text").classList.toggle("light-text");
  document.getElementById("policy").classList.toggle("light-text");

  document.getElementById("values-text").classList.toggle("light-text");
  document.getElementById("values").classList.toggle("light-text");

  document.getElementById("promise-text").classList.toggle("light-text");
  document.getElementById("promise").classList.toggle("light-text");

  document.getElementsByTagName("body")[0].classList.toggle("dark");

  document.querySelectorAll("button").forEach(element => {
    element.classList.toggle("light-shadow");
  });
  dark = !dark; 
}
