const {model, Schema} = require("mongoose")

const userSchema = new Schema({
    name: {
        type: String,
        required: [true, "O nome de usuario é obrigátorio"]
    },
    email: {
        type: String,
        required: [true, "O e-mail de usuario é obrigátorio"],
        unique: [true, "E-mail já registrado!"]
    },
    password: {
        type: String,
        required: [true, "Senha de usuario é obrigátoria"]
    },
    favorite: {
        type: Array,
        ref: "product"
    }
},{timestamps: true})

const user = model("user", userSchema)

module.exports = user