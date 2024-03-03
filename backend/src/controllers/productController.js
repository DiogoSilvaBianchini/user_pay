const product = require("../model/productModel")

class ProductController{
    static async getAllProduct(req,res,next){
        try {
            const findProduct = await product.find({})
            return res.status(200).json({products: findProduct})
        } catch (error) {
            next(error)
        }
    }

    static async getProductByCategory(req,res,next){
        try {
            const category = req.body
            const findProduct = await product.find({category}).populate('user')
            return res.status(200).json({product: findProduct})
        } catch (error) {
            next(error)
        }
    }

    static async createNewProduct(req,res,next){
        try {
            const {id} = req.params
            const {name, price, describe} = req.body
            console.log(req.file)
            var imgName;
            if(req.file){
                imgName = `${id}/${req.file.filename}`
            }else{
                imgName = [`${id}/${req.files.img[0].filename}`, `${id}-${req.files.img2[0].filename}`]
            }
            await product.create({name, price, describe, img: imgName, author: id});
            return res.status(200).json({message: "Producto criado com sucesso!"})
        } catch (error) {
            next(error)
        }
    }

    static async updateProduct(req,res,next){
        try {
            const id = req.params
            await product.findByIdAndUpdate({_id: id}, req.body)
            return res.status(200).json({message: "Dados atualizados com sucesso!"})
        } catch (error) {
            next(error)
        }
    }

    static async removeProduct(req,res,next){
        try {
            const id = req.body
            await product.findByIdAndDelete({_id: id})
            return res.status(200).json({message: "Producto removido com sucesso!"})
        } catch (error) {
            next(error)
        }
    }
}

module.exports = ProductController