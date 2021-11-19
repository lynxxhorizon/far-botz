async function a(conn, json) {
let { from } = json[2][0][1]
    let id = json[2][0][2][0][1]["call-id"]
    let { name } = conn.contacts[from.split('@')[0] + '@s.whatsapp.net']
    if (name) return
   await conn.rejectIncomingCall(from, id)
   await conn.sendMessage(from, '[ ! ] Maaf, Dikarenakan anda telah Menelfon BOTz, Maka anda akan diblokir Otomatis', 'conversation')
  // conn.blockUser(from)
  }
  
module.exports = a

let fs = require('fs')
let chalk = require('chalk')
let file = require.resolve(__filename)
fs.watchFile(file, () => {
  fs.unwatchFile(file)
  console.log(chalk.redBright("Update './lib/call.js'"))
  delete require.cache[file]
  require(file)
})
