// Importando o módulo o express
import express from 'express'

// Importando o path, que serve para informar caminhos para o EJS
import path from 'path'

// Informa a pasta raiz
const __dirname = path.resolve(path.dirname(''))

// Criar uma variável e instanciar (ou seja: passar todos as funções da função express para o variável app)
const app = express()
// Informa para o meu express que o motor de visualização (ou seja, o modo que vai exibir as minhas páginas) vai ser o EJS
app.set('view engine', 'ejs')

// Informa onde estão os arquivos estáticos (que são todos os arquivos complementares do HMTL/EJS - EX: CSS, JS, IMG e etc)
app.use(express.static(path.join(__dirname, "public")))

// Serve para 'parsear' - ou seja, transformar em JSON - a requisição do usário
app.use(express.urlencoded({extended: true}))
// Serve para que a informação que vem do body da requisição - ou seja, informação que usário nos envia - vire JSON
app.use(express.json())

// Variável porta = indica qual porta o nosso servidor vai rodar /  (3000 - 4999)
const port = 3001

// Onde roda o servidor - Listen serve para rodar o servidor
app.listen(port, ()=>{
    console.log(`Estou rodando dentro da port ${port}`)
})

// **********************************************************************

app.get('/', (req, res) =>{
    const cursos = ['FullStack', 'Java', 'CSS', 'HTML', 'Python', 'PHP', 'SQL']
    res.render('index.ejs', {
        cursos,
        mensagem
    })
})

app.get('/sobre', (req, res)=>{
    res.render('sobre.ejs')
})

let mensagem = ''

app.post('/', (req, res) => {
    const { nome, email } = req.body
    mensagem = `Olá, sr(a) ${nome}! Enviamos um email para seu ${email}`
    res.redirect('/')
})
