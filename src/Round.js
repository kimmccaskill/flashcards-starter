class Round {
  constructor(deck) {
    this.currentCard = deck.cards[0];
    this.deck = deck.cards;
    this.turns = 0;
  }

  returnCurrentCard() {
    return this.currentCard;
  }
}

module.exports = Round;
