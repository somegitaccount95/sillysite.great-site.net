
class TopHeader extends HTMLElement {
  connectedCallback() {
    this.innerHTML = 
    `
    <div id="welcome-bar">
      <h2 id="welcome"><a href="/">WELCOME TO NON SILLY SITE</a></h2>
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