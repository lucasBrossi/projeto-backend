const jwt = require('jsonwebtoken')

module.exports = {

    //metodos de manipulacao para acesso
    getAcesso(req, res, next) {
        const { user } = req.query

        //validacao para o usuario colocar seu nome com metodo query
        if(!user){
            return res.status(400).send({mensagem: "Passe seu nome por query, por favor, utilizando a chave 'user'"})
        }
        let token = jwt.sign({
            mensagem: 'Criacao de token para acesso',
            user
        },
            '123456',
            {
                expiresIn: '1m'
            })
        return res.status(200).send({
            Ola: user,
            token
        })
    }
}