exports.up = knex => knex.schema.createTable("clients", table => {
    table.increments("id")
    table.integer("user_id").references("id").inTable("users").onDelete("CASCADE")

    table.text("name")
    table.text("business_name")
    table.text("business_doc")
    table.text("phone")
    table.text("avatar")

    table.timestamp("created_at").default(knex.fn.now())
    table.timestamp("updated_at").default(knex.fn.now())
})

exports.down = knex => knex.schema.dropTable("clients")