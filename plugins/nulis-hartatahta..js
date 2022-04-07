import fetch from 'node-fetch'

let handler = async (m, { conn, text, usedPrefix, command}) => {
if (!text) throw `teksnya mana bang?\n\n${usedPrefix + command} mars`
let res = await fetch(API('chipa', '/api/harta', { text }, 'apikey'))
if (!res.ok) throw eror
let img = await res.buffer()
if (!img) throw img
conn.sendFile(m.chat, img, 'tahta.jpg', 'Jadi Nih', m)
}
handler.help = ['tahta'].map(v => v + '<teks>')
handler.tags = ['nulis']
handler.command = /^(harta|tahta)$/

export default handler