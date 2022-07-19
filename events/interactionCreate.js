const executeCommand = require('../functions/executeCommand.js')
const executeSelectMenu = require('../functions/executeSelectMenu.js')
const { InteractionType } = require("discord.js")

module.exports = {
    name: 'interactionCreate',
    async execute(client, interaction) {
        if (interaction.type === InteractionType.ApplicationCommand) executeCommand(client, interaction)
        if (interaction.isSelectMenu()) executeSelectMenu(client, interaction)
    }
}