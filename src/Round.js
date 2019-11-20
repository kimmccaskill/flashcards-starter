const Turn = require('../src/Turn');

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
  }

  calculatePercentCorrect() {
    return +((this.correctGuesses/this.turns)*100).toFixed(0);
  }

  endRound() {
    console.log(`** Round over! ** You answered ${calculatePercentCorrect()}% of the questions correctly!`)
  }
}

module.exports = Round;
