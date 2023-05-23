import { storage } from "../storage.js";


export const resumoPedido = (from) => {
    const {name, itens, address, total} = storage[from]

    let message = `  *RESUMO DO PEDIDO*   \n\n*Carrinho:*\n${mapItens(itens)}Taxa de entrega: *R$5.00*\nEndereço: *${address}*\nTotal a pagar: *R$${(total + 5).toFixed(2)}*\nTempo de entrega: *50 minutos*.\n\n*${name}*, informe a forma de pagamento, por gentileza.\n\n----------------------------------------------------\n\n1 - Pix\n2 - Dinheiro\n3 - Cartão\n* - Cancelar pedido`

    return message
}


const mapItens = (item) => {
    let message = ""
    Object.keys(item).forEach((value) => {
        message += `${(Number(value) + 1)} - *${item[value].name}*          ${item[value].price ? `*R$${item[value].price.toFixed(2)}*` : ""}\n${item[value].description ? `_${item[value].description}_\n` : ""}\n`
    })

    return message
}