import * as React from 'react';
import {Switch, RouteComponentProps, Route, Redirect, withRouter } from 'react-router-dom';
import Home from '../../pages/Home';
import AddTodo from '../../pages/AddTodo';

const HomeRouter : React.FC<RouteComponentProps> = props =>{
  const { match }  = props;
  console.log(match.url);
   return(
       <Switch>
           <Route path={`${match.url}/AddTodo`} exact component={AddTodo} />
           <Route path={`${match.url}/`} exact component={Home}/>
       </Switch>
   )

}

export default withRouter(HomeRouter);