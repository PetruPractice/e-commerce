const Router = require('express')

const router = new Router()
const device = require('../controllers/device')

router.post('/', device.create)
router.get('/', device.getAll)
router.get('/:id', device.getOne)

module.exports = router