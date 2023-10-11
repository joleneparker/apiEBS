const { Router } = require("express")
const app = Router()

const ensureAuthenticated = require("../middlewares/ensureAuthenticated")
const clientsController = require("../controllers/clients.controller")
const ClientsController = new clientsController

app.post("/create", ensureAuthenticated, ClientsController.create)
app.put("/update", ensureAuthenticated, ClientsController.update)
app.delete("/delete", ensureAuthenticated, ClientsController.delete)
app.get("/:client", ensureAuthenticated, ClientsController.show) // query params (client)
app.get("/", ensureAuthenticated, ClientsController.list)

module.exports = app