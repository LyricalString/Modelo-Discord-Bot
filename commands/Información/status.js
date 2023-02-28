const config = require('../../config.json')
const { SlashCommandBuilder, EmbedBuilder} = require('discord.js')
const moment = require("moment");
const osu = require("node-os-utils");
const os = require("os");
require("moment-duration-format");
const diagramMaker = require('../../functions/diagramMaker.js')

module.exports = {
    data: new SlashCommandBuilder()
        .setName('status')
        .setDescription('Devuelve el estado del bot.'),
    async run(client, interaction, language) {
        await interaction.reply({ content: client.languages.__({ phrase: 'status.getting', locale: language }) })
        let cpuUsage
        const cpu = osu.cpu

        const promises = [
            client.shard.fetchClientValues('guilds.cache.size'),
            client.shard.broadcastEval(c => c.guilds.cache.reduce((acc, guild) => acc + guild.memberCount, 0)),
            cpu.usage().then(cpuPercentage => {
                cpuUsage = cpuPercentage
            })
        ]

        Promise.all(promises).then(async results => {
            const totalGuilds = results[0].reduce((acc, guildCount) => acc + guildCount, 0)
            const totalMembers = results[1].reduce((acc, memberCount) => acc + memberCount, 0)

            var mem = osu.mem
            let freeRAM, usedRAM
    
            await mem.info().then(info => {
                freeRAM = info['freeMemMb']
                usedRAM = info['totalMemMb'] - freeRAM
            })
    
            const statusEmbed = new EmbedBuilder()
                .setColor(config.defaultSuccessColor)
                .setAuthor({ name: client.languages.__mf({ phrase: 'status.embedAuthor', locale: language }, { username: client.user.username})})
                .setThumbnail(client.user.displayAvatarURL({ format: 'png', dynamic: true, size: 4096 }))
                .addFields(
                    {
                        name: client.languages.__({ phrase: 'status.performance', locale: language }),
                        value: "```" + `RAM: ${diagramMaker(usedRAM, freeRAM)} [${Math.round((100 * usedRAM / (usedRAM + freeRAM)))}%]\nCPU: ${diagramMaker(cpuUsage, 100 - cpuUsage)} [${Math.round(cpuUsage)}%]` + "```",
                        inline: false
                    },
                    {
                        name: client.languages.__({ phrase: 'status.system', locale: language }),
                        value: "```" + `Procesador\nIntel ${(os.totalmem() / 1024 / 1024 / 1024).toFixed(2)} GB` + "```",
                        inline: false
                    },
                    {
                        name: client.languages.__({ phrase: 'status.os', locale: language }),
                        value: "```" + `${os.type} ${os.release} ${os.arch}` + "```",
                        inline: false   
                    },
                    {
                        name: client.languages.__({ phrase: 'status.users', locale: language }),
                        value: "```" + `${totalMembers}` + "```",
                        inline: true
                    },
                    {
                        name: 'Emojis',
                        value: "```" + `${client.emojis.cache.size}` + "```",
                        inline: true
                    },
                    {
                        name: client.languages.__({ phrase: 'status.servers', locale: language }),
                        value: "```" + `${totalGuilds}` + "```",
                        inline: true
                    },
                    {
                        name: client.languages.__({ phrase: 'status.hostTime', locale: language }),
                        value: "```" + `${moment.duration(os.uptime * 1000).format(`D [Días], H [Horas], m [Minutos], s [Segundos]`)}` + "```",
                        inline: false
                    },
                    {
                        name: client.languages.__({ phrase: 'status.botTime', locale: language }),
                        value: "```" + `${moment.duration(client.uptime).format(`D [Días], H [Horas], m [Minutos], s [Segundos]`)}` + "```",
                        inline: true
                    },
                    {
                        name: client.languages.__({ phrase: 'status.session', locale: language }),
                        value: "```" + `${moment(client.readyAt).format("DD [de] MMM YYYY HH:mm")}` + "```",
                        inline: true
                    }
                )
            interaction.editReply({ content: ' ', embeds: [statusEmbed] })
        })



    }
}