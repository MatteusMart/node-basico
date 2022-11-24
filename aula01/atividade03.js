// exemplo utilizando o modulo path, relacionando os arquivos

const path = require('path')

let arquivo = 'cup-of-coffee-gb2275dc5a_1920.jpg';

// exibe a extensao do arquivo
console.log('Extensao:', path.extname(arquivo))

// exibe o nome completo
console.log('Nome completo',path.basename(arquivo))

// nome do diretorio da imagem
console.log('Nome do diretório:', path.dirname(arquivo))

console.log('Nome absoluto:', path.resolve(arquivo))