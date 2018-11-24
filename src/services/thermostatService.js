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
  const buf = Buffer.from(rawData.data)
  return {
    isHeatingOn: rawData.data[8] === 0 ? false : true,
    thermostatTargetTemp: buf.slice(1,3).readInt16LE() / 10
  }
}

module.exports = {
  getAvailableDevices,
  getThermostateStats
}
