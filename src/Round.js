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
    // deck.cards.shift();
  }
}

module.exports = Round;
