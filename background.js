const fetchGET = async function (uri) {
    const request = await fetch(uri)
    const text = await request.text()
    let json
    try {
        json = JSON.parse(text)
    } catch (e) { /* ignore */ }
    return json || text
}

const fetchPOST = async function (uri, content) {
    const request = await fetch(uri, {
        method: 'POST',
        headers: { 'content-type': 'application/json' },
        body: JSON.stringify(content)
    })
    const text = await request.text()
    let json
    try {
        json = JSON.parse(text)
    } catch (e) { /* ignore */ }
    return json || text
}

const sdbURL = "https://tinkr.tech/sdb/drawing-game"
async function populate() {
    const messages = await fetchGET(sdbURL)
    const preDrawing = [[399, 240, "#aa5606"], [396, 216, "#aa5606"], [394, 186, "#aa5606"], [397, 156, "#aa5606"], [482, 250, "#359907"], [445, 250, "#359907"], [416, 251, "#359907"], [391, 251, "#359907"], [363, 252, "#359907"], [329, 259, "#359907"], [305, 270, "#359907"], [281, 281, "#359907"], [309, 294, "#359907"], [330, 280, "#359907"], [363, 270, "#359907"], [389, 270, "#359907"], [421, 272, "#359907"], [452, 269, "#359907"], [479, 265, "#359907"], [489, 283, "#359907"], [454, 287, "#359907"], [433, 287, "#359907"], [392, 289, "#359907"], [370, 289, "#359907"], [347, 294, "#359907"], [414, 294, "#359907"], [467, 288, "#359907"], [496, 267, "#359907"], [263, 296, "#359907"], [401, 119, "#45c10b"], [374, 135, "#45c10b"], [419, 134, "#45c10b"], [367, 100, "#45c10b"], [424, 100, "#45c10b"], [394, 83, "#45c10b"]]
    if (!messages.length) {
        for (const ball of preDrawing) {
            await new Promise((res) => setTimeout(res, 500))
            fetchPOST(sdbURL, { x: ball[0], y: ball[1], color: ball[2] })
        }
    }

}
populate()
