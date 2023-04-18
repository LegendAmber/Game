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
    'VelocityX': 0,
    'VelocityY': 0,
    'Sprite': new Image()
}
Player.Sprite.src = 'Robot.png';

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
    switch (event.key){
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

window.addEventListener('resize', () => {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
});

function main(){
    requestAnimationFrame(main);

    ctx.clearRect(0, 0, canvas.width, canvas.height);

    Player.PositionX += Player.VelocityX;
    Player.PositionY += Player.VelocityY;
    ctx.drawImage(Player.Sprite, Player.PositionX, Player.PositionY);
}