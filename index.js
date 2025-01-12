// const WebSocket = require('ws');

// // Create a WebSocket server on port 8080
// const wss = new WebSocket.Server({ port: 8080 });

// wss.on('connection', (ws) => {
//     console.log('New client connected!');

//     // Send a message to the client
//     ws.send('Welcome to the WebSocket server!');

//     // Listen for messages from clients
//     ws.on('message', (message) => {
//         console.log(`Received: ${message}`);
//         // Echo the message back to all clients
//         wss.clients.forEach(client => {
//             if (client.readyState === WebSocket.OPEN) {
//                 client.send(message);
//             }
//         });
//     });

//     // Handle client disconnection
//     ws.on('close', () => {
//         console.log('Client disconnected!');
//     });
// });

// console.log('WebSocket server is running on ws://localhost:8080');

const WebSocket = require('ws');

// Create a WebSocket server on port 8080
const wss = new WebSocket.Server({ port: 8080 });

wss.on('connection', (ws) => {
    console.log('New client connected!');

    // Handle incoming messages from clients
    ws.on('message', (message) => {
        console.log(`Received: ${message}`);
        // Process the data from the tracking device here

        // Optionally, send a response back to the client
        ws.send(`Data received: ${message}`);
    });

    // Handle client disconnection
    ws.on('close', () => {
        console.log('Client disconnected!');
    });
});

console.log('WebSocket server is running on ws://13.233.193.173:8080');