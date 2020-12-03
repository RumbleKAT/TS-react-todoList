import React from 'react';
let styles = require<any>('../../styles/Card.css');

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
    console.log(styles.content);
    return (
        <div className={styles.content}>
            Hello, ${param.id}  
        </div> 
    );
}

export default Card;