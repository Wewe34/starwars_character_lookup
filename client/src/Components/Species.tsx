import React from 'react';
import { Card } from 'react-bootstrap';
import { IFilm } from './Films';
import { ICharacter} from './Profile/Profile';


interface ISpeciesProps {
    species: ISpecies[];
    character: ICharacter
}

export interface ISpecies {
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

const Starships = (props: ISpeciesProps) => {

    const {species, character} = props;

    return (
        <div>
            <p className="display-4 text-uppercase text-danger">{character.name}</p>
            {species.length > 0 ? 
                species.map(s => {
                    return <p>{`${character.name} is of the species ${s.name}, and speaks the language ${s.language}.`}</p>
            })  
                : <p>There is no species data.</p>}
        </div>
    )
}

export default Starships;