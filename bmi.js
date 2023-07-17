const express = require('express');
const path = require('path');

const app = express();
const port = 3000;

app.use(express.static(path.join(__dirname, 'public')));
app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

app.post('/calculate', (req, res) => {
  const height = parseFloat(req.body.height);
  const weight = parseFloat(req.body.weight);

  if (isNaN(height) || isNaN(weight)) {
    return res.send('Please enter valid values for height and weight.');
  }

  const bmi = (weight / ((height / 100) ** 2)).toFixed(2);
  return res.send(`Your BMI: ${bmi}`);
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${3000}`);
});
