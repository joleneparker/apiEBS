class usersUpdateService {
    constructor(userRepository) {
        this.userRepository = userRepository
    }

    async execute(
        user_id,
        name_personal,
        doc_personal,
        name_business,
        doc_business,
        password,
        phone
    ) {
        const user = await this.userRepository.findById(user_id)

        if(!user) {
            return "Não existe nenhum usuário com este ID"
        }

        user.name_personal = name_personal || user.name_personal
        user.doc_personal = doc_personal || user.doc_personal
        user.password = password || user.password
        user.phone = phone || user.phone

        const teste = await this.userRepository.update(user)

        return teste
    }
}

module.exports = usersUpdateService