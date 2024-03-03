const express = require("express")
const UserController = require("../controllers/userController")
const UsersMiddlewares = require("../middlewares/usersMiddlewares")
const router = express.Router()

router
    .get("/", UserController.getAllUsers)
    .post("/login", UserController.login, UsersMiddlewares.createToken)
    .post("/register",UsersMiddlewares.encryptedPassword, UserController.registerNewUser)
    .put("/:id", UserController.updatedInfo)
    .delete("/:id", UserController.deleteUser)


module.exports = router