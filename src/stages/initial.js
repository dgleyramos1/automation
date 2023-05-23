import {initialMessage} from '../messages/initial.js'
import { storage } from '../storage.js'
import {STAGES} from './index.js'

export const initial = {
    async exec(client, message){
        storage[message.from].stage = STAGES.MENU
        const nameClient = message.sender?.pushname
        const phones = message.from.split('@')
        storage[message.from].name = nameClient
        storage[message.from].phone = phones[0]
        console.log("Storage", storage[message.from])

        let mensagem = initialMessage(message.sender?.pushname, client.session)

        await client.sendText(message.from, mensagem)
    }
}