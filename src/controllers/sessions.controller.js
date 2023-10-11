const knexConnection = require("../database/knex")
const authConfig = require("../configs/auth")
const { sign } = require("jsonwebtoken")

class sessionController {
    async create(request, response) { 
        const { doc_business, password } = request.body

        const user = await knexConnection("users").where({ doc_business: doc_business }).first()

        if(!user) {
            return response.status(401).json("Este documento empresarial não existe")
        }

        if(password !== user.password) {
            return response.status(401).json("Senha incorreta")
        }

        const { secret, expiresIn } = authConfig.jwt
        const token = sign({}, secret, {
            subject: String(user.id),
            expiresIn
        })

        return response.json({ user, token })
    }
}

module.exports = sessionController