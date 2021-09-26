require('dotenv').config()

const { ShardingManager } = require('discord.js');

const manager = new ShardingManager('./bot.js', { token: process.env.token });

manager.on('shardCreate', shard => console.log(`Iniciando la shard ${shard.id}`));

manager.spawn();