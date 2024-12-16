/*
 - Real Script Enos
 - Developed By Senn Tamvan 
 - Wa Dev wa.me/6285117112274
 - Simple Base Bot WhatsApp By Anggazzy ZcoderX
*/

/* 
  >> ISI BEBAS SESUAI HARGA PRODUK LU UTK BUY OTOMATIS <<
*/
global.gb1 = '1000'
global.gb2 = '2000'
global.gb3 = '3000'
global.gb4 = '4000'
global.gb5 = '5000'
global.gb6 = '6000'
global.gb7 = '7000'
global.gb8 = '8000'
global.gb9 = '9000'
global.gbUnli = '10000'
global.hargaadp = '10000'
global.ram1 = '15000'
global.ram2 = '25000'
global.ram4 = '40000'
global.ram8 = '55000'

global.idCH = "120363333509194874@newsletter"
global.url2 = "wa.me/6285117112274" // isi url bebas buat reply
/*

/*
  >> Panel Ptero Srv 1 <<
*/
global.domain = " - " // Jangan Pke / Di Akhiran Domain
global.apikey = " - " 
global.capikey = " - "
global.eggsnya = '15' 
global.location3 = '1'

/*
  >> Panel Ptero Srv 2 <<
*/
global.domain2 = " - "
global.apikey2 = " - " 
global.capikey2 = " - "
global.egg2 = '15' 
global.loc2 = '1' 

global.digitalocean_apikey = "-" // isi dengan api digital ocean 

// orkut wajib diisi ga paham cek docs.elevate.web.id
/*
  >> Payment Gateway Nya <<
*/
global.merchantOrkut = " - "
global.apikeyOrkut = ` - `
global.codeQr = ` - `
global.key = "rafael" // Jangan Diganti Kalo Belum Ada Informasi Penggantian Key !!!

global.owner = [
  "6285117112274", //ganti nomor owner
  "" //nomor owner kedua kalo ada
]
global.nomorbot = '6285179565321'
global.urlfoto = 'https://files.catbox.moe/o8pwzy.jpg'

let fs = require('fs')
let file = require.resolve(__filename)
fs.watchFile(file, () => {
fs.unwatchFile(file)
console.log(`Update ${__filename}`)
delete require.cache[file]
require(file)
})