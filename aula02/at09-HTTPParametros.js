// importação modulo http
const http = require('http')

// importaçao do modulo url
const url =require('url')

const servidor = http.createServer((req,res)=>{
    // captura os parametros enviador via GET
    let parametros = url.parse(req.url, true)

    console.log(parametros).query.nome
    // console.log(nome)
    res.setHeader('Content-type', 'text/html');

    res.end(`
        <form>
            <label for = "name">Digite seu nome:</label>
            <input type ="text" name ="nome" id="nome">
            <button type="submit">Enviar</button>
        </form>

        <h1>Olá ${nome}</h1>
    `)
})

servidor.listen(8000, () => {
    console.log('Servidor: http//localhost:8000');
})