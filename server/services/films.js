const axios = require('axios');

const getFilms = async (films)  => {
    const filmObjs = await Promise.all(films.map(film => {
        return axios.get(film).then(results => film = results.data);
    }))
    return filmObjs;
}

module.exports = getFilms;