import { errorMessage } from "../../messages/errorMessage.js"
import {removeItem} from '../../messages/removeItem.js'
import { carrinhoMessage } from '../../messages/carrinhoMessage.js'
import {addItem} from '../../messages/addItem.js'
import { storage } from "../../storage.js"
import {STAGES} from '../index.js'
import { artesanais as buguers } from "../../cardapio/index.js"
import { addressMessage } from "../../messages/addressMessage.js"


export const artesanais = {
    async exec(client, message){
        const mensagem = message.body.trim()
        const isMsgValid = /[0|1|2|3|4|5|6|#|*|!]/.test(mensagem)


        let msg = errorMessage()
        if(isMsgValid){
            if(['#', '*','!', '3', '4'].includes(mensagem)){
                let option;
                if(['!'].includes(mensagem)){
                    option = options[mensagem](message.from)
                }else if(['3', '4'].includes(mensagem)){
                    option = options[Number(mensagem)]()
                    storage[message.from].itens.push(buguers[mensagem])
                }else {
                    option = options[mensagem]()
                }
                msg = option.message
                storage[message.from].stage = option.nextStage
            }else{
                msg = addItem(buguers[mensagem].name)
                storage[message.from].itens.push(buguers[mensagem])
            }
        }
        await client.sendText(message.from, msg);
    }
}

const options = {
    '*': () => {
        let message = removeItem()

        return {
            message,
            nextStage: STAGES.INICIAL
        }
    },
    '#': () => {
        let message = addressMessage()

        return {
            message,
            nextStage: STAGES.ADDRESS
        }
    },
    '!': (from) => {
        let message = carrinhoMessage(from)

        return {
            message,
            nextStage: STAGES.CARRINHO
        }
    },
    3: () => {
        let message = `*Por favor, qual pão você deseja?*\n-------------------------------------------------\n\n1 - Pão Australiano\n2 - Pão de Hambúrguer c/ gergelim`

        return {
            message,
            nextStage: STAGES.PAES
        }
    },
    4: () => {
        let message = `*Por favor, qual pão você deseja?*\n-------------------------------------------------\n\n1 - Pão Australiano\n2 - Pão de Hambúrguer c/ gergelim`

        return {
            message,
            nextStage: STAGES.PAES
        }
    }
}