const express = require('express');
const cors = require('cors');

const app = express();

app.use(cors());

app.get('/api/health', (req, res) => {
  res.status(200).send({ status: 'OK', message: 'Healthy' });
});

const port = process.env.PORT || 4000;
app.listen(port, () => {
  console.log('App is running on port 4000...');
});
