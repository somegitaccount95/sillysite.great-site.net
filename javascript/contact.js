const canvas = document.getElementById("canvas");
const ribaImage = document.getElementById("riba");
const egamIabir = document.getElementById("abir"); // Reverse ;)
const ctx = canvas.getContext("2d");

let keys = {
    up: false,
    down: false,
    left: false,
    right: false
};

function roundToNearestPointTwo(number) {
  return Math.round(number * 5) / 5;
}

function rectsCollide(rect1, rect2) {
  return !(
    rect1.x + rect1.width <= rect2.x ||
    rect1.x >= rect2.x + rect2.width ||
    rect1.y + rect1.height <= rect2.y ||
    rect1.y >= rect2.y + rect2.height
  );
}

class Rect {
  constructor(x, y, width, height) {
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
  }
}

class Player {
    constructor(image, egami, width, height) {
        this.egami = egami;
        this.image = image;
        this.width = width;
        this.height = height;
        this.x = 0;
        this.y = 0;
        this.xVel = 0;
        this.yVel = 0;
        this.maxVel = 6;
        this.drag = -0.2;
        this.flipped = false;
    }

    draw() {
        if (this.flipped) {
            ctx.drawImage(this.egami, this.x, this.y, this.width, this.height);
        } else {
            ctx.drawImage(this.image, this.x, this.y, this.width, this.height);
        }
    }

    getRect() {
        return new Rect(this.x, this.y, this.width, this.height);
    }

    handleKeys() {
        if (keys.up) {
            player.yVel = -this.maxVel;
        } else if (keys.down) {
            player.yVel = this.maxVel;
        }

        if (keys.left) {
            player.xVel = -this.maxVel;
            this.flipped = false;
        } else if (keys.right) {
            player.xVel = this.maxVel;
            this.flipped = true;
        }
    }

    handlePhysics() {
        if (this.xVel > 0) {
            this.xVel += this.drag;
        } else if (this.xVel < 0) {
            this.xVel -= this.drag;
        }
        
        if (this.yVel > 0) {
            this.yVel += this.drag;
        } else if (this.yVel < 0) {
            this.yVel -= this.drag;
        }

        this.xVel = roundToNearestPointTwo(this.xVel);
        this.yVel = roundToNearestPointTwo(this.yVel);

        this.x += this.xVel;
        this.y += this.yVel;
    }

    update() {

        this.handleKeys();

        this.handlePhysics();

        this.draw();
    }
}

let player = new Player(ribaImage, egamIabir, 100, 30);

function clear() {
    ctx.fillStyle = "#0E87CC";
    ctx.fillRect(0, 0, canvas.width, canvas.height);
}

function resizeCanvas() {
    const dpr = window.devicePixelRatio;
    const rect = canvas.getBoundingClientRect();

    canvas.width = rect.width * dpr;
    canvas.height = rect.height * dpr;

    ctx.scale(dpr, dpr);

    canvas.style.width = `${rect.width}px`;
    canvas.style.height = `${rect.height}px`;
}


function update() {
    clear();

    player.update();

    window.requestAnimationFrame(update);
}

window.addEventListener('resize', resizeCanvas);

document.addEventListener('keydown', function(event) {
    if (event.key === 'ArrowUp') {
        keys.up = true;
    } else if (event.key === 'ArrowDown') {
        keys.down = true;
    } else if (event.key === 'ArrowRight') {
        keys.right = true;
    } else if (event.key === 'ArrowLeft') {
        keys.left = true;
    }
});

document.addEventListener('keyup', function(event) {
    if (event.key === 'ArrowUp') {
        keys.up = false;
    } else if (event.key === 'ArrowDown') {
        keys.down = false;
    } else if (event.key === 'ArrowRight') {
        keys.right = false;
    } else if (event.key === 'ArrowLeft') {
        keys.left = false;
    }
});

resizeCanvas();
window.requestAnimationFrame(update);