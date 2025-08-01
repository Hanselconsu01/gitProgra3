const express = require('express');
const app = express();
const cors = require('cors');
const dotenv = require('dotenv');
const itemsRoutes = require('./routes/items');
const paymentRoutes = require('./routes/payment');

dotenv.config();
app.use(cors());
app.use(express.json());

app.use('/items', itemsRoutes);
app.use('/payment', paymentRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Servidor corriendo en puerto ${PORT}`));


