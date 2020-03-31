const express = require('express');
const app = express();

const PORT = process.env.PORT || 80;

let word = 'WORD NOT SET';
let reqCounter = 0;

app.get('/set-word/:word', (req, res) => {
  word = req.params.word;
  reqCounter = 0;

  res.status(200).send(`Word set to ${word}.`);
});

app.get('/', (req, res) => {
  if (reqCounter === 2) {
    res.status(200).send('You are the chameleon!');
  } else {
    res.status(200).send(word);
  }

  reqCounter += 1;
});

app.listen(PORT, () => console.info(`Listening on port ${PORT}...`));
