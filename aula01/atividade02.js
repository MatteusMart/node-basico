// importação do modo readline
const { NOMEM } = require('dns');
const readline = require('readline');

const rl = readline.createInterface({
    input:process .stdin,
    output: process .stdout
})



rl.question("Qual seu nome ?\n \r",(nome)=>{
    console.log(`Olá ${nome}`) 

    rl.question("Qual é a sua idade? \n \r",(idade)=>{
        if(idade >= 18){
            console.log('Pode tirar carta!')
        }else{
            console.log('Não pode tirar carta, menor de idade!')
        }
    rl.close();
    })
    
    
})


