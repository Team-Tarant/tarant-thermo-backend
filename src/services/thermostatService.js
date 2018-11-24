const request = require('request-promise')

const ENTRYPOINT = 'http://192.168.43.44:8081'

function getAvailableDevices() {
  return request.get(ENTRYPOINT + '/devices')
    .then(JSON.parse)
}

function getThermostateStats(thermoId) {
  return request.get(ENTRYPOINT + `/devices/${thermoId}/CHAR_ECO_TEMPERATURE_MODE`)
    .then(JSON.parse)
    .then(parseThermoData)
}

function parseThermoData(rawData) {
  return {
    isHeatingOn: rawData.data[8] === 0 ? false : true
  }
}

module.exports = {
  getAvailableDevices,
  getThermostateStats
}
