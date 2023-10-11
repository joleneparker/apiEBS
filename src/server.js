const express = require("express")
const app = express()
const PORT = 3332

const routes = require("./routes/index")

const database = require("./database/sqlite/index")

app.use(express.json())
app.use(routes)

app.listen(PORT, () => { console.log(`----OK---- Server is running on PORT ${PORT}`) })

database()