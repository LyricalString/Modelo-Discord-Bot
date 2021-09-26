const fs = require('fs')
const categories = fs.readdirSync('./commands')

module.exports = (client) => {
    categories.forEach(async (category) => {
        fs.readdir(`./commands/${category}`, (err) => {
            if (err) return console.error(err)
            const commands = fs.readdirSync(`./commands/${category}`).filter((archivo) => archivo.endsWith(".js"));
            for (const archivo of commands) {
                const command = require(`../commands/${category}/${archivo}`)
                client.commands.set(command.data.name, command)
            }
        })
    })
}