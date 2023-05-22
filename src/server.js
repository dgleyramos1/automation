/* eslint-disable prettier/prettier */
import { create } from "venom-bot";

create({
    session: "Big Burguer Delivery",
})
    .then((client) => {
        start(client);
    })
    .catch((err) => console.log(err));

function start(client) {
    client.onMessage(async (message) => {
        if (message.isGroupMsg === false) {
            await client.sendText(message.from, "Welcome to robot");
        }
    });
}
