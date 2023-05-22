import { artesanais } from '../cardapio/index.js'
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

        Object.keys(artesanais).forEach((value) => {
            message += `${value} - *${artesanais[value].name}*     -    *R$${artesanais[value].price.toFixed(2)}*\n_${artesanais[value].description}_\n\n`
        })

        message += '0 - *Voltar ao cardápio*'

        return {
            message
        }
    }
}