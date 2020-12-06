import React from 'react';
import styles from '../../styles/Card.css';

interface CardProps extends React.DetailedHTMLProps<React.HTMLAttributes<HTMLLIElement>, HTMLLIElement>{
    id : string
    title? : string
    name? : string
    type? : string
    category? : string
}

class Card extends React.Component<CardProps>{
    public render(){
        console.log(this.props);

        const { title, name, id, type , ...liAttributes } = this.props; 

        return(
            type === 'done' ?
            <li {...liAttributes}>
                <h1>{title}</h1>
                <p>등록번호 : ${id}</p>
            </li>
            : 
            <li {...liAttributes}>
                <h1>{title}</h1>
                <p>등록번호 : ${id}</p>
            </li>
        )
    }
}

export default Card;