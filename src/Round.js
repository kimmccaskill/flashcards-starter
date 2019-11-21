const Turn = require('../src/Turn');
const Game = require('../src/Game')

let interval;
let minutes = 0;
let seconds = 0;

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
    return turn.giveFeedback();
  }

  calculatePercentCorrect() {
    return +((this.correctGuesses/this.turns)*100).toFixed(0);
  }

  endRound(game) {
    console.log(`** Round over! ** You answered ${this.calculatePercentCorrect()}% of the questions correctly!`)
    this.timeResult();
    process.exit();
  }

  timer() {
      clearInterval(interval);
      interval = setInterval(this.startTimer, 1000);
    }

  startTimer() {
    seconds++;
    if(seconds > 59) {
      seconds = 0;
      minutes++;
    }
  }

  timeResult() {
    if(minutes === 0) {
    console.log(`** It took you ${seconds} seconds! **`);
    } else {
    console.log(`** It took you ${minutes} min and ${seconds} seconds! **`);
    }
  }
}

module.exports = Round;
