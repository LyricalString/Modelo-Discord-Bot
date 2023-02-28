const fs = require('fs')
const buttons = fs.readdirSync('./buttons')

module.exports = (client) => {
    for (const archivo of buttons) {
        const button = require(`../buttons/${archivo}`)
        client.buttons.set(button.data.name, button)
    }
}

