const jwt = require("jsonwebtoken")
const bcrypt = require("bcryptjs")

class UsersMiddlewares{

    static async encryptedPassword(req,res,next){
        try {
            const {password} = req.body
            bcrypt.genSalt(10, (err, salt) => {
                if(err) return next(err)
                else bcrypt.hash(password, salt, (err, hash) => {
                    
                    if(err) return next(err)
                    req.hash = hash
                    next(req.hash)
                })
            })
        } catch (error) {
            next(error)
        }
    }

    static async createToken(id, req,res,next){
        try {
            const {email} = req.body
            const payload = {id, email}
            const token = jwt.sign(payload, process.env.SECRET_KEY, {expiresIn: 60})

            return res.status(200).json({token, status: 200})
        } catch (error) {
            next(error)
        }
    }
}

module.exports = UsersMiddlewares