import * as mqtt from 'mqtt';

export const mqttClient = mqtt.connect('wss://vd1add42.ala.asia-southeast1.emqxsl.com:8084/mqtt', {
	username: 'bagusteam',
	password: 'Aditya2236',
	clientId: 'web-browser-client-' + Math.random().toString(16).substring(2, 8)
});
