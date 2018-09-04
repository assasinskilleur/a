const discord = require('discord.js');
const bot = new discord.Client();
var PREFIX = "!";
var autoroles = "Chevalier 💀";


/*function play(connection, message) {
    var server = servers[message.guild.id];

    server.dispatcher = connection.playStream(YTDL(server.queue[0], {filter: "audioonly"}));

    server.queue.shift();

    server.dispatcher.on("end", function(){
        if(server.queue[0]) play(connection, message);
        else connection.disconnect();
    });
}*/

bot.on("ready", function() {
    console.log('Ready');
    bot.user.setGame("!help for commands").catch(console.error);
});

bot.on("guildMemberAdd", function(member) {
    member.guild.channels.find("name", "new").sendMessage("Merci d'avoir rejoins le serveur " + member.toString() + ", nous t'avons envoyer en privée les regles du serveurs. Amuse toi bien ! Et Bienvenue !");
    member.addRole(member.guild.roles.find("name", "Chevalier 💀"));
});

bot.on("message", function(message) {
    if(message.author.equals(bot.user)) return;

    if(message.content.startsWith()){

    }

    if(!message.content.startsWith(PREFIX)) return;

    var args = message.content.substring(PREFIX.length).split(' ');

    switch (args[0].toLowerCase()) {
        case "help":
            var embed = new discord.RichEmbed()
                .addField("TRT >> Bot", "Made by assasinskilleur")
                .addField("Operateur :", ">compo {map}", true)
                .setColor(0xFF0000)
                .setThumbnail(message.author.avatarURL)
            message.channel.sendEmbed(embed);
            break;
        case "setautorole":
            if(args[1]){
               
            }
            break;
        default:
            message.channel.sendMessage("Invalid Command !");
            break;
    }
});

bot.login(process.env.TOKEN);
