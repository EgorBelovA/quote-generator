// /routes/quotes.routes.js
const express = require('express');
const router = express.Router();
const controller = require('../controllers/quotes.controller');

router.get('/random', controller.getRandomQuote);

module.exports = router;
