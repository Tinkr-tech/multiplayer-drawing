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

const databaseURL = "https://tinkr.tech/sdb/drawing-game2"
async function drawServerData() {
    console.log('This runs every second')
    const serverData = await fetchGET(databaseURL)
    console.log("Server data fetched:", serverData.length, serverData[0])
}

setInterval(drawServerData, 1000)
