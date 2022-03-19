// Importando o moódulo o express
import express from 'express'
// Serve para servir documentos
import path from 'path'

let message = ''

// Importar Body Parser

// Importar json schema
import { validate } from 'express-jsonschema'

// Criar uma variável e instanciar (ou seja: passar todos as funções da função express para o variável app)
const app = express()
// Informa para o meu express que o motor de visualização (ou seja, o modo que vai exibir as minhas páginas) vai ser o EJS
app.set('view engine', 'ejs')
// Informar o express qual biblioteca fazer o parser - true usa biblioteca QS - query string
app.use(express.urlencoded({extended: true}))
app.use(express.json())

// Informar caminho padrão
let __dirname = path.resolve(path.dirname(''));
app.use(express.static(path.join(__dirname, "public")));

// Variável porta = indica qual porta o nosso servidor vai rodar
const port = 3001

const formSchema = {
    type: 'array',
    properties: {
        name: {
            type: 'string',
            required: true
        },
        email: {
            type: 'string',
            required: true
        }
    }
}

app.listen(port, () => {
console.log(`Meu servidor está rodando na porta ${port}`)
})

app.get("/", (req, res) => {
    const devList = ["Backend", "Frontend", "Fullstack"];
    const analyticsList = ["Engenharia de dados", "Ciência de dados"];

    setTimeout(() => {
        message = "";
      }, 1000);
      
    res.render("index.ejs", {
        nome: "Sexta-feira",
        devList,
        analyticsList,
        message
    })
})

app.post("/subscription", (req, res) => {
    const { nome, email } = req.body
    // res.send({ nome, email } )
    message = `Parabéns ${nome}, sua inscrição foi realizada com sucesso!
    um email foi envadiado para ${email}`
    res.redirect('/')
})

app.get("/sobre", validate({body: formSchema}), (req, res) => {

})


