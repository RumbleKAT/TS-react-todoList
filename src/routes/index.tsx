import * as React from 'react';
import Home from '../pages/Home';
import AddTodo from '../pages/AddTodo';
import { Route, Redirect, BrowserRouter,Switch } from "react-router-dom";

const Root : React.FC = () =>{
    //root router return
    return(
    <BrowserRouter>
        <Switch>
            <Route path="/" exact component={Home} />
            <Route exact path="/AddTodo" component={AddTodo} />
            <Redirect path="*" to="/"/>
        </Switch>
    </BrowserRouter>
    );
}
export default Root;