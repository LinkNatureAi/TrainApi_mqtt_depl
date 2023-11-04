const mqtt = require('mqtt');

const client = mqtt.connect('mqtt://broker.hivemq.com');

client.on('connect', () => {
  console.log('Connected to MQTT broker');
  setInterval(() => {
    const randomNumber = Math.floor(Math.random() * 100) + 1;
    client.publish('train', JSON.stringify({ value: randomNumber }));
  }, 1000);
});
