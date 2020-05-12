const { Router } = require("express")
const upload = require('../libs/storage')
const router = Router()

const verifyToken =  require('../controllers/verifyToken')
const {getProduct, getProducts, createProduct, deleteProduct, updateProduct} = require('../controllers/products.controllers')


router.route('/')
    .get(verifyToken,getProducts)
    .post(verifyToken,upload.single('fileName'),createProduct)
router.route('/:id')
    .get(verifyToken,getProduct)
    .delete(verifyToken,deleteProduct)
    .put(verifyToken,updateProduct)

module.exports = router