import React from 'react';
let styles = require('../../styles/Card.css');

interface CardProps{
    id : number
    title? : string
    name? : string
    type? : string
    category? : string
}

interface CardState{

}

const Card = (param: CardProps) => {
    console.log(styles);
    return (
        <div>
            Hello, ${param.id}  
        </div> 
    );
}

export default Card;