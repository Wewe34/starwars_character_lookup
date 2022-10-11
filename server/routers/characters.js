const express = require('express');
const router = express.Router();
const axios = require('axios');

router.get('/', async (req, res) => {
    try {
        const params = new URLSearchParams({
          search: req.query.name
        })
        
        await axios.get(`${process.env.BASE_URL}people/?${params}`).then(response => {
            const characterInfo = response.data.results;
           
            if (characterInfo.length === 1) {
                getFilms(characterInfo[0].films).then(filmData => {
                    getStarships(characterInfo[0].starships).then(starshipData => {
                        res.send([Object.assign(characterInfo[0], {starships: starshipData, films: filmData})]);
                    })
                })
            } else {
                res.send(characterInfo)
            }
        
        })
    } catch (error) {
        console.log(error);
    }
})


async function getFilms(films) {
    const filmObjs = await Promise.all(films.map(film => {
        return axios.get(film).then(results => film = results.data);
    }))
    return filmObjs;
}

async function getStarships(starships) {
    const starshipObjs = await Promise.all(starships.map(starship => {
        return axios.get(starship).then(results => starship = results.data);
    }))
    return starshipObjs;
}


module.exports = router;