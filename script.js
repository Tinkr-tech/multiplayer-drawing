const canvas = document.querySelector('canvas')
const context = canvas.getContext('2d')

function drawCircle(x, y, color) {
    context.beginPath();
    context.arc(x, y, 20, 0, 2 * Math.PI);
    context.fillStyle = color;
    context.fill();
}
drawCircle(100, 150, 'red')
drawCircle(100, 100, 'green')
drawCircle(150, 100, 'blue')

canvas.onclick = function (event) {
    console.log("Mouse was clicked:", event.offsetX, event.offsetY)
    drawCircle(event.offsetX, event.offsetY, 'black')
}
