const knexConnection = require("../database/knex")

class clientsRepositories {
    async findClientByBusinessDoc(user_id, business_doc) {
        const client = await knexConnection("clients").where(user_id).andWhere(business_doc).first()

        return client
    }
}

module.exports = clientsRepositories