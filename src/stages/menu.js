import {errorMessage} from '../messages/errorMessage.js'
import {cardapioMessage} from '../messages/cardapioMessage.js'
import {atendenteMessage} from '../messages/atendenteMessage.js'
import { storage } from '../storage.js'
import {STAGES} from './index.js'

export const menu = {
    async exec(client, message){
        const mensagem = message.body.trim()
        const isMsgValid = /[1|2]/.test(mensagem)

        let msg = errorMessage()
        if(isMsgValid){
            const option = options[Number(mensagem)]()
            msg = option.message
            storage[message.from].stage = option.nextStage
        }

        await client.sendText(message.from, msg)
    }
}


const options = {
    1: () => {
        let message = cardapioMessage()

        return{
            message,
            nextStage: STAGES.CARDAPIO
        }
    },
    2: () => {
        let message = atendenteMessage()

        return {
            message,
            nextStage: STAGES.INICIAL
        }
    }
}