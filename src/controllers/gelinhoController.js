const gelinho = require('../models/gelinhoSchema')

module.exports = {
    async index (req,res){
        const ice = await gelinho.find()
        return res.json(ice)
    },

    async store (req, res){
        const {sabor, quantidade} = req.body
        const existe = await gelinho.findOne({"sabor": sabor})
        if(!existe){
            await gelinho.create({
                sabor,
                quantidade
            })

            return res.json({sucess: true})
        }
        return res.json({sucess: false})
    },

    async destroy(req, res){
        await gelinho.findByIdAndDelete(req.params.id)
        res.json({id: req.params.id})
    },

    async update(req, res){
        const ice = await gelinho.findByIdAndUpdate(req.params.id, req.body, {new: true}) //'new: true' envia o novo valor para a variável product (depois de atualizado)
        return res.json(ice)
    }

}