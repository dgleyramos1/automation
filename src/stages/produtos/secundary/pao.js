import { addItem } from "../../../messages/addItem.js"
import { errorMessage } from "../../../messages/errorMessage.js"
import { storage } from "../../../storage.js"
import { STAGES } from "../../index.js"


export const pao = {
    async exec(client, message){
        const mensagem = message.body.trim()
        const isMsgValid = /[1|2]/.test(mensagem)

        let msg = errorMessage()

        if(isMsgValid){
            let {name, description, price} = storage[message.from].itens[storage[message.from].itens.length - 1]
            if('1'.includes(mensagem)){
                description = modifier(description.split(','), "Pão Australiano")
                storage[message.from].itens.pop()
                storage[message.from].itens.push({name, description, price})
                msg = addItem(name)
            }else {
                description = modifier(description.split(','), "Pão de hambúrguer c/ gergelim")
                storage[message.from].itens.pop()
                storage[message.from].itens.push({name, description, price})
                msg = addItem(name)
            }
            storage[message.from].stage = STAGES.ARTESANAIS
        }


        await client.sendText(message.from, msg)
    }
}

const modifier = (item, text) => {
    let result = item
    result[0] = text
    return result.join(', ')
}