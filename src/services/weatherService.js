const request = require('request-promise')

function getWeatherForDate(date) {
  return request.get(`https://api.darksky.net/forecast/${process.env.DARK_SKY_API_KEY}/60.171184,%2024.940931,${Math.floor((date.getTime() - (120 * 60000))  / 1000)}?units=si`)
    .then(JSON.parse)
    .then(rawData => ({tmp: rawData.daily.data[0].temperatureHigh}))
}

module.exports = {
  getWeatherForDate
}