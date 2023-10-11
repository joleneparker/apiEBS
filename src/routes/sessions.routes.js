const { Router } = require("express")
const app = Router()

const sessionController = require("../controllers/sessions.controller")
const SessionController = new sessionController

app.post("/", SessionController.create)

module.exports = app
