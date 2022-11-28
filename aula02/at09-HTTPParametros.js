// importação modulo http
const http = require('http')

// importaçao do modulo url
const url = require('url')

const servidor = http.createServer((req,res)=>{
    let parametros = url.parse(req.url, true)
    // console.log(parametros)

    let nome = parametros.query.nome
    // console.log(nome)

    res.setHeader('Content-type','text/html')
    res.end(` 
    
        <form>
            <label for="nome">Digite Seu Nome:</label>
            <input type="text" name="nome" id="nome">
            <button type="submit">Enviar</button>
        </form>

        <h1>${nome != null ? `Olá ${nome}` : ``}</h1>

    `)
})

// listen do servidor
servidor.listen('3000',()=>{
    console.log(`Servidor rodando: http://localhost:3000`)
})
