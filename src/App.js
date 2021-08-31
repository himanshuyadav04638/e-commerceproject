
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import React, { Component } from 'react';

import Navabar from './components/Navabar';
import ProductList from './components/ProductList';
import Details from './components/Details';
import Cards from './components/Cards';
import Default from './components/Default';
import Modal from './components/Modal';



import {Route,Switch} from 'react-router-dom'






class App extends Component {
  render() {
    return (
    
        <React.Fragment>
          <Navabar />
          <Switch>
            <Route path='/' exact component={ProductList} />
            <Route path='/Details' exact component={Details} />
            <Route path='/Cards' exact component={Cards} />
         
            <Route  component={Default} />

          
          </Switch>
        <Modal />
          
         
         
         
        </React.Fragment>
      
        
      
    );
  }
}

export default App;