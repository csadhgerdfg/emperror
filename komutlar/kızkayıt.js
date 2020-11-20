const Discord = require("discord.js");
exports.run = (client, message, args) => {
  const kayıtlı2 = message.guild.roles.find(r => r.id === "769516545847066634");
  const kayıtlı = message.guild.roles.find(r => r.id === "769646170548731904"); //buraya kayıtlı rolünüzün id'sini koyun
  const misafir = message.guild.roles.find(r => r.id === "769518774189555745"); //buraya misafir rolünüzün id'sini koyun.
  const log = message.guild.channels.find(c => c.id === "771796665752354917"); //buraya kayıt log id koyun
  const tag = "✙";
  if (!message.member.roles.find(r => r.id === "769517757804576808")) {
    return message.channel.send("Bu işlemi sadece Ayarlanmış Kayıt Sorumluları gerçekleştirebilir.");
  } else {
    let user = message.mentions.users.first() || args[0];
    let member = message.guild.member(user);
    const nick = args[1];
    const yas = parseInt(args[2]);
    if (!member) return message.channel.send("Bir kullanıcı girin.");
    if (!nick) return message.channel.send("Bir isim girin.");
    member.addRole(kayıtlı);
    member.addRole(kayıtlı2);
    member.removeRole(misafir);
    member.setNickname(`${tag} ${nick}`);
    const embed = new Discord.RichEmbed()
      .addField(`<a:etik:771799006816239646> Kayıt Yapıldı`, `<a:edia:771799005301833728>  **Kaydı yapılan »** ${member.user.tag}\n<a:esabit:771799006191157300> **Kaydı yapan »** ${message.author.tag}\n<a:eyesilalev:771799004522348556> **Yeni isim »** ${tag} ${nick}`)
      .setFooter("Kayıt Sistemi")
.setThumbnail(member.user.avatarURL)
      .setColor("#6278c5")
      .setTimestamp()
    log.send(embed);
  }
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["k","kız","K","KIZ"],
  permLevel: 0
};
exports.help = {
  name: "k",
  description: "yetkililerin kullanacağı kayıt  komudu",
  usage: "k"
};
