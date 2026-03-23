// server/server.js
import express, { json, urlencoded } from 'express';
import cors from 'cors';

const app = express();
const PORT = 5000;              


app.use(cors());                
app.use(json());       
app.use(urlencoded({ extended: true })); 


app.get('/api/hello', (req, res) => {
  console.log('GET /api/hello');
  res.json({ message: 'Hello From Express' });
});


app.post('/api/world', (req, res) => {
  const { inputValue } = req.body;   
  console.log('POST /api/world – body:', req.body);

  const reply = `I received your POST request. This is what you sent me: ${inputValue}`;
  res.json({ message: reply });
});


app.listen(PORT, () => {
  console.log(` Express server listening at http://localhost:${PORT}`);
});