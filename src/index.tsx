import * as React from 'react';
import * as ReactDOM from 'react-dom';
import Root from './routes';
import GlobalStyles from './styles/GlobalStyles';

ReactDOM.render(
  <div>
    <GlobalStyles/>
    <Root />    
  </div>,
  document.getElementById('app')
);