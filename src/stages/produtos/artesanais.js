import { errorMessage } from "../../messages/errorMessage.js"
import {removeItem} from '../../messages/removeItem.js'
import {addItem} from '../../messages/addItem.js'
import { storage } from "../../storage.js"
import {STAGES} from '../index.js'
import { artesanais as buguers } from "../../cardapio/index.js"


export const artesanais = {
    async exec(client, message){
        const mensagem = message.body.trim()
        const isMsgValid = /[0|1|2|3|4|5|6|#|*]/.test(mensagem)


        let msg = errorMessage()
        if(isMsgValid){
            if(['#', '*', '3', '4'].includes(mensagem)){
                const option = options[mensagem]()
                if(['3', '4'].includes(mensagem)){
                    const option = options[Number(mensagem)]()
                    storage[message.from].itens.push(buguers[mensagem])
                }
                msg = option.message
                storage[message.from].stage = option.nextStage
            }else{
                msg = addItem(buguers[mensagem].name)
                storage[message.from].itens.push(buguers[mensagem])
            }
        }


        console.log(storage[message.from])

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
        let message = "Finalize"

        return {
            message,
            nextStage: STAGES.CARDAPIO
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