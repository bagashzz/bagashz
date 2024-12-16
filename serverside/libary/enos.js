/*Sc Ini Masih Beta Wajar Kalo Ada Yang Eror
Base By AnggaZyy
Script By Senn
My Creator wa.me/62857979027753
*/
require("./settings/cfg")
const { WA_DEFAULT_EPHEMERAL, getAggregateVotesInPollMessage, generateWAMessageFromContent, proto, generateWAMessageContent, generateWAMessage, prepareWAMessageMedia, downloadContentFromMessage, areJidsSameUser, getContentType, useMultiFileAuthState, makeWASocket, fetchLatestBaileysVersion, makeCacheableSignalKeyStore, makeWaSocket } = require("@whiskeysockets/baileys")
const { Client } = require('ssh2');
const fetch = require('node-fetch');
const crypto = require('crypto');
const { y2mateplay, y2matemp3, y2matemp4 } = require('./server/libary/y2mate')
const contacts = JSON.parse(fs.readFileSync("./database/ctcs.json"))
const { toAudio, toPTT, toVideo, ffmpeg, addExifAvatar } = require('./server/libary/converter');
const fs = require('fs')
const util = require('util')
const axios = require('axios')
const JsConfuser = require('js-confuser');
const { exec } = require("child_process")
const chalk = require('chalk')
const moment = require('moment-timezone');
const yts = require ('yt-search');
const didyoumean = require('didyoumean');
const similarity = require('similarity')
const cheerio = require('cheerio')
const speed = require('performance-now')
const os = require('os')
const path = require('path')
const archiver = require('archiver')
const timestampp = speed();
const latensi = speed() - timestampp
const { smsg, fetchJson, getBuffer, fetchBuffer, getGroupAdmins, TelegraPh, isUrl, hitungmundur, sleep, clockString, checkBandwidth, runtime, tanggal, getRandom, formatp } = require('./serverside/libary/myfunc')
const { spotifyDown } = require('./serverside/libary/spotify')
const prem = require("./serverside/libary/premium");
const { ytdl } = require('./serverside/libary/ytdl');
let premium = JSON.parse(fs.readFileSync('./serverside/system/premium.json'));
module.exports = async (anggazyy, m) => {
try {
const from = m.key.remoteJid
var body = (m.mtype === 'interactiveResponseMessage') ? JSON.parse(m.message.interactiveResponseMessage.nativeFlowResponseMessage.paramsJson).id : (m.mtype === 'conversation') ? m.message.conversation : (m.mtype == 'imageMessage') ? m.message.imageMessage.caption : (m.mtype == 'videoMessage') ? m.message.videoMessage.caption : (m.mtype == 'extendedTextMessage') ? m.message.extendedTextMessage.text : (m.mtype == 'buttonsResponseMessage') ? m.message.buttonsResponseMessage.selectedButtonId : (m.mtype == 'listResponseMessage') ? m.message.listResponseMessage.singleSelectReply.selectedRowId : (m.mtype == 'templateButtonReplyMessage') ? m.message.templateButtonReplyMessage.selectedId : (m.mtype == 'messageContextInfo') ? (m.message.buttonsResponseMessage?.selectedButtonId || m.message.listResponseMessage?.singleSelectReply.selectedRowId || m.text) : ""
const budy = (typeof m.text === 'string') ? m.text : '';
const prefixRegex = /^[°zZ#$@*+,.?=''():√%!¢£¥€π¤ΠΦ_&><`™©®Δ^βα~¦|/\\©^]/;
const prefix = prefixRegex.test(body) ? body.match(prefixRegex)[0] : '.';
const isCmd = body.startsWith(prefix);
const command = isCmd ? body.slice(prefix.length).trim().split(' ').shift().toLowerCase() : '';
const args = body.trim().split(/ +/).slice(1)
const text = q = args.join(" ")
const sender = m.key.fromMe ? (anggazyy.user.id.split(':')[0]+'@s.whatsapp.net' || anggazyy.user.id) : (m.key.participant || m.key.remoteJid)
const botNumber = await anggazyy.decodeJid(anggazyy.user.id)
const senderNumber = sender.split('@')[0]
const isCreator = (m && m.sender && [botNumber, ...global.owner].map(v => v.replace(/[^0-9]/g, '') + '@s.whatsapp.net').includes(m.sender)) || false;
const pushname = m.pushName || `${senderNumber}`
const isBot = botNumber.includes(senderNumber)
const isPrem = isCreator ? true : prem.checkPremiumUser(m.sender, premium)
const quoted = m.quoted ? m.quoted : m
const mime = (quoted.msg || quoted).mimetype || ''
const groupMetadata = m.isGroup ? await anggazyy.groupMetadata(from).catch(e => {}) : ''
const groupName = m.isGroup ? groupMetadata.subject : ''
const participants = m.isGroup ? await groupMetadata.participants : ''
const groupAdmins = m.isGroup ? await getGroupAdmins(participants) : ''
const isBotAdmins = m.isGroup ? groupAdmins.includes(botNumber) : false
const isAdmins = m.isGroup ? groupAdmins.includes(m.sender) : false
// Images
const s = fs.readFileSync(`./serverside/images/S.jpg`)
const se = fs.readFileSync(`./serverside/images/X.jpg`)
const ss = fs.readFileSync(`./serverside/images/image1.jpg`)
const ssn = fs.readFileSync(`./serverside/images/image2.jpg`)
const sen = fs.readFileSync(`./serverside/images/image3.jpg`)
const senn = fs.readFileSync(`./serverside/images/image4.jpg`)
const sennn = fs.readFileSync(`./serverside/images/image5.jpg`)
const sennnn = fs.readFileSync(`./serverside/images/image6.jpg`)
const sennnnn = fs.readFileSync(`./serverside/images/image7.jpg`)
const s3n = fs.readFileSync(`./serverside/images/image8.jpg`)
const sn = fs.readFileSync(`./serverside/images/image9.jpg`)
const sssn = fs.readFileSync(`./serverside/images/image10.jpg`)
// Database Path
let linkRegex = /https:\/\/open\.spotify\.com\/track\/[0-9A-Za-z]+/i;
// Console Message
if (m.message) {
console.log(
    chalk.inverse(' ❗  [ Message ] ') + 
    ' ' + 
    chalk.black.bgGreen(new Date().toLocaleString()) + 
    ' ' + 
    chalk.black.bgBlue(budy || m.mtype) + '\n' +
    chalk.magenta('📣 Dari: ') + chalk.green(pushname) + ' ' + chalk.yellow(`(${m.sender})`) + '\n' +
    chalk.bgMagenta('📍 Di: ') + chalk.green(m.isGroup ? 'Grup' : 'Private Chat') + ' ' + chalk.green(from) + 
    '\n' + chalk.greenBright('✧──────── PESAN ─────────✧')
   );
 }
// Self & Public
if (!anggazyy.false) {
if (!m.key.fromMe) return
}
// Function Sinkron
function getFormattedDate() {
  var currentDate = new Date();
  var day = currentDate.getDate();
  var month = currentDate.getMonth() + 1;
  var year = currentDate.getFullYear();
  var hours = currentDate.getHours();
  var minutes = currentDate.getMinutes();
  var seconds = currentDate.getSeconds();
}

let d = new Date(new Date + 3600000)
let locale = 'id'
let week = d.toLocaleDateString(locale, { weekday: 'long' })
let date = d.toLocaleDateString(locale, {
  day: 'numeric',
  month: 'long',
  year: 'numeric'
})
const hariini = d.toLocaleDateString('id', { day: 'numeric', month: 'long', year: 'numeric' })

function msToTime(duration) {
var milliseconds = parseInt((duration % 1000) / 100),
seconds = Math.floor((duration / 1000) % 60),
minutes = Math.floor((duration / (1000 * 60)) % 60),
hours = Math.floor((duration / (1000 * 60 * 60)) % 24)

hours = (hours < 10) ? "0" + hours : hours
minutes = (minutes < 10) ? "0" + minutes : minutes
seconds = (seconds < 10) ? "0" + seconds : seconds
return hours + " jam " + minutes + " menit " + seconds + " detik"
}
function msToDate(ms) {
		temp = ms
		days = Math.floor(ms / (24*60*60*1000));
		daysms = ms % (24*60*60*1000);
		hours = Math.floor((daysms)/(60*60*1000));
		hoursms = ms % (60*60*1000);
		minutes = Math.floor((hoursms)/(60*1000));
		minutesms = ms % (60*1000);
		sec = Math.floor((minutesms)/(1000));
		return days+" Hari "+hours+" Jam "+ minutes + " Menit";
  }
// Variable 
const fkontak = {
	"key": {
        "participant": '0@s.whatsapp.net',
            "remoteJid": "status@broadcast",
		    "fromMe": false,
		    "id": "Halo"
                        },
       "message": {
                    "locationMessage": {
                    "name": 'Senn Tamvan',
                    "jpegThumbnail": ''
                          }
                        }
                      }
const totalFitur = () =>{
            var mytext = fs.readFileSync("./enos.js").toString()
            var numUpper = (mytext.match(/case '/g) || []).length;
            return numUpper
        }
// Rawr
// Play //
				const YouTubeMp3 = async (Link, Quality = 128) => {
			try {
				if (!isUrl(Link)) return m.reply("cekk tulisan kamu, itu salah!")
				let data = await ytdl.ytmp3(Link, Quality);
				await anggazyy.sendMessage(m.chat, {
					audio: {
						url: data.download.url
					},
					mimetype: 'audio/mpeg',
					contextInfo: {
						forwardingScore: 9999999,
						isForwarded: true,
						externalAdReply: {
							title: `乂 YTMP3 - ${data.download.quality}`,
							body: data.metadata.title,
							mediaType: 1,
							previewType: 0,
							renderLargerThumbnail: true,
							thumbnailUrl: data.metadata.thumbnail,
							sourceUrl: Link
						}
					}
				}, {
					quoted: m
				});
			} catch (error) {
				await m.errorReport(util.format(error), command);
			}
		};
		// dll //
				const YouTubeMp4 = async (Link, Quality = 360) => {
			try {
				if (!isUrl(Link)) return m.reply("mana link nya?")
				let data = await ytdl.ytmp4(Link, Quality);
				const caption = `*${data.metadata.title}*

*⌬ Ext* : Download
*⌬ ID* : ${data.metadata.videoId}
*⌬ Durasi* : ${data.metadata.timestamp}
*⌬ Upload* : ${data.metadata.ago}
*⌬ Views* : ${data.metadata.views}
*⌬ Quality* : ${data.download.quality}
*⌬ Channel* : ${data.metadata.author.name}

© EnosBot `;

				await anggazyy.sendMessage(m.chat, {
					video: {
						url: data.download.url
					},
					caption: caption,
					gifPlayback: false
				}, {
					quoted: m
				});
			} catch (error) {
				await m.errorReport(util.format(error), command);
			}
		};
// Gatau
var example = (teks) => {
return `\n *Contoh Penggunaan :*\n Ketik *${prefix+command}* ${teks}\n`
}
// Quoted
const paytod = (teks) => {
			var paymentod = {
				requestPaymentMessage: {
					currencyCodeIso4217: 'IDR',
					amount1000: 9000000 * 1000,
					requestFrom: m.sender,
					noteMessage: {
						extendedTextMessage: {
							text: teks,
							contextInfo: {
								mentionedJid: [],
								groupMentions: [],
								isForwarded: true,
								fromMe: false,
								forwardedNewsletterMessageInfo: {
									newsletterJid: '+120363333509194874@newsletter',
									newsletterName: " wa.me/62857979027753 ",
									serverMessageId: -1
								},
								externalAdReply: {
									showAdAttribution: false
								}
							}
						}
					}
				}
			}
			anggazyy.relayMessage(m.chat, paymentod, {})
		}
// Lolot
const imageUrls = [
        'https://j.top4top.io/p_3221erxmh1.jpg',
        'https://c.top4top.io/p_322152rrk1.jpg',
        'https://pomf2.lain.la/f/omoyqod.jpg',
        'https://pomf2.lain.la/f/3h85exj.jpg',
        'https://pomf2.lain.la/f/w8frl7l4.jpg',
        'https://pomf2.lain.la/f/8ml6d8zt.jpg',
        'https://pomf2.lain.la/f/omoyqod.jpg'
    ];
    // Randomized Image © Senn Tamvan 
    const randomIndex = Math.floor(Math.random() * imageUrls.length);
    const randomImageUrl = imageUrls[randomIndex];
// Memek
const makeid = crypto.randomBytes(3).toString('hex')
const createSerial = (size) => {
return crypto.randomBytes(size).toString('hex').slice(0, size)
}
// Kontol
const qpayment = {key: {remoteJid: '0@s.whatsapp.net', fromMe: false, id: `SennTamvan`, participant: '0@s.whatsapp.net'}, message: {requestPaymentMessage: {currencyCodeIso8583: "BRL", amount1000: 999999999, requestFrom: '0@s.whatsapp.net', noteMessage: { extendedTextMessage: { text: "EnosBot | wa.me/62857979027753"}}, expiryTimestamp: 999999999, amount: {value: 91929291929, offset: 7777, currencyCode: "BRL"}}}}
// Penis
function generateRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
function capital(string) {
return string.charAt(0).toUpperCase() + string.slice(1);
}
function generateTrxId() {
const digits = Math.floor(10000 + Math.random() * 90000);
const letters = String.fromCharCode(65 + Math.floor(Math.random() * 26)) + 
String.fromCharCode(65 + Math.floor(Math.random() * 26)) +
String.fromCharCode(65 + Math.floor(Math.random() * 26));
const trxid = `fid${digits}${letters}`;
return trxid;
}

const trxid = generateTrxId();
const qtext3 = { 
key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(m.chat ? { remoteJid: "0@s.whatsapp.net"} : {}) },
'message': {
extendedTextMessage: {
text: `Transaction Successful - ${trxid}`
}
}
};

function randomNumber() {
const digits = [];
while (digits.length < 6) {
const randomDigit = Math.floor(Math.random() * 10);
if (!digits.includes(randomDigit)) {
digits.push(randomDigit);
}
}
return digits.join("");
}

function toRupiah(angka) {
var saldo = '';
var angkarev = angka.toString().split('').reverse().join('');
for (var i = 0; i < angkarev.length; i++)
if (i % 3 == 0) saldo += angkarev.substr(i, 3) + '.';
return '' + saldo.split('', saldo.length - 1).reverse().join('');
}

function formatTanggal(tanggal) {
const options = { year: 'numeric', month: 'long', day: 'numeric' };
return tanggal.toLocaleDateString('id-ID', options);
}

const path = require('path');
const transaksiFilePath = path.join(__dirname, 'all', 'database', 'transaksi.json');

async function saveTransaction(barang, harga, tanggal) {
try {
let transaksiData = [];
if (fs.existsSync(transaksiFilePath)) {
transaksiData = JSON.parse(await fs.promises.readFile(transaksiFilePath));
}
transaksiData.push({ barang, harga, tanggal });
await fs.promises.writeFile(transaksiFilePath, JSON.stringify(transaksiData, null, 2));
} catch (error) {
console.error("Error saving transaction:", error);
}
}

async function readTransactions() {
try {
if (fs.existsSync(transaksiFilePath)) {
return JSON.parse(await fs.promises.readFile(transaksiFilePath));
} else {
return [];
}
} catch (err) {
console.error('Error reading transactions:', err);
return [];
}
}
// Puki
const qctc = {key: {participant: '0@s.whatsapp.net', ...(m.chat ? {remoteJid: `status@broadcast`} : {})}, message: {liveLocationMessage: {caption: `EnosBot By Senn`,jpegThumbnail: ""}}}
// Reply
const reply = async (teks) => {
return anggazyy.sendMessage(m.chat, {
contextInfo: {
mentionedJid: [m.sender],
externalAdReply: {
showAdAttribution: false,
renderLargerThumbnail: false,
title: `Made By Senn Tamvan`,
body: `Aktif : ${runtime(process.uptime())}`,
previewType: "VIDEO",
thumbnail: randomImageUrl,
sourceUrl: `github.com`,
mediaUrl: `https://files.catbox.moe/o8pwzy.jpg`
}
},
text: teks
}, {
quoted: m
})
}
switch(command) {
case 'menu': 
let menu = `
*Informasi Script:*
*Type* : *Case*
*Libary*: *@Whiskeysockets/baileys*
*Aktif* : *${runtime(process.uptime())}*

𐓷 *Owner*
⇝ addprem *Nomor|Waktu
⇝ delprem *Nomor*
⇝ self *Mode Self*
⇝ public *Mode Seleb*

𐓷 *Tools*
⇝ tourl *Reply Image*
⇝ get *Input Url*
⇝ encrypt *Reply File.js*
⇝ encrypthard *Reply File.js*
⇝ decrypt *Reply Document*
⇝ shortlink *Url Link*
⇝ translate *Input Bahasa*

𐓷 *Buy Otomatis*
⇝ buypanel *Buypanel Nama,Ram*
⇝ buyadp *Buyadp Nama*
⇝ buyvps *1gb - 8gb*
⇝ qris *Otomatis*

𐓷 *Push Kontak*
⇝ pushkontak *Tesknya*
⇝ pushkontak2 *Idgrup|Tesknya*
⇝ listgc *All Grup*
⇝ done *Barang, Nominal*

𐓷 *Saluran*
⇝ cekidch *Link Saluran Atau Channel*
⇝ upchannel *Reply Foto Atau Tesk*
⇝ upchannel2 *Reply Foto Atau Tesk*
⇝ upchannel3 *Reply Audio Atau Tesk*

𐓷 *Downloader*
⇝ spotify *Url music*
⇝ playspotify *Judul Lagu*
⇝ tiktok *Url Tiktok*
⇝ mediafire *Input Link*
⇝ instagram *Url Instagram*
`
 anggazyy.sendMessage(m.chat, {
    video: {
        url: 'https://files.catbox.moe/ki2k6c.mp4'
    },
    caption: menu,
    gifPlayback: true,
    gifAttribution: 1,
    contextInfo: {
        mentionedJid: [m.sender],
        externalAdReply: {
            showAdAttribution: true,
            title: 'Senn Tamvan',
            body: 'https://whatsapp.com/channel/0029VaktLJC65yD6t6BuPh2j',
            thumbnailUrl: randomImageUrl,
            sourceUrl: 'https://xnxx.com',
            mediaType: 1,
            renderLargerThumbnail: true
        },
        forwardedNewsletterMessageInfo: {
            newsletterJid: '120363305567511487@newsletter',
            newsletterName: 'Powered By Senn Tamvan',
            serverMessageId: -1
        }
    }
}, { quoted: fkontak });
break
case "qris": { 
await anggazyy.sendMessage(m.chat, {image: {url: "https://files.catbox.moe/gofybz.jpg"}, caption: "\n*Payment Qris Senn - Tamvan*\n\n*[ ! ] Penting :* \`\`\`wajib kirimkan bukti tf detail demi keamanan bersama\`\`\`"}, {quoted: qpayment})
}
break
case "tr": case "translate": {
let language
let teks
let defaultLang = "en"
if (text || m.quoted) {
let translate = require('translate-google-api')
if (text && !m.quoted) {
if (args.length < 2) return reply("usage:\nid good night")
language = args[0]
teks = text.split(" ").slice(1).join(' ')
} else if (m.quoted) {
if (!text) return reply("usage:\nid good night")
if (args.length < 1) return reply("Usage:\nid good night")
if (!m.quoted.text) return reply("usage:\nid good night")
language = args[0]
teks = m.quoted.text
}
let result
try {
result = await translate(`${teks}`, {to: language})
} catch (e) {
result = await translate(`${teks}`, {to: defaultLang})
} finally {
m.reply(result[0])
}
} else {
return reply("Usage:\nBahasa Yang Mau Kalian Translate + Teks\nContoh: En Selamat Siang")
}}
break
case "shortlink": case "shorturl": {
if (!text) return m.reply("shortlink https://example.com")
if (!isUrl(text)) return m.reply(".shortlink https://example.com")
var res = await axios.get('https://tinyurl.com/api-create.php?url='+encodeURIComponent(text))
var link = `
*shortlink by tinyurl.com*
${res.data.toString()}
`
return m.reply(link)
}
break
case "cekidch": {
if (!text) return m.reply("Mana Link Ch Nya")
if (!text.includes("https://whatsapp.com/channel/")) return m.reply("Link Tautan Tidak Valid")
let result = text.split('https://whatsapp.com/channel/')[1]
let res = await anggazyy.newsletterMetadata("invite", result)
let teks = `
* *Id :* ${res.id}
* *Nama :* ${res.name}
* *Total Pengikut :* ${res.subscribers}
* *Status :* ${res.state}
* *Verified :* ${res.verification == "VERIFIED" ? "Terverifikasi" : "Tidak"}
`
return m.reply(teks)
}
break
case 'dec': case 'decrypt': {
const { webcrack } = await import('webcrack');
const usage = `Contoh:
${command} (Input text or reply text to dec code)
${command} Doc (Reply To A Document)`;

if (!isPrem) return m.reply('Khusus Premium');

let text;
if (args.length >= 1) {
text = args.join(" ");
} else if (m.quoted && m.quoted.text) {
text = m.quoted.text;
} else {
return m.reply(usage);
}

try {
let message;
if (text === 'doc' && m.quoted && m.quoted.mtype === 'documentMessage') {
let docBuffer;
if (m.quoted.mimetype) {
docBuffer = await m.quoted.download();
}
message = await webcrack(docBuffer.toString('utf-8'));
} else {
message = await webcrack(text);
}

const filePath = './@sampah_decrypt_enosbot';
fs.writeFileSync(filePath, message.code);
await anggazyy.sendMessage(m.chat, {
document: {
url: filePath
},
mimetype: 'application/javascript',
fileName: 'Dec By © Senn'
}, {quoted: m});

} catch (error) {
const errorMessage = `Terjadi Kesalahan: ${error.message}`;
await m.reply(errorMessage);
}
}
break
case 'done': case 'd': {
if (!isCreator) return reply(`njirr Lu siapa Cuk`)
let s = text.split(',')
let barang = s[0]
let nominal = s[1]
if (s.length < 2) return m.reply(`*Format Salah!*
Penggunaan:
${prefix + command} barang,nominal`)
if (!barang) return reply(`Ex : ${prefix+command} barang,nominal\n\nContoh :\n${prefix+command} vipies,60000`)
if (!nominal) return reply(`Ex : ${prefix+command} barang,nominal\n\nContoh :\n${prefix+command} panel,1000`)
text_done = `「 𝗧𝗥𝗔𝗡𝗦𝗔𝗞𝗦𝗜 𝗕𝗘𝗥𝗛𝗔𝗦𝗜𝗟 」

📦 Barang : ${barang}
💸 Nominal : ${nominal}
📆 Tanggal : ${hariini}
✨ Status : Berhasil

Terimakasih Order Di Senn Tamvan
𝗗𝗶 𝗧𝘂𝗻𝗴𝗴𝘂 𝗢𝗿𝗱𝗲𝗿𝗮𝗻 𝗦𝗲𝗹𝗮𝗻𝗷𝘂𝘁𝗻𝘆𝗮☺️`
await anggazyy.relayMessage(m.chat,  {
requestPaymentMessage: {
currencyCodeIso4217: 'IDR',
amount1000: `${nominal}*100000`,
requestFrom: m.sender,
noteMessage: {
extendedTextMessage: {
text: text_done,
contextInfo: {
externalAdReply: {
showAdAttribution: true,
}}}}}}, {})
}
break
case "listgc": {
let gcall = Object.values(await anggazyy.groupFetchAllParticipating().catch(_=> null))
let listgc = '\n'
await gcall.forEach((u, i) => {
listgc += `*${i+1}.* ${u.subject}\n* *Id :* ${u.id}\n* *Total Member :* ${u.participants.length} Member\n* *Status Grup :* ${u.announce == true ? "Tertutup" : "Terbuka"}\n* *Pembuat :* ${u.owner ? u.owner.split('@')[0] : 'Sudah Keluar'}\n\n`
})
anggazyy.sendMessage(m.chat, {text: `${listgc}`, contextInfo: {mentionedJid: [m.sender], externalAdReply: {
thumbnail: CR, title: `[ ${gcall.length} Group Chat ] `, body: `Runtime : ${runtime(process.uptime())}`,  sourceUrl: global.url2, previewType: "PHOTO"}}}, {quoted: m})
}
break
case "pushkontak": {
if (!isCreator) return m.reply('Soasik')
if (!isGroup) return m.reply("Khusus Dalam Group!")
if (!text) return m.reply("Mana Teksnya?")
var teks = text
const halls = await groupMetadata.participants.filter(v => v.id.endsWith('.net')).map(v => v.id)
m.reply(`Memproses Mengirim Pesan Ke *${halls.length} Member Grup*`)
for (let mem of halls) {
if (mem !== m.sender) {
contacts.push(mem)
await fs.writeFileSync('./database/ctcs.json', JSON.stringify(contacts))
await anggazyy.sendMessage(mem, {text: teks}, {quoted: qctc})
await sleep(65000)
}}
try {
const uniqueContacts = [...new Set(contacts)]
const vcardContent = uniqueContacts.map((contact, index) => {
const vcard = [
"BEGIN:VCARD",
"VERSION:3.0",
`FN:Kontak Wa [${createSerial(2)}] ${contact.split("@")[0]}`,
`TEL;type=CELL;type=VOICE;waid=${contact.split("@")[0]}:+${contact.split("@")[0]}`,
"END:VCARD",
"", ].join("\n")
return vcard }).join("")
fs.writeFileSync("./database/ctc.vcf", vcardContent, "utf8")
} catch (err) {
m.reply(err.toString())
} finally {
if (m.chat !== m.sender) await m.reply(`Berhasil Mengirim Pesan Ke *${halls.length} Member Grup*, File Contact Berhasil Dikirim ke Private Chat`)
await anggazyy.sendMessage(m.sender, { document: fs.readFileSync("./database/ctc.vcf"), fileName: "contacts.vcf", caption: "File Contact Berhasil Di Buat✅", mimetype: "text/vcard", }, { quoted: m })
contacts.splice(0, contacts.length)
await fs.writeFileSync("./database/ctcs.json", JSON.stringify(contacts))
await fs.writeFileSync("./database/ctc.vcf", "")
}}
break			  
case "pushkontak2": {
if (!isCreator) return m.reply(`Soasik`)
if (!text) return m.reply("idgrup|pesannya\n\nketik *.listgc* untuk melihat semua list id grup")
if (!text.split("|")) return m.reply("idgrup|pesannya\n\nketik *.listgc* untuk melihat semua list id grup")
var [idnya, teks] = text.split("|")
var groupMetadataa
try {
groupMetadataa = await anggazyy.groupMetadata(`${idnya}`)
} catch (e) {
return m.reply("*Id Grup* Tidak Valid!")
}
const participants = await groupMetadataa.participants
const halls = await participants.filter(v => v.id.endsWith('.net')).map(v => v.id)
m.reply(`Memproses Mengirim Pesan Ke *${halls.length} Member Grup*`)
for (let mem of halls) {
if (mem !== m.sender) {
contacts.push(mem)
await fs.writeFileSync('./database/ctcs.json', JSON.stringify(contacts))
await anggazyy.sendMessage(mem, {text: teks}, {quoted: qpayment})
await sleep(72000)
}}
try {
const uniqueContacts = [...new Set(contacts)]
const vcardContent = uniqueContacts.map((contact, index) => {
const vcard = [
"BEGIN:VCARD",
"VERSION:3.0",
`FN:Kontak Wa [${createSerial(2)}] ${contact.split("@")[0]}`,
`TEL;type=CELL;type=VOICE;waid=${contact.split("@")[0]}:+${contact.split("@")[0]}`,
"END:VCARD",
"", ].join("\n")
return vcard }).join("")
fs.writeFileSync("./database/ctc.vcf", vcardContent, "utf8")
} catch (err) {
m.reply(err.toString())
} finally {
if (m.chat !== m.sender) await m.reply(`Berhasil Mengirim Pesan Ke *${halls.length} Member Grup*, File Contact Berhasil Dikirim ke Private Chat`)
await anggazyy.sendMessage(m.sender, { document: fs.readFileSync("./database/ctc.vcf"), fileName: "contacts.vcf", caption: "File Contact Berhasil Di Buat✅", mimetype: "text/vcard", }, { quoted: m })
contacts.splice(0, contacts.length)
await fs.writeFileSync("./database/ctcs.json", JSON.stringify(contacts))
await fs.writeFileSync("./database/ctc.vcf", "")
}}
break
case "ig": {
if (!text) return m.reply("Mana Linknya?")
if (!text.startsWith('https://')) return m.reply("Link Tautan Tidak Valid")
await anggazyy.sendMessage(m.chat, {react: {text: '🕖', key: m.key}})
await fetchJson(`https://api.neekoi.me/api/igdl?url=${text}`),then(async (res) => {
if (!res.status) return m.reply("Error! Result Not Found")
await anggazyy.sendMessage(m.chat, {video: {url: res.result[0].url}, mimetype: "video/mp4", caption: "*Instagram Downloader ✅*"}, {quoted: m})
await anggazyy.sendMessage(m.chat, {react: {text: '', key: m.key}})
}).catch((e) => m.reply("Error! Result Not Found"))
}
break
case "upchannel": case "upch": {
if (!isCreator) return m.reply('soasik')
if (!text) return m.reply("Reply Dengan / Ke Foto & Teks")
await anggazyy.sendMessage(idCH, {text: text})
m.reply("berhasil mengirim pesan *teks* ke dalam channel whatsapp")
}
break
case "upchannel2": case "upch2": {
if (!isCreator) return m.reply('soasik')
if (!text) return m.reply("Mana Foto & Teksnya?")
if (!/image/.test(mime)) return m.reply("Reply Dengan / Ke Foto & Teks")
let img = await anggazyy.downloadAndSaveMediaMessage(qmsg)
await anggazyy.sendMessage(idCH, {image: await fs.readFileSync(img), caption: text})
m.reply("berhasil mengirim pesan *teks & foto* ke dalam channel whatsapp")
await fs.unlinkSync(img)
}
break
case "upchannel3": case "upch3": {
if (!isCreator) return m.reply('soasik')
if (!text) return m.reply("Mana Tesk Atau Audio?")
if (!/audio/.test(mime)) return m.reply("Reply Audio & Teks")
let aud = await anggazyy.downloadAndSaveMediaMessage(qmsg)
await anggazyy.sendMessage(idCH, {audio: await fs.readFileSync(aud)})
m.reply(`berhasil mengirim pesan *audio atau tesk* ke dalam channel whatsapp ${idCH} `)
await fs.unlinkSync(aud)
}
break
case "buyadp": {
if (!text) return m.reply("Mana Usernamenya?")

const amount = global.hargaadp;
const ppn = Math.floor(Math.random() * 100) + 1;
const totalAmount = Number(amount) + Number(ppn);

const username = text.toLowerCase();
const email = `${username}@admin.public`;
const name = capital(args[0]);
const password = username + crypto.randomBytes(2).toString('hex');

try {
const pay = await (await fetch(`https://api.rafaelxputra.my.id/api/orkut/createpayment?amount=${totalAmount}&codeqr=${codeQr}`)).json();

const expirationTime = new Date(pay.result.expirationTime);
const timeLeft = Math.max(0, Math.floor((expirationTime - new Date()) / 60000));
const currentTime = new Date(new Date().toLocaleString("en-US", { timeZone: "Asia/Jakarta" }));
const expireTimeJakarta = new Date(currentTime.getTime() + timeLeft * 60000);
const hours = expireTimeJakarta.getHours().toString().padStart(2, '0');
const minutes = expireTimeJakarta.getMinutes().toString().padStart(2, '0');
const formattedTime = `${hours}:${minutes}`;

const tek = `*Berikut Detail Pembayaran Anda*
Id Transaksi : ${pay.result.transactionId}
Nominal : Rp. ${pay.result.amount}
Ppn : Rp. ${ppn}
Waktu: ${timeLeft} Menit

Silakan Scan Qris Di Atas Sebelum ${formattedTime} Untuk Melakukan Pembayaran.`;

await anggazyy.sendMessage(m.chat, { image: { url: `${pay.result.qrImageUrl}` }, caption: `${tek}` }, m);

const apiUrl = `https://api.rafaelxputra.my.id/api/orkut/cekstatus?merchant=${merchantOrkut}&keyorkut=${apikeyOrkut}`;
let isTransactionComplete = false;

while (!isTransactionComplete) {
try {
const currentTime = new Date();
if (currentTime >= expirationTime) {
console.log('qris telah kedaluwarsa.');
m.reply(`waktu pembayaran telah habis. Silakan ulangi proses pembelian.`);
break;
}
const response = await axios.get(apiUrl);
const result = response.data;
console.log('Data Transaksi:', result);

if (result && result.amount && parseInt(result.amount) === totalAmount) {
isTransactionComplete = true;

const userCreationResponse = await fetch(domain + "/api/application/users", {
method: "POST",
headers: {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": `Bearer ${apikey}`
},
body: JSON.stringify({
email: email,
username: username.toLowerCase(),
first_name: name,
last_name: "Admin",
root_admin: true,
language: "en",
password: password.toString()
})
});

const userCreationResult = await userCreationResponse.json();
if (userCreationResult.errors) {
return m.reply(JSON.stringify(userCreationResult.errors[0], null, 2));
}

const user = userCreationResult.attributes;
const notification = `*Pembayaran Anda Selesai!*

* *ID :* ${user.id}
* *Nama :* ${user.first_name}
* *Login :* ${domain}
* *Created :* ${user.created_at.split("T")[0]}

*Rules Pembelian Panel ⚠️*
1. Simpan Data Ini Sebaik Mungkin, Seller Hanya Mengirim 1 Kali!
2. Data Hilang/Lupa Akun, Seller Tidak Akan Bertanggung Jawab!
3. Garansi Aktif 20 Hari
4. Claim Garansi Wajib Membawa Bukti Ss Chat Saat Pembelian
5. Dilarang Keras Ngintip Server Lain!
6. Dilarang Mencuri/Mengubah Apapun!
7. Melanggar? Delete Adp + Viralin.
`;

await anggazyy.sendMessage(m.chat, { text: notification }, m);
break;
}
} catch (error) {
console.error('error checking transaction status:', error);
}

if (!isTransactionComplete) {
await new Promise(resolve => setTimeout(resolve, 10000));
}
}
} catch (error) {
console.error('error creating qris or checking payment status:', error);
m.reply('gagal membuat atau memeriksa pembayaran.');
}
}
break;
case "buypanel": case "belipanel": {
if (!text) return m.reply(`Mana Nama Dan RAM nya?`);
const [username, packageName] = text.split(",");
if (!username || !packageName) return m.reply(`Mana Nama Dan RAM nya?`);
const packages = {
"1gb": { ram: "1024", disk: "1024", cpu: "40", harga: parseInt(global.gb1) },
"2gb": { ram: "2048", disk: "2048", cpu: "60", harga: parseInt(global.gb2) },
"3gb": { ram: "3072", disk: "3072", cpu: "80", harga: parseInt(global.gb3) },
"4gb": { ram: "4096", disk: "4096", cpu: "100", harga: parseInt(global.gb4) },
"5gb": { ram: "5120", disk: "5120", cpu: "120", harga: parseInt(global.gb5) },
"6gb": { ram: "6144", disk: "6144", cpu: "140", harga: parseInt(global.gb6) },
"7gb": { ram: "7168", disk: "7168", cpu: "160", harga: parseInt(global.gb7) },
"8gb": { ram: "8192", disk: "8192", cpu: "180", harga: parseInt(global.gb8) },
"9gb": { ram: "9216", disk: "9216", cpu: "200", harga: parseInt(global.gb9) },
"unli": { ram: "0", disk: "0", cpu: "0", harga: parseInt(global.gbUnli) }
};

const selectedPackage = packages[packageName.toLowerCase()];
if (!selectedPackage) return m.reply(`Mana Nama Dan RAM nya?`);
const { ram, disk, cpu, harga } = selectedPackage;
const ppn = Math.floor(Math.random() * 100) + 1;
const totalAmount = harga + ppn;

let email = `${username.toLowerCase()}@xinn.srv`;
let egg = global.eggsnya
let loc = global.location3
let name = username.charAt(0).toUpperCase() + username.slice(1);
let password = `${username}${crypto.randomBytes(2).toString('hex')}`;

try {
const pay = await (await fetch(`https://api.rafaelxputra.my.id/api/orkut/createpayment?amount=${totalAmount}&codeqr=${codeQr}`)).json();
if (!pay.result || !pay.result.qrImageUrl) {
return m.reply("Gagal membuat QRIS, coba lagi nanti.");
}

const expirationTime = new Date(pay.result.expirationTime);
const timeLeft = Math.max(0, Math.floor((expirationTime - new Date()) / 60000));
const currentTime = new Date(new Date().toLocaleString("en-US", { timeZone: "Asia/Jakarta" }));
const expireTimeJakarta = new Date(currentTime.getTime() + timeLeft * 60000);
const hours = expireTimeJakarta.getHours().toString().padStart(2, '0');
const minutes = expireTimeJakarta.getMinutes().toString().padStart(2, '0');
const formattedTime = `${hours}:${minutes}`;

const teks = `
*▧ INFORMASI PEMBAYARAN*

*ID Transaksi:* ${pay.result.transactionId}
*Nominal:* Rp${toRupiah(harga)}
*PPN:* Rp. ${toRupiah(ppn)}
*Total:* Rp. ${toRupiah(totalAmount)}
*Waktu:* ${timeLeft} menit

*Note :* 
Qris pembayaran hanya berlaku sampai ${formattedTime} jika sudah melewati pembayaran dinyatakan tidak valid!`;

await xin.sendMessage(m.chat, {
image: { url: pay.result.qrImageUrl },
caption: teks
}, { quoted: m });

const apiUrl = `https://api.rafaelxputra.my.id/api/orkut/cekstatus?&merchant=${merchantOrkut}&keyorkut=${apikeyOrkut}`;
let isTransactionComplete = false;

while (!isTransactionComplete) {
const now = new Date();
if (now >= expirationTime) {
console.log("QRIS telah kedaluwarsa.");

let expired = `
*▧ NOTIFICATION EXPIRED*

 *• ID Transaksi :* ${pay.result.transactionId}
 *• Nominal :* Rp. ${toRupiah(totalAmount)}
 *• Status :* Qris Expired
 
 Waktu pembayaran telah habis. Silakan ulangi proses pembelian.
`;

await xin.sendMessage(m.chat, { text: expired }, { quoted: m });
break;
}

try {
const response = await axios.get(apiUrl);
const result = response.data;
console.log("Cek status transaksi:", result);

if (result && result.amount && parseInt(result.amount) === totalAmount) {
isTransactionComplete = true;

const createUser = await fetch(`${domain}/api/application/users`, {
method: "POST",
headers: {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": `Bearer ${apikey}`
},
body: JSON.stringify({
email,
username: username.toLowerCase(),
first_name: name,
last_name: "Server",
language: "en",
password
})
});

const userData = await createUser.json();
if (userData.errors) return m.reply(JSON.stringify(userData.errors[0], null, 2));
const usr_id = userData.attributes.id;
const createServer = await fetch(`${domain}/api/application/servers`, {
method: "POST",
headers: {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": `Bearer ${apikey}`
},
body: JSON.stringify({
name,
description: tanggal(Date.now()),
user: usr_id,
egg: parseInt(egg),
docker_image: "ghcr.io/parkervcp/yolks:nodejs_18",
startup: "npm start",
environment: {
INST: "npm",
USER_UPLOAD: "0",
AUTO_UPDATE: "0",
CMD_RUN: "npm start"
},
limits: { memory: ram, swap: 0, disk, io: 500, cpu },
feature_limits: { databases: 5, backups: 5, allocations: 5 },
deploy: {
locations: [parseInt(loc)],
dedicated_ip: false,
port_range: []
}
})
});

const serverData = await createServer.json();
if (serverData.errors) throw new Error(JSON.stringify(serverData.errors[0], null, 2));
const server = serverData.attributes;
const teksPanel = `
*PEMBAYARAN BERHASIL DITERIMA ✅*

*ID Server :* ${server.id}
*Username :* ${username}
*Password :* ${password} 
*Login :* ${domain}

*Keterangan Pembelian 🛍️*
*Ram :* ${ram === "0" ? "Unlimited" : ram.charAt(0) + "GB"}
*Cpu :* ${cpu === "0" ? "Unlimited" : cpu + "%"}
*Disk :* ${disk === "0" ? "Unlimited" : disk.charAt(0) + "GB"}
*Created :* ${tanggal(Date.now())}

*Rules Pembelian Panel ⚠️*
* Simpan Data Ini Sebaik Mungkin, Seller Hanya Mengirim 1 Kali!
* Data Hilang/Lupa Akun, Seller Tidak Akan Bertanggung Jawab!
* Garansi Aktif 20 Hari
* Claim Garansi Wajib Membawa Bukti Ss Chat Saat Pembelian
`;

await xin.sendMessage(m.chat, { text: teksPanel }, { quoted: m });
}
} catch (error) {
console.error("Error checking transaction status:", error);
}

if (!isTransactionComplete) {
await new Promise(resolve => setTimeout(resolve, 10000));
}
}
} catch (error) {
console.error("Error creating QRIS or processing payment:", error);
m.reply("Gagal membuat atau memeriksa pembayaran.");
}
}
case "buyvps": {
    const ramOptions = {
        '1gb': { price: parseInt(global.ram1), size: 's-1vcpu-1gb' },
        '2gb': { price: parseInt(global.ram2), size: 's-1vcpu-2gb' },
        '4gb': { price: parseInt(global.ram4), size: 's-2vcpu-4gb' },
        '8gb': { price: parseInt(global.ram8), size: 's-4vcpu-8gb' },
        '16gb': { price: parseInt(global.ram16), size: 's-4vcpu-16gb-amd' },
    };

    if (!text || !ramOptions[text.toLowerCase()]) {
        return xin.sendMessage(m.chat, {
            text: '❌ RAM YANG TERSEDIA\n- 1gb\n- 2gb\n- 4gb\n- 8gb\n- 16gb\nContoh : .buyvps 1gb',
        });
    }

    const selectedRam = text.toLowerCase();
    const { price, size } = ramOptions[selectedRam];
    const fee = Math.floor(Math.random() * 101); // Admin fee max Rp 100
    const totalAmount = price + fee;

    try {
        const paymentResponse = await fetch(`https://api.abidev.tech/api/orkut/createpayment?amount=${totalAmount}&codeqr=${codeQr}`);
        const paymentData = await paymentResponse.json();

        if (!paymentData.result || !paymentData.result.qrImageUrl) {
            throw new Error('Gagal membuat pembayaran, coba lagi nanti.');
        }

        const expirationTime = new Date(Date.now() + 5 * 60 * 1000);
        const formattedExpiration = expirationTime.toLocaleTimeString('id-ID', { hour: '2-digit', minute: '2-digit' });

        const paymentDetails = `*DETAIL PEMESANAN VPS*\n\n- *RAM VPS:* ${selectedRam.toUpperCase()}\n- *Region:* Sydney\n- *OS:* Ubuntu 20.04\n- *Harga:* Rp ${price.toLocaleString('id-ID')}\n- *Biaya Admin:* Rp ${fee.toLocaleString('id-ID')}\n- *Total Pembayaran:* Rp ${totalAmount.toLocaleString('id-ID')}\n- *Batas Waktu Pembayaran:* ${formattedExpiration}\n\n*Silakan scan QRIS di atas untuk melanjutkan pembayaran.*`;

        const message = await xin.sendMessage(m.chat, {
            image: { url: paymentData.result.qrImageUrl },
            caption: paymentDetails,
        });

        const statusApiUrl = `https://api.abidev.tech/api/orkut/cekstatus?merchant=${merchantOrkut}&keyorkut=${apikeyOrkut}`;
        let isTransactionComplete = false;
        const maxWaitTime = 5 * 60 * 1000; // Max wait time for payment (5 minutes)
        const startTime = Date.now();

        while (!isTransactionComplete && Date.now() - startTime < maxWaitTime) {
            try {
                const statusResponse = await axios.get(statusApiUrl);
                const statusData = statusResponse.data;

                if (statusData && parseInt(statusData.amount) === totalAmount && statusData.type === 'CR') {
                    isTransactionComplete = true;

                    await xin.sendMessage(m.chat, { delete: message.key });
                    await xin.sendMessage(m.chat, {
                        text: '✅ Pembayaran berhasil diterima! Proses instalasi VPS sedang berlangsung...',
                    });

                    // Generate random password for root
                    const rootPassword = "vpsCloud" + randomNumber();
                    const pw = rootPassword;
                    const sanitizedSender = m.sender.replace(/[^a-zA-Z0-9-]/g, '-');
                    const dropletName = `vps-by-xinbot`.slice(0, 63);

                    // Create the VPS droplet using DigitalOcean API
                    const vpsResponse = await fetch('https://api.digitalocean.com/v2/droplets', {
                        method: 'POST',
                        headers: {
                            'Content-Type': 'application/json',
                            Authorization: `Bearer ${global.token_do}`,
                        },
                        body: JSON.stringify({
                            name: dropletName,
                            region: 'syd1',  // Region for VPS
                            size: size,
                            image: 'ubuntu-20-04-x64',
                            backups: false,
                            ipv6: true,
                            monitoring: true,
                            user_data: `
                            #cloud-config
                            chpasswd:
                              list: |
                                root:${pw}
                              expire: False
                            `,
                            tags: ['html-xin-vps'],
                        }),
                    });

                    const vpsData = await vpsResponse.json();

                    if (!vpsData.droplet) {
                        throw new Error(`Gagal membuat VPS: ${vpsData.message || 'Kesalahan tidak diketahui.'}`);
                    }

                    const dropletId = vpsData.droplet.id;
                    let dropletReady = false;
                    const pollingInterval = 10000; // 10 seconds polling
                    while (!dropletReady && Date.now() - startTime < maxWaitTime) {
                        try {
                            const dropletResponse = await fetch(`https://api.digitalocean.com/v2/droplets/${dropletId}`, {
                                method: 'GET',
                                headers: {
                                    'Content-Type': 'application/json',
                                    Authorization: `Bearer ${global.token_do}`,
                                },
                            });

                            const dropletData = await dropletResponse.json();

                            if (dropletData.droplet && dropletData.droplet.status === 'active') {
                                dropletReady = true;

                                const ipAddress = dropletData.droplet.networks.v4[0]?.ip_address;
                                if (!ipAddress) {
                                    throw new Error('Gagal mendapatkan IP VPS.');
                                }

                                const vpsDetails = `✅ *PESANAN VPS BERHASIL!*\n\n- *RAM VPS:* ${selectedRam.toUpperCase()}\n- *Region:* Sydney\n- *OS:* Ubuntu 20.04\n- *IP VPS:* ${ipAddress}\n- *Hostname:* ${dropletName}\n- *Username:* root\n- *Password:* ${rootPassword}\n\n❗ *Rules:*\nDilarang digunakan untuk kegiatan ilegal seperti mining, DDoS, atau aktivitas terlarang lainnya.`;

                                await xin.sendMessage(m.chat, {
                                    image: { url: 'https://pomf2.lain.la/f/6x4u9aqx.jpg' },
                                    caption: vpsDetails,
                                });
                                return;
                            }
                        } catch (error) {}

                        // Delay polling
                        await new Promise(resolve => setTimeout(resolve, pollingInterval));
                    }

                    if (!dropletReady) {
                        throw new Error('Droplet tidak siap dalam waktu yang diharapkan.');
                    }
                }
            } catch (error) {
                console.error(error);
            }

            // Delay polling
            await new Promise(resolve => setTimeout(resolve, 10000)); // 10 seconds
        }

        if (!isTransactionComplete) {
            await xin.sendMessage(m.chat, { delete: message.key });
            await xin.sendMessage(m.chat, {
                text: `❌ *WAKTU PEMBAYARAN TELAH HABIS!*\n\nTransaksi Anda melebihi batas waktu pembayaran. Silakan coba lagi dengan membuat transaksi baru.`,
            });
        }
    } catch (error) {
        return xin.sendMessage(m.chat, { text: '❌ Gagal membuat atau memeriksa pembayaran. Silakan coba lagi nanti.' });
    }
}
break;
case 'encrypt': {
if (!m.quoted) return m.reply("Reply File.js")
if (mime !== "application/javascript") return m.reply("Reply File.js")
let media = await m.quoted.download()
let filename = m.quoted.fileName
await fs.writeFileSync(`./@enc${filename}.js`, media)
await m.reply("memproses encrypt code. . .")
await JsConfuser.obfuscate(await fs.readFileSync(`./@enc${filename}.js`).toString(), {
  target: "node",
  preset: "low"
}).then(async (obfuscated) => {
  await fs.writeFileSync(`./@enc${filename}.js`, obfuscated)
  await anggazyy.sendMessage(m.chat, {document: fs.readFileSync(`./@enc${filename}.js`), mimetype: "application/javascript", fileName: filename, caption: "Encrypt File Sukses!"}, {quoted: m})
}).catch(e => m.reply("Error :" + e))
}
break
case 'encrypthard': {
if (!m.quoted) return m.reply("Reply File.js")
if (mime !== "application/javascript") return m.reply("Reply File.js")
let media = await m.quoted.download()
let filename = m.quoted.fileName
await fs.writeFileSync(`./@hardenc${filename}.js`, media)
await m.reply("Memproses Encrypt Hard Code . . .")
await JsConfuser.obfuscate(await fs.readFileSync(`./@hardenc${filename}.js`).toString(), {
          target: "node",
    preset: "high",
    compact: true,
    minify: true,
    flatten: true,

    identifierGenerator: function() {
        const originalString = 
            "SennTamvan" + 
            "SennNihhhhhhhhhhhhhhC";

        function unidentifiedReplacer(input) {
            return input.replace(
                /[^a-zA-Z/*ᨒZenn/*^/*($break)*/]/g, ''
            );
        }

        function randomString(panjang) {
            let hasil = '';
            const karakter = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
            const panjangKarakter = karakter.length;

            for (let i = 0; i < panjang; i++) {
                hasil += karakter.charAt(
                    Math.floor(Math.random() * panjangKarakter)
                );
            }
            return hasil;
        }

        return unidentifiedReplacer(originalString) + randomString(2);
    },
    renameVariables: true,
    renameGlobals: true,
    stringEncoding: 0.01, 
    stringSplitting: 0.1, 
    stringConcealing: true,
    stringCompression: true,
    duplicateLiteralsRemoval: true,
    shuffle: {
        hash: false,
        true: false
    },
    stack: false,
    controlFlowFlattening: false, 
    opaquePredicates: false, 
    deadCode: false, 
    dispatcher: false,
    rgf: false,
    calculator: false,
    hexadecimalNumbers: false,
    movedDeclarations: true,
    objectExtraction: true,
    globalConcealing: true
}).then(async (obfuscated) => {
  await fs.writeFileSync(`./@hardenc${filename}.js`, obfuscated)
  await anggazyy.sendMessage(m.chat, {document: fs.readFileSync(`./@hardenc${filename}.js`), mimetype: "application/javascript", fileName: filename, caption: "Encrypt Sukses! Type:\n Hard Encryption"}, {quoted: m})
}).catch(e => m.reply("Error :" + e))
}
break
case 'get': {
if (!isCreator) return m.reply('Lu Siapa');
if (!text) return m.reply("Please Input Url.\nExample: .get https://anggazyysite.vercel.app");
try {
var check = await fetchJson(text);
let jsonContent = JSON.stringify(check, null, 2);
await anggazyy.sendMessage(m.chat, { document: Buffer.from(jsonContent, 'utf-8'), fileName: 'index.html', mimetype: 'text/html' }, { quoted: m, caption: 'Sukses Fetching' });
    } catch (e) {
        return m.reply(e.toString());
    }
}
break;
case "play": {
if (!text) return m.reply(`*Example:* ${prefix + command} phdotograph`)
let search = await yts(text);
let telaso = search.all[0].url;
var responsek = await ytdl(telaso)
var puki = responsek.data.mp3
anggazyy.sendMessage(m.chat, { audio: { url: puki },
mimetype: "audio/mpeg",
fileName: "senntamvan.mp3",
contextInfo: {
forwardingScore: 100,
isForwarded: true,
externalAdReply: {
showAdAttribution: true,
title: search.all[0].title,
sourceUrl: search.all[0].timestamp,
thumbnailUrl: search.all[0].thumbnail,
}}},{quoted:m})
}
break
case "backup":{
if (!isCreator) return m.reply('you do not have permission to access this feature.');
const { execSync } = require("child_process");
const ls = (await execSync("ls")).toString().split("\n").filter(
  (pe) =>
pe != "node_modules" &&
pe != "package-lock.json" &&
pe != "yarn.lock" &&
pe != "tmp" &&
pe != ""
);
const exec = await execSync(`zip -r backup.zip ${ls.join(" ")}`);
await anggazyy.sendMessage(m.chat, { document: await fs.readFileSync("./backup.zip"), mimetype: "application/zip", fileName: "backup.zip",},{quoted: m}); await execSync("rm -rf backup.zip");
}
break 
case "tourl": {
if (!/video/.test(mime) && !/image/.test(mime)) return m.reply(`*Send/Reply The Video/Image With Caption* ${prefix + command}`)
if (!quoted) return m.reply(`*Send/Reply the Video/Image Caption* ${prefix + command}`)
let q = m.quoted ? m.quoted : m
anggazyy.sendMessage(from, {
react: {
text: '🎁',
key: m.key
}
});
let media = await q.download()
let uploadImage = require('./serverside/libary/catmoe')
let isTele = /image\/(png|jpe?g|gif)|video\/mp4/.test(mime)
let link = await (isTele ? uploadImage : uploadFile)(media)
m.reply(`Your Link : ${link}\nExpired Date : Liftime`)
}
break
case 'spotify':
  if (!text) return m.reply(`Urlnya Mana?\n*Contoh:* ${prefix + command} https://open.spotify.com/track/xxxxxx`)
  anggazyy.sendMessage(m.chat, { react: { text: '👒', key: m.key }})
  let urlSpo = linkRegex.test(text)
  if (!urlSpo) return m.reply(`Hanya Support Url Track *(music)*\n*Contoh Url:* https://open.spotify.com/track/xxxxxx`)
  let response = await spotifyDown(text)
  let { nama, title, durasi, thumb, url } = response
  
  if (response) {
  let cap = `*© 𝖲𝗉𝗈𝗍𝗂𝖿𝗒 𝖬𝗎𝗌𝗂𝖼*

*[🏷️] Info Music*
* *Title:* ${title}
* *Durasi:* ${durasi}
* *Artis:* ${nama}
* *Spotify:* ${text}

\`Kamu Dapat Mencari Music Spotify\`\n*Caranya:* ${prefix}playspotify <music name>`
  await anggazyy.sendMessage(m.chat, { text: cap, contextInfo: { mentionedJid: [m.sender], externalAdReply: { mediaUrl: '', mediaType: 1, title: title, body: 'Senn Tamvan', thumbnailUrl: thumb, sourceUrl: '', renderLargerThumbnail: true, showAdAttribution: false } } }, { quoted: m });
 anggazyy.sendMessage(m.chat, { audio: { url: url }, mimetype: 'audio/mp4' }, { quoted: m })
  } else {
     m.m.reply(eror)
    }
break
case 'tiktok': {
async function tiktok(query) {
 return new Promise(async (resolve, reject) => {
 try {
 const encodedParams = new URLSearchParams();
encodedParams.set('url', query);
encodedParams.set('hd', '1');

 const response = await axios({
 method: 'POST',
 url: 'https://tikwm.com/api/',
 headers: {
 'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8',
 'Cookie': 'current_language=en',
 'User-Agent': 'Mozilla/5.0 (Linux; Android 10; K) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/116.0.0.0 Mobile Safari/537.36'
 },
 data: encodedParams
 });
 const videos = response.data.data;
 const result = {
 title: videos.title,
 cover: videos.cover,
 origin_cover: videos.origin_cover,
 no_watermark: videos.play,
 watermark: videos.wmplay,
 music: videos.music
 };
 resolve(result);
 } catch (error) {
 reject(error);
 }
 });
}
if (args.length == 0) return m.reply(`☘️ *Link Tiktoknya Mana?*`)
if (!isUrl(args[0])) return m.reply('⚠️ *Itu Bukan Link Yang Benar*')
m.reply(mess.wait)
let cap = ``
let res = await tiktok(`${args[0]}`)
anggazyy.sendMessage(m.chat, { video: { url: res.no_watermark }, caption: cap, fileName: `tiktok.mp4`, mimetype: 'video/mp4' }).then(() => {
anggazyy.sendMessage(m.chat, { audio: { url: res.music }, fileName: `tiktok.mp3`, mimetype: 'audio/mp4' })
})
}
break
case 'clear': {
if (!isCreator) return m.reply('you do not have permission to access this feature.');
                fs.readdir("./sessionserver", async function(err, files) {
                    if (err) {
                        console.log('Unable to scan directory: ' + err);
                        return m.reply('Unable to scan directory: ' + err);
                    }
                    let filteredArray = await files.filter(item => item.startsWith("pre-key") ||
                        item.startsWith("sender-key") || item.startsWith("session-") || item.startsWith("app-state")
                    )
                    console.log(filteredArray.length);
                    let teks = `detected ${filteredArray.length} junk files\n\n`
                    if (filteredArray.length == 0) return m.reply(teks)
                    filteredArray.map(function(e, i) {
                        teks += (i + 1) + `. ${e}\n`
                    })
                    m.reply(teks)
                    await sleep(2000)
                    m.reply("deleting junk files...")
                    await filteredArray.forEach(function(file) {
                        fs.unlinkSync(`./sessionserver/${file}`)
                    });
                    await sleep(2000)
                    m.reply("successfully deleted all the trash in the session folder")
                });
            }
break  
case 'self': {
if (!isCreator) return m.reply('you do not have permission to access this feature.')
anggazyy.public = false
m.reply(`succes switch mode bot sekarang mode self`)
}
break
case 'public': {
if (!isCreator) return m.reply('you do not have permission to access this feature')
anggazyy.public = true
m.reply(`succes switch mode bot sekarang mode public`)
}
break
case 'mediafire': {
    async function mediafiredll(url) {
        const res = await axios.get(`https://www-mediafire-com.translate.goog/${url.replace('https://www.mediafire.com/', '')}?_x_tr_sl=en&_x_tr_tl=fr&_x_tr_hl=en&_x_tr_pto=wapp`);
        const $ = cheerio.load(res.data);
        
        const fileurl = $('#downloadButton').attr('href');
        const filename = $('body > main > div.content > div.center > div > div.dl-btn-cont > div.dl-btn-labelWrap > div.promoDownloadName.notranslate > div')
            .attr('title')
            .replaceAll(' ', '')
            .replaceAll('\n', '');
        
        const date = $('body > main > div.content > div.center > div > div.dl-info > ul > li:nth-child(2) > span').text();
        const filesize = $('#downloadButton').text()
            .replace('Download', '')
            .replace('(', '')
            .replace(')', '')
            .replace('\n', '')
            .replace('\n', '')
            .replace('                         ', '')
            .replaceAll(' ', '');
        
        let filetype = '';
        let rese = await axios.head(fileurl);
        filetype = rese.headers['content-type'];

        return { filename, filesize, date, filetype, fileurl };
    }

    let input = `*Example*: ${prefix + command} https://www.mediafire.com/xxxxxxx*`;
    
    if (!text) return m.reply(input);
    
    const dataJson = await mediafiredll(text);
    const { filename, filesize, date, filetype, fileurl } = dataJson
    if (filesize.split('MB')[0] >= 100) {
        return m.reply('*gede banget size nya komtol, gak mao ah😠*');
    }

    await sleep(500);
    
    const caption = `≡ *Mediafire*

▢ *Name* : ${filename}
▢ *Size* : ${filesize}
▢ *Type* : ${filetype}
▢ *UploadAt*: ${date}`;

     anggazyy.sendMessage(m.chat, { document : { url : fileurl}, fileName : filename, caption: caption, mimetype: filetype }, { quoted : m });
}
break;
case 'addprem': {
if (!isCreator) return m.reply('Khusus Own')
const swn = args.join(" ")
const pcknm = swn.split("|")[0];
const atnm = swn.split("|")[1];
if (!pcknm) return m.reply(`Penggunaan :\n*${prefix}addprem* @tag|waktu\n*${prefix}addprem* nomor|waktu\n\nContoh : ${prefix+command} @tag|30d`)
if (!atnm) return m.reply(`mau yang berapa hari?`)
let users = m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
if (users) {
prem.addPremiumUser((pcknm.replace('@','')+'@s.whatsapp.net').replace(' @','@'), atnm, premium)
m.reply('Sukses')
} else {
var cekap = await anggazyy.onWhatsApp(pcknm+"@s.whatsapp.net")
if (cekap.length == 0) return m.reply(`masukkan nomer yang valid/terdaftar di whatsApp`)
prem.addPremiumUser((pcknm.replace('@','')+'@s.whatsapp.net').replace(' @','@'), atnm, premium)
m.reply('Sukses')
}}
break
case 'renamecase':
    if (!q) return m.reply('format tidak valid. Contoh: renamecase izintes|izintesnew');
    if (!isCreator) return m.reply('Khusus Owner');

    // Pisahkan input menjadi nama case lama dan nama case baru
    const [oldCaseName, newCaseName] = q.split('|').map(name => name.trim());

    if (!oldCaseName || !newCaseName) {
        return m.reply('Format Tidak Valid. Contoh: renamecase izintes|izintesnew');
    }

    // Path ke file yang berisi switch-case
    const rinembos = path.join(__dirname, 'enos.js');

    try {
        // Baca file secara sinkron
        let data = fs.readFileSync(rinembos, 'utf8');

        // Ekspresi reguler untuk mencari case berdasarkan nama lama
        const caseRegex = new RegExp(`case\\s+'${oldCaseName}'\\s*:\\s*`, 'g');
        const startIndex = data.search(caseRegex);

        if (startIndex === -1) {
            return m.reply(`case '${oldCaseName}' tidak ditemukan.`);
        }

        // Cari case berikutnya setelah case yang dicari
        const nextCasePattern = /case\s+'/g;
        nextCasePattern.lastIndex = startIndex + 1;
        const nextCaseMatch = nextCasePattern.exec(data);

        // Update nama case
        const updatedData = data.replace(caseRegex, `case '${newCaseName}':`);
        
        // Tulis kembali ke file
        fs.writeFileSync(rinembos, updatedData, 'utf8');
        m.reply(`case '${oldCaseName}' sukses menjadi '${newCaseName}'!`);
    } catch (err) {
        console.error(err);
        m.reply('terjadi kesalahan saat membaca atau menulis file.');
    }
break;
case 'editcase':
    if (!q) return m.reply('mana case yang ingin diedit? Format: .editcase case \'namafitur\':\n\n<kode baru>');
    if (!isCreator) return m.reply('Khusus Owner');

    const caseNameRegex = /case\s+'([^']+)':/; 
    const match = q.match(caseNameRegex);

    if (!match) {
        return m.reply('format tidak benar. Contoh: .editcase case \'namafitur\':\n\n<kode baru>');
    }

    const caseName = match[1]; 
    const newCode = q.replace(caseNameRegex, '').trim(); 

   
    const filenyabang = path.join(__dirname, 'enos.js');

    try {
        
        let data = fs.readFileSync(filenyabang, 'utf8');
        const caseRegex = new RegExp(`case\\s+'${caseName}'\\s*:\\s*`, 'g');
        const startIndex = data.search(caseRegex);

        if (startIndex !== -1) {
            let endIndex = -1;
            const breakPattern = /break\s*;/g;
            breakPattern.lastIndex = startIndex;
            const breakMatch = breakPattern.exec(data);

            if (breakMatch) {
                endIndex = breakMatch.index + breakMatch[0].length;
            }

           
            const nextCasePattern = /case\s+'/g;
            nextCasePattern.lastIndex = startIndex + 1;
            const nextCaseMatch = nextCasePattern.exec(data);

            if (nextCaseMatch && (endIndex === -1 || nextCaseMatch.index < endIndex)) {
                endIndex = nextCaseMatch.index;
            }

            if (endIndex !== -1) {
                const updatedCode = `case '${caseName}':\n${newCode}\n`;
                data = data.slice(0, startIndex) + updatedCode + data.slice(endIndex);
                fs.writeFileSync(filenyabang, data, 'utf8');
                m.reply(`succesfully update case ${q}!`);
            } else {
                m.reply('maaf, tidak ditemukan akhir yang jelas untuk case tersebut.');
            }
        } else {
            m.reply('sorry, case nya gada di file enos.js');
        }
    } catch (err) {
        console.error(err);
        m.reply('eror, silahkan cek console untuk lihat apa yang eror');
    }
break;
case 'getfunc':
    if (!isCreator) return m.reply('Khusus Owner');
    
    const anggazyyZcoder = path.join(__dirname, 'enos.js');
    
    try {
        const data = fs.readFileSync(anggazyyZcoder, 'utf8');
        
        if (!q) {
           
            const funcRegex = /async function (\w+)\s*\([^)]*\)\s*{/g;
            let functionsList = [];
            let match;

            
            while ((match = funcRegex.exec(data)) !== null) {
                functionsList.push(match[1]); 
            }

            if (functionsList.length > 0) {

                m.reply(`mau cari function apa?\n\n${functionsList.map((func, index) => `${index + 1}. ${func}`).join('\n')}`);
            } else {
                m.reply('tidak ada async function yang ditemukan.');
            }
            return; 
        }

        
        const funcRegex = new RegExp(`async function ${q}\\s*\\([^)]*\\)\\s*{`, 'g');
        const startIndex = data.search(funcRegex);
        
        if (startIndex !== -1) {
            let openBrackets = 0;
            let endIndex = startIndex;
            for (let i = startIndex; i < data.length; i++) {
                if (data[i] === '{') {
                    openBrackets++;
                } else if (data[i] === '}') {
                    openBrackets--;
                    if (openBrackets === 0) {
                        endIndex = i;
                        break;
                    }
                }
            }
            
            const extrakbang = data.slice(startIndex, endIndex + 1);
            m.reply(`*Your Function*:\n\n${extrakbang}`);
        } else {
            m.reply('nama func nya gada bro, coba cari lain');
        }
    } catch (err) {
        console.error(err);
        m.reply('error! cek console mu.');
    }
break;
case 'addcase': {
    if (!q) return m.reply('mana case yang ingin ditambahkan? Format: .addcase case \'namafitur\':\n\n<kode baru>');
    
    if (!isCreator) return m.reply('Khusus Owner');

    const caseNameRegex = /case\s+'([^']+)':/; 
    const match = q.match(caseNameRegex);

    if (!match) {
        return m.reply('format tidak benar. Contoh: .addcase case \'namafitur\':\n\n<kode baru>');
    }

    const caseName = match[1]; 
    const newCode = q.replace(caseNameRegex, '').trim(); // Mengambil kode baru setelah nama case

    // Memastikan tidak ada 'break;' di akhir kode baru
    const hasBreak = newCode.endsWith('break;');
    if (hasBreak) {
        newCode = newCode.slice(0, -6).trim(); // Menghapus 'break;' jika ada
    }

    const filenyabang = path.join(__dirname, 'enos.js');

    try {
        let data = fs.readFileSync(filenyabang, 'utf8');
        const insertPosition = data.lastIndexOf('break;'); // Mencari posisi terakhir dari break;

        if (insertPosition !== -1) {
            // Membuat string untuk case baru
            const newCaseCode = `\ncase '${caseName}':\n${newCode}\n`;
            // Menyisipkan case baru setelah break terakhir
            data = data.slice(0, insertPosition + 'break;'.length) + newCaseCode + data.slice(insertPosition + 'break;'.length);
            fs.writeFileSync(filenyabang, data, 'utf8');
            m.reply(`case '${caseName}' telah berhasil ditambahkan.`);
        } else {
            m.reply('gagal menemukan posisi untuk menambahkan case. Pastikan format case di dalam file benar.');
        }
    } catch (err) {
        console.error(err);
        m.reply('error, silahkan cek console untuk lihat apa yang eror');
    }
    }
break;
case 'hapuscase':{
if (!q) return m.reply('mana case yang ingin dihapus? Format: .hapuscase case \'namafitur\'');

    if (!isCreator) return m.reply('Khusus owner');

    const caseNameRegex = /case\s+'([^']+)':/; 
    const match = q.match(caseNameRegex);

    if (!match) {
        return m.reply('format tidak benar. Contoh: .hapuscase case \'namafitur\'');
    }

    const caseName = match[1]; 
    const ZcoderAnggazyynihboss = path.join(__dirname, 'enos.js');

    try {
        let data = fs.readFileSync(ZcoderAnggazyynihboss, 'utf8');
        const caseRegex = new RegExp(`case\\s+'${caseName}'\\s*:\\s*`, 'g');
        const startIndex = data.search(caseRegex);

        if (startIndex !== -1) {
            let endIndex = -1;
            const breakPattern = /break\s*;/g;
            breakPattern.lastIndex = startIndex;
            const breakMatch = breakPattern.exec(data);

            if (breakMatch) {
                endIndex = breakMatch.index + breakMatch[0].length;
            }

            // Mencari case berikutnya
            const nextCasePattern = /case\s+'/g;
            nextCasePattern.lastIndex = startIndex + 1;
            const nextCaseMatch = nextCasePattern.exec(data);

            if (nextCaseMatch && (endIndex === -1 || nextCaseMatch.index < endIndex)) {
                endIndex = nextCaseMatch.index;
            }

            if (endIndex !== -1) {
                // Menghapus case dari file
                data = data.slice(0, startIndex) + data.slice(endIndex);
                fs.writeFileSync(ZcoderAnggazyynihboss, data, 'utf8');
                m.reply(`case '${caseName}' telah berhasil dihapus.`);
            } else {
                m.reply('maaf, tidak ditemukan akhir yang jelas untuk case tersebut.');
            }
        } else {
            m.reply('sorry, case nya tidak ada di file enos.js');
        }
    } catch (err) {
        console.error(err);
        m.reply('error, silahkan cek console untuk lihat apa yang eror');
    }
    }
