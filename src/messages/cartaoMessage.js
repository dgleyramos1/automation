import { storage } from "../storage.js"



export const cartaoMessage = (from) => {

    const {name, phone, address, itens, payment, total} = storage[from]

    return `*NOVO PEDIDO*:\n\nCliente: *${name}*\nPhone: *${phone}*\nCarrinho:\n*${mapItens(itens)}*\nEndereço: *${address}*\nTaxa de entrega: *R$5.00*\nTempo de entrega: *50 minutos*.\nTotal à pagar: *${(total + 5).toFixed(2)}*\nPagamento: *${payment}*\n\n------------------------------------------------------\n\nVocê está conversando agora com o atendente pessoal, para cancelar digite\n\n**ENCERRAR**`
}


const mapItens = (item) => {
    let message = ""
    Object.keys(item).forEach((value) => {
        message += `*${item[value].name}*          ${item[value].price ? `*R$${item[value].price.toFixed(2)}*` : ""}\n${item[value].description ? `_${item[value].description}_\n` : ""}`
    })

    return message
}