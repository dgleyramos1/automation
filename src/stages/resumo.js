import { STAGES } from "./index.js"
import { errorMessage } from "../messages/errorMessage.js"
import { pixMessage } from "../messages/pixMessage.js"
import { cartaoMessage } from "../messages/cartaoMessage.js"
import { storage } from "../storage.js"


export const resumo ={
    async exec(client, message){
        const mensagem = message.body.trim()
        const isMsgValid = /[1|2|3|*]/.test(mensagem)

        let msg = errorMessage()

        if(isMsgValid){
            let option;
            if(['*'].includes(mensagem)){
                option = options[mensagem]()
            }else{
                option = options[Number(mensagem)](message.from)
            }
            
            msg = option.message
            storage[message.from].payment = option.type ? option.type : ''
            storage[message.from].stage = option.nextStage
        }

        await client.sendText(message.from, msg)
    }
}


const options = {
    1: (from) => {
        let message = pixMessage(from, 'Pix')
        return {
            message,
            nextStage: STAGES.INICIAL,
            type: 'PIX'
        }
    },
    2: (from) => {
        let message = "Certo"
        return {
            message,
            nextStage: STAGES.INICIAL,
            type: 'Dinheiro'
        }
    },
    3: (from) => {
        let message = cartaoMessage(from, 'Cartão')
        return {
            message,
            nextStage: STAGES.INICIAL,
            type: 'Cartão'
        }
    },
    '*': () => {
        let message = "Okay"
        return {
            message,
            nextStage: STAGES.INICIAL
        }
    }
}