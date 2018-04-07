const Discord = require("discord.js");

var bot = new Discord.Client();

bot.on("ready", function() {
    bot.user.setGame("Genius, !help");
    console.log("Bot connecté");
});

bot.login("NDMyMTIzNzQ5NTMwMjA2MjEx.Dao1aA.4B6MWH3GquveBL66cNoAjQjU12g");
