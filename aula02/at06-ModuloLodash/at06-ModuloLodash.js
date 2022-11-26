// exemplo do uso do modulo(biblioteca)Lodash
// inicializar npm
// npm initi
// ou
// npm i -g npm

// instalação: npm i lodash -- save lodash

// importaçao do lodash
const _ = require("lodash");
// import _ from 'lodash';

const numeros = [10, 7, 14, 47, 32, 3];

const numeros2 = [2, 5, 7, 54, 45, 22];

console.log(numeros);

// soma dos numeros
console.log("Soma dos numeros:", _.sumBy(numeros));

// exibe o primeior numero do array
console.log("Primeiro numero:", _.first(numeros));

// exibe o ultimo numero
console.log("Ultimo numero:", _.last(numeros));

// exibe o maior menor numero
console.log("Menor numero:", _.min(numeros));

// exibe o maior numero
console.log("Maior numero:", _.max(numeros));

// media dos numeros
console.log("Media numero:", _.mean(numeros));

// soma os numeros
console.log("União de arrays:", _.union(numeros, numeros2));

const numerosMegaSena = () => {
  return Math.trunc(Math.random() * 60);
};

// executando a funçao numerosMegaSena 6 vezes
const jogoCompleto = _.times(6, numerosMegaSena);

console.log(jogoCompleto);
