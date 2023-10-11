class clientsCreateService {
    constructor(repository) {
        this.repository = repository
    }

    async execute(
        user_id,
        name,
        business_name,
        business_doc,
        phone
    ) {
        // verificar se exiiste um cliente com mesmo businessodc na base
        const client = await this.repository.findClientByBusinessDoc(user_id, business_doc)

        if(typeof client === "object") {
            return "client não existe"
        }

        return client
    }
}

module.exports = clientsCreateService