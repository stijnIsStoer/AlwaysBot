const discord = require("discord.js");
const botConfig = require("./botconfig.json");

const bot = new discord.Client();


bot.on("ready", async () => {

    console.log(`${bot.user.username} is online`);

    bot.user.setActivity("AlwaysTopia", {type: "PLAYING"});

})


bot.on("message", async message => {
    
    // Als bot bericht stuurt dan return)
    if (message.author.bot) return;

    if (message.channel.type === "dm") return;

    var prefix = botConfig.prefix;

    var messageArray = message.content.split(" ");

    var command = messageArray[0];

    var arguments = messageArray.slice(1);

    if( command === `${prefix}help`){

        return message.channel.send("!ticket - maak een ticket\n!help - toon dit bericht");

    }    

});

bot.login(process.env.token);
