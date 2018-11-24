const express = require('express')
const {getAvailableDevices, getThermostateStats} = require('./services/thermostatService')
const cors = require('cors')

const app = express()

app.use(cors())

app.get('/api/devices', (req, res) => {
  getAvailableDevices().then(devices => {
    res.json(devices)
  })
})

app.get('/api/devices/:thermoId/stats', (req, res) => {
  getThermostateStats(req.params.thermoId).then(stats => {
    res.json(stats)
  })
})

app.listen(3000, () => console.log('Listening on 3000'))

