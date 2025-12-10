let quotes = require('../data/quotes.json');

exports.getRandomQuote = (req, res) => {
  if (quotes.length === 0) {
    return res.status(404).json({ message: 'No quotes available' });
  }
  const randomIndex = Math.floor(Math.random() * quotes.length);
  res.json(quotes[randomIndex]);
};
