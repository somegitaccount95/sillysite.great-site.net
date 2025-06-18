
class TopHeader extends HTMLElement {
  connectedCallback() {
    this.innerHTML = 
    `
    <header>
            <a href="/">
                <h1 id="logo">
                    NON SILLY SITE
                </h1>
            </a>
            <div id="nav-buttons">
                <a href="https://kug.kesug.com" target="_blank">
                    <button onclick="clickSound()" onmouseover="tickSound()" class="button nav-button color-button" id="red-button">
                        riba
                    </button>
                </a>
                <a href="about.html">
                    <button onclick="clickSound()" onmouseover="tickSound()" class="button nav-button color-button" id="blue-button">
                        about
                    </button>
                </a>
                <a href="contact.html">
                    <button onclick="clickSound()" onmouseover="tickSound()" class="button nav-button color-button" id="green-button">
                        contact
                    </button>
                </a>
            </div>
            <img onclick="john()" id="pork" src="images/john-pork.jpg">
        </header>
    `
  }
}
class DarkMode extends HTMLElement {
  connectedCallback() {
    this.innerHTML = 
    `
    <div>
      <button onclick="clickSound(); toggle();" onmouseover="tickSound()" id="dark-mode" class="slide color-button button">
          dark mode
      </button>
    </div>
    `
  }
}