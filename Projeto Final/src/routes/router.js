import express from 'express'
import { getIndex, 
    getDetalhes,
    getDeletar,
  
} from '../controllers/FilmesController.js'

export const routes = express.Router()

routes.get('/', getIndex)
routes.get('/detalhes/:id', getDetalhes)
routes.get('/apagar/:id', getDeletar)

 
