import {initialMessage} from '../messages/initial.js'
import { storage } from '../storage.js'
import {STAGES} from './index.js'

export const initial = {
    async exec(client, message){
        storage[message.from].stage = STAGES.MENU

        let mensagem = initialMessage(message.sender?.pushname, client.session)

        await client.sendText(message.from, mensagem)
    }
}