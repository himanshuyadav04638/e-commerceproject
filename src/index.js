import React from 'react';
import ReactDOM from 'react-dom';

import App from './App';
import {BrowserRouter as Router} from 'react-router-dom'
import {ProductProvider} from './components/Context'


ReactDOM.render(

   <ProductProvider>
      <Router>
      <App />
   </Router>
   </ProductProvider>
,
  document.getElementById('root')
);


