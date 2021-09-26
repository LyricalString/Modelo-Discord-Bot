const fs = require('fs')
const selectmenus = fs.readdirSync('./selectmenus')

module.exports = (client) => {
    for (const archivo of selectmenus) {
        const selectmenu = require(`../selectmenus/${archivo}`)
        client.selectMenus.set(selectmenu.data.name, selectmenu)
    }
}