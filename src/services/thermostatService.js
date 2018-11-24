const request = require('request-promise')

const ENTRYPOINT = 'http://192.168.43.44:8080'

function getAvailableDevices() {
  return request.get(ENTRYPOINT + '/devices')
    .then(JSON.parse)
}



module.exports = {
  getAvailableDevices
}