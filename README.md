# djs-v14-template
This is a discord bot in v14 template
# Project Features:
• Prefix commands.<br>
• Slash commands.<br>
• User commands.<br>
• Message commands.<br>
• Modals handler.<br>
• Buttons handler (Coming soon).

# How to setup:
### - Requirements:

• **Node.js v16.9.0 or above.** <a href="https://nodejs.org/en/"><img src="https://img.shields.io/badge/v16.9.0-100000?style=flat&logo=node.js&label=Node.js&color=blue&logoColor=lime"></a><br>
• **Discord.js v14.3.0 or above**. <a href="https://www.npmjs.com/package/discord.js"><img src="https://img.shields.io/badge/v14.3.0-100000?style=flat&logo=npm&label=Discord.js&color=blue"></a>

### - Creating a new client and inviting the bot:
• 1- Go to [Discord Developer Portal](https://discord.com/developers) and then go to `Applications`. <br>
• 2- Create a new application and choose it's name. <br>
• 3- Put your application's avatar (not important).<br>
• 4- Go to `Bot` section and turn your application into a bot. <br>
• 5- Scroll down and enable the three disabled `Privileged Gateaway Intents` intents (`PRESENCE INTENT`, `SERVER MEMBERS INTENT`, and `MESSAGE CONTENT INTENT`).<br>
• 6- Go to `OAuth2` section, and then `URL Generator`. Select the scopes `bot` and `application.commands`, and then scroll down to **Bot Permissions**, select `Administrator` (For all guild permissions). Copy the link that is generated below, open a new browser tab, paste the URL, choose a server where your bot will be in, verify yourself that you are not a robot, and Done!