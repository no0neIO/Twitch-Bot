const tmi = require('tmi.js');
let counter = 0

// Define configuration options
const opts = {
    identity: { // put your user/pass here
        username: "",
        password: ""
    },
    channels: [
        "codinggarden"
    ]
};
// Create a client with our options
const client = new tmi.client(opts);

// Register our event handlers (defined below)
client.on('message', onMessageHandler);
client.on('connected', onConnectedHandler);

// Connect to Twitch:
client.connect();

// Called every time a message comes in
function onMessageHandler(target, context, msg, self) {
    if (self) { return; } // Ignore messages from the bot

    // Remove whitespace from chat message
    const commandName = msg.trim();

    if (commandName.startsWith('!yerba')) {
        const yerba = 'coding5Yerba '
        console.log(`* Executed ${commandName} command`);
        setTimeout(() => client.say(target, yerba.repeat(Math.floor(Math.random() * 10) + 1)), 1000);
    } else if (commandName.startsWith('!train')) {
        console.log(`* Executed ${commandName} command`);
        setTimeout(() => client.say(target, `<marquee>![](https://i.imgur.com/KRrmTCV.png)`), 1000);
    }

}

// Called every time the bot connects to Twitch chat
function onConnectedHandler(addr, port) {
    console.log(`* Connected to ${addr}:${port}`);
    // client.say('#codinggarden', `test`);
}

setInterval(() => {
    counter++
    client.say('codinggarden', "!drop me").then(() => {
        console.log(`onelineofme Sent "!drop me" - ${counter}`)
    })
}, 95 * 1000)