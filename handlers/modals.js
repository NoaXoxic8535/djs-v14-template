const fs = require("fs");
const colors = require("colors");

module.exports = (client, config) => {
    console.log("0------------------| Modals Handler:".blue);

    const modals = fs.readdirSync(`./modals/`).filter(file => file.endsWith('.js'));

    for (let file of modals) {

        let pull = require(`../modals/${file}`);
        if (pull.id) {
            client.modals.set(pull.id, pull);
            console.log(`[HANDLER - MODALS] Loaded a file: ${file}`.brightGreen)
        } else {
            console.log(`[HANDLER - MODALS] Couldn't load the file ${file}. Missing modal ID.`.red)
            continue;
        }
    }
};

/************************************
 * Bot Owner: @NoaXoxic8535
 * Template Made By: discord.gg/gkvwcrDS5Y
 * Everything is Setup for you Just add commands and it will work!
 ************************************/
