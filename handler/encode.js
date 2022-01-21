const QRCode = require('qrcode')
const path = require('path')
const nodemailer = require('nodemailer')
const ejs = require('ejs')
const fs = require('fs')
const htmlToText = require('html-to-text')

module.exports = {
   addReport: async (req, res) => {
      const report = req.body
      res.json(report)
   }
}
