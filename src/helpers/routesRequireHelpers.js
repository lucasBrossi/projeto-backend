const userRoutes = require('../routes/user.routes')
const authRoutes = require('../routes/auth.routes')

//metodo de organizacao de rotas para uma melhor consolidaçao do codigo
    //este helper recebe as rotas e disponibiliza para o index trazer todas de apenas um lugar

module.exports = {
    userRoutes,
    authRoutes
}