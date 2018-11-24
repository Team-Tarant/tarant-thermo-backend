const rooms = [
  {
    id: 1,
    occupied: false,
    occupiedFrom: new Date(Date.now() + 1000 * 60 * 60 * 25),
    occupiedTo: new Date(Date.now() + 1000 * 60 * 60 * 49),
    thermoId: null
  },
  {
    id: 2,
    occupied: false,
    occupiedFrom: new Date(Date.now() + 1000 * 60 * 60 * 45),
    occupiedTo: new Date(Date.now() + 1000 * 60 * 60 * 100),
    thermoId: null
  },
  {
    id: 3,
    occupied: false,
    occupiedFrom: new Date(Date.now() + 1000 * 60 * 60 * 666),
    occupiedTo: new Date(Date.now() + 1000 * 60 * 60 * 777),
    thermoId: null
  },
  {
    id: 4,
    occupied: false,
    occupiedFrom: new Date(Date.now() + 1000 * 60 * 60 * 33),
    occupiedTo: new Date(Date.now() + 1000 * 60 * 60 * 44),
    thermoId: null
  },
  {
    id: 5,
    occupied: false,
    occupiedFrom: null,
    occupiedTo: null,
    thermoId: null
  },
  {
    id: 6,
    occupied: false,
    occupiedFrom: new Date(Date.now() + 1000 * 60 * 60 * 100),
    occupiedTo: new Date(Date.now() + 1000 * 60 * 60 * 1000),
    thermoId: null
  },
  {
    id: 7,
    occupied: false,
    occupiedFrom: new Date(Date.now() + 1000 * 60 * 60 * 100),
    occupiedTo: new Date(Date.now() + 1000 * 60 * 60 * 10000),
    thermoId: null
  },
  {
    id: 8,
    occupied: false,
    occupiedFrom: new Date(Date.now() + 1000 * 60 * 60 * 99),
    occupiedTo: new Date(Date.now() + 1000 * 60 * 60 * 789),
    thermoId: null
  },
  {
    id: 9,
    occupied: false,
    occupiedFrom: null,
    occupiedTo: null,
    thermoId: null
  },
  {
    id: 10,
    occupied: false,
    occupiedFrom: new Date(Date.now() + 1000 * 60 * 60 * 344),
    occupiedTo: new Date(Date.now() + 1000 * 60 * 60 * 5666),
    thermoId: null
  },
  {
    id: 11,
    occupied: false,
    occupiedFrom: new Date(Date.now() + 1000 * 60 * 60 * 4556),
    occupiedTo: new Date(Date.now() + 1000 * 60 * 60 * 89889),
    thermoId: null
  },
  {
    id: 12,
    occupied: false,
    occupiedFrom: null,
    occupiedTo: null,
    thermoId: '000b57adf725'
  },
  {
    id: 13,
    occupied: false,
    occupiedFrom: new Date(Date.now() + 1000 * 60 * 60 * 7778),
    occupiedTo: new Date(Date.now() + 1000 * 60 * 60 * 58985),
    thermoId: null
  },
  {
    id: 14,
    occupied: false,
    occupiedFrom: new Date(Date.now() + 1000 * 60 * 60 * 897),
    occupiedTo: new Date(Date.now() + 1000 * 60 * 60 * 49),
    thermoId: null
  }
]

module.exports = rooms