import * as React from 'react';
import { Link, Redirect, RouteComponentProps } from 'react-router-dom';

const Home : React.FC<RouteComponentProps> = props => {
    return (
        <React.Fragment>
            <div>HOME</div>
            <div><Link to='/AddTodo'>Goto Page One</Link></div>
        </React.Fragment>
    )
}
export default Home;