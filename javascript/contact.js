const canvas = document.getElementById("canvas");
const ribaImage = document.getElementById("riba");
const ctx = canvas.getContext("2d");

let keys = {
    up: false,
    down: false,
    left: false,
    right: false
};

class Player {
    constructor(image, width, height) {
        this.image = image;
        this.width = width;
        this.height = height;
        this.x = 0;
        this.y = 0;
        this.xVel = 0;
        this.yVel = 0;
        this.maxVel = 2;
        this.drag = 1;
    }

    draw() {
        ctx.drawImage(this.image, this.x, this.y,50, 15);
    }

    handleKeys() {
        if (keys.up) {
            player.yVel = this.maxVel;
        } else if (keys.down) {
            player.yVel = -this.maxVel;
        }

        if (keys.left) {
            player.xVel = -this.maxVel;
        } else if (keys.right) {
            player.xVel = this.maxVel;
        }
    }

    update() {

        this.handleKeys();

        this.xVel 

        this.x += this.xVel;
        this.y += this.yVel;

        this.draw();
    }
}

let player = new Player(ribaImage, 0, 0);

function clear() {
    ctx.fillStyle = "#0E87CC";
    ctx.fillRect(0, 0, canvas.width, canvas.height);
}

function update() {
    clear();

    console.log(canvas.width, canvas.height)

    player.update();

    window.requestAnimationFrame(update);
}

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

window.requestAnimationFrame(update);