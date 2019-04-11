const express = require('express')

const ProfileCtrl = require('./controllers/ProfileCtrl')
const port = 6000

const app = express()
app.use(express.json())

app.get('/api/profiles', ProfileCtrl.get)
app.post('/api/profiles', ProfileCtrl.create)

app.listen(port, () => {
  console.log('listening on port', port)
})