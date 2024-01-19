const frm = document.querySelector("form")
const resp1 = document.querySelector("#outResp1")
const resp2 = document.querySelector("#outResp2")
const resp3 = document.querySelector("#outResp3")

// quando precionado o botao submit no form html
frm.addEventListener("submit", (e) => {
    const veiculo = frm.inVeiculo.value
    const preco = Number(frm.inPreco.value)

    const entrada = preco * 0.50 // Valor da entrada
    const parcela = (preco * 0.50) / 12 // Valor da parcela

    resp1.innerText = `Promocao: ${veiculo}`
    resp2.innerText = `Entrada de R$ ${entrada.toFixed(2)}`
    resp3.innerText = `+ 12x de R$ ${parcela.toFixed(2)}`

    e.preventDefault()
})



