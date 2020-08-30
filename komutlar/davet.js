const Discord = require('discord.js');
const client = new Discord.Client();
const ayarlar = require('../ayarlar.json');
//

exports.run = (client, message) => {
  const embed = new Discord.RichEmbed()
  .setTitle(`${client.user.username}`)
    .setAuthor(message.author.username, message.author.avatarURL)
  .setColor("BLACK")
  .setFooter(`© ${client.user.username}` , client.user.avatarURL)
  .setThumbnail("")
  .setDescription("İnviteManager")//İstediğinizi yazın
  .setTimestamp()
  .addField("Davet Linki.", `[Destek Sunucusu](https://discord.gg/rQbN46w)`, false)//davet linkini değiştirin 
  .setURL('https://discordapp.com/oauth2/authorize?client_id=678164870671237131&scope=bot&permissions=2146958847')//değiştirin
  	.setThumbnail(client.user.avatarURL);

  message.channel.send({embed});
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: 'davet',
  description: 'Bot ile ilgili bilgi verir.',
  usage: 'davet'
};