const Koa = require('koa')
const cors = require('@koa/cors')
const cache = require('koa-incache')
const router = require('./router')

const app = new Koa()
const cacheIn = cache({
  maxAge: 1000 * 30, // 1 minute max age
})

app.use(cors())
app.use(cacheIn)
app.use(router.routes()).use(router.allowedMethods())

app.listen(4000)

console.log('Api server started at 4000...')
