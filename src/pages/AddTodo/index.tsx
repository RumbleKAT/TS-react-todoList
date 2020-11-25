import * as React from 'react';
import { Link, RouteComponentProps } from 'react-router-dom';

const AddTodoList : React.FC<RouteComponentProps> = props => {
    console.log(props);
    return (
        <div>
            <div>TWO</div>
            <Link to='/'>Goto Home</Link>
        </div>
    )
      
}
export default AddTodoList;