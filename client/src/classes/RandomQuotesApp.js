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
  randomQuoteHandler() {
    const randomQuote = RandomQuote.getRandomQuote();
    this.changeCurrentQuote(randomQuote);
  }
  async randomQuoteViaApiHandler() {
    const quoteViaAPI = await RandomQuote.getRandomQuoteViaApi()
      this.changeCurrentQuote(quoteViaAPI);
  }
  init(){
    this.randomQuoteBtn.addEventListener('click', () => this.randomQuoteHandler())
    this.randomQuoteApiBtn.addEventListener('click', () => this.randomQuoteViaApiHandler())
  }
}

export default RandomQuoteApp;