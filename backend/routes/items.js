const express = require('express');
const router = express.Router();

function validateItem(req, res, next) {
  const { name, quantity } = req.body;
  if (!name || typeof name !== 'string') {
    return res.status(400).json({ error: "Nombre inválido" });
  }
  if (!Number.isInteger(quantity) || quantity < 0) {
    return res.status(400).json({ error: "Cantidad inválida" });
  }
  next();
}

router.post('/', validateItem, (req, res) => {
  res.json({ message: "Datos válidos", data: req.body });
});

module.exports = router;
