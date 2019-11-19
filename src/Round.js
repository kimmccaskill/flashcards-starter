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

  takeTurn() {
    this.turns++;
    this.deck.shift();
    this.currentCard = deck.cards[this.turns];
  }
}

module.exports = Round;
