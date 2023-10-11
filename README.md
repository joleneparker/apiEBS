
# EBS Features
- A API deve poder cadastrar um usuário Admin
- A API deve poder atualizar um usuário Admin existente
- A API deve poder excluir um usuário Admin existente

- A API deve poder criar um cliente em nome de um usuário Admin existente
- A API deve poder atualizar um cliente em nome de um usuário Admin existente
- A API deve poder exluir um cliente em nome de um usuário Admin existente
- A API deve poder listar todos os clients em nome de um usuário Admin existente

- A API deve poder criar um projeto para um cliente em nome de um usuário Admin existente
- A API deve poder atualizar um projeto para um cliente em nome de um usuário Admin existente
- A API deve poder exluir um projeto para um cliente em nome de um usuário Admin existente
- A API deve poder listar todos os projeto em nome de um usuário Admin existente

- A API deve poder criar e mandar uma mensagem informativa (apenas texto) pelo WhatsApp

- A API deve poder criar um recibo em pdf em nome de um usuário Admin existente
- A API deve poder mandar uma mensagem com documento PDF pelo WhatsApp em nome de um usuário Admin existente 

- A API deve poder criar uma lista de pedido de material em arquivo XML em nome de um usuário Admin existente
- A API deve poder mandar uma mensagem com documento XML pelo WhatsApp em nome de um usuário Admin existente

# EBS DataBase
- `Users`
    id
    personal_name
    personal_doc
    business_name
    business_doc
    password
- `Clients`
    id
    user_id
    personal_name
    business_name
    business_doc
- `Projects`
    id
    user_id
    client_id
    name
    description
- `Message_Update`
- `Message_Finance`
- `Message_Material`

# EBS endpoints
www.edificar.com.br/users/create
www.edificar.com.br/users/update

www.edificar.com.br/clients/create
www.edificar.com.br/clients/update
www.edificar.com.br/clients/delete
www.edificar.com.br/clients

www.edificar.com.br/projects/24/create
www.edificar.com.br/projects/24/update
www.edificar.com.br/projects/24/delete
www.edificar.com.br/projects

www.edificar.com.br/projects/24/message/sample
www.edificar.com.br/projects/24/message/pdf
www.edificar.com.br/projects/24/message/xml

# JWT - JSON WEB TOLKEN