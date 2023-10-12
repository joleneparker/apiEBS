const knexConnection = require("../database/knex/index")

class clientsRepositories {
    async findClientByBusinessDoc(user_id, business_doc) {
        const client = await knexConnection("clients").where({ user_id, business_doc }).first()
        return client
    }

    async findClientById(user_id, client_id) {
        const client = await knexConnection("clients").where({ user_id, client_id }).first()
        return client
    }

    async create(
        user_id,
        name,
        business_name,
        business_doc,
        phone
    ) {
        const newClient = await knexConnection("clients").insert({
            user_id,
            name,
            business_name,
            business_doc,
            phone
        })

        return newClient
    }

    async update(client) {
        const {
            id,
            user_id, 
            name,
            business_name,
            business_doc,
            phone,
        } = client

        await knexConnection("clients").where({id}).update({
            id,
            user_id,
            name,
            business_name,
            business_doc,
            phone
        })

        return client
    }
}

module.exports = clientsRepositories