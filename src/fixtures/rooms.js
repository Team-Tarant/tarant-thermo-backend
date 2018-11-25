const rooms = [
  {
    id: 101,
    occupied: false,
    occupiedFrom: new Date(Date.now() + 1000 * 60 * 60 * 25),
    occupiedTo: new Date(Date.now() + 1000 * 60 * 60 * 49),
    thermoId: null,
    isWarmingUp: false,
    roomTemperature: 21.0
  },
  {
    id: 102,
    occupied: false,
    occupiedFrom: new Date(Date.now() + 1000 * 60 * 60 * 45),
    occupiedTo: new Date(Date.now() + 1000 * 60 * 60 * 100),
    thermoId: null,
    isWarmingUp: false,
    roomTemperature: 20.9
  },
  {
    id: 103,
    occupied: false,
    occupiedFrom: new Date(Date.now() + 1000 * 60 * 60 * 666),
    occupiedTo: new Date(Date.now() + 1000 * 60 * 60 * 777),
    thermoId: null,
    isWarmingUp: false,
    roomTemperature: 20.8
  },
  {
    id: 104,
    occupied: false,
    occupiedFrom: new Date(Date.now() + 1000 * 60 * 60 * 33),
    occupiedTo: new Date(Date.now() + 1000 * 60 * 60 * 44),
    thermoId: null,
    isWarmingUp: false,
    roomTemperature: 21.4
  },
  {
    id: 105,
    occupied: false,
    occupiedFrom: null,
    occupiedTo: null,
    thermoId: null,
    isWarmingUp: false,
    roomTemperature: 16.9
  },
  {
    id: 106,
    occupied: false,
    occupiedFrom: new Date(Date.now() + 1000 * 60 * 60 * 100),
    occupiedTo: new Date(Date.now() + 1000 * 60 * 60 * 1000),
    thermoId: null,
    isWarmingUp: false,
    roomTemperature: 18.5
  },
  {
    id: 107,
    occupied: false,
    occupiedFrom: new Date(Date.now() - 1000 * 60 * 60 * 100),
    occupiedTo: new Date(Date.now() + 1000 * 60 * 60 * 10000),
    thermoId: null,
    isWarmingUp: false,
    roomTemperature: 19.5
  },
  {
    id: 201,
    occupied: false,
    occupiedFrom: new Date(Date.now() + 1000 * 60 * 60 * 99),
    occupiedTo: new Date(Date.now() + 1000 * 60 * 60 * 789),
    thermoId: null,
    isWarmingUp: false,
    roomTemperature: 23.7
  },
  {
    id: 202,
    occupied: false,
    occupiedFrom: null,
    occupiedTo: null,
    thermoId: '000b57ae7169',
    isWarmingUp: false,
    roomTemperature: 16.5
  },
  {
    id: 203,
    occupied: false,
    occupiedFrom: new Date(Date.now() + 1000 * 60 * 60 * 344),
    occupiedTo: new Date(Date.now() + 1000 * 60 * 60 * 5666),
    thermoId: null,
    isWarmingUp: false,
    roomTemperature: 21.6
  },
  {
    id: 203,
    occupied: false,
    occupiedFrom: new Date(Date.now() - 1000 * 60 * 60 * 4556),
    occupiedTo: new Date(Date.now() + 1000 * 60 * 60 * 89889),
    thermoId: null,
    isWarmingUp: false,
    roomTemperature: 21.4
  },
  {
    id: 204,
    occupied: false,
    occupiedFrom: null,
    occupiedTo: null,
    thermoId: '000b57adf725',
    isWarmingUp: false,
    roomTemperature: 15.9
  },
  {
    id: 205,
    occupied: false,
    occupiedFrom: new Date(Date.now() + 1000 * 60 * 60 * 7778),
    occupiedTo: new Date(Date.now() + 1000 * 60 * 60 * 58985),
    thermoId: null,
    isWarmingUp: false,
    roomTemperature: 20.7
  },
  {
    id: 206,
    occupied: false,
    occupiedFrom: new Date(Date.now() + 1000 * 60 * 60 * 897),
    occupiedTo: new Date(Date.now() + 1000 * 60 * 60 * 49),
    thermoId: null,
    isWarmingUp: false,
    roomTemperature: 22.0
  }
]

module.exports = rooms