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

const databaseURL = "https://tinkr.tech/sdb/drawing-game"
async function drawServerData() {
    const serverData = await fetchGET(databaseURL)
    for (const circle of serverData) {
        drawCircle(circle.x, circle.y, circle.color)
    }
}

setInterval(drawServerData, 1000)
