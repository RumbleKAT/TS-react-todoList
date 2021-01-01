import React, { useState, useEffect } from 'react';
import { Link, Redirect, RouteComponentProps } from 'react-router-dom';
import Card from '../../components/Card';

const Home : React.FC<RouteComponentProps> = props => {
    
    //componentDidMount, componentDidUpdate
    // useEffect(()=>{

    // });
    
    return (
        <React.Fragment>
            <div>HOME</div>
            <Card id={"1"} type={"done"}/>
            <div><Link to='/AddTodo'>Goto Page One</Link></div>
        </React.Fragment>
    )
}
export default Home;