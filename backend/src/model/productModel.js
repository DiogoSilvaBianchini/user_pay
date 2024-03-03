const {model, Schema} = require("mongoose")

const productSchema = new Schema({
    name: {
        type: String,
        required: [true, "Nome do producto, obrigátorio!"]
    },
    price: {
        type: Number,
        required: [true, "Preço do produto obrigátorio"]
    },
    describe: {
        type: String,
        required: [true, "Produto sem descrição"]
    },
    category: {
        type: String
    },
    img: {
        type: Array
    },
    sellers: {
        type: Number,
        default: 0
    },
    author: {
        type: Schema.ObjectId,
        ref: "user"
    }
},{timestamps: true})

const product = model("products", productSchema)

module.exports = product