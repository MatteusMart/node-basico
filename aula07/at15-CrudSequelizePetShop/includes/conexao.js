// arquivo de conexao com o db mysql
const Sequelize = require('sequelize')

const con = new Sequelize("db_petshop","root","",{
    host:"localhost",
    dialect:"mysql",
    charset:"utf8mb4",
    collate:"utf8mb4_general_ci",
    timezone:"-03:00"
})

try{
    con.authenticate()
    console.log("Conectado com DB")
}catch(error){
    console.log("Erro ao conectar ao DB"+error)
}

module.exports = con