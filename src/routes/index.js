const { Router } = require("express")
const app = Router()

const sessionsRoutes = require("./sessions.routes")
const usersRoutes = require("./users.routes")
const clientsRoutes = require("./clients.routes")

app.use("/sessions", sessionsRoutes)
app.use("/users", usersRoutes)
app.use("/clients", clientsRoutes)

module.exports = app