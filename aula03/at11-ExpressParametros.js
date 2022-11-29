const express = require('express')

const app = express()

const porta = 4500

app.get('/',(req,res)=>{
    res.send('<h1>Página Principal</h1>')
})

// rota que recebe parametros
// http://localhost:4500/cadastrar/parametros
// captura de parametros via get
app.get('/cadastrar/:pagina/',(req,res)=>{
    // // cria a variavel nome e atribui o valor enviado pelo usuario
    // let nome = req.params.nome
    // // cria a variavel email e captura o valor
    // let email = req.params.email

    let pagina = req.params.pagina

    let url = ''
    let statusCode = 404

    if(pagina == 'usuarios'){
        statusCode = 200
        url = '/cadastrar-usuarios.html'
    }else if(pagina == 'produtos'){
        url = '/cadastrar-produtos.html'
    }else{
        url = '404.html'
    }

    res.sendFile(__dirname+url)
})

app.get('/consultar',(req,res)=>{

})

app.listen(porta,()=>{
    console.log(`Servidor rodando: http://localhost:${porta}`)
})

