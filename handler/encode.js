module.exports = {
   encode:  (req, res) => {
       const message = req.body
       return res.json(message)
   }
}
