const Router = require('express')

const router = new Router()

const user = require('./user')
const brand = require('./brand')
const type = require('./type')
const device = require('./device')

router.use('/user', user)
router.use('/type', brand)
router.use('/brand', type)
router.use('/device', device)

module.exports = router