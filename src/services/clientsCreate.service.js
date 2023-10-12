class clientsCreateService {
    constructor(clientRepository) {
        this.clientRepository = clientRepository
    }

    async execute(
        user_id,
        name,
        business_name,
        business_doc,
        phone
    ) {
        const checkClientExists = await this.clientRepository.findClientByBusinessDoc(user_id, business_doc)

        if (checkClientExists) {
            return "Você já tem um cliente com este documento"
        }

        const createNewClient = await this.clientRepository.create(
            user_id,
            name,
            business_name,
            business_doc,
            phone
        )

        const checkClientExists2 = await this.clientRepository.findClientByBusinessDoc(user_id, business_doc)

        return checkClientExists2
    }
}

module.exports = clientsCreateService