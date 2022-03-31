import { variados } from '../models/variados.js'

export const getIndex = async (req, res) => {
    try {
        const filmes = await variados.findAll()
        res.render('index.ejs', {
            filmes,
        })
    } catch (err) {
        res.send({
            err: err.message
        })
    }
}

export const getDetalhes = async (req, res) => {
    try {
        const filme = await variados.findByPk(req.params.id)
        res.render('detalhes.ejs', {
            filme
        })
    } catch (err) {
        res.send({
            err: err.message
        })
    }
}

export const getDeletar = async (req, res) => {
    try {
        await variados.destroy({
            where: {
            id: req.params.id
        }})
        res.status(200).redirect("/")
    }
    catch(err){
        res.send({err: err.message})
    }
}