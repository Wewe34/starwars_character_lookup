const express = require('express');
const router = express.Router();
const axios = require('axios');

router.get('/', async (req, res) => {
    try {
        console.log(req.query.name);
        const params = new URLSearchParams({
          search: req.query.name
        })
        console.log(`${process.env.BASE_URL}people/?${params}`);
        await axios.get(`${process.env.BASE_URL}people/?${params}`).then(response => res.send(response.data.results));
      } catch (error) {
        console.log(error);
      }
})

module.exports = router;