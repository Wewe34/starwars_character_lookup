const axios = require('axios');

async function getStarships(starships) {
    const starshipObjs = await Promise.all(starships.map(starship => {
        return axios.get(starship).then(results => starship = results.data);
    }))
    return starshipObjs;
}

module.exports = getStarships;