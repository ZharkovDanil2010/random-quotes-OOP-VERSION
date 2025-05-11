const express = require('express')
const cors = require('cors')
const quotes = require('./data/quotes.js')
const app = express()
const PORT = process.env.PORT || 3000;


function getRandomQuote() {
  const randomIndex = Math.floor(Math.random() * quotes.length);
  const quote = quotes[randomIndex];
  return quote;
}

corsOptions = {
  origin: 'http://127.0.0.1:5500'
}

app.use(cors(corsOptions))

app.get('/quotes/random-single', (req, res) => {
  const randomQuote = getRandomQuote();
  res.json(randomQuote);
})

app.listen(PORT, () => {
  console.log(`Example app listening on PORT ${PORT}`)
})
