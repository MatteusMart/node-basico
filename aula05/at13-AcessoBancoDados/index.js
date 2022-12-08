// importacao express
const express = require('express')
const con = require("./conexao")
const validaCampoVazio = require('./validaCampoVazio')

// inicializa o express
const app = express()

// porta servidor
const porta = 3900

// define a pasta public com o conteudo static (CSS,JS,IMG)
app.use(express.static('views/public'));

// middleware
// rota que toda requisicao passa por ela
// rota padrao

// decodifica os parametros enviados para a rota
app.use(express.urlencoded({extended: true}))

// converte os valores para formato JSON
app.use(express.json())



// criar as rotas
app.get('/',(req,res)=>{
    res.status(200)
    res.sendFile(__dirname+'/views/login.html')
})

// cria a rota cadastrar
app.get('/cadastrar',(req,res)=>{
    res.status(200)
    res.sendFile(__dirname+'/views/cadastrar.html')
})

// cria a rota consultar
app.get('/consultar/:id?',(req,res)=>{
    res.status(200)

    try {
        // captura o id enviado ou nao via url
        let id = req.params.id
        
        if(typeof id == 'undefined'){
            var sql = `SELECT nome,email,ativo,data_cadastro FROM tb_login`
        }else{
            var sql = `SELECT nome,email,ativo,data_cadastro FROM tb_login WHERE id = ${id}`
        }        

        con.query(sql,(error,result)=>{
            if(error){
                res.send(`Não foi possível listar os registros ${error}`)
            }
            res.send(result)

        })

    } catch (error) {
        res.send(`Não foi possível listar os registros ${error}`)
    }
})

// cria a rota para cadastrar login
app.post('/cadastrar/login',(req,res)=>{
    // res.send(req.body)
    // desestruturacao de dados

    // desestruturacao basica campo a campo
    // let nome = req.body.nome
   

    // desestruturacao de varios campos
    let {nome,email,senha,confirmar} = req.body

    // funçao valida os campos vazios
    // validaCampoVazio(nome,'nome')
    if(nome == '' || email == '' || senha == '' || confirmar == ''){
        return res.json({
            "retorno": "erro",
            "mensagem":"Preencha os campos obrigatorios!"
        })
    }
    

    if(senha != confirmar){
        return res.json({
                            "retorno":"erro",
                            "mensagem":"Senhas não conferem!"
                        })        
    } 
    
    // monta o comando SQL que sera executado no banco de dados
    try {
        let sql = `INSERT INTO tb_login(nome,email,senha)
                   VALUES('${nome}','${email}','${senha}')`
        // executa o comando SQL no banco de dados
        // executa um callback quando o comando é executado
        con.query(sql,(error,result)=>{
            if(error){
                return res.json({
                    "retorno": "erro",
                    "mensagem": `Erro ao cadastrar ${error}`
                })
            }
            // retorna a msg de sucesso
            res.json({
                "retorno":"ok",
                "mensagem": "Cadastro realizado com sucesso!"
            })
        })
        
        
    } catch (error) {
        return res.json({
            "retorno": "erro",
            "mensagem": `Erro ao cadastrar ${error}`
        })
        
    }
    




    // res.json({ retorno: 'ok',mensagem:'Usuário add com sucesso!' })    


})


// rota para atualizacao de registros
app.patch('/atualizar/login',(req,res)=>{
    // cria a var nome e email e atribui os valores enviados via param
    let {id,nome,email} = req.body

    try {
        let sql = ` UPDATE tb_login 
                    SET nome='${nome}', email='${email}' 
                    WHERE id = ${id}`;

        con.query(sql,(error,result)=>{
            if(error){
                return res.send(`Não foi possível atualizar os dados ${error}`)
            }

            res.send(`Dados atualizados com sucesso!`)
        })


    } catch (error) {
        return res.send(`Não foi possível atualizar os dados ${error}`)
        
    }

})

// rota para remover registros(deletar)
app.delete('/deletar/login',(req,res)=>{
    // captura o id
    let id = req.body.id

    try {
        // comando sql que sera executado
        let sql = `DELETE FROM tb_login WHERE id = ${id}`

        con.query(sql,(error,result)=>{
            if(error){
                return res.send(`Não foi possível deletar o registro! ${error}`)
            }
            res.send(`Registro deletado com sucesso!`)
        })

    } catch (error) {
        return res.send(`Não foi possível deletar o registro! ${error}`)        
    }
})
// rota que valida login
app.post('/validar/login',(req,res)=>{
    let {email,senha} = req.body

    try{
        let sql = `SELECT email FROM tb_login WHERE email='${email}' and BINARY
        senha = '${senha}' AND ativo=1`;

        con.query(sql,(error,result)=>{
            if(erro){
                res.json({
                    "retorno":"erro",
                    "mensagem":`Não foi possivel validar os usuários ${error}`
                })
            }

            res.json(result)
        })
    }catch(error){

    }
})



// rota para retorno da pagina de erro
// super mega importante -> ficar no final das rotas
app.use((req,res)=>{
    res.status(404)
    res.send('<h1>Página não encontrada!</h1>')
})




// lista o servidor.. final do arquivo
app.listen(porta,()=>{
    console.log(`Servidor rodando: http://localhost:${porta}`)
})