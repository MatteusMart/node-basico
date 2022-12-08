const validarLogin = ()=>{
    let email = $('#email').val()
    let senha = $('#senha').val()
    

    // validaçao front end campos vazioy
    if(email == ''){
        swal.fire({
            "icon":"error",
            "tittle":"Atenção",
            "text":"Preencha o campo email"
        })
        return
    }

    if(senha == ''){
        swal.fire({
            "icon":"error",
            "tittle":"Atenção",
            "text":"Preencha o campo senha"
        })
        return
    }

    const result = fetch(`validar/login`,{
        method: 'POST',
        body: `email=${email}&senha=${senha}`,
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded'
        }
    })
    .then((response) => response.json())
    .then((result)=>{
        if(result.retorno == 'ok'){
            Swal.fire({
                "icon": 'success',
                "title": 'Sucesso!',
                "text": result.mensagem
            })

            $('#form-login'[0]).reset()
        }else{
            Swal.fire({
                "icon": 'error',
                "title": 'Atenção!',
                "text": result.mensagem
            })
        }
    })
    
}