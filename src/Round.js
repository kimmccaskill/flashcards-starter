class Round {
  constructor(deck) {
    this.currentCard = deck.cards[0];
    this.deck = deck.cards;
  }

  returnCurrentCard() {
    return this.currentCard;
  }
}

module.exports = Round;
