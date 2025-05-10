import RandomQuote from './RandomQuote.js';
import Quote from './Quote.js';

class RandomQuoteApp {
  constructor(){
    this.randomQuoteBtn = document.querySelector('#random-quote-btn');
    this.randomQuotePublicApiBtn = document.querySelector('#random-quote-public-api-btn');
    this.randomQuoteOwnApiBtn = document.querySelector('#random-quote-own-api-btn');
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
  async randomQuoteViaPublicApiHandler() {
    const quoteViaAPI = await RandomQuote.getRandomQuoteViaPublicApi()
      this.changeCurrentQuote(quoteViaAPI);
  }
  async randomQuoteViaOnwApiHandler() {
    const quoteViaAPI = await RandomQuote.getRandomQuoteViaOwnApi()
    this.changeCurrentQuote(quoteViaAPI);
  }
  init(){
    this.randomQuoteBtn.addEventListener('click', () => this.randomQuoteHandler())
    this.randomQuotePublicApiBtn.addEventListener('click', () => this.randomQuoteViaPublicApiHandler())
    this.randomQuoteOwnApiBtn.addEventListener('click', () => this.randomQuoteViaOnwApiHandler())
  }
}

export default RandomQuoteApp;