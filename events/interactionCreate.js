const executeCommand = require('../functions/executeCommand.js')
const executeSelectMenu = require('../functions/executeSelectMenu.js')
const executeButton = require('../functions/executeButtons.js')
const { InteractionType } = require("discord.js")

module.exports = {
    name: 'interactionCreate',
    /**
     * 
     * @param {*} client 
     * @param {import('discord.js').ChatInputCommandInteraction} interaction 
     */
    async execute(client, interaction) {
        if (interaction.type === InteractionType.ApplicationCommand) executeCommand(client, interaction)
        if (interaction.isStringSelectMenu()) executeSelectMenu(client, interaction)
        if(interaction.isButton()) executeButton(client, interaction)
    }
}