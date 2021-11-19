let fs = require('fs')
let chalk = require('chalk')
module.exports = async function connect(melcanz, m) {
   let revoke = JSON.parse(fs.readFileSync('./database/chat/antidelete.json').toString())
    if (!revoke.includes(m.key.remoteJid)) return
    if (m.key.remoteJid == 'status@broadcast') return 
    await melcanz.sendMessage(m.key.remoteJid, `*- ANTIDELETE FEATURE -*\n\nUser @${m.participant.split("@")[0]} Deleting Message has been Detected\n\n•> Tipe Pesan : *${Object.keys(m.message.message)[0].split('Message')[0]}*`, 'conversation', {quoted: m.message, contextInfo: {"mentionedJid": [m.participant]}})
   melcanz.forwardMessage(m.key.remoteJid, m.message, false).catch(e => console.log(e, m))
 }
 
 
let file = require.resolve(__filename)
fs.watchFile(file, () => {
  fs.unwatchFile(file)
  console.log(chalk.redBright("Update './lib/antidelete.js'"))
  delete require.cache[file]
  require(file)
})
