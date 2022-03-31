import express from 'express'
import dotenv from 'dotenv'
import path from 'path'
import { routes } from './src/routes/router.js'

let __dirname = path.resolve(path.dirname(''))

const app = express()
app.set('view engine', 'ejs')
app.use(express.static(path.join(__dirname, 'public')))
app.use(express.urlencoded({extended: true}))
app.use(express.json())
app.use(routes)

const port = 3001

app.listen(port, (req, res) => {
    console.log(`Server running on ${port}`)
})