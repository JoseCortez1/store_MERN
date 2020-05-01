const { Router } = require("express")

const router = Router()


const {getProduct, getProducts, createProduct, deleteProduct, updateProduct} = require('../controllers/products.controllers')


router.route('/')
    .get(getProducts)
    .post(createProduct)
router.route('/:id')
    .get(getProduct)
    .delete(deleteProduct)
    .put(updateProduct)

module.exports = router