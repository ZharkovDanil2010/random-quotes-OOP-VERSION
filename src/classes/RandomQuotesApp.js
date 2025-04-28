import RandomQuote from './RandomQuote.js';

class RandomQuoteApp {
  constructor(){
    this.randomQuoteBtn = document.querySelector('#random-quote-btn');
    this.quoteTextElement = document.getElementById('quote-text');
    this.quoteAuthorElement = document.getElementById('quote-author');
    this.currentQuote = null;
    this.init();
  }


   displayCurrentQuote() {
    const {text, author,} = this.currentQuote;
    this.quoteTextElement.textContent = `"${text}"`;
    this.quoteAuthorElement.textContent = author;
  }
  getRandomQuote() {
    const randomQuote = RandomQuote.getRandomQuote();
    this.currentQuote = randomQuote;
    this.displayCurrentQuote(randomQuote);
  }
  init(){
    this.randomQuoteBtn.addEventListener('click', () => this.getRandomQuote())
  }
}

export default RandomQuoteApp;