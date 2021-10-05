const canvas = document.querySelector('canvas')
const context = canvas.getContext('2d')

function drawCircle(x, y, color) {
    context.beginPath();
    context.arc(x, y, 20, 0, 2 * Math.PI);
    context.fillStyle = color;
    context.fill();
}

canvas.onclick = function (event) {
    drawCircle(event.offsetX, event.offsetY, 'black')
}
