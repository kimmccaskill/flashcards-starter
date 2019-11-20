class Round {
  constructor(deck) {
    this.currentCard = deck.cards[0];
    this.deck = deck.cards;
    this.turns = 0;
    this.incorrectGuesses = [];
  }

  returnCurrentCard() {
    return this.currentCard;
  }

  takeTurn(turn) {
    this.turns++;
    this.currentCard = this.deck[this.turns];
    return turn.giveFeedback()
  }
}

module.exports = Round;
