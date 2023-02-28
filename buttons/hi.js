

module.exports = {
  data: {
    name: 'node'
},
  /**
   * 
   * @param {import('discord.js').Client} client 
   * @param {import('discord.js').ChatInputCommandInteraction} interaction 
   * @param {*} language 
   */
  async run(client, interaction, language) {
    await interaction.reply({
      content: "👋",
      ephemeral: true
    })
  }
}