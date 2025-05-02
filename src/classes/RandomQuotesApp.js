import RandomQuote from './RandomQuote.js';
import Quote from './Quote.js';

class RandomQuoteApp {
  constructor(){
    this.randomQuoteBtn = document.querySelector('#random-quote-btn');
    this.randomQuoteApiBtn = document.querySelector('#random-quote-api-btn');
    this.quoteTextElement = document.getElementById('quote-text');
    this.quoteAuthorElement = document.getElementById('quote-author');
    this.currentQuote = null;
    this.init();
  }


   displayCurrentQuote() {
    this.quoteTextElement.textContent = this.currentQuote.formatText();
    this.quoteAuthorElement.textContent = this.currentQuote.formatAuthor();
  }
  changeCurrentQuote(newQuote) {
    this.currentQuote = newQuote;
    this.displayCurrentQuote();
  }
  getRandomQuote() {
    const randomQuote = RandomQuote.getRandomQuote();
    this.changeCurrentQuote(randomQuote);
  }
  getRandomQuoteViaApi() {
    RandomQuote.getRandomQuoteViaApi().then((quote) => {
      this.changeCurrentQuote(quote);
      }
    )
  }
  init(){
    this.randomQuoteBtn.addEventListener('click', () => this.getRandomQuote())
    this.randomQuoteApiBtn.addEventListener('click', () => this.getRandomQuoteViaApi())
  }
}

export default RandomQuoteApp;