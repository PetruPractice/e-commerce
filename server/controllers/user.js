const ApiError = require('../error/apiError')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const {User, Basket} = require('../models/models')


const jwtGenerator = (id, email, role) => {
    return jwt.sign(
        {id, email, role}, 
        process.env.SECRET_KEY,
        {expiresIn: '24h'}
    )
}

class userController {
    async registration(req, res) {
        const {email, password, role} = req.body
        if (!email || !password) {
            return next(ApiError.badRequest('Invalid email or password'))

        }
        const candidate = await User.findOne({where: {email}})
        if (candidate) {
            return next(ApiError.badRequest('User with this nickname already exists'))
        }
        const hashPassword = await bcrypt.hash(password, 5)
        const user = await User.create({email, role, password: hashPassword})
        const basket = await Basket.create({userId: user.id})
        const token = jwtGenerator(user.id, user.email, user.role)
        return res.json(token)
    }
    
    async login(req, res, role) {
        const {email, password} = req.body
        const user = await User.findOne({where: {email}})
        if (!user) {
            return next(ApiError.insternal('User was not found'))

        }
        let comparePassword = bcrypt.compareSync(password, user.password)
        if (!comparePassword) {
            return next(ApiError.internal('Incorrect username or password'))
        }
        const token = jwtGenerator(user.id, user.email, user.role)
        return res.json({token})
    }

    async check(req, res, next) {
        // const {id} = req.query
        // if(!id) {
        //     return next(ApiError.badRequest('No id'))
        // }
        // res.json(id)
    }
}

module.exports = new userController
