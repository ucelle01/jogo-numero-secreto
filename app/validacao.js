function verificaSeOChutePossuiUmValorValido(chute) {
    const numero = +chute
    if (chuteInvalido(numero)) {
        elementoChute.innerHTML += '<div class="erro">Valor inválido!</div>'
        return
    }

    if (numeroMaiorOuMenorQueOPermitido(numero)){
        elementoChute.innerHTML += `<div class="erro">Valor inválido: o número precisa estar entre ${menorValor} e ${maiorValor}.</div>`
        return
    } 

    if(numero === numeroSecreto){
        document.body.innerHTML = `
            <h2>Você acertou!</h2>
            <h3>O número secreto era ${numeroSecreto}</h3>

            <button id="jogar-novamente" class="btn-jogar">Jogar novamente</button>
        `      
    } else {
       dicaParaONumero(numero) 
    }
}

function chuteInvalido(numero) {
    return Number.isNaN(numero)
}

function numeroMaiorOuMenorQueOPermitido(numero) {
    return numero > maiorValor || numero < menorValor
}

function dicaParaONumero(numero) {
    if(numero < numeroSecreto){
        elementoChute.innerHTML += '<div class="dica">O numero secreto é maior <i class="fa-solid fa-up-long"></i></div>'  
    }
    if(numero > numeroSecreto){
        elementoChute.innerHTML += '<div class="dica">O numero secreto é menor <i class="fa-solid fa-down-long"></i></div>'    
    }
}
document.addEventListener('click', e => {
    if (e.target.id == 'jogar-novamente') {
        window.location.reload()
    }
})