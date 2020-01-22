const mongoose = require('mongoose')

const gelinhoSchema = new mongoose.Schema({
    sabor: String,
    quantidade: Number,

})

module.exports = mongoose.model('gelinho', gelinhoSchema)