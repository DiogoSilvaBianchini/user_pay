const bcrypt = require("bcryptjs")
const user = require("../model/userModel.js")
class UserController{

    static async getAllUsers(req,res,next){
        try {
            const users = await user.find({})
            return res.status(200).json({message: users})
        } catch (error) {
            next(error)
        }
    }

    static async registerNewUser(hash, req,res,next){
        try {
            const {name, email, password} = req.body

            await user.create({
                name, email, password: hash
            })
    
            return res.status(201).json({message: "Usuario criado com sucesso!", status: 201})
        } catch (error) {
          next(error)  
        }
    }

    static async login(req,res,next){
        const {email, password} = req.body 
        try {
            const findUser = await user.findOne({email})
            if(!findUser) return res.status(401).json({message: "E-mail ou senha incorreto"})
            if(!bcrypt.compare(password, findUser.password)) return res.status(401).json({message: "E-mail ou senha incorreto"})
            console.log(findUser.password)
            const id = findUser.id
            next(id)
        } catch (error) {
            next(error)
        }
    }

    static async updatedInfo(req,res,next){
        try {
            await user.findOneAndUpdate({email}, req.body)
            return res.status(200).json({message: "Dados cadastrados com sucesso!"})
        } catch (error) {
            next(error)
        }
    }

    static async deleteUser(req,res,next){
        try {
            await user.findOneAndDelete({email})
            return res.status(200).json({message: "Usuario removido com sucesso!"})            
        } catch (error) {
            next(error)
        }
    }
}

module.exports = UserController