const usersRepository = require("../repositories/users.repository")
const usersCreateService = require("../services/usersCreate.service")
const usersUpdateService = require("../services/usersUpdate.service")

class usersController {
    async create(request, response) {
        const { 
            name_personal,
	        doc_personal,
	        name_business,
	        doc_business,
	        password,
	        phone
        } = request.body

        const UsersRepository = new usersRepository()
        const UsersCreateService = new usersCreateService(UsersRepository)

        await UsersCreateService.execute(
            name_personal,
	        doc_personal,
	        name_business,
	        doc_business,
	        password,
	        phone  
        )

        return response.json("Usuário cadastrado")
    }

    async update(request, response) {
        const user_id = request.user.id
        const { 
            name_personal,
	        doc_personal,
	        name_business,
	        doc_business,
	        password,
	        phone
        } = request.body

        const UsersRepository = new usersRepository()
        const UsersUpdateService = new usersUpdateService(UsersRepository)

        const teste = await UsersUpdateService.execute(
            user_id,
            name_personal,
	        doc_personal,
	        name_business,
	        doc_business,
	        password,
	        phone
        )

        return response.json(teste)
    }
}

module.exports = usersController