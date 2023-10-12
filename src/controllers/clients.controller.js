const clientsRepository = require("../repositories/clients.repository")
const clientsCreateService = require("../services/clientsCreate.service")
const clientsUpdateService = require("../services/clientsUpdate.service")
const clientsDeleteService = require("../services/clientsDelete.service")

class clientsController {
    async create(request, response) {
        const user_id = request.user.id
        const {
            name,
            business_name,
            business_doc,
            phone
        } = request.body

        const ClientsRepository = new clientsRepository()
        const ClientsCreateService = new clientsCreateService(ClientsRepository)

        const newClient = await ClientsCreateService.execute(
            user_id,
            name,
            business_name,
            business_doc,
            phone
        )

        return response.json(newClient)
    }

    async update(request, response) {
        const user_id = request.user.id
        const {
            name,
            business_name,
            business_doc,
            phone
        } = request.body

        const ClientsRepository = new clientsRepository()
        const ClientsUpdateService = new clientsUpdateService(ClientsRepository)

        const clientUpdated = await ClientsUpdateService.execute(
            user_id,
            name,
            business_name,
            business_doc,
            phone
        )

        return response.json(clientUpdated)
    }

    async delete(request, response) {
        const user_id = request.user.id
        const client_id = request.params

        const ClientsRepository = new clientsRepository()
        const ClientsDeleteService = new clientsDeleteService(ClientsRepository)

        const findClient = ClientsDeleteService.execute(user_id, client_id)

        return findClient
    }

    async show(request, response) {
        return response.json("show")
    }

    async list(request, response) {
        return response.json("list")
    }
}

module.exports = clientsController