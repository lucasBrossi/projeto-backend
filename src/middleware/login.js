const jwt = require('jsonwebtoken')

exports.obrigatorio = (req, res, next) => {

    //teste para autenticaçao de acesso `a rota com jsonwebtoken.
    try {

        //Eu inclui este split para a autenticacao Bearer, entao, incluir 'Bearer' antes do token no header ou no auth.
        const token = req.headers.authorization.split(' ')[1]
        const decode = jwt.verify(token, '123456')
        
        req.usuario = decode
        
        next()
    } catch (err) {

        return res.status(401).send({mensagem: "Nao autorizado"})
        
    }    
}


exports.opcional = (req, res, next) => {
    //metodo para salvar o nome do usuario mesmo que ele nao precise de autenticacao valida (horario de token expirado) para acessar a rota.
    try {
        //se ele tiver token, mesmo que seja invalido pelo tempo, ele salva o usuario que criou o token.
        const token = req.headers.authorization.split(' ')[1]
        const decode = jwt.verify(token, '123456')
        
        req.usuario = decode
        
        next()
    } catch (err) {
        //caso nao tenha token, ele somente passa para a funcao, mas nao salva o usuario.
        next()
    }    
}