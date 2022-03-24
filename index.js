const Game = require('./src/Game');
const Round = require('./src/Round');
const Deck = require('./src/Deck');
const Card = require('./src/Card');
const data = require('./src/data');
const prototypeQuestions = data.prototypeData;
const game = new Game();

console.log('Your project is running...');

game.shuffleDeck();
game.start()
