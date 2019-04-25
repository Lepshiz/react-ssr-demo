const fetch = require('cross-fetch')
const querystring = require('querystring')
const dateToISO = require('../services/dateToISO')

const api_key = '84NhCZlbc3xp5UfzHNC2lAtJxgJKOu4PZwD8sIqg'

const getEvent = async (date) => {
  const query = querystring.stringify({ date, api_key })
  const data = await fetch(`https://api.nasa.gov/planetary/apod?${query}`).then((res) => res.json())
  if (data.code) {
    return {
      success: false,
      error: data.msg || 'Unknown error',
    }
  }
  return {
    success: true,
    data,
  }
}

const getSchedule = async () => {
  const now = Date.now()
  return {
    success: true,
    data: [...Array(90)].map((n, i) => {
      const date = new Date(now - 1000 * 60 * 60 * 24 * i)
      return dateToISO(date)
    }),
  }
}

module.exports = {
  getEvent,
  getSchedule,
}
