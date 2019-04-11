const express = require('express')

const ProfileCtrl = require('./controllers/Profile')
const port = 6000

const app = express()
app.use(express.json())




app.listen(port, () => {
  console.log('listening on port', port)
})