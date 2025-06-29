const express = require('express');
const app = express();
const port = 3000;

app.use(express.json());

app.get('/', (req, res) => {
  return res.json({
    success: true,
    message: 'Server is ready!'
  });
});

app.post('/logger', (req, res) => {
  const body = req.body;
  console.log(body);
  return res.json({
    success: true
  });
});

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
