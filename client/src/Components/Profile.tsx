import axios from 'axios';
import React, { useEffect, useState } from 'react';

interface iCharacters {
    name: string, 
    height: string, 
    mass: string, 
    hair_color: string, 
    skin_color: string, 
    eye_color: string, 
    birth_year: string, 
    gender: string, 
    homeworld: string, 
    films: string[], 
    species: string[], 
    vehicles: string[]
    starships: string[]
    created: string, 
    edited: string, 
    url: string
}

function Profile() {
  const [characters, setCharacters] = useState<iCharacters[]>([]);
  const [characterName, setCharacterName] = useState('');
  
  useEffect(() => {
    axios.get("/characters", {params: {name: characterName}}).then(result =>{
      console.log('result', result.data)
      setCharacters(result.data)
    })
  },[characterName])

  function handleCharacterRequest(name: string) {
    console.log('charName', name)
    setCharacterName(name);
  }

  function handleOnChange(event:any) {
    setCharacterName(event.target.value);
  }

  return (
    <div>
        <div>
            <input type="search" name="character-lookup" id="character-search" onChange={handleOnChange} />
            {characters.length > 1 ? characters.map((character, index) => {
                return <a onClick={() => handleCharacterRequest(character.name)}><p key={index}>{character.name}</p></a>
            }) : characters.length === 1 ? 
            <div>
                <p>{characters[0].name}</p>
                <p>{characters[0].height}</p>
            </div> 
            : 'Sorry, no character matches your search criteria.'}
        </div>
    </div>
  )
}

export default Profile;