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
      thermoId: r.thermoId
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
    occupiedFrom: body.occupiedFrom,
    occupiedTo: body.occupiedTo
  }

  res.json(rooms[Number(req.params.id)])
})

// For demo
route.get('/reset', (req, res) => {
  setRoomMap()
  res.status(200).send()
})

function checkForHeatup() {
  const keys = Object.keys(roomMap)
  keys.forEach(k => {
    const room = roomMap[k]
    
  })
}

setInterval(checkForHeatup, 1000)

module.exports = route