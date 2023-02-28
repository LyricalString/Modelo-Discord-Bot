const { ActionRowBuilder, StringSelectMenuBuilder, SlashCommandBuilder} = require('discord.js')

module.exports = {
    data: new SlashCommandBuilder()
        .setName('sesiones')
        .setDescription('Crea una sesión de una aplicación dentro de Discord.'),
    async run(client, interaction, language) {
        const row = new ActionRowBuilder()
        .addComponents(
            new StringSelectMenuBuilder()
            .setCustomId('sesiones')
            .setPlaceholder('Aplicación')
            .addOptions([
                {
                    label: 'Youtube',
                    description: 'Inicia una sesión de Youtube Together.',
                    value: 'youtube'    
                },
                {
                    label: 'Fishington',
                    description: 'Inicia una sesión de Fishington.',
                    value: 'fishington'    
                },
                {
                    label: 'Betrayal',
                    description: 'Inicia una sesión de Betrayal.',
                    value: 'betrayal'    
                },
                {
                    label: 'Poker',
                    description: 'Inicia una sesión de Poker.',
                    value: 'poker'    
                },
                {
                    label: 'Ajedrez',
                    description: 'Inicia una sesión de Ajedrez.',
                    value: 'chess'    
                }
            ])
        )
        await interaction.reply({ content: 'Selecciona una aplicación para iniciar la sesión compartida.', components: [row], ephemeral: true})
    }
}
