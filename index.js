//Ayarlar - gta.ninja
var ayarlar = {
  token: "BOT TOKEN",
  prefix: "!",
  ip: "SUNUCU IP",
  port: "SUNUCU PORT"
}
var axios = require("axios")
var Discord = require('discord.js');
var client = new Discord.Client();
client.on('message', msg => {
  if (msg.content === `${ayarlar.prefix}aktif`) {
    axios.get(`https://gta.ninja/api/samp/${ayarlar.ip}/${ayarlar.port}`)
  .then(x => { var apiveri = x.data
if(apiveri.cikti=="hata") {
    client.channels.cache.get(msg.channel.id).send(`Sunucu Kapalı.`)
  } else { client.channels.cache.get(msg.channel.id).send(`${apiveri.aktif} aktif oyuncu var`)}})
  }
  })
client.login(ayarlar.token); 
