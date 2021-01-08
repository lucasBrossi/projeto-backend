module.exports = {


    //metodos de manipulacao para usuarios

    getUser(req, res, next) {
        const { user } = req.usuario

        const respostaGeral = {
            mensagem: `Autenticacao feita com sucesso. Bem Vindo ${user}`,
            users: [{
                nome: 'Lucas Bueno Rossi',
                idade: 21,
                sonho: "Ser um porgramador de sucesso!",
                nacionalidade: "BR"
            },
            {
                nome: 'Mateus da Silva',
                idade: 25,
                sonho: "Viajar o mundo!",
                nacionalidade: "PT"
            },
            {
                nome: 'Gabriel Souza',
                idade: 35,
                sonho: "Comprar uma caminhonete!",
                nacionalidade: "BR"
            }]
        }
        return res.status(200).send(respostaGeral)
    }

}