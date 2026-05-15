const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());

app.get('/', (req, res) => {
  res.send('Workflow Charter Drill API');
});

app.get('/status', (req, res) => {
res.json({ status: 'ok', timestamp: new Date() });
});

app.post('/data', (req, res) => {
    const data = req.body;
    // Inconsistent indentation here
  res.status(201).send({received: true, data});
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
// change 1
// change 2
// change 3
// change 4
// change 5
// change 6
// change 7
// change 8
