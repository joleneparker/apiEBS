const { Router } = require("express")
const app = Router()

const usersController = require("../controllers/users.controller")
const UsersController = new usersController
const ensureAuthenticated = require("../middlewares/ensureAuthenticated") 

app.post("/create", UsersController.create)
app.put("/update", ensureAuthenticated, UsersController.update)

module.exports = app

// pegamos o id incorporado nas requests... user_id = request.user.id