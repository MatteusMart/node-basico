// modulo proprio(criar um modulo)

// cria e exporta o modulo calculadora
module.exports = {
    soma: (a,b)=>parseInt(a)+parseInt(b),
    sub: (a,b)=>parseFloat(a)-parseFloat(b),
    mult: (a,b)=>parseFloat(a)*parseFloat(b),
    div: (a,b)=>parseFloat(a)/parseFloat(b)
}

