import React from 'react';
import { Card } from 'react-bootstrap';

interface IFilmsProps {
   films: IFilm[];

}

export interface IFilm {
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

const Films = (props: IFilmsProps) => {

    const {films} = props;

    return (
        <Card className="bg-light bg-gradient">
            <Card.Text className="text-dark h1 pt-4">FILMS</Card.Text>
            {films.map((film, index) => {
                return <Card.Body className="bg-dark bg-gradient m-2 rounded" key={index}>
                            <Card.Text className="text-warning m-0 h4">{film.title}</Card.Text>
                            <Card.Text className="text-warning m-0">Episode: {film.episode_id}</Card.Text>
                            <Card.Text className="text-warning m-0">Release Date: {film.release_date}</Card.Text>
                        </Card.Body>
            })}
        </Card>
    )
}

export default Films;