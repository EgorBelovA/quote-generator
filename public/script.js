const quoteTextEl = document.getElementById('quote-text');
const quoteAuthorEl = document.getElementById('quote-author');
const statusEl = document.getElementById('status');
const btnRandom = document.getElementById('btn-random');

async function fetchRandomQuote() {
  try {
    const res = await fetch('/api/quotes/random');
    if (!res.ok) {
      throw new Error('Server error: ' + res.status);
    }
    const data = await res.json();
    renderQuote(data);
    statusEl.textContent = '';
  } catch (err) {
    statusEl.textContent = 'Failed to load quote: ' + err.message;
  }
}

function renderQuote(quote) {
  quoteTextEl.textContent = quote.text || 'No Quote';
  quoteAuthorEl.textContent = quote.author
    ? '— ' + quote.author
    : '— Unknown Author';
}

btnRandom.addEventListener('click', fetchRandomQuote);

fetchRandomQuote();
