import express from 'express'
import { getIndex, 
    getDetalhes,
    getDeletar,
    getCriar,
    postCriar,
    getEditar,
    postEditar,
    getProcurar
} from '../controllers/FilmesController.js'

export const routes = express.Router()

routes.get('/', getIndex)
routes.get('/detalhes/:id', getDetalhes)
routes.get('/apagar/:id', getDeletar)

routes.get('/criar', getCriar)
routes.post('/criar', postCriar)

routes.get('/editar/:id', getEditar)
routes.post('/editar/:id', postEditar)

routes.post('/pesquisar', getProcurar)
 
