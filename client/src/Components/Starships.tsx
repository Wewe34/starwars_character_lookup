import React from 'react';
import { Card } from 'react-bootstrap';

interface IStarshipProps {
   starships: IStarship[];

}

export interface IStarship {
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

const Starships = (props: IStarshipProps) => {

    const {starships} = props;

    return (
        <Card className="my-2 bg-light">
            <Card.Text className="text-dark h1 pt-4">STARSHIPS</Card.Text>
            {starships.length > 0 ? starships.map(starship => {
                return <Card.Body className="bg-dark bg-gradient m-2 rounded">
                            <Card.Text className="text-primary m-0 h4">{starship.name}</Card.Text>
                            <Card.Text className="text-primary m-0">Model: {starship.model}</Card.Text>
                        </Card.Body>
            }): <p className="text-primary">No Starships.</p>}
        </Card>
    )
}

export default Starships;