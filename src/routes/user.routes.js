const routes = require('express').Router()

const login = require('../middleware/login')
const userController = require('../controller/user.controller')

routes.get('/users', login.obrigatorio, userController.getUser)

module.exports = routes