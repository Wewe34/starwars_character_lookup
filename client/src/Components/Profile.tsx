import axios from 'axios';
import React, { useState } from 'react';
import {Button, Card} from 'react-bootstrap';

interface ICharacter {
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

interface ISpecies {
    name: string, 
    classification: string, 
    designation: string, 
    average_height: string, 
    skin_colors: string, 
    hair_colors: string, 
    eye_colors: string, 
    average_lifespan: string, 
    homeworld: null, 
    language: string, 
    people: string[],
    films: IFilm[],
    created: string, 
    edited: string, 
    url: string
} 

function Profile() {
  const [characters, setCharacters] = useState<ICharacter[]>([]);
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
        <img className="img-fluid w-50 py-4" src="/star-wars-logo.png" alt="text star wars" />
        <p className="h1 pb-2">Character Lookup</p>
        <div className='container'>
            <div className="input-group mb-3">
                <input type="search" className="form-control" placeholder="Character name..." aria-label="Character name" onChange={handleOnChange}/>
                <div className="input-group-append">
                    <Button className="btn-success" type="button" onClick={handleCharacterRequest}>Search</Button>
                </div>
            </div>
            {characters.length > 1 ? 
                <div>
                    <p>Did you mean?</p>
                    {characters.map((character, index) => {
                    return <a onClick={handleCharacterRequest} key={index}><p>{character.name}</p></a>})}
                </div>
             : characters.length === 1 ? 
            <div>
                <p className="display-4 text-uppercase text-danger">{characters[0].name}</p>
                <p>{` ${characters[0].name} is of the species, ${characters[0].species} which speaks the language
                    ${characters[0]}`}</p>
                <div className="row p-2">
                    <Card className="col m-1 bg-primary bg-gradient">
                        <Card.Text className="text-white m-0 h1 pt-4">{characters[0].birth_year}</Card.Text>
                        <Card.Text className="text-dark h4 pb-4">Birth Year</Card.Text>
                    </Card>
                    <Card className="col m-1 bg-primary bg-gradient">
                        <Card.Text className="text-white m-0 h1 pt-4 text-uppercase">{characters[0].hair_color}</Card.Text>
                        <Card.Text className="text-dark h4 pb-4">Hair Color</Card.Text>
                    </Card>
                </div>
                <div className="row p-2">
                    <Card className="col m-1 bg-primary bg-gradient">
                        <Card.Text className="text-white m-0 h1 pt-4">{characters[0].height}</Card.Text>
                        <Card.Text className="text-dark h4 pb-4">Height</Card.Text>
                    </Card>
                    <Card className="col m-1 bg-primary bg-gradient">
                        <Card.Text className="text-white m-0 h1 pt-4">{characters[0].mass}</Card.Text>
                        <Card.Text className="text-dark h4 pb-4">Weight</Card.Text>
                    </Card>
                </div>
                <Card className="bg-light bg-gradient">
                    <Card.Text className="text-dark h1 pt-4">FILMS</Card.Text>
                    {characters[0].films.map(film => {
                        console.log(film);
                        return <Card.Body className="bg-dark bg-gradient m-2 rounded">
                                    <Card.Text className="text-warning m-0 h4">{film.title}</Card.Text>
                                    <Card.Text className="text-warning m-0">Episode: {film.episode_id}</Card.Text>
                                    <Card.Text className="text-warning m-0">Release Date: {film.release_date}</Card.Text>
                                </Card.Body>
                    })}
                </Card>
                <Card className="my-2 bg-light">
                    <Card.Text className="text-dark h1 pt-4">STARSHIPS</Card.Text>
                    {characters[0].starships.length > 0 ? characters[0].starships.map(starship => {
                        console.log(starship);
                        return <Card.Body className="bg-dark bg-gradient m-2 rounded">
                                    <Card.Text className="text-primary m-0 h4">{starship.name}</Card.Text>
                                    <Card.Text className="text-primary m-0">Model: {starship.model}</Card.Text>
                                </Card.Body>
                    }): 'No starships.'}
                </Card>
            </div> 
            : buttonToggle && characters.length === 0 ? 'Sorry, no character matches your search criteria.': ''}
        </div>
    </div>
  )
}

export default Profile;