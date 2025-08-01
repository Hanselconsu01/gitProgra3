const express = require('express');
const router = express.Router();
const { formatDate } = require('../controllers/dateFix');

router.get('/format-date', (req, res) => {
  const inputDate = req.query.date || new Date();
  const formatted = formatDate(inputDate);
  res.json({ original: inputDate, formatted });
});

module.exports = router;
