const Router = require('express')

const router = new Router()
const brand = require('../controllers/brand')


router.post('/', brand.create)
router.get('/', brand.getAll)

module.exports = router