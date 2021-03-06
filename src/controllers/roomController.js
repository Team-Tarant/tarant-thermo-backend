const express = require('express')
const rooms = require('../fixtures/rooms')

const {increaseTemperature, getThermostateStats} = require('../services/thermostatService')
const {getWeatherForDate} = require('../services/weatherService')

const roomMap = {}

function setRoomMap() {
  rooms.forEach(async r => {
    //const {roomTemperature} = r.thermoId ? await getThermostateStats(r.thermoId) : {roomTemperature: null}
    roomMap[r.id] = {
      id: r.id,
      occupiedFrom: r.occupiedFrom,
      occupiedTo: r.occupiedTo,
      thermoId: r.thermoId,
      isWarmingUp: r.isWarmingUp,
      roomTemperature: r.roomTemperature
    }
  })
}

setRoomMap()

const route = express.Router()

route.get('/', (req, res) => {
  res.status(200).json(roomMap)
})

route.patch('/:id', (req, res) => {
  const room = roomMap[Number(req.params.id)]
  if (!room) {
    return res.status(404).send()
  }

  const body = req.body
  roomMap[Number(req.params.id)] = {
    ...room,
    occupiedFrom: new Date(body.occupiedFrom),
    occupiedTo: new Date(body.occupiedTo)
  }
  res.json(roomMap[Number(req.params.id)])
})

// For demo
route.get('/reset', (req, res) => {
  shutDownAllHeating()
  setRoomMap()
  res.status(200).send()
})

async function checkForHeatup() {
  const keys = Object.keys(roomMap)
  keys.forEach(async k => {
    const room = roomMap[k]
    if (!room.occupiedFrom || !room.occupiedTo) return
    const deltaT = (room.occupiedFrom.getTime() - (120 * 60000)) - Date.now()
    if (deltaT <= (60000 * 180) && room.thermoId && !room.isWarmingUp) {
      const {tmp} = await getWeatherForDate(room.occupiedFrom)
      let warmUpPrecent = 60
      if (tmp < 0.0) {
        warmUpPrecent = 100
      } else if (tmp > 25.0) {
        warmUpPrecent = 20
      }
      increaseTemperature(room.thermoId, warmUpPrecent)
      roomMap[room.id] = {
        ...room,
        isWarmingUp: true
      }
    } 
  })
}

function shutDownAllHeating() {
  const keys = Object.keys(roomMap)
  keys.forEach(k => {
    const room = roomMap[k]
    if (room.thermoId && room.isWarmingUp) {
      console.log('Found room with heat on.')
      increaseTemperature(room.thermoId, 0)
    }
  })
}

setInterval(checkForHeatup, 1000)

module.exports = route