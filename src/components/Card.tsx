import React from 'react';

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
    return (
        <div>
            Hello, ${param.id}  
        </div>    
    );
}

export default Card;