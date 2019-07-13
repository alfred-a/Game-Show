/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Game.js */
class Game {
  constructor() {
    this.missed = 0;
    this.phrases = this.createPhrase();
    this.activePhrase = null;
  }
  createPhrase() {
    let listOfPhrases = [];
    let phrase1 = new Phrase("A Dime a Dozen");
    listOfPhrases.push(phrase1);
    let phrase2 = new Phrase("Between a Rock and a Hard Place");
    listOfPhrases.push(phrase2);
    let phrase3 = new Phrase("Curiosity Killed the Cat");
    listOfPhrases.push(phrase3);
    let phrase4 = new Phrase("Barking Up THe Wrong Tree");
    listOfPhrases.push(phrase4);
    let phrase5 = new Phrase("Cut To The Chase");
    listOfPhrases.push(phrase5);
    let phrase6 = new Phrase("Between a Rock and a Hard Place");
    listOfPhrases.push(phrase6);

    return listOfPhrases;
  }
  startGame() {}

  getRandomPhrase() {
    return this.phrases[Math.floor(Math.random() * this.phrases.length)];
  }

  handleInteraction() {}

  removeLife() {}

  checkForWin() {}

  gameOver() {}
}
