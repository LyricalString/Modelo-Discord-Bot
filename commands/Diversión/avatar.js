const { SlashCommandBuilder, EmbedBuilder } = require('discord.js')
const config = require('../../config.json')

module.exports = {
    data: new SlashCommandBuilder()
        .setName('avatar')
        .setDescription('Devuelve el avatar del usuario, o el tuyo. XD')
        .addUserOption(option => option.setName('objetivo').setDescription('Usuario cuyo avatar quieres ver.')),
    async run(client, interaction, language) {
        const user = interaction.options.getUser('objetivo')
        if (user) {
            const embed = new EmbedBuilder()
            .setColor(config.defaultSuccessColor)
            .setDescription(client.languages.__mf({ phrase: 'avatar.objective', locale: language}, { username: user.username}))
            .setImage(user.displayAvatarURL({ dynamic: true, size: 4096 }))
            return interaction.reply({embeds: [embed]})
        } else {
            const embed = new EmbedBuilder()
            .setColor(config.defaultSuccessColor)
            .setDescription(client.languages.__({phrase: 'avatar.self', locale: language}))
            .setImage(interaction.user.displayAvatarURL({ dynamic: true, size: 4096 }))
            return interaction.reply({embeds: [embed]})
        }
    }
}