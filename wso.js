document.addEventListener('DOMContentLoaded', function () {
    // URL del WebSocket específica para tu dominio
    var webSocketURL = 'wss://lab.ivacker.dev/ws';

    // Crear una nueva conexión WebSocket.
    var webSocket = new WebSocket(webSocketURL);

    webSocket.onmessage = function(event) {
        var message = JSON.parse(event.data); // event.data es el mensaje JSON del servidor
        document.getElementById('timeDifference').innerText = message;
    };

    webSocket.onerror = function(error) {
        // Manejar cualquier error que ocurra durante la conexión.
        console.log('WebSocket Error: ' + error);
    };

    webSocket.onclose = function(event) {
        // Manejar el cierre de la conexión WebSocket.
        console.log('WebSocket connection closed: ', event);
    };
});


