const express = require('express');
const cors = require('cors');

const app = express();

app.use(cors());

app.get('/api/health', (req, res) => {
  res.status(200).send({ status: 'OK', message: 'Healthy' });
});

app.listen('4000', () => {
  console.log('App is running on port 4000...');
});
