const Router = require('koa-router')
const event = require('../models/event')

const router = new Router()

router.get('/event', async (ctx /*, next*/) => {
  try {
    const content = await event.getSchedule()
    ctx.cached(content)
    ctx.body = content
  } catch (err) {
    ctx.status = 500
  }
})

router.get('/event/:date', async (ctx /*, next*/) => {
  try {
    const { date } = ctx.params
    const content = await event.getEvent(date)
    ctx.cached(content)
    ctx.body = content
  } catch (err) {
    ctx.status = 500
  }
})

router.use('*', async (ctx) => ctx.throw(404, 'not found'))

module.exports = router
