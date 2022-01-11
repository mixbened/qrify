const express = require('express')
const PORT = process.env.PORT || 8080
const app = express()

app.get('/', (req, res) => res.send('We are rocking with secure data.'))

app.listen(PORT, () => console.log('We are rocking: ' + PORT))
