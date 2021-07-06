const Router = require('express')
const router = new Router()
const type = require('../controllers/type')
const checkRole = require('../middleware/checkRoleMiddleware')


router.post('/', checkRole('ADMIN'), type.create)
router.get('/', type.getAll)

module.exports = router