const express = require("express")
const routers = express.Router()

const userRoutes = require("./userRoutes")
const productRoutes = require("./productRoutes")

routers.use(express.json(), express.urlencoded({extended: true}))
routers.use("/user", userRoutes)
routers.use("/product", productRoutes)

module.exports = routers