import { variados } from '../models/variados.js'
import { Sequelize } from 'sequelize'

export const getIndex = async (req, res) => {
    try {
        const filmes = await variados.findAll({
            order: [["nome", "ASC"]]
        })
        res.status(200).render('index.ejs', {
            filmes,
        })
    } catch (err) {
        res.status(500).send({
            err: err.message
        })
    }
}

export const getDetalhes = async (req, res) => {
    try {
        const filme = await variados.findByPk(req.params.id)
        res.status(200).render('detalhes.ejs', {
            filme
        })
    } catch (err) {
        res.status(500).send({
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
        res.status(500).send({err: err.message})
    }
}

export const getCriar = (req, res) => {
    res.status(200).render('criar')
}

export const postCriar = async (req, res) => {
    try {
        const { nome, ano, img, diretores, descricao, iframe } = req.body
        await variados.create({
            nome, ano, img, diretores, descricao, iframe
        })
        res.status(200).redirect('/')
    }
    catch(err){
        res.send(err.message)
    }
}

export const getEditar = async (req, res) => {
    const filme = await variados.findByPk(req.params.id)
    res.status(200).render('editar.ejs', {
        filme
    })
}

export const postEditar = async (req, res) => {
    const { nome, ano, img, diretores, descricao, iframe } = req.body
    try {
        await variados.update({
            nome: nome, 
            ano: ano, 
            img: img, 
            diretores: diretores, 
            descricao: descricao, 
            iframe: iframe
        }, {
            where: {
                id: req.params.id
            }
        })

        res.redirect('/')
    }

    catch(err) {
        res.status(500).send(err.message)
    }
}

export const getProcurar = async (req, res) => {
    try {
        let pesquisar = res.body
        const filmes = await variados.findAll({
            where: {
                nome: {
                    [Sequelize.Op.iLike]: `%${pesquisar}%`
                }
            }
        })
        res.status(200).render('procurar.ejs', {
            pesquisar
        })
    } catch(err){
        res.status(500).send({err: err.message})
    }
}