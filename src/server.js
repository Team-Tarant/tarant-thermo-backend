const express = require('express')
const {getAvailableDevices} = require('./services/thermostatService')

const app = express()

app.get('/api/devices', (req, res) => {
  getAvailableDevices().then(devices => {
    res.json(devices)
  })
})

app.listen(3000, () => console.log('Listening on 3000'))

