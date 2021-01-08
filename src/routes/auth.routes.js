const routes = require('express').Router()

const login = require('../middleware/login')
const authController = require('../controller/auth.controller')

//rotas relacionadas ao processo de autenticacao

routes.get('/login', login.opcional, authController.getAcesso)

module.exports = routes