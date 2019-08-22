const addWord = document.querySelector('#addWord');
const addPhrase = document.querySelector('#addPhrase');
const englishField = document.querySelector('#englishField');
const spanishField = document.querySelector('#spanishField');
const nextWord = document.querySelector('#nextWord');
const nextPhrase = document.querySelector('#nextPhrase');
const mainText = document.querySelector('#mainText');
const submitButton = document.querySelector('#submitButton');
const sectionThree = document.querySelector('#section-3');
const userInput = document.querySelector('#userInput');

let x = 0;
let y = 0;
let z = 0;
let spot = 0;
let wordOrPhrase = 0;
let englishOrSpanish = 0;
let score = 0;
let correct = false;
let currentExpression = '';
class Library {
  constructor() {
    this.englishWordList = ['', 'hello', 'good'];
    this.englishPhraseList = ['', 'how are you', 'and you?'];
    this.spanishWordList = ['', 'hola', 'bueno'];
    this.spanishPhraseList = ['', 'como estas', 'y tu?'];
  }
  addWord() {
    this.englishWordList.push(englishField.value);
    this.spanishWordList.push(spanishField.value);
  }
  addPhrase() {
    this.englishPhraseList.push(englishField.value);
    this.spanishPhraseList.push(spanishField.value);
  }
  getRandomWord() {
    wordOrPhrase = 0;
    x = Math.random();
    if (x >= 0.5) {
      englishOrSpanish = 0;
      y = this.englishWordList.length - 1;
      x = Math.floor(Math.random() * y + 1);
      z = x;
      currentExpression = this.englishWordList[x];
      mainLibrary.setCurrentExpression();
    } else {
      englishOrSpanish = 1;
      y = this.englishWordList.length - 1;
      x = Math.floor(Math.random() * y + 1);
      z = x;
      currentExpression = this.spanishWordList[x];
      mainLibrary.setCurrentExpression();
    }
  }
  getRandomPhrase() {
    wordOrPhrase = 1;
    x = Math.random();
    if (x >= 0.5) {
      englishOrSpanish = 0;
      y = this.englishPhraseList.length - 1;
      x = Math.floor(Math.random() * y + 1);
      z = x;
      currentExpression = this.englishPhraseList[x];
      mainLibrary.setCurrentExpression();
    } else {
      englishOrSpanish = 1;
      y = this.englishPhraseList.length - 1;
      x = Math.floor(Math.random() * y + 1);
      z = x;
      currentExpression = this.spanishPhraseList[x];
      mainLibrary.setCurrentExpression();
    }
  }
  setCurrentExpression() {
    mainText.innerHTML =
      '<h1 class="display-1" >' + currentExpression + '</h1>';
    sectionThree.innerHTML = 'Score = ' + score;
  }
  testCurrentExpression() {
    if (wordOrPhrase === 0) {
      if (englishOrSpanish === 0) {
        currentExpression = this.spanishWordList[z];
      } else {
        currentExpression = this.englishWordList[z];
      }

      if (currentExpression === userInput.value) {
        score += 1;
      }
      console.log(userInput.value);
      this.getRandomWord();
    } else {
      if (englishOrSpanish === 0) {
        currentExpression = this.spanishPhraseList[z];
      } else {
        currentExpression = this.englishPhraseList[z];
      }

      if (currentExpression === userInput.value) {
        score += 1;
      }
      console.log(userInput.value);
      this.getRandomPhrase();
    }
  }
}

mainLibrary = new Library();

addWord.addEventListener('click', e => {
  e.preventDefault();
  mainLibrary.addWord();
});

addPhrase.addEventListener('click', e => {
  e.preventDefault();
  mainLibrary.addPhrase();
});

nextWord.addEventListener('click', e => {
  e.preventDefault();
  mainLibrary.getRandomWord();
});

nextPhrase.addEventListener('click', e => {
  e.preventDefault();
  mainLibrary.getRandomPhrase();
});

submitButton.addEventListener('click', e => {
  e.preventDefault();
  mainLibrary.testCurrentExpression();
});
