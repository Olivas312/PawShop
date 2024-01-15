const botao = document.querySelector('#botaoTema')
    // addEventListener = adicionar um "ouvidor" de eventos
    botao.addEventListener('click', mode)

function mode(){
    // document = html
    // querySelector = seletor de elementos
    let body = document.querySelector("body")
    let atualTema = document.querySelector("#atualTema")
    
    if(botao.checked){
        body.setAttribute('data-bs-theme', 'dark')
        atualTema.innerHTML='Escuro'
    }
    else{
        body.setAttribute('data-bs-theme', 'light')
        atualTema.innerHTML='Claro'
    }
}