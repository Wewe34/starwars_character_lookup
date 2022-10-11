import axios from 'axios';
import React, { useEffect, useState } from 'react';

interface ICharacters {
    name: string, 
    height: string, 
    mass: string, 
    hair_color: string, 
    skin_color: string, 
    eye_color: string, 
    birth_year: string, 
    gender: string, 
    homeworld: string, 
    films: IFilm[], 
    species: string[], 
    vehicles: string[],
    starships: IStarship[],
    created: string, 
    edited: string, 
    url: string
}

interface IFilm {
    title: string,
    episode_id: number, 
    opening_crawl: string, 
    director: string, 
    producer: string, 
    release_date: string, 
    characters: string[], 
    planets: string[], 
    starships: string[], 
    vehicles:string[], 
    species: string[], 
    created:string, 
    edited:string, 
    url: string
}

interface IStarship {
    name: string, 
    model: string, 
    manufacturer: string, 
    cost_in_credits: string, 
    length: string, 
    max_atmosphering_speed: string, 
    crew: string, 
    passengers: string, 
    cargo_capacity: string, 
    consumables: string, 
    hyperdrive_rating: string,
    MGLT: string, 
    starship_class: string, 
    pilots: string[], 
    films: string [], 
    created: string, 
    edited: string, 
    url: string
}

function Profile() {
  const [characters, setCharacters] = useState<ICharacters[]>([]);
  const [characterName, setCharacterName] = useState<String>('');
  const [buttonToggle, setButtonToggle] = useState<Boolean>(false);
  

  function handleCharacterRequest() {
    console.log('charName', characterName);
    
    axios.get("/characters", {params: {name: characterName}}).then(result =>{
        setButtonToggle(true)
        console.log('result',result.data)
        setCharacters(result.data);
    })
    console.log('chars',characters)
    setButtonToggle(false);
  }

  function handleOnChange(event:any) {
    console.log(event.target.value)
    setCharacterName(event.target.value);
    console.log(characterName)
  }

  return (
    <div>
        <div>
            <input type="search" name="character-lookup" id="character-search" onChange={handleOnChange} />
            <button type="submit" onClick={handleCharacterRequest}>Search</button>
            {characters.length > 1 ? 
                <div>
                    <p>Did you mean?</p>
                    {characters.map((character, index) => {
                    return <a onClick={handleCharacterRequest} key={index}><p>{character.name}</p></a>})}
                </div>
             : characters.length === 1 ? 
            <div>
                <p>{characters[0].name}</p>
                <p>{characters[0].height}</p>
                <p>{characters[0].hair_color}</p>
                <p>{characters[0].birth_year}</p>
                <p>{characters[0].mass}</p>
                <div>
                    {characters[0].films.map(film => {
                        console.log(film);
                        return film.title;
                    })}
                </div>
                <div>
                    {characters[0].starships.map(starship => {
                        console.log(starship);
                        return starship.name;
                    })}
                </div>
            </div> 
            : buttonToggle && characters.length === 0 ? 'Sorry, no character matches your search criteria.': ''}
        </div>
    </div>
  )
}

export default Profile;