const request = require('request-promise')

const ENTRYPOINT = 'http://192.168.43.44:8081'

function getAvailableDevices() {
  return request.get(ENTRYPOINT + '/devices')
    .then(JSON.parse)
    .catch(e => console.error(e))
}

async function getThermostateStats(thermoId) {
  const response = await request.get(ENTRYPOINT + `/devices/${thermoId}/CHAR_ECO_TEMPERATURE_MODE`)
    .then(JSON.parse)
    .catch(e => console.error(e))
  
  if (response.data[8] === 255) {
    return await getThermostateStats(thermoId)
  } else {
    return parseThermoData(response)
  }
}

function increaseTemperature(thermoId, precent) {
  const body = {
    payload: [Math.min(precent, 100)]
  }
  return request.patch(ENTRYPOINT + `/devices/${thermoId}/CHAR_ECO_FORCE_CONTROL`,{ 
    body: JSON.stringify(body),
    headers: {
      "content-type": "application/json"
    }
  })
}

function parseThermoData(rawData) {
  const buf = Buffer.from(rawData.data)
  return {
    isHeatingOn: rawData.data[8] !== 0 ? true : false,
    roomTemperature: buf.slice(4,6).readInt16LE() / 10
  }
}

module.exports = {
  getAvailableDevices,
  getThermostateStats,
  increaseTemperature
}
