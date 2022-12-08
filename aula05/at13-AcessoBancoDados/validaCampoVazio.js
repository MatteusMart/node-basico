const validaCampoVazio = (campo,nome) =>{
    if(campo == ''){
        return res.json({
            "retorno":"erro",
            "mensagem":`Campo ${nome} não foi preenchido`
        })
    }
}

