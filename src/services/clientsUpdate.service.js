const knexConnection = require("../database/knex/index")

class clientsUpdate {
    constructor(clientsRepository) {
        this.clientsRepository = clientsRepository
    }

    async execute(
        user_id,
        name,
        business_name,
        business_doc,
        phone
    ) {
        const client = await this.clientsRepository.findClientByBusinessDoc(user_id, business_doc)

        if (!client) {
            return "cliente não existe"
        }

        client.user_id = user_id || client.user_id
        client.name = name || client.name
        client.business_name = business_name || client.business_name
        client.business_doc = business_doc || client.business_doc
        client.phone = phone || client.phone

        const clientUpdated = await this.clientsRepository.update(client)

        return clientUpdated
    }
}

module.exports = clientsUpdate