// importaçao do modulo http
const http = require('http')

// criar o objeto servidor
// req = request(requisiçao)
// res = response(resposta)
http.createServer((req,res)=>{
    res.write('Olá Mundo')
    res.end()
}).listen(3000)