const {Schema, model } = require('mongoose')

const productsSchema = new Schema({
    'productName':{
        type: String,
        trim:true,
        required:true,
        unique: true
    },
    "cost":{
        type: Number,
        required: true
    },
    'description': String
},{
    timestamps: true
})

module.exports = model('Product', productsSchema)