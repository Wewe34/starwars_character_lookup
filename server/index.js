const express = require("express");
const axios = require("axios");

const PORT = process.env.PORT || 5000;

const app = express();

app.get("/test-proxy", async (req, res) => {
    await axios.get("https://swapi.dev/api/people/1").then(data => console.log(data));
    res.json({ message: "The server sent me!" });
  });

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});