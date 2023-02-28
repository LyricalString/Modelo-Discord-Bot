const { ButtonBuilder } = require('@discordjs/builders')
const {
  SlashCommandBuilder, 
  ActionRowBuilder, 
  ButtonStyle
} = require('discord.js')

//* command to test buttonHandler :D
module.exports = {
  data: new SlashCommandBuilder()
        .setName('hi')
        .setDescription('👋'),
    /**
     * @param {import('discord.js').Client} client
     * @param {import('discord.js').ChatInputCommandInteraction} interaction
     */
    async run(client, interaction, language){
      await interaction.reply({
        content: '',
        components: [
          new ActionRowBuilder().addComponents(
            new ButtonBuilder().setCustomId('node').setStyle(ButtonStyle.Success).setLabel('👋')
            
          )
        ]
      })
      

    }
}