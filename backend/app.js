require("dotenv").config()
const express = require("express")
const routers = require("./src/routes")
const morgan = require("morgan")
const cors = require("cors")

const PORT = process.env.PORT
const dbConnect = require("./src/config/db.js")

const db = dbConnect()
const app = express()

db.on("error", (err) => console.error(err))
db.once("open", () => console.log("Banco de dados conectado!"))

app.use(cors())
app.use(morgan("dev"))
app.use(routers)

app.use((error,req,res,next) => {
    const err = error
    console.log(err)
    return res.status(400).json({message: "Erro interno do servidor!"})
})

app.listen(PORT, () => {
    console.log(`http://localhost:${PORT}`)
})