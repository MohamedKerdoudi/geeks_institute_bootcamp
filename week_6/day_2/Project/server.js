const express = require('express');
const app = express();
const menuRoutes = require('./routes/menuRoutes');


app.use(express.json());


app.use('/api', menuRoutes);

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});