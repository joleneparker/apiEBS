const knexConnection = require("../database/knex/index")

class usersRepository {
    async findByBusinessDoc(doc_business) {
        const user = await knexConnection("users").where({doc_business}).first()

        return user
    }

    async findById(user_id) {
        const user = await knexConnection("users").where({id: user_id}).first()

        return user
    }

    async create(
        name_personal,
        doc_personal,
        name_business,
        doc_business,
        password,
        phone
    ) {
        const newUser = await knexConnection("users").insert({
            name_personal,
            doc_personal,
            name_business,
            doc_business,
            password,
            phone     
        })

        return newUser
    }

    async update(user) {
        const {
            id,
            name_personal,
            doc_personal,
            name_business,
            password,
            phone
        } = user

        await knexConnection("users").where({id}).update({
            name_personal,
            doc_personal,
            name_business,
            password,
            phone           
        })

        return "Usuário atualizado"
    }
}

module.exports = usersRepository

/*
{
	"id": 1,
	"name_personal": "Gabriel",
	"doc_personal": "053",
	"name_business": "teste",
	"doc_business": "1234",
	"password": "123456",
	"phone": "123456",
	"avatar": null,
	"created_at": "2023-10-07 21:38:09",
	"updated_at": "2023-10-07 21:38:09"
}
*/