const multer = require("multer");
const fs = require("fs")

const makeDir = (req,res,next) => {
    const id = req.params.id
    req.url = `../frontend/public/imgs/${id}`
    
    if(!fs.existsSync(req.url)){
        fs.mkdirSync(req.url)
        next()
    }else{
       next()
    }
}

const multerConfig = multer.diskStorage({
    destination: function(req, file, cb){
        const id = req.params.id
        cb(null, `../frontend/public/imgs/${id}`)
    },
    filename: function(req, file, cb){
        cb(null, file.fieldname+'-'+ Date.now() + "." +file.originalname.split(".")[1])
    }
})

module.exports = {
    multerConfig,
    makeDir
}