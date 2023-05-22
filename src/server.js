/* eslint-disable prettier/prettier */
import { create } from "venom-bot";
import { getStage, stages } from "./stages.js";

create({
    session: "Big Burguer Delivery",
})
    .then((client) => {
        start(client);
    })
    .catch((err) => console.log(err));

function start(client) {
    client.onMessage(async (message) => {
        console.log(message)
        if (message.isGroupMsg === false) {
            const currentStage = getStage({ from: message.from })

            await stages[currentStage].stage.exec(client, message)
        }
    });
}
