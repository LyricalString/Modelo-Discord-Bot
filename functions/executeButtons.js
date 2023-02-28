const guildModel = require('../models/guild.js')
const config = require('../config.json')
/**
 * @param {import('discord.js').Client} client 
 * @param {import('discord.js').ChatInputCommandInteraction} interaction 
 */
module.exports = async (client, interaction) => {
    const buttonId = interaction.customId
    const button= client.buttons.get(buttonId)

    if (!button) return

    const Guild = interaction.member.guild

    await guildModel.findOne({ guildId: interaction.guildId }).then((s, err) => {
        if (err) return console.log(err)
        if (s) {
            Guild.lang = s.lang
        } else {
            const newGuild = new guildModel({
                guildId: interaction.guildId.toString(),
                lang: config.defaultLanguage
            })
            newGuild.save().catch(e => console.log(e))
        }
    })

    try {
        const language = interaction.member.guild.lang
        await button.run(client, interaction, language)
    } catch (e) {
        console.error(e)
        return interaction.reply({ content: 'Ha surgido un error al ejecutar el comando.' })
    }
}