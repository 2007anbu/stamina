const express = require('express');
const http = require('http');
const { Server } = require('socket.io');
const path = require('path');

const app = express();
const server = http.createServer(app);
const io = new Server(server);

// Serve the static files (your HTML file) from the project root
app.use(express.static(path.join(__dirname)));

app.get('/healthz', (req, res) => {
    res.status(200).send('ok');
});

io.on('connection', (socket) => {
    console.log('A user connected: ' + socket.id);

    // Event 1: When someone clicks 'Send'
    // The frontend sends the image data, and we broadcast it to the other person
    socket.on('sendBoard', (imageData) => {
        console.log('Board update received from ' + socket.id);
        // Send to everyone ELSE connected (the other person)
        socket.broadcast.emit('receiveBoard', imageData);
    });

    // Event 2: Real-time drawing (Optional but recommended)
    // If you want to see lines appear instantly as they draw:
    socket.on('drawLine', (data) => {
        socket.broadcast.emit('drawLine', data);
    });

    socket.on('clearBoard', () => {
        socket.broadcast.emit('clearBoard');
    });

    // Event 3: Diagram sharing
    socket.on('shareDiagram', (diagram) => {
        console.log('Diagram shared by ' + socket.id);
        // Broadcast to all other connected clients
        socket.broadcast.emit('receiveDiagram', diagram);
    });

    socket.on('disconnect', () => {
        console.log('User disconnected: ' + socket.id);
    });
});

const PORT = process.env.PORT || 3000;
server.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});