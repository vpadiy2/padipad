const express = require('express');
const path = require('path');
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.static(path.join(__dirname)));

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'kumon-math-trainer.html'));
});

app.listen(PORT, () => {
  console.log(`Math Superstar Trainer running at http://localhost:${PORT}`);
});
