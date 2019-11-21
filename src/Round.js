const Turn = require('../src/Turn');
const Game = require('../src/Game')


class Round {
  constructor(deck) {
    this.currentCard = deck.cards[0];
    this.deck = deck.cards;
    this.turns = 0;
    this.incorrectGuesses = [];
    this.correctGuesses = 0;
  }

  returnCurrentCard() {
    return this.currentCard;
  }

  takeTurn(guess) {
    const turn = new Turn(guess, this.returnCurrentCard());
    turn.evaluateGuess();
    if(!turn.result) {
      this.incorrectGuesses.push(this.currentCard.id)
    }
    if(turn.result) {
      this.correctGuesses++;
    }
    this.turns++;
    this.currentCard = this.deck[this.turns];
    return turn.giveFeedback();
  }

  calculatePercentCorrect() {
    return +((this.correctGuesses/this.turns)*100).toFixed(0);
  }

  endRound() {
    console.log(`** Round over! ** You answered ${this.calculatePercentCorrect()}% of the questions correctly!`)
    process.exit();
    // return;
  }
}

module.exports = Round;
