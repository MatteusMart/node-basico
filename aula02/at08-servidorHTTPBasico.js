// importaçao do modulo http
const http = require('http')

// criar o servidor
const servidor = http.createServer((req, res)=>{
    // seta o header da resposta
    // retornar html
    res.setHeader('Content-Type','text/html')
    res.end(`
    <h1>Olá Mundo</h1>
    `)
})

// listen do servidor
servidor.listen(8888, ()=>{
    console.log('Servidor rodando: http://localhost:8888')
})