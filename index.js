const Discord = require("discord.js");

const client = new Discord.Client();

client.login(prosess.env.TOKEN);

client.on("ready", () => {
    console.log(`${client.user.tag}を起動`);
    client.user.setActivity("s@link で画面共有のリンクを表示します");
});

client.on("message", message => {
    if (!message.guild || message.author.bot) return;
    if (message.content === "s@link") {
        if (!message.member.voiceChannel) {
            return message.channel.send("vcに参加してません");
        }
        message.channel.send(`https://discordapp.com/channels/${message.guild.id}/${message.member.voiceChannelID}`);
    }
})
