const express = require('express')

const bodyParser = require('body-parser')
const dotenv = require('dotenv')
const assert = require('assert')
const cors = require('cors')
const { join } = require('path')

const routes = require('./src/helpers/routesRequireHelpers')

//escolhi usar o dotenv para criar variaveis de hambiente de producao e desenvolvimento

const env = process.env.NODE_ENV || "dev" //env recebe o valor de process.env.NODE_ENV que foi instanciado no package.json
assert.ok(env === "dev" || env === "prod", "Variavel de hambiente incorreta") //verificacao de validacao.

const configPath = join(__dirname, "./configs", `.env.${env}`)

dotenv.config({
    path: configPath
})

const app = express()

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({
    extended: false
}))

//prevencao de erros de cors
app.use(cors())

//metodo para facilitar a busca pelas rotas. utilizando esse recurso, podemos buscar as rotas de um unico arquivo
Object.keys(routes).forEach(r => app.use(routes[r]))

app.listen(process.env.PORT, () => console.log(`Servidor Rodando na porta ${process.env.PORT}`))