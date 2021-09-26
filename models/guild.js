const mongoose = require('mongoose')

const model = new mongoose.Schema(
    {
    guildId: { type: String },
    lang: { type: String }
    },
    { 
        collection: 'Guilds'
    }
)

module.exports = mongoose.model('Guilds', model)