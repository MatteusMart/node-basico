// importa o modulo express
const express = require('express')

// inicializa o express
const app = express()

// importa o modulo de usuarios
const usuario = new require("./model/usuario")

const produto = new require("./model/produto")

const porta = 5000;

// define a pasta publica que armazena o conteudo estatico(CSS,JS,IMG)
app.use(express.static('views/public'))

// ----------------------------MIDLEWERE---------------------------
// decodifica os parametros enviados para a rota
app.use(express.urlencoded({extended: true}))

// converte os valores para o formato JSON
app.use(express.json())

// ----------------------------Final MIDLEWERE-----------------------

// Cria uma rota padrao
app.get('/',(req,res)=>{
    res.sendFile(__dirname+'/views/index.html')
})

app.get('/login',(req,res)=>{
    res.sendFile(__dirname+'/views/login.html')
})

app.get('/cadastrar',(req,res)=>{
    // comando para inserir usando sequelize
    res.sendFile(__dirname+'/views/cadastrar-usuarios.html')
})

app.post('/cadastrar/usuarios',(req,res)=>{
    let dados = req.body
    usuario.create(dados)
    .then(respBd=>{
        res.json({
            retorno : "ok",
            mensagem :"Cadastro realizado com sucesso!"
        })
    })

    .catch(respBd=>{
        res.json({
            retorno : "sucesso",
            mensagem :"Erro ao cadastrar!"
        })
    })
})

// funçao que lista usuarios
app.get("/listar/usuarios",(req,res)=>{

    usuario.findAll()
    .then(respBd=>{
        // retorna os dados
        res.json(respBd)
    })
    .catch(respBd=>{
        // aqui é tratado o erro
        res.json({
            retorno : "erro",
            mensagem: `Erro ao listar ${respBd}`
        })
    })
})

// funçao que lista usuarios por id
app.get("/listar/usuarios/:id",(req,res)=>{

    let id = req.params.id 
    
    usuario.findOne({where:{id:id}})
    .then(respBd=>{
        // retorna os dados
        res.json(respBd)
    })
    .catch(respBd=>{
        // aqui é tratado o erro
        res.json({
            retorno : "erro",
            mensagem: `Erro ao listar ${respBd}`
        })
    })
})

app.delete('/excluir/usuarios/:id',(req,res)=>{

    let id = req.params.id

    usuario.destroy ({where:{id:id}})
    .then(respBd=>{
        // retorna os dados
        res.json({
            retorno: "ok",
            mensagem: "Usuario removido com sucesso"
        })
    })
    .catch(respBd=>{
        res.json({
            retorno: "erro",
            mensagem: `Erro ao deletar ${respBd}`
        }) 
    })
})

app.listen(porta,()=>{
    console.log(`Servidor rodando em: http://localhost:${porta}`)
})