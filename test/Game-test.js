const chai = require('chai');
const expect = chai.expect;

const Game = require('../src/Game');

describe('Game', function() {
  let game;
  it('should keep track of current round', () => {
    game = new Game();
    game.start();

    expect(game.currentRound).to.equal(1);
  });
});
