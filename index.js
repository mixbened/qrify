const express = require('express')
const PORT = 3000

const app = express()

app.get('/', (req, res) => res.send('We are rocking with secure data.'))

app.listen(PORT, () => console.log('We are rocking: ' + PORT))
