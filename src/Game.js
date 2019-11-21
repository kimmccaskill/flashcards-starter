const data = require('./data');
const prototypeQuestions = data.prototypeData;
const util = require('./util');

const Round = require('../src/Round')
const Deck = require('../src/Deck');

class Game {
  constructor() {
    this.currentRound = 0;
  }

  printMessage(deck) {
    console.log(`Welcome to FlashCards! You are playing with ${deck.countCards()} cards.
-----------------------------------------------------------------------`)
  }

  printQuestion(round) {
    util.main(round);
  }

  start() {
    const deck = new Deck(prototypeQuestions);
    const round = new Round(deck);

    this.printMessage(deck, round);
    this.printQuestion(round)
    this.currentRound++
    round.timer();
  }
}

module.exports = Game;
