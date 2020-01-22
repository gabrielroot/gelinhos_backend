const { Router } = require('express')
const routes = Router()
const geladinhoController = require('../controllers/gelinhoController')
const pedidoController = require('../controllers/pedidoContoller')

routes.get('/', geladinhoController.index)
routes.delete('/apagar/:id', geladinhoController.destroy)
routes.post('/novo', geladinhoController.store)
routes.put('/editar/:id', geladinhoController.update)

routes.get('/pedidos', pedidoController.show)
routes.post('/pedir', pedidoController.store)



module.exports = routes