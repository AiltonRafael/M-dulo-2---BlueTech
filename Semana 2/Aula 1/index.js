// Importando o moódulo o express
import express from 'express'

// Criar uma variável e instanciar (ou seja: passar todos as funções da função express para o variável app)
const app = express()
// Informa para o meu express que o motor de visualização (ou seja, o modo que vai exibir as minhas páginas) vai ser o EJS
app.set('view engine', 'ejs')

// Variável porta = indica qual porta o nosso servidor vai rodar
const port = 3001

app.listen(port, () => {
console.log(`Meu servidor está rodando na porta ${port}`)
})

app.get("/", (req, res) => {
    res.render("index.ejs", {
        nome: "Sexta-feira"
    })
})

app.get("/sobre", (req, res) => {
    res.render("sobre.ejs")
})
