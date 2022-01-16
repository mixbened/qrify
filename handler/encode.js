const QRCode = require('qrcode')
const path = require('path')
const nodemailer = require('nodemailer')
const ejs = require('ejs')
const fs = require('fs')
const htmlToText = require('html-to-text')
const scan = require('./scan')

module.exports = {
   scanPage: async (req, res) => {
      const result = await scan()
      delete result.audits["screenshot-thumbnails"]
      res.json(result)
   }
}
