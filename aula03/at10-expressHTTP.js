// importando o express
const express = require('express');

// inicializando o express
const app = express()

// define a porta de funcionamento do servidor 
const porta = 3300

// criar rotas
// cria rotas/ -> raiz da aplicação
app.get('/',(req,res)=>{
    res.send('Index - Aplicação Express!')
})

app.get('/login',(req,res)=>{
    res.send('Login - Login Sistema Express!')
})

app.get('/cadastrar',(req,res)=>{
    res.send('<h1>Cadastrar - Usuarios Express<h1>')
})

app.listen(porta,()=>{
    console.log(`Servidor rodando:http://localhost:${porta}`)
})