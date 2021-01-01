import React from 'react';
import '../../styles/Card.css';

interface CardProps extends React.DetailedHTMLProps<React.HTMLAttributes<HTMLLIElement>, HTMLLIElement>{
    id : string
    title? : string
    name? : string
    type? : string
    category? : string
}

class Card extends React.Component<CardProps>{
    public render(){
        const { title, name, id, type, category } = this.props; 
        //react 16버전 부터 data- prefix를 붙인 custom attribute 허용
        return(
            type === 'done' ?
            <li className="content-element" id={id} data-type={type}>
                <h2>{title}</h2>
                <p>등록번호 : {id} 만든이 : {name}, 카테고리: {category}</p>
                <button className='remove'>X</button>
                <button className='next' id={id} data-type={type}>&rarr;</button>
            </li>
            : 
            <li className="content-element">
                <h2>{title}</h2>
                <p>등록번호 : {id} 만든이 : {name}, 카테고리: {category} </p>
                <button className='removeCard'>X</button>
            </li>
        )
    }
}

export default Card;