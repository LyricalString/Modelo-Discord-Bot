const { EmbedBuilder, SlashCommandBuilder} = require('discord.js')
const config = require('../../config.json')
const guildModel = require('../../models/guild.js')

module.exports = {
    data: new SlashCommandBuilder()
        .setName('language')
        .setDescription('Cambia el lenguaje del servidor.')
        .addStringOption(option => 
            option.setName('lang')
            .setDescription('Lenguaje del servidor.')
            .setRequired(true)
            .addChoices(
                { name: 'Español', value: 'es' },
                { name: 'English', value: 'en' }
            )
            ),
    async run(client, interaction) {
        const language = interaction.options.getString("lang")
        if (!interaction.member.permissions.has('ADMINISTRATOR')) return interaction.reply({ content: client.languages.__({phrase: 'lang.noAdministrator', locale: language}), ephemeral: true})
        await guildModel.findOne({ guildId: interaction.guildId.toString()}).then((s, err) => {
            if (err) return console.log(err)
            if (s) {
                s.lang = language
                s.save().catch(e => console.log(e))
            } else {
                const newGuild = new guildModel({
                    guildId: interaction.guildId.toString(),
                    lang: language
                })
                newGuild.save().catch(e => console.log(e))
            }
        })
        return interaction.reply({ content: client.languages.__({ phrase: 'lang.newLanguage', locale: language}), ephemeral: true})
    }
}