break;      
case 'getcase':
    if (!q) return m.reply('mana nama case yang ingin diambil?');
   if (!isCreator) return m.reply('Khusus Owner')
    // Path ke file yang berisi switch-case
    const filePath = path.join(__dirname, 'enos.js');
    
    try {
        // Baca file secara sinkron
        const data = fs.readFileSync(filePath, 'utf8');
        
        // Ekspresi reguler untuk mencari case berdasarkan nama
        const caseRegex = new RegExp(`case\\s+'${q}'\\s*:\\s*`, 'g');
        const startIndex = data.search(caseRegex);
        
        if (startIndex !== -1) {
            let endIndex = -1;
            const breakPattern = /break\s*;/g;
            breakPattern.lastIndex = startIndex;
            const breakMatch = breakPattern.exec(data);
            
            if (breakMatch) {
                endIndex = breakMatch.index + breakMatch[0].length;
            }
            
            // Cari case berikutnya setelah case yang dicari
            const nextCasePattern = /case\s+'/g;
            nextCasePattern.lastIndex = startIndex + 1;
            const nextCaseMatch = nextCasePattern.exec(data);
            
            if (nextCaseMatch && (endIndex === -1 || nextCaseMatch.index < endIndex)) {
                endIndex = nextCaseMatch.index;
            }
            
            if (endIndex !== -1) {
                // Ekstrak isi case
                const caseCode = data.slice(startIndex, endIndex);
                m.reply(`nih case:\n\n${caseCode}`);
            } else {
                // Jika tidak ditemukan batas akhir
                m.reply('maaf, tidak ditemukan akhir yang jelas untuk case tersebut.');
            }
        } else {
            // Jika case tidak ditemukan, kirimkan pesan
            m.reply('maaf, case tidak ada dalam file enos.js');
        }
    } catch (err) {
        console.error(err);
        m.reply('terjadi kesalahan saat membaca file.');
    }
