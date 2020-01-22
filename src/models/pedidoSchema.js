const mongoose = require('mongoose')
const pontoSchema = require('./utils/pontoSchema')

const pedidoSchema = new mongoose.Schema({
    item:[{
        sabor:String,
        quantidade: Number,
    }],
    status: String,
    local:{
        type: pontoSchema,
        index: '2dsphere'
    }
})

module.exports = mongoose.model('pedido', pedidoSchema)