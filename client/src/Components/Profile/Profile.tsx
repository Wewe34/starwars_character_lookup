import axios from 'axios';
import React, { useState } from 'react';
import {Button, Card} from 'react-bootstrap';
import About from '../About';
import Films, { IFilm } from '../Films';
import "../Profile/Profile.css"
import Species, { ISpecies } from '../Species';
import Starships, { IStarship } from '../Starships';

export interface ICharacter {
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
    species: ISpecies[], 
    vehicles: string[],
    starships: IStarship[],
    created: string, 
    edited: string, 
    url: string
}


function Profile() {
  const [characters, setCharacters] = useState<ICharacter[]>([]);
  const [characterName, setCharacterName] = useState<String>('');
  const [buttonToggle, setButtonToggle] = useState<Boolean>(false);
  const [searchProcessing, setSearchProcessing] = useState<Boolean>(false);
  

  function handleCharacterRequest(event: any) {
    let name;
    if (event.target.innerHTML === 'Search') {
        name = characterName;
    } else {
        name = event.target.innerHTML
    }
    setSearchProcessing(true);
    axios.get("/characters", {params: {name}}).then(result =>{
        setButtonToggle(true)
        setCharacters(result.data);
        setSearchProcessing(false);
    })
    setButtonToggle(false);
  }

  function handleOnChange(event:any) {
    setCharacterName(event.target.value);
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
            {searchProcessing ? 
                <div className="spinner-border text-light" role="status">
                    <span className="visually-hidden">Loading...</span>
                </div> : 
                <div>
                    {characters.length > 1 ? 
                        <div>
                            <p>Did you mean?</p>
                            {characters.map((character, index) => {
                                return <p className="text-primary search-list" onClick={handleCharacterRequest} key={index}><u>{character.name}</u></p>})}
                        </div> :
                    characters.length === 1 ? 
                    <div>
                        <p className="display-4 text-uppercase text-danger">{characters[0].name}</p>
                        <Species species={characters[0].species} character={characters[0]} />
                        <About 
                            birth_year={characters[0].birth_year} 
                            hair_color={characters[0].hair_color} 
                            height={characters[0].height} 
                            weight={characters[0].mass} 
                            />
                        <Films films={characters[0].films} />
                        <Starships starships={characters[0].starships} />
                    </div> 
                    : buttonToggle && characters.length === 0 ? 'Sorry, no character matches your search criteria.': ''}
                </div>}
            </div>
    </div>
  )
}

export default Profile;