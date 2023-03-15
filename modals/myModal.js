const { EmbedBuilder } = require("discord.js");

module.exports = {
    id: "myModal",
    run: async (client, interaction, config, db) => {

        return interaction.reply({
            embeds: [
                new EmbedBuilder()
                    .setDescription('Modals are working! Here is what you have typed: ' + interaction.fields.getTextInputValue('something'))
            ],
            ephemeral: true
        });

    },
};

/************************************
 * Bot Owner: @NoaXoxic8535
 * Template Made By: discord.gg/gkvwcrDS5Y
 * Everything is Setup for you Just add commands and it will work!
 ************************************/
