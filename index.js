const express = require('express')
const bodyParser = require('body-parser');
const handler = require('./handler/encode')
const dotenv = require('dotenv');

const PORT = process.env.PORT || 8080
const app = express()
dotenv.config()
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', (req, res) => res.send('We are rocking with secure data.'))
app.post('/scan', handler.scanPage)

app.listen(PORT, () => console.log('We are rocking: ' + PORT))
