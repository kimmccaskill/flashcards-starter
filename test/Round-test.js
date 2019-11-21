const chai = require('chai');
const expect = chai.expect;

const Round = require('../src/Round')
const Deck = require('../src/Deck');
const Turn = require('../src/Turn');
const Card = require('../src/Card');

describe('Round', function() {
  let card1, card2, card3, deck, round;

  beforeEach(() => {
    card1 = new Card(1, 'What is Robbie\'s favorite animal', ['sea otter', 'pug', 'capybara'], 'sea otter');
    card2 = new Card(14, 'What organ is Khalid missing?', ['spleen', 'appendix', 'gallbladder'], 'gallbladder');
    card3 = new Card(12, 'What is Travis\'s middle name?', ['Lex', 'William', 'Fitzgerald'], 'Fitzgerald');
    deck = new Deck([card1, card2, card3]);
    round = new Round(deck);
  });

  it('should be able to check deck', function() {
    expect(round.deck).to.deep.equal([card1, card2, card3]);
  });

  it('should be able to return card', function() {
    expect(round.returnCurrentCard()).to.deep.equal(card1);
  });

  it('should be able to check what turn it is', function() {
    expect(round.turns).to.deep.equal(0);
  });

  describe('takeTurn', function() {

    it('should be able to check what turn it is after taking turn', function() {
      round.takeTurn('sea otter');

      expect(round.turns).to.deep.equal(1);
    });

    it('should be able to change current card on new turn', function() {
      round.takeTurn('sea otter');

      expect(round.currentCard).to.deep.equal(card2);
    });

    it('should add incorrect guess to list', function() {
      round.takeTurn('pug');

      expect(round.incorrectGuesses).to.deep.equal([1]);
    });
  });

  describe('evaluateGuess', function() {
    it('should be able to evaluate correct guess', function() {
      const turn =  new Turn('sea otter', card1);

      round.takeTurn('sea otter');
      turn.evaluateGuess();

      expect(turn.result).to.equal(true);
    });

    it('should be able to evaluate incorrect guess', function() {
      const turn =  new Turn('spleen', card2);

      turn.evaluateGuess();
      expect(turn.result).to.equal(false);
    });
  });

  it('should calculate percent correct', function() {
    round.takeTurn('sea otter');
    round.takeTurn('spleen');
    round.takeTurn('Fitzgerald');

    expect(round.calculatePercentCorrect()).to.deep.equal(67);
  });
});
