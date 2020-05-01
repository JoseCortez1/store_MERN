const productsCtrl = {}

const Products = require('../models/Product')

productsCtrl.getProducts = async(req, res)=>{
    const products = await  Products.find()

    res.json(products)
}

productsCtrl.getProduct = async (req, res)=>{
    const id = req.params.id
    const note = await Products.findById(id)

    res.json(note)
}

productsCtrl.deleteProduct = async (req, res)=>{
    const id = req.params.id
    await Products.findByIdAndDelete(id)
    res.json({
        message:"product deleted"
    })
}

productsCtrl.createProduct = async (req, res)=>{
    const product = new Products(req.body)
    await product.save()
    res.json({
        message: "product saved"
    })
}
productsCtrl.updateProduct = async (req, res)=>{
    await Products.findByIdAndUpdate(req.params.id, req.body)
    res.json({
        message: "product updated"
    })
}

module.exports = productsCtrl