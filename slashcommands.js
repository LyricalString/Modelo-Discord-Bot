const fs = require('fs')
const { REST } = require('@discordjs/rest')
const { Routes } = require('discord-api-types/v9')
const { clientId, guildId, token } = require('./config.json')

const rest = new REST({ version: '9'}).setToken(token)

createSlash()

async function createSlash() {
    try{
        const commands = []
        fs.readdirSync('./commands').forEach(async (category) => {
            const commandFiles = fs.readdirSync(`./commands/${category}`).filter((archivo) => archivo.endsWith('.js'))
            for (const archivo of commandFiles) {
                const command = require(`./commands/${category}/${archivo}`)
                commands.push(command.data.toJSON())
            }
        })
        await rest.put(
            Routes.applicationGuildCommands(clientId, guildId),
            { body: commands }
        )
        console.log('Se han publicado los slash commands.')
    } catch(e) {
        console.error(e)
    }
}
