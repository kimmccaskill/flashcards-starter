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

  takeTurn(turn) {
    this.turns++;
    this.currentCard = this.deck[this.turns];
    turn.evaluateGuess();
    if(!turn.result) {
      this.incorrectGuesses.push(this.deck[this.turns].id)
    } if(turn.result) {
      this.correctGuesses++;
    }
    return turn.giveFeedback();

  }

  calculatePercentCorrect() {
    return +((this.correctGuesses/this.turns)*100).toFixed(2);
    // console.log(this.correctGuesses)
  }
}

module.exports = Round;
