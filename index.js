const http = require('http');
const Game = require('../flashcards-starter/src/Game')
let game = new Game();

let app = http.createServer();

// Start the server on port 3000
app.listen(3000, '127.0.0.1');
console.log('Node server running on port 3000');
game.start();
