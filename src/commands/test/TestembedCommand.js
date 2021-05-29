const BaseCommand = require('../../utils/structures/BaseCommand');
const Discord = require('discord.js');
module.exports = class TestembedCommand extends BaseCommand {
  constructor() {
    super('testembed', 'test', []);
  }

  async run(client, message, args) {
    const em = new Discord.MessageEmbed()
        .setColor('#04ff00')
        .setTitle('title 1')
        .setDescription('this is discription of the msg.')
        .setAuthor(message.author.username)
        .addField('this embed works', 'field description')
        .setThumbnail('https://i.imgur.com/PyVmvKL.jpg')
        .setFooter('footer of the msg')
        .setTimestamp()
        .setURL('https://google.com')
        message.channel.send(em);
  }
}