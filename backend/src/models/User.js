const {Schema, model} = require('mongoose')


const userSchema = new Schema({
    userName: {
        type: String,
        required: true,
        trim:true,
        unique:true
    },
    password: {
        type: String,
        trim: true,
        required: true
    }

},{
    timestamps: true
})


module.exports = model('User', userSchema)