const Discord = require('discord.js');
const client = new Discord.Client();
const işaret =require('./işaret.json');


var prefix = işaret.prefix

client.on('ready', () => {
  console.log(`Botunuz sunucuya girdi ${client.user.tag}!`);
  client.user.setActivity('Gilbert ailesi asildir', { type: 'PLAYING' })
.then(presence => console.log(`Durum ${presence.activities[0].name} oldu.`))
.catch(console.error);
});

client.on('guildMemberAdd', member => {
const girişçıkış = member.guild.channels.cache.find(channel => channel.name === 'sohbet');
girişçıkış.send(`Aramıza hoş geldin, ${member}`);
  member.send(`${member} Ailemize hoş geldin. Burada eğlen!`);
});
client.on('guildMemberRemove', member => {
  const girişçıkış = member.guild.channels.cache.find(channel => channel.name === 'sohbet');
  girişçıkış.send(`${member} Ailemizden ayrıldı.`);
});

client.on('message', message => {
  if (!message.guild) return;
  if (message.content.startsWith('!avada')) {
    if (!message.member.hasPermission('ADMINISTRATOR')) return message.channel.send('Avada atabiliceğini sanıyor yazık.Ona bakmayın abisi büyüycek o.https://i2.wp.com/media.tumblr.com/tumblr_lofuiqozZj1qdzmpr.gif')
    const user = message.mentions.users.first();
    if (user) {
      const member = message.guild.member(user);
      if (member) {
        member
          .kick()
          .then(() => {
          const log = message.guild.channels.cache.find(channel => channel.name === 'bot-komut')
           log.send(`${user.tag} kişisine avada atılmıştır.https://i.pinimg.com/originals/42/54/b8/4254b8aeca553a85cb3b68d928f94dee.gif`);
          })
          .catch(err => {
            message.reply('kişisine avada atılmıştır.https://i.pinimg.com/originals/42/54/b8/4254b8aeca553a85cb3b68d928f94dee.gif');
            console.error(err);
          });
      } else {
        message.reply("Bahsettiğin kişi bizim sunucuda bulunmuyor");
      }
    } else {
      message.reply("Atılacak kişiyi yazmadın");
    }
  }
});


client.on('message', msg => {
  if (msg.content.toLowerCase() ===  'seni seviyorum') {
    msg.react('😛')
    msg.reply('ben de seni seviyorum :heart: ');
  }
});

client.on('message', msg => {
  if (msg.content.toLowerCase() === prefix + 'ben harika mıyım') {
    msg.author.send('tanıdığım en harika kişisin https://media.tenor.com/images/752063d293a04a2ce7ac64b8f983e4d2/tenor.gif');
  }
});

client.on('message', msg => {
  if (msg.content.toLowerCase() ===  'amk') {
    msg.delete ()
    msg.reply('Bunu bir daha duymayayım ');
  }
});
client.on('message', msg => {
  if (msg.content.toLowerCase() ===  'lan') {
    msg.delete ()
    msg.reply('Bunu bir daha duymayayım ');
  }
});
client.on('message', msg => {
  if (msg.content.toLowerCase() ===  'mal"') {
    msg.delete ()
    msg.reply('Bunu bir daha duymayayım ');
  }
});

client.on('message', msg => {
  if (msg.content.toLowerCase() ===  'miuw') {
    msg.react('🐈')
    msg.reply('miuwwww :cat: :cat: ');
  }
});

client.on('message', msg => {
  if (msg.content.toLowerCase() ===  'hoşgeldin bot') {
    msg.react('😛')
    msg.author.send('Hoşbuldum canım ailem :heart: ');
  }
});
client.on('message', msg => {
  if (msg.content.toLowerCase() ===  'avada') {
    msg.reply('Kişisi avada gönderdi.https://i.pinimg.com/originals/42/54/b8/4254b8aeca553a85cb3b68d928f94dee.gif ');
  }
});
client.on('message', msg => {
  if (msg.content.toLowerCase() ===  'öp') {
    msg.react('😚')
    msg.reply('Kişisi öptü :kissing_heart: https://media.tenor.com/images/a0feae5db88c83bd404032ff765b7723/tenor.gif  ');
  }
});
client.on('message', msg => {
  if (msg.content.toLowerCase() ===  'aile büyüğü kim ?') {
    msg.react('🐈')
    msg.channel.send(' Tethys Syrinx A. Gilbert :cat: ');
  }
});

client.on('message', msg => {
  if (msg.content.toLowerCase() === prefix + 'komutlar') {
    msg.channel.send('avada,miuw,öp,aile büyüğü kim?,hoşgeldin bot,günaydın,iyi geceler,seni seviyorum,!ben harika mıyım');
  }
});
client.on('message', msg => {
  if (msg.content.toLowerCase() ===  'sarıl') {
    msg.react('👩‍❤️‍👨')
    msg.reply('Kişisi sarıldı https://i.pinimg.com/originals/ec/c3/6d/ecc36d225dbf7c843a9e458720231c48.gif ');
  }
});
client.on('message', msg => {
  if (msg.content.toLowerCase() ===  'adayı seviyorum') {
    msg.react('😚')
    msg.reply('adada seni seviyor :kissing_heart: https://media.tenor.com/images/a0feae5db88c83bd404032ff765b7723/tenor.gif  ');
  }
});
client.login('Nzk2NTYyMTgxNTk1NTk0Nzkz.X_ZuVw.WcV4sFGksuH54ri75hogwtu3vTE');
