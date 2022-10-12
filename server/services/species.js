const axios = require('axios');

async function getSpecies(characterSpecies) {
    const speciesObjs = await Promise.all(characterSpecies.map(species => {
        return axios.get(species).then(results => species = results.data);
    }))
    return speciesObjs;
}

module.exports = getSpecies;