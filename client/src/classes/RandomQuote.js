import quotes from '../data/quotes.js';
import MathUtils from '../utils/MathUtils.js';
import Quote from './Quote.js';

class RandomQuote {
  static getRandomQuote() {
    const randomIndex = MathUtils.generateRandomInt(quotes.length);
    const {id, text, author} = quotes[randomIndex];
    return new Quote(id, text, author);
  }
  static async getRandomQuoteViaPublicApi() {
    const url = 'https://quoteslate.vercel.app/api/quotes/random';
    try {
      const response = await fetch(url)
      const { id, quote, author } = await response.json();
      return new Quote(id, quote, author);
    } catch (error) {
      console.error(error);
    } 
  }
  static async getRandomQuoteViaOwnApi() {
    const url = 'http://localhost:3000/quotes/random-single';
    try {
      const response = await fetch(url);
      const { id, text, author } = await response.json();
      return new Quote(id, text, author);
    } catch (error) {
      console.error('Failed to fetch quote:', error);
    }
  }
  
}

export default RandomQuote;
