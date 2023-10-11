class userCreateService {
    constructor(userRepository) {
        this.userRepository = userRepository
    }

    async execute(
        name_personal,
        doc_personal,
        name_business,
        doc_business,
        password,
        phone
    ) {
        const user = await this.userRepository.findByBusinessDoc(doc_business)

        if(user) {
            return "Usuário já existe"
        }

        const newUser = await this.userRepository.create(
            name_personal,
            doc_personal,
            name_business,
            doc_business,
            password,
            phone 
        )

        return newUser
    }
}

module.exports = userCreateService