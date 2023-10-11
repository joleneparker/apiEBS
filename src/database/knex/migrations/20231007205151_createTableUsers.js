exports.up = knex => knex.schema.createTable("users", table => {
    table.increments("id")
    table.text("name_personal")
    table.text("doc_personal")
    table.text("name_business")
    table.text("doc_business")
    table.text("password")
    table.text("phone")
    table.text("avatar")
  
    table.timestamp("created_at").default(knex.fn.now())
    table.timestamp("updated_at").default(knex.fn.now())
})

exports.down = knex => knex.schema.dropTable("users")
