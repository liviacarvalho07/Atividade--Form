function retornarValores(conteudo){
    if (!("erro" in conteudo)) {
        document.getElementById('endereco').value=(conteudo.logradouro)
        document.getElementById('inputBai').value=(conteudo.bairro)
        document.getElementById('inputCity').value=(conteudo.localidade)
        document.getElementById('inputCom').value=(conteudo.complemento)
    } else{
        alert("CEP não encontrado")
    }
}

function buscaCEP(valor){
    var cep= valor.replace(/\D/g, '')
    if (cep != ""){
        var validarCEP= /^[0-9]{8}$/
        if( validarCEP.test(cep)){
            document.getElementById('endereco').value="..."
            document.getElementById('inputBai').value="..."
            document.getElementById('inputCity').value="..."
            document.getElementById('inputCom').value="..."
            var script= document.createElement('script')
            script.src= `https://viacep.com.br/ws/${cep}/json/?callback=retornarValores`
            document.body.appendChild(script)
        } else{
            alert("Formato inválido")
        }
    }
}