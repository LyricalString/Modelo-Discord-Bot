require('dotenv').config()
require('colors')

const { ShardingManager } = require('discord.js');
const { configValifator } = require('./functions/validators');
configValifator();

const manager = new ShardingManager('./bot.js', { token: process.env.token });

manager.on('shardCreate', shard => console.log(`Iniciando la shard ${shard.id}` .blue));

manager.spawn();