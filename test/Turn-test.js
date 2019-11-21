const chai = require('chai');
const expect = chai.expect;

const Turn = require('../src/Turn');
const Card = require('../src/Card');

describe('Turn', function() {
  let card1, turn;
  beforeEach(() => {
    card1 = new Card(1, 'What is Robbie\'s favorite animal', ['sea otter', 'pug', 'capybara'], 'sea otter');

  });

  it('should be a function', function() {
    expect(Turn).to.be.a('function');
  });

  it('should be an instance of Turn', function() {
    turn = new Turn('sea otter', card1);
    expect(turn).to.be.an.instanceof(Turn);
  });

  it('should return guess', function() {
    turn = new Turn('sea otter', card1);

    expect(turn.returnGuess()).to.deep.equal('sea otter');
  });

  it('should return card', function() {
    expect(turn.returnCard()).to.deep.equal(card1);
  });

  describe('evaluateGuess', function() {
    it('should evaluate guess to be true', function() {
      turn = new Turn('sea otter', card1);

      expect(turn.evaluateGuess()).to.deep.equal(true);
    });

    it('should evaluate guess to be false', function() {
      turn = new Turn('pug', card1);

      expect(turn.evaluateGuess()).to.deep.equal(false);
    });
  });

  describe('giveFeedback', function() {
    it('should give feedback for right answer', function() {
      turn = new Turn('sea otter', card1);
      turn.evaluateGuess()

      expect(turn.giveFeedback()).to.deep.equal('Correct!');
    });

    it('should give feedback for wrong answer', function() {
      turn = new Turn('pug', card1);
      turn.evaluateGuess()

      expect(turn.giveFeedback()).to.deep.equal('Incorrect!');
    });
  });
});
