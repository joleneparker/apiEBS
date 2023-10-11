const { verify } = require("jsonwebtoken")
const authConfig = require("../configs/auth")

function ensureAuthenticated(request, response, next) {
    const authHeader = request.headers.authorization

    if(!authHeader) {
        return response.status(401).json("JWT não informado")
    }

    const [, token] = authHeader.split(" ")

    try {
        const { sub: user_id } = verify(token, authConfig.jwt.secret)

        request.user = {
            id: Number(user_id)
        }

        return next()
    } catch {
        return response.status(401).json("JWT é inválido")
    }
}

module.exports = ensureAuthenticated