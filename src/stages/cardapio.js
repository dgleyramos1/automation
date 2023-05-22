import { acais, artesanais, beiruths, combos, cremeDeFrutas, frituras, hamburguers, lanchesFrios, lanchesTradicionais, milkShakes } from '../cardapio/index.js'
import {errorMessage} from '../messages/errorMessage.js'


export const cardapio = {
    async exec(client, message){
        const mensagem = message.body.trim()
        const isMsgValid = /[1|2|3|4|5|6|7|8|9|10]/.test(mensagem)

        let msg = errorMessage()

        if(isMsgValid){
            const option = options[Number(mensagem)]()
            msg = option.message
        }


        await client.sendText(message.from, msg)
    }
}


const options = {
    1: () => {
        let message = '  *ARTESANAIS*  \n\n'
        message += mapItens(artesanais)
        message += '0 - *Voltar ao cardápio*'
        return {
            message
        }
    },
    2: () => {
        let message = '  *HAMBURGUERES*  \n\n'
        message += mapItens(hamburguers)
        message += '0 - *Voltar ao cardápio*'
        return {
            message
        }
    },
    3: () => {
        let message = '  *LANCHES FRIOS*  \n\n'
        message += mapItens(lanchesFrios)
        message += '0 - *Voltar ao cardápio*'
        return {
            message
        }
    },
    4: () => {
        let message = '  *LANCHES TRADICIONAIS*  \n\n'
        message += mapItens(lanchesTradicionais)
        message += '0 - *Voltar ao cardápio*'
        return {
            message
        }
    },
    5: () => {
        let message = "  *BEIRUTH'S*  \n\n"
        message += mapItens(beiruths)
        message += '0 - *Voltar ao cardápio*'
        return {
            message
        }
    },
    6: () => {
        let message = "  *FRITURAS*  \n\n"
        message += mapItens(frituras)
        message += '0 - *Voltar ao cardápio*'
        return {
            message
        }
    },
    7: () => {
        let message = "  *MILK SHAKES*  \n\n"
        message += mapItens(milkShakes)
        message += '0 - *Voltar ao cardápio*'
        return {
            message
        }
    },
    8: () => {
        let message = "  *AÇAÍS*  \n\n"
        message += mapItens(acais)
        message += '0 - *Voltar ao cardápio*'
        return {
            message
        }
    },
    9: () => {
        let message = "  *CREME DE FRUTAS*  \n\n"
        message += mapItens(cremeDeFrutas)
        message += '0 - *Voltar ao cardápio*'
        return {
            message
        }
    },
    10: () => {
        let message = "  *COMBOS*  \n\n"
        message += mapItens(combos)
        message += '0 - *Voltar ao cardápio*'
        return {
            message
        }
    }
}


const mapItens = (item) => {
    let message = ""
    Object.keys(item).forEach((value) => {
        message += `${value} - *${item[value].name}*          ${item[value].price ? `*R$${item[value].price.toFixed(2)}*` : ""}\n${item[value].description ? `_${item[value].description}_\n\n` : ""}`
    })

    return message
}