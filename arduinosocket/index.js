const WebSocket = require('ws');
const socket = new WebSocket('ws://194.87.94.144:8080');

// Соединение открыто
socket.addEventListener('open', function (event) {
    socket.send('Hello Server!');
    socket.send(22);
});

// Наблюдает за сообщениямиc
socket.addEventListener('message', function (event) {
    console.log('Message from server ', event.data);
});