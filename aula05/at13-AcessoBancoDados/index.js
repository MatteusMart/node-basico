// importaçao dp express
const express = require('express')
const con = require("./conexao")

// inicializa o express
const app = express()

// porta servidor
const porta = 3600

// define a pasta publica com conteudo estatico(CSS,JS,IMG)
app.use(express.static('views/public'))

// middleware
// rota que toda requisiçao passa por ela
// rota padrao

// decodifica os parametros enviados para a rota
app.use(express.urlencoded({extended:true}))

// coverte os valores de forma JSON
app.use(express.json())

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
   try{
    let sql = "SELECT nome,email,ativo,data_cadastro FROM tb_login"

    con.query(sql,(error,result)=>{
        if(error){
            res.send(`Não foi possivel listar os registros ${error}`)
        }
        res.send(result)
    })
   }catch(error){
    res.send(`Não foi possivel listar os registros ${erro}`)
   }
})
// cria a porta para cadastrar login
app.post('/cadastrar/login',(req,res)=>{
    // app.send(req,body)
    //desestruturaçao de dados
    
    // desestruturaçao basica campo a campo
    // let nome = req.body.nome

    // desestruturação de varios campos
    let{nome,email,senha,confirmar} = req.body

    if(senha != confirmar){
        res.send('<h1>Senhas não conferem!</h1>')
    }

    // mota o comando SQL que sera executado no banco de dados
    try{
        let sql = `INSERT INTO tb_Login(nome,email,senha)
                    VALUES('${nome}','${email}','${senha}')`
        con.query(sql,(error,result)=>{
            if(error){
                return res.send(`Erro ao cadastrar:${error}`)
            }
        })

        res.send(`Cadastro realizado com sucesso!`)
        
    }catch(error){
        res.send(`Erro ao cadastrar!:${error}`)
    }
    // res.send(`nome:${nome} email:${email}`)
})

// rota para atualizaçao de registros
app.patch('/atualizar/login',(req,res)=>{
    // cria a var nome e email e atribui os valores enviados via param
    let{nome,email} = req.params

    try{
        let sql = `UPDATE tb_login SET nome=${nome}, email=${email}
        WHERE id = ${id}`;

        con.query(sql,(error,result)=>{
            if(error){
                return res.send(`Não foi possiel atualizar os dados ${error}`)
            }
            res.send(`Dados atualizado com sucesso!`)
        })
    }catch(error){
        return res.send('erro:${error}')
    }
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