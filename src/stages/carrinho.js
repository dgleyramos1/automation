import { cardapioMessage } from "../messages/cardapioMessage.js"
import { errorMessage } from "../messages/errorMessage.js"
import { storage } from "../storage.js"
import { STAGES } from "./index.js"


export const carrinho = {
    async exec(client, message){
        const mensagem = message.body.trim()
        const isMsgValid = /[#|0]/.test(mensagem)


        let msg = errorMessage()

        if(isMsgValid){
            const option = options[mensagem]()
            msg = option.message
            storage[message.from].stage = option.nextStage
        }

        await client.sendText(message.from, msg)
    }
}


const options = {
    '#': () => {
        let message = 'Finalize'

        return {
            message,
            nextStage: STAGES.CARDAPIO
        }
    },
    '0': () => {
        let message = cardapioMessage()

        return {
            message,
            nextStage: STAGES.CARDAPIO
        }
    }
}