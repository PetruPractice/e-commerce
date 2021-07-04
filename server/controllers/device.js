const uuid = require('uuid')
const path = require('path')
const { Device } = require('../models/models')
const ApiError = require('../error/apiError')

class deviceController {
    async create(req, res, next) {
        try {

            const {name, price, brandId, typeId, info} = req.body
            const{img} = req.files
            let filename = uuid.v4() + ".jpg"   // setup the unique file name + woking with file uploading
            img.mv(path.resolve(__dirname, '..', 'static', fileName))//  move file to static folder with path extention from nodejs 
    
            const device = await Device.create({name, price, brandId, typeId, img: filename})
    
            return res.json(device)
        } catch(e) {
            next(ApiError.badRequest(e.message))
        }
    
    }
    
    async getAll(req, res) {

    }
    async getOne(req, res) {

    }

}

module.exports = new deviceController
