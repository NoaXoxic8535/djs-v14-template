const client = require("../../index");
const colors = require("colors");

module.exports = {
  name: "ready.js"
};

client.once('ready', async () => {
  console.log("\n" + `[READY] ${client.user.tag} is now up And now ready togo`.brightGreen);
})

/************************************
 * Bot Owner: @NoaXoxic8535
 * Template Made By: https://discord.gg/4Td66BDDgg
 * Everything is Setup for you Just add commands and it will work!
 ************************************/
