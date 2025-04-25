const express = require('express');
const cors = require('cors');
const connectDB = require('./db');

const app = express();
const PORT = 4000;

connectDB();

app.use(cors());
app.use(express.json());

const leadRoutes = require('./routes/leads.routes');
app.use('/api/leads', leadRoutes); // Aquí se monta la ruta

app.get('/', (req, res) => {
  res.send('✅ Backend del CRM funcionando');
});

app.listen(PORT, () => {
  console.log(`Servidor escuchando en http://localhost:${PORT}`);
});
