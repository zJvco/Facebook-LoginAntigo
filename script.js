function pegarAnos() {
    let anoTexto = document.querySelector('.ano')
    let anoAtual = new Date().getFullYear()

    let c = 1900
    while (c <= anoAtual) { // pegar todos os anos até o atual
        anoTexto.innerHTML += `<option>${c}</option>`
        c++
    }
}

