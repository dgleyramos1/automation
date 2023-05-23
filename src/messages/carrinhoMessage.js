import { storage } from "../storage.js"


export const carrinhoMessage = (from) => {
    const itens = storage[from].itens

    let total = 0.0;

    itens.forEach((item) => total += item.price)

    let message = `     *CARDAPIO*    \n\n${mapItens(itens)}*Valor total: ${total.toFixed(2)}*\n\n--------------------------------------------------\n\n# - Finalizar pedido\n0 - Cardápio`
    return message
}


const mapItens = (item) => {
    let message = ""
    Object.keys(item).forEach((value) => {
        message += `${(Number(value) + 1)} - *${item[value].name}*          ${item[value].price ? `*R$${item[value].price.toFixed(2)}*` : ""}\n${item[value].description ? `_${item[value].description}_\n` : ""}\n`
    })

    return message
}