const express = require('express')
const rooms = require('../fixtures/rooms')

const {increaseTemperature} = require('../services/thermostatService')

const roomMap = {}

function setRoomMap() {
  rooms.forEach(r => {
    roomMap[r.id] = {
      id: r.id,
      occupiedFrom: r.occupiedFrom,
      occupiedTo: r.occupiedTo,
      thermoId: r.thermoId,
      isWarmingUp: r.isWarmingUp
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

  res.json(rooms[Number(req.params.id)])
})

// For demo
route.get('/reset', (req, res) => {
  shutDownAllHeating()
  setRoomMap()
  res.status(200).send()
})

function checkForHeatup() {
  const keys = Object.keys(roomMap)
  keys.forEach(k => {
    const room = roomMap[k]
    if (!room.occupiedFrom || !room.occupiedTo) return
    const deltaT = room.occupiedFrom.getTime() - Date.now()
    if (deltaT <= (1000 * 60 * 60 * 3) && room.thermoId && !room.isWarmingUp) {
      increaseTemperature(room.thermoId, 100)
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