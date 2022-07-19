const { EmbedBuilder } = require('discord.js')
const config = require('../config.json')
const { DiscordTogether } = require('discord-together');

module.exports = {
    data: {
        name: 'sesiones'
    },
    async run(client, interaction, language) {
        client.discordTogether = new DiscordTogether(client);
        if (!interaction.member.voice.channel) return interaction.update({ content: client.languages.__({ phrase: 'youtube.noChannel', locale: language }), ephemeral: true })
        switch (interaction.values[0]) {
            case 'youtube':
                client.discordTogether.createTogetherCode(interaction.member.voice.channel.id, 'youtube').then(async invite => {
                    const embed = new EmbedBuilder();
                        embed.setColor(config.defaultSuccessColor);
                        embed.setDescription(
                            client.languages.__mf({ phrase: 'youtube.inviteMessage', locale: language}, { inviteLink: invite.code })
                        );
                        return interaction.update({ content: ' ', components: [], embeds: [embed] });
                });
                break
            case 'fishington':
                client.discordTogether.createTogetherCode(interaction.member.voice.channel.id, 'fishington').then(async invite => {
                    const embed = new EmbedBuilder();
                        embed.setColor(config.defaultSuccessColor);
                        embed.setDescription(
                            client.languages.__mf({ phrase: 'youtube.inviteMessage', locale: language}, { inviteLink: invite.code })
                        );
                        return interaction.update({ content: ' ', components: [], embeds: [embed] });
                });
                break
            case 'poker':
                client.discordTogether.createTogetherCode(interaction.member.voice.channel.id, 'poker').then(async invite => {
                    const embed = new EmbedBuilder();
                        embed.setColor(config.defaultSuccessColor);
                        embed.setDescription(
                            client.languages.__mf({ phrase: 'youtube.inviteMessage', locale: language}, { inviteLink: invite.code })
                        );
                        return interaction.update({ content: ' ', components: [], embeds: [embed] });
                });
                break
            case 'betrayal':
                client.discordTogether.createTogetherCode(interaction.member.voice.channel.id, 'betrayal').then(async invite => {
                    const embed = new EmbedBuilder();
                        embed.setColor(config.defaultSuccessColor);
                        embed.setDescription(
                            client.languages.__mf({ phrase: 'youtube.inviteMessage', locale: language}, { inviteLink: invite.code })
                        );
                        return interaction.update({ content: ' ', components: [], embeds: [embed] });
                });
                break
            case 'chess':
                client.discordTogether.createTogetherCode(interaction.member.voice.channel.id, 'chess').then(async invite => {
                    const embed = new EmbedBuilder();
                        embed.setColor(config.defaultSuccessColor);
                        embed.setDescription(
                            client.languages.__mf({ phrase: 'youtube.inviteMessage', locale: language}, { inviteLink: invite.code })
                        );
                        return interaction.update({ content: ' ', components: [], embeds: [embed] });
                });
                break
        }
    }
}