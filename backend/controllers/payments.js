// backend/controllers/paymentController.js
exports.processPayment = (req, res) => {
    const { amount, method } = req.body;
  
    if (!amount || amount <= 0) {
      return res.status(400).json({ error: 'Monto inválido' });
    }
  
    // Simulación simple
    return res.status(200).json({
      success: true,
      message: `Pago de $${amount} procesado con ${method}`,
    });
  };
  // backend/routes/payment.js
const express = require('express');
const router = express.Router();
const { processPayment } = require('../controllers/paymentController');

router.post('/', processPayment);

module.exports = router;
