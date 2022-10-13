const express = require('express');
const router = express.Router();
const axios = require('axios');
const apicache = require('apicache');
const getFilms = require('../services/films');
const getStarships = require('../services/starships');
const getSpecies = require('../services/species');

let cache = apicache.middleware;

router.get('/', cache('3 minutes'), async (req, res) => {
    try {
        const params = new URLSearchParams({
          search: req.query.name
        })
        
        await axios.get(`${process.env.BASE_URL}people/?${params}`).then(response => {
            const characterInfo = response.data.results;
           
            if (characterInfo.length === 1) {
                getFilms(characterInfo[0].films).then(filmData => {
                    getStarships(characterInfo[0].starships).then(starshipData => {
                        getSpecies(characterInfo[0].species).then(speciesData => {
                            res.send([Object.assign(characterInfo[0], {starships: starshipData, films: filmData, species: speciesData})]);
                        })
                    })
                })
            } else {
                res.send(characterInfo)
            }
        
        })
    } catch (error) {
        res.send(error);
    }
})

module.exports = router;