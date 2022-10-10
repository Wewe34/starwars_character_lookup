const express = require("express");
const axios = require("axios");
const characters = require('./routers/characters');

const PORT = process.env.PORT || 5000;

const app = express();

require('dotenv').config();

app.use('/characters', characters);

app.get('/', (req, res) => {
  res.send({message: 'Hey Im from the server!'});
})

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});