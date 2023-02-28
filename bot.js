const { Client, GatewayIntentBits, Collection, ActivityType} = require('discord.js')
require('dotenv').config()
const config = require('./config.json')
const { join } = require('path')
const { setInterval } = require('timers')

const client = new Client({ intents: [GatewayIntentBits.Guilds, GatewayIntentBits.GuildVoiceStates]})

client.commands = new Collection()
client.selectMenus = new Collection()
client.buttons = new Collection()
client.languages = require('i18n')

client.languages.configure({
    locales: ['en', 'es'],
    directory: join(__dirname, "locales"),
    defaultLocale: config.defaultLanguage,
    retryInDefaultLocale: true,
    objectNotation: true,
    register: global,

    logWarnFn: function (msg) {
        console.log('WARN' + msg)
    },

    logErrorFn: function (msg) {
        console.log('ERROR' + msg)
    },

    missingKeyFn: function (locale, value) {
        return value
    },

    mustacheConfig: {
        tags: ["{{", "}}"],
        disable: false
    }
})

setInterval(() => {
    updateStatus()
}, 60000)

async function updateStatus() {
    const promises = [
        client.shard.fetchClientValues('guilds.cache.size'),
        client.shard.broadcastEval(c => c.guilds.cache.reduce((acc, guild) => acc + guild.memberCount, 0))
    ]
    Promise.all(promises).then(results => {
        const guildNum = results[0].reduce((acc, guildCount) => acc + guildCount, 0)
        const memberNum = results[1].reduce((acc, memberCount) => acc + memberCount, 0)
        client.user.setActivity(`Servidores: ${guildNum} Miembros: ${memberNum}`, { type: ActivityType.Listening})
    }).catch(console.error)
}

require("./handlers/events.js")(client);
require("./handlers/commands.js")(client);
require("./handlers/selectmenus.js")(client);
require('./handlers/buttons.js')(client)

client.login(process.env.token);