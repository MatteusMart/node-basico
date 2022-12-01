// importaçao dp express
const express = require('express')

// inicializa o express
const app = express()

// porta servidor
const porta = 3600

// define a pasta publica com conteudo estatico(CSS,JS,IMG)
app.use(express.static('views/public'))

// criar rotas
app.get('/',(req,res)=>{
    res.status(200)
    res.send('<h1>Index</h1>')
})

app.get('/cadastrar',(req,res)=>{
    res.status(200)
    res.sendFile(__dirname+'/views/cadastrar.html')
})

app.get('/consultar',(req,res)=>{
    res.status(200)
    res.send('<h1>Consultar</h1>')
})

// rota para retorna da pagina de erro
// super mega importante -> ficar no final das rotas
app.use((req,res)=>{
    res.status(404)
    res.send('<h1>Página não encontrada!</h1>')
})

app.listen(porta,()=>{
    console.log(`Servidor rodando: http://localhost:${porta}`)
})