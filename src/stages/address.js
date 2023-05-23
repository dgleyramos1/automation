import { storage } from "../storage.js"
import {cancelar} from "../messages/cancelar.js"
import {resumoPedido} from '../messages/resumoPedido.js'
import { STAGES } from "./index.js";


export const address = {
    async exec(client, message){
        let calc;
        storage[message.from].itens.forEach((item) => storage[message.from].total += item.price)
        let msg;
        if(message.body === "*"){
            msg = cancelar()
            storage[message.from].stage = STAGES.INICIAL
        }else {
            storage[message.from].address = message.body
            msg = resumoPedido(message.from)
        }


        await client.sendText(message.from, msg)
    }
}