break;
case 'delprem': {
if (!isCreator) return m.reply('Khusus Own')
if (!args[0]) return m.reply(`Penggunaan :\n*${prefix}delprem* @tag\n*${prefix}delprem* nomor`)
let users = m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
if (users) {
premium.splice(prem.getPremiumPosition(users, premium), 1)
fs.writeFileSync('./serverside/system/premium.json', JSON.stringify(premium))
m.reply('Sukses!')
} else {
var cekpr = await anggazyy.onWhatsApp(args[0]+"@s.whatsapp.net")
if (cekpr.length == 0) return m.reply(`masukkan nomer yang valid/terdaftar di whatsApp`)
premium.splice(prem.getPremiumPosition(args[0] + '@s.whatsapp.net', premium), 1)
fs.writeFileSync('./serverside/system/premium.json', JSON.stringify(premium))
m.reply('Sukses!')
}}
break
default: 
if (budy.startsWith('=>')) {
if (!isCreator) return
function Return(sul) {
sat = JSON.stringify(sul, null, 2)
bang = util.format(sat)
if (sat == undefined) {
bang = util.format(sul)
}
return m.reply(bang)
}
try {
m.reply(util.format(eval(`(async () => { return ${budy.slice(3)} })()`)))
} catch (e) {
m.reply(String(e))
}
}

if (budy.startsWith('>')) {
if (!isCreator) return
let kode = budy.trim().split(/ +/)[0]
let teks
try {
teks = await eval(`(async () => { ${kode == ">>" ? "return" : ""} ${q}})()`)
} catch (e) {
teks = e
} finally {
await m.reply(require('util').format(teks))
}
}
if (budy.startsWith('$')) {
if (!isCreator) return
exec(budy.slice(2), (err, stdout) => {
if (err) return m.reply(`${err}`)
if (stdout) return m.reply(stdout)
})
}
}
} catch (err) {
console.log(util.format(err))
}
}
let file = require.resolve(__filename)
require('fs').watchFile(file, () => {
	require('fs').unwatchFile(file)
	console.log('\x1b[0;32m'+__filename+' \x1b[1;32mupdated!\x1b[0m')
	delete require.cache[file]
	require(file)
})

