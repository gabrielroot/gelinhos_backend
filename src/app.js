const express = require('express')
const app = express()
const routes = require('./routes/routes')
const mongoose = require('mongoose')
const cors = require('cors')
require('dotenv/config')

app.use(cors())//libera acesso para outras aplicações
app.use(express.json())
app.use(routes)

mongoose.connect(process.env.MONGO_URL,{
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false 
})

app.listen(process.env.PORT || 3000)

//TIPOS DE PARÂMETROS


//QUERY PARAMS: request.query (Filtros, ordenação, paginação...)
//ROUTE PARAMS: request.params (Identificar um recurso na alteração ou remoção)
//BODY: (Dados para criação ou alteração de um registro)
