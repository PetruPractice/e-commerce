const Router = require('express')
const type = require('../controllers/type')
const router = new Router()


router.post('/', type.create)
router.get('/', type.getAll)

module.exports = router