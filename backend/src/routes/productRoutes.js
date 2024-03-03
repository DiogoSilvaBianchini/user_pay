const express = require("express")
const ProductController = require("../controllers/productController")
const router = express.Router()
const {multerConfig, makeDir} = require("../middlewares/productMiddlewares")
const multer = require("multer")
const upload = multer({storage: multerConfig})
router
    .get("/", ProductController.getAllProduct)
    .get("/category", ProductController.getProductByCategory)
    .post("/:id", makeDir, upload.single("img"), ProductController.createNewProduct)
    .post("/doubleImage/:id", makeDir, upload.fields([{name: 'img'}, {name: 'img2'}]), ProductController.createNewProduct)
    .put("/:id", ProductController.updateProduct)
    .delete("/:id", ProductController.removeProduct)
    

module.exports = router