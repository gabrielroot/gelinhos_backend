const pedido = require('../models/pedidoSchema')
const gelinho = require('../models/gelinhoSchema')

module.exports = {
    async store(req, res){
        const {latitude, longitude} = req.body.local
        const {item} = req.body
        
        item.map(async(item)=>{ //para cada item pedido, pegue a quantidade do sabor (no BD) e incremente por - a quantidade pedida
            await gelinho.findOneAndUpdate({sabor:item.sabor},{$inc:{quantidade:-item.quantidade}},{new:true}) 
        })

        const local = {
            type: 'Point',
            coordinates: [longitude, latitude],
        }

        const pdd = await pedido.create({
            item,
            'status': 'Enviado',
            local
        })

        return res.json(pdd)
    },
    async show(req,res){
        const pdd = await pedido.find()
        return res.json(pdd)
    },
    async destroy(req, res){
        await pedido.findByIdAndDelete(req.params.id)
        res.json({id: req.params.id})
    },
    async update(req, res){
        const {latitude, longitude} = req.body.local

        const local = {
            type: 'Point',
            coordinates: [longitude, latitude],
        }

        const ice = await pedido.findByIdAndUpdate(req.params.id, req.body, {new: true}) //'new: true' envia o novo valor para a variável product (depois de atualizado)
        return res.json(ice)
    }
}
