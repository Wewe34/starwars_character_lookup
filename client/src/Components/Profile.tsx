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
  const [characterName, setCharacterName] = useState('e');
  
  useEffect(() => {
    axios.get("/characters", {params: {name: characterName}}).then(result =>{
      console.log('result', result.data)
      setCharacters(result.data)
    })
  },[characterName])

  function handleCharacterRequest() {
    setCharacterName('R2');
  }

  return (
    <div>
        <div>
            <p></p>
            {characters.length > 1 ? characters.map((character, index) => {
                return <a onClick={handleCharacterRequest}><p key={index}>{character.name}</p></a>
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