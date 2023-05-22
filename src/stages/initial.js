import {initialMessage} from '../messages/initial.js'

export const initial = {
    async exec(client, message){
        let mensagem = initialMessage(message.sender?.pushname, client.session)

        await client.sendText(message.from, mensagem)
    }
}