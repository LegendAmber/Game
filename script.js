let canvas = document.getElementById('2dcanvas');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
let Camera = {
    'ViewportX': canvas.width,
    'ViewportY': canvas.height,
    'PositionX': 0,
    'PositionY': 0,
    'VelocityX': 0,
    'VelocityY': 0
}
let Player = {
    'PositionX': canvas.width / 2,
    'PositionY': canvas.height / 2,
    'OriginX': canvas.width / 2,
    'OriginY': canvas.height / 2,
    'VelocityX': 0,
    'VelocityY': 0,
    'Sprite': new Image()
}
Player.Sprite.src = 'Robot.png';
let Start = true;
let StartPoint = {
    'X': Player.PositionX - (canvas.width / 2 + 20),
    'Y': Player.PositionY - (canvas.height / 2 + 20)
}
let ctx = canvas.getContext('2d');

main();

document.addEventListener('keydown', event => {
    switch (event.key) {
        case 'a':
            Camera.VelocityX = -4;
            Player.VelocityX = -4;
            break;
        case 'd':
            Camera.VelocityX = 4;
            Player.VelocityX = 4;
            break;
        case 'w':
            Camera.VelocityY = -4;
            Player.VelocityY = -4;
            break;
        case 's':
            Camera.VelocityY = 4;
            Player.VelocityY = 4;
            break;
        default:
            break;
    }
});

document.addEventListener('keyup', event => {
    switch (event.key) {
        case 'a':
            Camera.VelocityX = 0;
            Player.VelocityX = 0;
            break;
        case 'd':
            Camera.VelocityX = 0;
            Player.VelocityX = 0;
            break;
        case 'w':
            Camera.VelocityY = 0;
            Player.VelocityY = 0;
            break;
        case 's':
            Camera.VelocityY = 0;
            Player.VelocityY = 0;
            break;
        default:
            break;
    }
});

document.addEventListener('click', () => {
    console.info("Click events will be added in a future update. This is just a placeholder.");
});

function main() {
    if (canvas.width != window.innerWidth || canvas.height != window.innerHeight) {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
    }

    requestAnimationFrame(main);

    ctx.clearRect(0, 0, canvas.width, canvas.height);

    Player.PositionX += Player.VelocityX;
    Player.PositionY += Player.VelocityY;
    ctx.drawImage(Player.Sprite, Player.PositionX, Player.PositionY);
    ctx.fillStyle = 'black';
    if (Player.OriginX + 10 <= Player.PositionX) {
        Generation();
        Player.OriginX += 10;
    }
    else if (Player.OriginX - 10 >= Player.PositionX) {
        Generation();
        Player.OriginX -= 10;
    }
    else if (Player.OriginY + 10 <= Player.PositionY) {
        Generation();
        Player.OriginY += 10;
    }
    else if (Player.OriginY - 10 >= Player.PositionY) {
        Generation();
        Player.OriginY -= 10;
    }
}

function Generation() {
    const SIZE = 20;
    for (let i = 0; i < (((canvas.width / 2 + 20) + Player.PositionX) / 20); i++) {
        if (Start) {
            ctx.fillRect(StartPoint.X, StartPoint.Y, SIZE, SIZE);
            Start = false;
        }
        ctx.fillRect(StartPoint.X + 20, StartPoint.Y, SIZE, SIZE);
        StartPoint.X += 20;
        console.log('Start Point X', StartPoint.X, 'Start Point Y', StartPoint.Y);
    }
    StartPoint.Y += 20;
    return Generation();
}