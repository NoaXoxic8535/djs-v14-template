const config = require("../config/config.js");
const superDjs = require("super-djs");

module.exports = (client) => {
	console.log(superDjs.colourText('[DATABASE] Connecting to MongoDB...', 'yellow'));
	const mongo = process.env.MONGO || config.Handlers.MONGO;
	
	if (!mongo) {
		console.warn("[WARN] A Mongo URI/URL isn't provided! (Not required)");
	} else {
		superDjs.connectMongoDB(mongo, true, superDjs.colourText('[DATABASE] Connected to MongoDB!', 'green'));	
	};
};

/************************************
 * Bot Owner: @NoaXoxic8535
 * Template Made By: discord.gg/gkvwcrDS5Y
 * Everything is Setup for you Just add commands and it will work!
 ************************************/
