const { Type } = require('../models/models')
const ApiError = require('../error/ApiError')

class TypeController {
  async create(req, res) {
    const { name } = req.body
    const type = await Type.create({ name })
    return res.json(type)
  }

  async getAll(req, res) {
    const types = await Type.findAll()
    return res.json(types)
  }

  async deleteOne(id) {
    const id = parseInt(req.params.id, 10)
    const type = await Type.destroy({ id })
    return res.json(type)
  }
}

module.exports = new TypeController()
