const clientsRepository = require("../repositories/clients.repository")
const clientsCreateService = require("../services/clientsCreate.service")

class clientsController {
    async create(request, response) {
        const user_id = request.user.id
        const {
            name,
            business_name,
            business_doc,
            phone
        } = request.body

        const ClientsRepository = new clientsRepository
        const ClientsCreateService = new clientsCreateService(ClientsRepository)

        const teste = ClientsCreateService.execute(
            user_id,
            name,
            business_name,
            business_doc,
            phone
        )

        return response.json(teste)
    }

    update(request, response) {
        return response.json("update")
    }

    delete(request, response) {
        return response.json("delete")
    }

    show(request, response) {
        return response.json("show")
    }

    list(request, response) {
        return response.json("list")
    }
}

module.exports = clientsController