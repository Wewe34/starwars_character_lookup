import React from 'react';
import { Card } from 'react-bootstrap';

interface IAboutProps {
    birth_year: string;
    hair_color: string;
    height: string;
    weight: string;
}

const About = (props: IAboutProps) => {

    const {birth_year, hair_color, height, weight} = props;

    return (
        <div>
            <div className="row p-2" data-testid="birth_hairColor">
                <Card className="col m-1 bg-primary bg-gradient">
                    <Card.Text className="text-white m-0 h1 pt-4">{birth_year}</Card.Text>
                    <Card.Text className="text-dark h4 pb-4">Birth Year</Card.Text>
                </Card>
                <Card className="col m-1 bg-primary bg-gradient">
                    <Card.Text className="text-white m-0 h1 pt-4 text-uppercase">{hair_color}</Card.Text>
                    <Card.Text className="text-dark h4 pb-4">Hair Color</Card.Text>
                </Card>
            </div>
            <div className="row p-2" data-testid="height_weight">
                <Card className="col m-1 bg-primary bg-gradient">
                    <Card.Text className="text-white m-0 h1 pt-4">{height}</Card.Text>
                    <Card.Text className="text-dark h4 pb-4">Height</Card.Text>
                </Card>
                <Card className="col m-1 bg-primary bg-gradient">
                    <Card.Text className="text-white m-0 h1 pt-4">{weight}</Card.Text>
                    <Card.Text className="text-dark h4 pb-4">Weight</Card.Text>
                </Card>
            </div>
        </div>
    )
}

export default About;