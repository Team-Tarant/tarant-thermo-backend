const express = require('express')
const {getAvailableDevices} = require('./services/thermostatService')
const cors = require('cors')

const roomController = require('./controllers/roomController')

const app = express()

app.use(cors())
app.use(express.json())

app.use('/api/rooms', roomController)

app.get('/api/devices', (req, res) => {
  getAvailableDevices().then(devices => {
    res.json(devices)
  })
})

/*
app.get('/api/devices/:thermoId/stats', (req, res) => {
  getThermostateStats(req.params.thermoId).then(stats => {
    res.json(stats)
  })
})


app.patch('/api/devices/:thermoId/', (req, res) => {
  const { precent, tier } = req.body
  if (!precent && !tier) return res.status(400).json({error: 'Invalid body'})
  if (!precent) {
    switch(tier) {
      case 'l':
        increaseTemperature(req.params.thermoId, 33)
        break;
      case 'm':
        increaseTemperature(req.params.thermoId, 66)
        break;
      case 'h':
        increaseTemperature(req.params.thermoId, 100)
    } 
    return res.status(200).send()
  }
  
  if (!tier) {
    increaseTemperature(req.params.thermoId, Number(precent))
    return res.status(200).send()
  }
})
*/

app.listen(3000, () => console.log('Listening on 3000'))

