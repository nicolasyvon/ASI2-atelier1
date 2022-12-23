const stompit = require('stompit');
const EnvelopeDto = require('../model/EnvelopeDto');
const CONFIG = global.CONFIG;


class Producer {

    constructor({destination, headers}) {
        this.headers = {
            persistent: true,
        };
        if (headers) {
            Object.keys(headers).forEach((key) => { this.headers[key] = src[key]; });
        }
        this.headers.destination = destination;
    }

    send(operation, data) {
        stompit.connect(CONFIG.activemq.connectOptions, (error, client) => {
            if (error) {
                return console.error(error);
            }

            const frame = client.send(this.headers);

            //const message = new EnvelopeDto({object: data, operation: operation});
            
            frame.write(JSON.stringify(data));
            frame.end();

            client.disconnect();
        });
    }
}

module.exports = Producer;